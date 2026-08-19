#!/usr/bin/env node
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const PORT = process.env.PORT ?? "5173";
const BASE_URL = `http://localhost:${PORT}`;
const OUT_DIR = "docs/pdf-export";
const OUT = path.join(
  OUT_DIR,
  process.argv.find((a) => a.startsWith("--out="))?.split("=")[1] ??
    process.env.OUT ??
    "presentation.pdf",
);

async function isServerUp() {
  try {
    const res = await fetch(BASE_URL);
    return res.ok;
  } catch {
    return false;
  }
}

async function waitForServer(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isServerUp()) return true;
    await sleep(300);
  }
  return false;
}

let devServer = null;

try {
  if (!(await isServerUp())) {
    console.log(`No dev server on ${BASE_URL}, starting one...`);
    devServer = spawn("npx", ["vite", "--port", PORT, "--strictPort"], {
      stdio: "inherit",
    });
    const ready = await waitForServer();
    if (!ready) throw new Error("Dev server did not start in time.");
  } else {
    console.log(`Using existing dev server on ${BASE_URL}`);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 700 },
    deviceScaleFactor: 2,
  });

  await mkdir(OUT_DIR, { recursive: true });

  console.log("Loading presentation in print-pdf mode...");
  await page.goto(`${BASE_URL}/?print-pdf`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // Reveal's print plugin and TocSlide's own print-mode delay both
  // need a moment after network idle to finish laying out every page.
  await page.waitForTimeout(3000);

  await page.emulateMedia({ media: "print" });
  await page.pdf({
    path: OUT,
    width: "1200px",
    height: "700px",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();
  console.log(`Saved ${OUT}`);
} finally {
  devServer?.kill();
}
