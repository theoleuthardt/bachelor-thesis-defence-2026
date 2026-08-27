# Bachelor Thesis Defence Presentation 2026

Presentation for the defence of my bachelor thesis, built with RevealJS and React.
The thesis itself lives in [bachelor-thesis-2026](https://github.com/theoleuthardt/bachelor-thesis-2026.git),
the defended prototype in [local-accessible-voice-agent](https://github.com/theoleuthardt/local-accessible-voice-agent.git).

## Topic

**Title:** Natural Language Web Interaction: A local LLM-based agent for low-barrier website usage <br>
**Candidate:** Theo Leuthardt <br>
**Company:** Bundesdruckerei GmbH <br>
**University:** HWR Berlin <br>
**First examiner:** Diego Barrera Martinez <br>
**Second examiner:** Prof. Dr. Björn Grohmann <br>
**Duration:** 20 minutes presentation + 30–40 minutes technical discussion

## Technologies

- **React 19** with TypeScript
- **Reveal.js 6** presentation framework
- **Vite 8** for development and build
- **prism-react-renderer** for syntax highlighting on code slides
- **Inter** typeface

## Task runner

All commands run through [Taskfile.yml](Taskfile.yml) ([go-task](https://taskfile.dev)). Install go-task once (`brew install go-task` on macOS), then
run `task --list` at any point to see every task with its description.

### Setup

| Task      | Description                                                            | Example        |
| --------- | ---------------------------------------------------------------------- | -------------- |
| `install` | Install all dependencies                                               | `task install` |
| `reset`   | Delete `node_modules` and `package-lock.json`, reinstall clean         | `task reset`   |
| `start`   | Fresh setup: install, then lint + typecheck, then start the dev server | `task start`   |

### Development

| Task       | Description                                                                           | Example         |
| ---------- | ------------------------------------------------------------------------------------- | --------------- |
| `dev`      | Start the Vite dev server on port 5173                                                | `task dev`      |
| `dev:open` | Open the browser at the dev server URL (run alongside `task dev` in another terminal) | `task dev:open` |
| `dev:host` | Start the dev server exposed on the local network                                     | `task dev:host` |

### Build & preview

| Task           | Description                                            | Example             |
| -------------- | ------------------------------------------------------ | ------------------- |
| `build`        | Type-check and create the production build in `dist/`  | `task build`        |
| `preview`      | Serve the production build locally                     | `task preview`      |
| `preview:open` | Serve the production build and open the browser        | `task preview:open` |
| `clean`        | Remove build artifacts (`dist/`, `node_modules/.vite`) | `task clean`        |

### Code quality

| Task        | Description                                         | Example          |
| ----------- | --------------------------------------------------- | ---------------- |
| `format`    | Format all files with Prettier                      | `task format`    |
| `lint`      | Run ESLint over the project                         | `task lint`      |
| `lint:fix`  | Run ESLint with `--fix`                             | `task lint:fix`  |
| `typecheck` | TypeScript type-check only, no build output         | `task typecheck` |
| `check`     | Run format, lint and typecheck as a pre-commit gate | `task check`     |
| `ci`        | Full pipeline: install, lint, typecheck, build      | `task ci`        |

### Reveal.js helpers

| Task                | Description                                                                                                                                                                | Example                                                           |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `reveal:help`       | Print all Reveal.js keyboard shortcuts                                                                                                                                     | `task reveal:help`                                                |
| `reveal:overview`   | Open the slide overview (grid view of all slides)                                                                                                                          | `task reveal:overview`                                            |
| `reveal:notes`      | Open the speaker-notes pop-up window                                                                                                                                       | `task reveal:notes`                                               |
| `reveal:first`      | Open the deck directly at slide 1                                                                                                                                          | `task reveal:first`                                               |
| `reveal:jump`       | Open a specific slide number, pass `N=<number>`                                                                                                                            | `task reveal:jump N=5`                                            |
| `reveal:pdf`        | Open the browser's manual print-to-PDF mode (File → Print)                                                                                                                 | `task reveal:pdf`                                                 |
| `reveal:pdf:export` | Export the deck to PDF from the terminal, no browser dialog needed. Writes to `docs/pdf-export/presentation.pdf` by default, or pass `OUT=<filename>` for a different name | `task reveal:pdf:export`<br>`task reveal:pdf:export OUT=deck.pdf` |

`reveal:pdf:export` starts a temporary dev server if none is already running on port
5173, loads the deck in `?print-pdf` mode, waits for fonts and images to settle, and
prints it with Chromium's native PDF engine via Playwright.

## Reveal.js configuration

The configuration lives in `src/App.tsx`:

- `hash: true` · `transition: 'slide'` · `transitionSpeed: 'default'` · `backgroundTransition: 'fade'`
- `center: true` · `width: 1200` · `height: 700` · `margin: 0.02`
- `slideNumber: 'c/t'` · `fragments: true` · `fragmentInURL: false`
- `minScale: 0.1` · `maxScale: 2.0`
- Plugins: `Notes` (speaker notes via the `s` key)

## Keyboard shortcuts

| Key           | Action                         |
| ------------- | ------------------------------ |
| `→` / `Space` | Next slide / fragment          |
| `←`           | Previous slide                 |
| `s`           | Speaker notes                  |
| `r`           | Toggle references on the slide |
| `f`           | Fullscreen                     |
| `Esc`         | Slide overview                 |
| `?`           | Show all shortcuts             |

## Deployment

Deployment is pull-based, so CI never needs VPN or SSH access to the homelab. Pushing to
`main` runs [`.github/workflows/publish-image.yml`](.github/workflows/publish-image.yml),
which lints, typechecks and builds the site, then builds the container image from
[`Containerfile`](Containerfile) and pushes it to GHCR as
`ghcr.io/theoleuthardt/bachelor-thesis-defence-2026:latest` (and `:<commit-sha>` for
traceability/rollback). It only needs the built-in `GITHUB_TOKEN` — no secrets to configure.

The Proxmox LXC pulls the image itself on a timer and restarts the container when it
changes — nothing ever connects back into GitHub. One-time setup on the LXC (needs
`podman` and `podman-compose`):

1. Make the GHCR package public once it exists (package → Settings → Change visibility),
   or run `podman login ghcr.io` with a PAT that has `read:packages` if you'd rather keep
   it private.
2. Copy the [`deploy/`](deploy) directory to `/opt/revealjs-presentation` on the LXC.
3. Enable the timer:
   ```sh
   sudo cp deploy/revealjs-update.service deploy/revealjs-update.timer /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl enable --now revealjs-update.timer
   ```

`revealjs-update.timer` runs `revealjs-update.sh` every 5 minutes, which does
`podman-compose pull && podman-compose up -d`, recreating the container only when a newer
image is actually available. Check it with `systemctl status revealjs-update.timer` or
`journalctl -u revealjs-update.service`.

To try the container locally with Podman before pushing, use `task container:build` /
`task container:up` / `task container:down` (builds from source via the root
[`compose.yml`](compose.yml), separate from the GHCR-pulling one in `deploy/`).

## Dependencies

- `react` — UI library
- `react-dom` — React renderer
- `reveal.js` — presentation framework
- `prism-react-renderer` — syntax highlighting for code slides
- `vite` — build tool
- `typescript` — type checking
- `eslint` — linting
- `prettier` — code formatting
- `playwright` — headless Chromium for the PDF export script
