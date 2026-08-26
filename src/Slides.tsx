import {
  TitleSlide,
  SectionHeaderSlide,
  ClosingSlide,
  BulletSlide,
  StatsSlide,
  CodeSlide,
  ImageSlide,
  DualImageSlide,
  ComparisonSlide,
  QuoteSlide,
  KeyValueSlide,
  PipelineSlide,
  TableSlide,
  TakeawaysSlide,
  TocSlide,
  CardsSlide,
  QuadrantSlide,
  StateMachineSlide,
  LogoGridSlide,
  ImageGridSlide,
  VideoSlide,
  PromptFlowSlide,
  NetworkDiagramSlide,
} from "./slides/";
import Meter from "./components/Meter";
import RatingDots from "./components/RatingDots";
import Ref from "./components/Ref";
import {
  LowVisionVisual,
  MotorImpairmentVisual,
} from "./components/AccessibilityVisuals";
import {
  WatchdogVisual,
  GenerationCounterVisual,
  PlanSignatureVisual,
  RejectedSignatureVisual,
  IterationCapVisual,
} from "./components/DiagramAnimations";

export default function Slides() {
  return (
    <>
      <TitleSlide
        title="Natural Language Web Interaction"
        subtitle="Ein lokaler LLM-basierter Agent für barrierearme Webseitennutzung"
        author="Theo Leuthardt"
        date="01.09.2026"
      />

      <TocSlide />

      <SectionHeaderSlide number="01" title="Einführung und Problemstellung" />

      <StatsSlide
        title="Digitale Teilhabe Anspruch vs. Realität"
        stats={[
          {
            value: "1,3 Mrd.",
            label: (
              <>
                Menschen mit Behinderung <Ref id="1" />
              </>
            ),
            source: "WHO 2022",
          },
          {
            value: "95,9 %",
            label: (
              <>
                der Webseiten verstoßen gegen WCAG <Ref id="2" />
              </>
            ),
            source: "WebAIM 2024",
          },
          {
            value: "2016 /2102",
            label: (
              <>
                EU-Richtlinie verpflichtet öffentliche Stellen <Ref id="3" />
              </>
            ),
            source: "seit 2021 verbindlich",
          },
        ]}
        footer=""
        notes={
          "- 16 % der Weltbevölkerung\n- WCAG: Web Content Accessiblity Guidelines von WWW Consortium"
        }
        references={[
          {
            id: "1",
            label:
              "[World Health Organization, 2022] World Health Organization (2022). Global Report on Health Equity for Persons with Disabilities. S.23.",
          },
          {
            id: "2",
            label:
              "[WebAIM, 2024b] WebAIM (2024b). The WebAIM Million: The 2024 Report on the Accessibility of the Top 1.000.000 Home Pages.",
          },
          {
            id: "3",
            label:
              "[Europäisches Parlament und Rat der Europäischen Union, 2016a] Richtlinie (EU) 2016/2102. Amtsblatt L 327, S. 1–15.",
          },
        ]}
      />

      <DualImageSlide
        title="Zielgruppen und Datenschutzkonflikt"
        staggerReveal
        centerVertically
        leftVisual={<LowVisionVisual />}
        leftLabel="Sehbehinderte Nutzer"
        rightVisual={<MotorImpairmentVisual />}
        rightLabel="Motorisch eingeschränkte Nutzer"
        belowRow={[
          { icon: "mic", label: "Sprachaufnahme" },
          { icon: "alertTriangle", label: "Sensible Sprachdaten" },
        ]}
        belowCaption=""
        notes={
          "- Motorisch Parkinson Zerebralparese Dyspraxie\n- Sousa Kern Daten bleiben auf Gerät"
        }
      />

      <SectionHeaderSlide number="02" title="Stand der Technik" />

      <BulletSlide
        title="Cloud-Web-Agenten der Forschung"
        columns={2}
        variant="list"
        bullets={[
          {
            text: (
              <>
                Mind2Web (Deng 2023) <Ref id="1" />
              </>
            ),
            subitems: [
              "2000+ Aufgaben, 137 Webseiten",
              "Textbasiert, dynamische Zustände ignoriert",
            ],
          },
          {
            text: (
              <>
                WebVoyager und SeeAct <Ref id="2" />
              </>
            ),
            subitems: [
              "Cloud-LMM GPT-4V",
              "Grounding-Lücke 20 bis 25 Prozentpunkte",
            ],
          },
          {
            text: (
              <>
                AutoWebGLM (Lai 2024) <Ref id="3" />
              </>
            ),
            subitems: [
              "6B Open-Source-Modell",
              "Iterationsschleifen nicht robust",
            ],
          },
          {
            text: (
              <>
                WebRL und WebChallenger <Ref id="4" />
              </>
            ),
            subitems: [
              "Architektur statt Modellskalierung",
              "Trainingsinfrastruktur bzw. 32B nötig",
            ],
          },
          {
            text: "Gemeinsamkeit aller Arbeiten",
            subitems: [
              "Barrierefreiheit nie Designziel",
              "Keine Sprachsteuerung, Cloud-Abhängigkeit",
            ],
          },
        ]}
        notes={
          "- Mind2Web begründet das Feld\n- WebVoyager 59,1 %\n- WebRL 4,8 auf 42,4 % durch RL\n- WebChallenger PageMem 56,3 % WebArena"
        }
        references={[
          {
            id: "1",
            label:
              "[Deng et al., 2023] Deng, X. et al. (2023). Mind2Web. NeurIPS 2023, vol. 36, S. 28091–28114.",
          },
          {
            id: "2",
            label:
              "[He et al., 2024] He, H. et al. (2024). WebVoyager. ACL 2024, S. 6864–6890. / [Zheng et al., 2024] Zheng, B. et al. (2024). GPT-4V is a generalist web agent, if grounded.",
          },
          {
            id: "3",
            label:
              "[Lai et al., 2024] Lai, H. et al. (2024). AutoWebGLM. KDD '24, S. 5295–5306. ACM.",
          },
          {
            id: "4",
            label:
              "[Qi et al., 2024] Qi, Z. et al. (2024). WebRL. / [Hwang et al., 2026] Hwang, J. et al. (2026). WebChallenger.",
          },
        ]}
      />

      <QuadrantSlide
        title="In-Browser und Open-Source"
        subtitle="Keiner kombiniert lokale KI, Barrierefreiheit und Sprachsteuerung"
        xAxisLabels={["Nicht im Browser", "Im Browser"]}
        yAxisLabels={["LLM-Aktionsplanung", "Nur Suchassistenz"]}
        points={[
          { label: "Browser-Use", x: 25, y: 25 },
          { label: "Zerhoudi 2026", x: 65, y: 60 },
          { label: "Firefox Voice", x: 82, y: 82 },
          { label: "Ziel dieser Arbeit", x: 75, y: 25, variant: "target" },
        ]}
        notes={
          "- Zerhoudi SLM im Browser, nur Suche\n- Firefox Voice Cloud-ASR, keine LLMs\n- genau diese Lücke schließe ich"
        }
        references={[
          {
            id: "1",
            label:
              "[Zerhoudi and Granitzer, 2026] Zerhoudi, S. und Granitzer, M. (2026). In-browser agents for search assistance. CHIIR '26, S. 345–349. ACM.",
          },
          {
            id: "2",
            label:
              "[Browser Use Team, 2024] Browser Use Team (2024). Browser use. GitHub.",
          },
          {
            id: "3",
            label:
              "[Cambre et al., 2021] Cambre, J. et al. (2021). Firefox Voice. CHI '21, S. 1–18. ACM.",
          },
        ]}
      />

      <QuoteSlide
        title="Forschungsfrage"
        quote={
          <>
            Wie kann eine Browser-Erweiterung mit niedrigem Installationsaufwand
            entworfen werden, die Menschen mit einer motorischen oder
            Sehbehinderung ermöglicht, Webseiten{" "}
            <strong>ausschließlich durch Spracheingabe</strong> zu bedienen,
            unter der Bedingung, dass alle KI-Komponenten{" "}
            <strong>vollständig lokal im Browser</strong> inferiert werden?
          </>
        }
        notes={
          "- Forschungsfrage aus BA 3.1.4\n- langsam vorlesen, roter Faden"
        }
      />

      <SectionHeaderSlide number="03" title="Entwurf der Systemarchitektur" />

      <NetworkDiagramSlide
        title="MV3-Architektur der Browser-Erweiterung"
        hub={{ icon: "cpu", label: "Background" }}
        spokes={[
          { icon: "layers", label: "Popup" },
          { icon: "globe", label: "Content Script" },
          { icon: "waves", label: "Offscreen Document" },
          { icon: "mic", label: "Permission-Tab" },
        ]}
        notes={
          "- Background vermittelt als Message Router alle Nachrichten zwischen den Kontexten\n- Service Worker ohne eigenen DOM-Zugriff, aber Orchestrator mit Zustandsautomat\n- Popup React-UI\n- Content Script Zugriff auf die DOM der Website\n- Offscreen einziger Kontext mit dauerhaftem DOM für KI-Inferenz\n- Permission-Tab 5. Kontext, löst die Mikrofon-Berechtigung separat"
        }
      />

      <LogoGridSlide
        title="Technologieauswahl"
        columns={4}
        logos={[
          { src: "/logos/chrome.svg", label: "Manifest V3" },
          { src: "/logos/wxt.svg", label: "WXT" },
          { src: "/logos/vite.svg", label: "Vite" },
          { src: "/logos/typescript.svg", label: "TypeScript" },
          { src: "/logos/react.svg", label: "React 19" },
          { src: "/logos/onnx.svg", label: "ONNX Runtime Web" },
          { src: "/logos/nvidia.svg", label: "Parakeet-TDT" },
          { src: "/logos/llamacpp.svg", label: "wllama / llama.cpp" },
        ]}
        notes={
          "- WXT vereinheitlicht Chrome und Firefox\n- React 19 fürs Popup\n- Parakeet-TDT für ASR\n- wllama für Qwen im GGUF-Format\n- Playwright bewusst nicht gewählt"
        }
      />

      <SectionHeaderSlide number="04" title="Implementierung" />

      <PipelineSlide
        title="Lokale Pipeline in der Browser-Erweiterung"
        stages={[
          { icon: "mic", label: "Audio", detail: "getUserMedia 16-kHz-PCM" },
          {
            icon: "waves",
            label: "Parakeet ASR",
            detail: "TDT 0.6B v3 int8 ONNX",
          },
          {
            icon: "filter",
            label: "DOM-Reduktion",
            detail: "selectTopElements 6 bis 50",
          },
          {
            icon: "cpu",
            label: "Qwen2.5 GBNF",
            detail: "1.5B Q4_K_M 4096 ctx",
          },
          {
            icon: "checkCircle",
            label: "Validierung",
            detail: "validate und execute",
          },
        ]}
        highlightFrom={2}
        notes={
          "- Validierung im Content Script\n- letzter Klick markiert die nächsten drei Folien"
        }
      />

      <PromptFlowSlide
        title="Ablauf der Aktionsplanung"
        subtitle=""
        inputs={[
          { icon: "globe", label: "DOM-Elemente" },
          { icon: "mic", label: "Transkript" },
          { icon: "wrench", label: "Available Actions" },
        ]}
        mergeLabel="Systemprompt"
        mergeIcon="cpu"
        mergeCaption="Rolle, Kontext, Formatregeln"
        stages={[
          {
            icon: "filter",
            label: "GBNF-Grammatik",
            sideLabels: { top: "DOM", bottom: "Available Actions" },
          },
          { icon: "waves", label: "Token-Generierung" },
          {
            icon: "checkCircle",
            label: "Validierung",
          },
        ]}
        notes={
          "- Grammatik erzwingt gültige Selektoren beim Generieren\n- Modell kann nicht halluzinieren"
        }
      />

      <CodeSlide
        title="selectTopElements"
        caption="DOM-Reduktion mit Keyword-Scoring und fillableBonus"
        language="typescript"
        code={`export function selectTopElements(elements, transcript): DOMElement[] {
  const kws = extractFilteredKeywords(transcript);
  const impliesFill = commandImpliesFill(transcript);

  const scored = elements
    .filter((el) => el.id || el.label || el.placeholder || el.name || el.text)
    .map((el) => {
      const hay = [el.id, el.label, el.placeholder, el.name, el.text].filter(Boolean).join(' ').toLowerCase();
      const keywordScore = kws.reduce((s, kw) => s + (keywordMatches(kw, hay) ? 1 : 0), 0);
      const viewportBonus = el.inViewport ? 0.3 : 0;
      const fillableBonus = impliesFill && isFillableInput(el) ? 1000 : 0;
      return { el, score: keywordScore + viewportBonus + fillableBonus };
    })
    .sort((a, b) => b.score - a.score || a.el.index - b.el.index);

  const keep = Math.min(MAX_DOM_ELEMENTS, Math.max(MIN_DOM_ELEMENTS, scored.length));
  return scored.slice(0, keep).map((s) => s.el);
}`}
        highlightLines={[11, 12, 13]}
        notes={
          "- Codeausschnitt 5.6 aus der BA\n- Bonus-Erhöhung nach einer Regression"
        }
      />

      <CodeSlide
        title="validatePlannedActions (5.9)"
        caption="Validierung und Typ-Korrektur steuern Replan"
        language="typescript"
        code={`export function validatePlannedActions(actions, offered) {
  const bySelector = new Map();
  offered.forEach((el) => bySelector.set(normalizeSelector(el.selector), el));
  const valid = [];
  let dropped = 0, unknownSelector = 0, typeMismatch = 0;

  for (const action of actions) {
    const el = bySelector.get(normalizeSelector(action.selector));
    if (!el) { dropped++; unknownSelector++; continue; }
    const coerced = coerceType(action, el);
    if (!coerced) { dropped++; typeMismatch++; continue; }
    valid.push(coerced);
  }
  return { actions: valid, dropped, unknownSelector, typeMismatch };
}

function coerceType(action, el) {
  if (action.type === 'select' && el.tag !== 'select') return null;
  if (action.type === 'fill' && el.tag === 'select') return { ...action, type: 'select' };
  if (action.type === 'fill' && !isFillableInput(el)) return null;
  return action;
}`}
        highlightLines={[6, 7, 8, 9, 10, 11, 12, 13]}
        notes={
          "- coerceType korrigiert oder lehnt ab\n- Zähler steuern den Replan"
        }
      />

      <CodeSlide
        title="buildFallback (5.13)"
        caption="Deterministischer Fallback nur bei commandImpliesFill"
        language="typescript"
        code={`export function buildFallback(
  transcript: string,
  offered: DOMElement[]
): { actions: DOMAction[]; done: boolean } | null {
  if (!commandImpliesFill(transcript)) return null;
  const value = extractFillValue(transcript);
  if (!value) return null;
  const input = offered.find(isFillableInput);
  if (!input) return null;
  const actions: DOMAction[] = [{ type: 'fill', selector: input.selector, value }];
  const submit = findSubmitButton(offered);
  if (submit) actions.push({ type: 'click', selector: submit.selector });
  return { actions, done: !!submit };
}`}
        highlightLines={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        notes={
          "- Fill-Wert per RegEx\n- ganz ohne LLM\n- Regression 156 auf 118 s"
        }
      />

      <CardsSlide
        title="Absicherungen gegen Endlosschleifen"
        columns={5}
        cards={[
          {
            icon: "repeat",
            iconVisual: <GenerationCounterVisual />,
            title: "Generation-Zähler",
            description: "",
          },
          {
            icon: "filter",
            iconVisual: <PlanSignatureVisual />,
            title: "planSignature",
            description: "",
          },
          {
            icon: "alertTriangle",
            iconVisual: <RejectedSignatureVisual />,
            title: "rejectedSignature",
            description: "",
          },
          {
            icon: "lifeBuoy",
            iconVisual: <WatchdogVisual />,
            title: "Watchdog",
            description: "",
          },
          {
            icon: "target",
            iconVisual: <IterationCapVisual />,
            title: "Iterationsgrenzen",
            description: "",
          },
        ]}
        concludingRemark=""
        notes={
          "- Generation-Zähler: verwirft veraltete Rückkehrer nach einem Neustart\n- planSignature: erkennt identischen Wiederholungsplan, bricht ab\n- rejectedSignature: gleicher Plan zweimal abgelehnt, sofortiger Abbruch\n- Watchdog: 60 Sekunden Timeout gegen ein hängendes Modell\n- Iterationsgrenzen: maximal 5 Replan-Versuche, 2 Validierungs-Versuche\n- ergänzt buildFallback als letzte Sicherung"
        }
      />

      <TakeawaysSlide
        title="Robustheitspyramide"
        variant="funnel"
        items={[
          {
            icon: "scissors",
            title: "Abschneidung bei erster DOM-Änderung",
            description: "",
          },
          {
            icon: "waves",
            title: "Erkennung und Abwarten bei DOM-Änderungen vor der Planung",
            description: "",
          },
          {
            icon: "shield",
            title:
              "Absicherung gegen Endlosschleifen durch Zähler und Signatur",
            description: "",
          },
          {
            icon: "lifeBuoy",
            title: "Deterministischer Fallback durch Vorabbewertung der DOM",
            description: "",
          },
        ]}
        notes={
          "- MutationObserver wartet auf ruhiges DOM\n- Watchdog 60 s, MAX_REPLAN 5\n- buildFallback ganz ohne LLM\n- Dauer 156 auf 118 s gesenkt"
        }
      />

      <SectionHeaderSlide number="05" title="Evaluation & Ergebnisse" />

      <KeyValueSlide
        title="Nutzertest Profil TP1"
        items={[
          {
            label: "Diagnose",
            value: "Netzhautdegeneration, 5 bis 10 cm Abstand",
          },
          {
            label: "Assistive Technologien",
            value: "Bildschirmlupe 500 bis 800 Prozent, Screenreader",
          },
          {
            label: "Hardware",
            value: "Windows 11, i5-1245U, 16 GB, Chrome 150",
          },
          { label: "Eingabe", value: "Hotkey Ctrl+Shift+Space" },
          {
            label: "Methodik",
            value: "Triangulation aus Beobachtung, Interview und Telemetrie",
          },
          {
            label: "Aufgaben",
            value: "Zeiterfassung, Google, Confluence, Amazon",
          },
        ]}
        notes={
          "- formativer Einzelfalltest\n- falls N=1 gefragt Nielsen ca. 31 %\n- bewusst Tiefe statt Breite"
        }
      />

      <TableSlide
        title="Aufgabenergebnisse"
        headers={["Aufgabe", "Ergebnis", "Versuche", "Beobachtung"]}
        rows={[
          { cells: ["Google-Suche", "Erfolgreich", "1", "Klick auf Bilder"] },
          {
            cells: ["Confluence-Login", "Teilweise", "3", "Suche statt Login"],
            isFragment: true,
          },
          {
            cells: [
              "Amazon-Suche",
              "Teilweise",
              "2",
              "Produkt statt Such-Button",
            ],
            isFragment: true,
          },
          {
            cells: ["Zeiterfassung", "Fehlgeschlagen", "3", "Endlosschleife"],
            isFragment: true,
          },
        ]}
        notes={"- Hauptfehler Selektor-Disambiguierung"}
      />

      <KeyValueSlide
        title="Kernergebnisse"
        subtitle="Zeitmessung und Systemverhalten"
        items={[
          {
            label: "Spanne",
            value: (
              <>
                13,4 bis 78,3 s, NFA-11 nie eingehalten
                <Meter
                  min={0}
                  max={80}
                  rangeStart={13.4}
                  rangeEnd={78.3}
                  threshold={10}
                  thresholdLabel="NFA-11"
                />
              </>
            ),
          },
          {
            label: "Replan-Iterationen",
            value: "meist 1, vereinzelt 2, Cap nicht erreicht",
          },
          {
            label: "Fallback",
            value: "Nie ausgelöst, Fehler in Planqualität",
          },
          {
            label: "Subjektive Wahrnehmung",
            value: "TP1 schätzt ca. 10 s, kognitive Entlastung",
          },
        ]}
      />

      <KeyValueSlide
        title="Interview-Bewertung"
        subtitle="Einschätzung von TP1 nach dem Testlauf"
        items={[
          {
            label: "Bedienbarkeit",
            value: (
              <>
                4 von 5 <RatingDots value={4} />
              </>
            ),
          },
          {
            label: "Feedback",
            value: (
              <>
                5 von 5 <RatingDots value={5} />
              </>
            ),
          },
          {
            label: "Erleichterung",
            value: (
              <>
                3 von 5 <RatingDots value={3} />
              </>
            ),
          },
          {
            label: "Vertrauen",
            value: (
              <>
                2 von 5 <RatingDots value={2} />
              </>
            ),
          },
        ]}
      />

      <ComparisonSlide
        title="Zielerfüllung im Überblick"
        subtitle="29 von 35 Anforderungen erfüllt"
        items={[
          {
            status: "success",
            icon: "checkCircle",
            title: "Sprachpipeline",
            description: "Aufnahme, Planung und Ausführung laufen durchgängig",
          },
          {
            status: "success",
            icon: "checkCircle",
            title: "Datenschutz und Barrierefreiheit",
            description: "Vollständig lokal, WCAG AA, tastaturbedienbar",
          },
          {
            status: "success",
            icon: "checkCircle",
            title: "Kompatibilität",
            description: "Chrome und Firefox, Ladezeit unter 30 s",
          },
          {
            status: "danger",
            icon: "alertTriangle",
            title: "NFA-11 Latenz",
            description: "Klar verfehlt, bis 78,3 s statt unter 10 s",
          },
          {
            status: "danger",
            icon: "alertTriangle",
            title: "NFA-12 RAM",
            description: "Knapp verfehlt, rund 3 statt 2 GB",
          },
          {
            status: "danger",
            icon: "alertTriangle",
            title: "Selektor-Genauigkeit",
            description: "FA-12, FA-10, FA-21 nicht durchgängig erfüllt",
          },
        ]}
        footer=""
        notes={"- FA-03 Zahlen werden als Wörter erkannt"}
      />

      <TakeawaysSlide
        title="Limitationen"
        variant="numbered"
        items={[
          {
            title: "Stichprobe",
            description: "n=1, keine Kontrollgruppe",
          },
          {
            title: "Browser",
            description: "Nur Chrome getestet, Firefox & Safari offen",
          },
          {
            title: "Funktionsumfang",
            description: "Scroll nicht umgesetzt",
          },
          {
            title: "Feedback-Kanal",
            description: "Keine Sprachausgabe, Screenreader benötigt aktuell",
          },
        ]}
        footer=""
      />

      <SectionHeaderSlide number="06" title="Fazit & Ausblick" />

      <CardsSlide
        title="Fazit"
        cards={[
          {
            icon: "target",
            title: "Forschungsfrage bejaht",
            description:
              "Lokale Kette aus ASR, Planung und DOM-Interaktion funktioniert.",
          },
          {
            icon: "scale",
            title: "Bewusster Kompromiss",
            description:
              "Cloud-Modelle liefern mehr Kontext, aber weniger Datenschutz.",
          },
          {
            icon: "award",
            title: "Beitrag zum digitalen Teilhabe",
            description:
              "Barrierearme Sprachsteuerung, vollständig lokal umgesetzt.",
          },
        ]}
        concludingRemark=""
        notes={"- nur Prototypenstadium\n- 1 von 4 Aufgaben erfolgreich"}
      />

      <CardsSlide
        title="Ausblick"
        columns={3}
        minimal
        centerVertically
        cards={[
          {
            icon: "gitBranch",
            title: "Open-Source auf GitHub",
            description: "",
          },
          {
            icon: "cpu",
            title: "Bessere Aktionsplanung",
            description: "",
          },
          {
            icon: "mic",
            title: "Aufnahme und Transkription",
            description: "",
          },
          {
            icon: "checkCircle",
            title: "Größere Testgruppe durch Foren und Open Source",
            description: "",
          },
          {
            icon: "repeat",
            title: "Validierungsexperiment für deterministischen Ansatz",
            description: "",
          },
        ]}
        concludingRemark=""
        notes={
          "- Open-Source: Weiterentwicklung nach Fertigstellung, bestehende Probleme künftig behoben\n- Aktionsplanung: DOM-Selektor-Auswahl verbessern, NFA-11 Latenz-Ziel erreichen\n- Aufnahme/Transkription: automatisches Beenden nach Stimme absenken, verbesserte Zahlenerkennung\n- Testreihe: mehr Teilnehmer aus der Zielgruppe, mehr Feedback durch Open-Source-Tests in größeren Foren\n- Validierungsexperiment: prüfen, ob ein komplett deterministischer Ansatz ohne LLM in der Planung robuster wäre"
        }
      />

      <ClosingSlide
        title="Vielen Dank."
        message="Gibt es Fragen?"
        author="Theo Leuthardt"
        email="theo.leuthardt@bdr.de"
        company="Bundesdruckerei GmbH"
      />

      <BulletSlide
        title="WCAG-Verstöße im Detail"
        columns={2}
        variant="list"
        bullets={[
          {
            text: (
              <>
                Häufigste Fehler (WebAIM 2024) <Ref id="1" />
              </>
            ),
            subitems: [
              "81 % unzureichende Textkontraste",
              "54,5 % fehlende Alternativtexte",
              "48,6 % fehlende Formular-Labels",
              "44,6 % leere Links, 28,2 % leere Buttons",
            ],
          },
          {
            text: (
              <>
                Screen Reader Survey #10 <Ref id="2" />
              </>
            ),
            subitems: [
              "1539 Antworten von Screenreader-Nutzenden",
              "Problematischste Barrieren CAPTCHAs und Formulare",
              "85,9 % sehen zugänglichere Webseiten als Hebel",
            ],
          },
        ]}
        references={[
          {
            id: "1",
            label: "[WebAIM, 2024b] WebAIM (2024b). The WebAIM Million Report.",
          },
          {
            id: "2",
            label:
              "[WebAIM, 2024a] WebAIM (2024a). Screen Reader User Survey #10 Results.",
          },
        ]}
      />

      <TableSlide
        title="Funktionale Anforderungen"
        headers={["ID", "Beschreibung", "Priorität"]}
        rows={[
          {
            cells: [
              "FA-01",
              "Audioaufnahme über Mikrofon nach Berechtigung",
              "Muss",
            ],
          },
          {
            cells: ["FA-02", "Lokale Transkription ohne Cloud", "Muss"],
            isFragment: true,
          },
          {
            cells: ["FA-06", "Transkript an lokales LLM übergeben", "Muss"],
            isFragment: true,
          },
          {
            cells: [
              "FA-07",
              "LLM generiert strukturierten Aktionsplan",
              "Muss",
            ],
            isFragment: true,
          },
          {
            cells: ["FA-11", "Aktionsplan sequentiell ausführen", "Muss"],
            isFragment: true,
          },
          {
            cells: ["FA-16", "UI für Aufnahme und Status", "Muss"],
            isFragment: true,
          },
        ]}
        notes={"- nur Auszug, Muss-Anforderungen\n- vollständige Liste BA 3.2"}
      />

      <TableSlide
        title="Nicht-funktionale Anforderungen"
        headers={["ID", "Anforderung", "Priorität"]}
        rows={[
          { cells: ["NFA-1", "Alle Daten lokal verarbeitet", "Muss"] },
          {
            cells: ["NFA-2", "Offline nach initialem Download", "Muss"],
            isFragment: true,
          },
          {
            cells: ["NFA-3", "Farbkontraste WCAG AA", "Muss"],
            isFragment: true,
          },
          {
            cells: [
              "NFA-6",
              "Kompatibilität mit assistiven Technologien",
              "Muss",
            ],
            isFragment: true,
          },
          { cells: ["NFA-11", "Latenz unter 10 s", "Soll"], isFragment: true },
          {
            cells: ["NFA-14", "Modelle im Browser-Cache persistiert", "Muss"],
            isFragment: true,
          },
        ]}
        notes={
          "- Auszug Muss und Soll\n- vollständige Liste BA 3.2\n- NFA-11 NFA-12 fallen später auf"
        }
      />

      <ImageSlide
        title="Aktivitätsdiagramm"
        imageSrc="/interaction-concept-activity-diagram.png"
        imageAlt="Aktivitätsdiagramm"
        imageClassName="image-large"
        notes={"- Abbildung aus der BA\n- kompletter Ablauf bis ready"}
      />

      <DualImageSlide
        title="Sequenzdiagramm"
        leftSrc="/interaction-concept-sequence-diagram-part-1.png"
        leftAlt="Sequenzdiagramm Teil 1"
        rightSrc="/interaction-concept-sequence-diagram-part-2.png"
        rightAlt="Sequenzdiagramm Teil 2"
        notes={"- Abbildung aus der BA"}
      />

      <ImageSlide
        title="Systemarchitektur"
        imageSrc="/architecture-overview.png"
        imageAlt="Systemarchitektur-Übersicht"
        notes={
          "- Abbildung aus der Bachelorarbeit\n- Offscreen hostet Parakeet und wllama"
        }
      />

      <StateMachineSlide
        title="Message Router und Zustandsautomat"
        subtitle="createMessageRouter dispatcht zwischen allen Kontexten"
        entry="idle → downloading → ready"
        states={[
          { label: "Ready" },
          { label: "Recording" },
          { label: "Processing" },
          { label: "Planning" },
          { label: "Executing" },
        ]}
        caption=""
        notes={
          "- persistState in browser.storage.local\n- broadcastStatus sendet STATUS_UPDATE\n- Generation-Zähler gegen Race-Conditions"
        }
      />

      <CodeSlide
        title="setNativeValue (5.12)"
        caption="Framework-kompatibler Wert-Setter für React Vue Svelte"
        language="typescript"
        code={`function setNativeValue(
  el: HTMLInputElement | HTMLTextAreaElement,
  value: string
): void {
  const proto =
    el instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(proto, 'value');
  if (descriptor?.set) descriptor.set.call(el, value);
  else el.value = value;
}`}
        highlightLines={[7, 8, 9]}
        notes={"- InputEvent und change danach"}
      />

      <BulletSlide
        title="wxt.config.ts und Permission-Tab"
        columns={2}
        variant="list"
        bullets={[
          {
            text: "Manifest-Konfiguration",
            subitems: [
              "Permissions offscreen activeTab storage",
              "host_permissions huggingface.co",
              "CSP wasm-unsafe-eval für WASM",
            ],
          },
          {
            text: "Tastaturbefehl",
            subitems: [
              "toggle-recording Ctrl+Shift+Space",
              "Aufnahme unabhängig vom Popup",
            ],
          },
          {
            text: "Permission-Tab als 5. Kontext",
            subitems: [
              "isMicPermissionError erkennt NotAllowedError",
              "openPermissionTab öffnet permission.html",
              "Gemeinsamer Ursprung gilt für Offscreen",
            ],
          },
        ]}
      />

      <TableSlide
        title="Vollständige NFA-Zielerfüllung"
        headers={["NFA", "Anforderung", "Status", "Messwert"]}
        rows={[
          {
            cells: [
              "NFA-1",
              "100 % lokale Ausführung",
              "Erfüllt",
              "Keine externen Anfragen",
            ],
          },
          {
            cells: [
              "NFA-2",
              "Offline nach Download",
              "Erfüllt",
              "Alle Funktionen offline",
            ],
            isFragment: true,
          },
          {
            cells: [
              "NFA-3",
              "Farbkontraste WCAG AA",
              "Erfüllt",
              "4,7 bis 15,4 zu 1",
            ],
            isFragment: true,
          },
          {
            cells: [
              "NFA-11",
              "Latenz unter 10 s",
              "Klar verfehlt",
              "bis 78,3 s",
            ],
            isFragment: true,
          },
          {
            cells: ["NFA-12", "RAM unter 2 GB", "Knapp verfehlt", "rund 3 GB"],
            isFragment: true,
          },
          {
            cells: [
              "NFA-14",
              "Modell-Caching",
              "Erfüllt",
              "Keine erneuten Downloads",
            ],
            isFragment: true,
          },
        ]}
        notes={"- vollständige Matrix BA 6.2"}
      />

      <ImageGridSlide
        title="Popup-Zustände"
        columns={3}
        bordered
        images={[
          {
            src: "/demo-screenshots-gifs/extension-popup-download-view.png",
            alt: "Popup Download-Ansicht",
          },
          {
            src: "/demo-screenshots-gifs/extension-popup-idle.png",
            alt: "Popup Ready-Zustand",
          },
          {
            src: "/demo-screenshots-gifs/extension-popup-record.png",
            alt: "Popup Recording-Zustand",
          },
          {
            src: "/demo-screenshots-gifs/extension-popup-planning.png",
            alt: "Popup Planning-Zustand",
          },
          {
            src: "/demo-screenshots-gifs/extension-popup-no-speech-detected.png",
            alt: "Popup keine Sprache erkannt",
          },
        ]}
        notes={
          "- Download-Ansicht erscheint beim allerersten Start\n- Ready-Zustand danach Ausgangspunkt für jede Aufnahme\n- Recording während der Aufnahme mit visuellem Feedback\n- Planning während die KI im Hintergrund den Aktionsplan erzeugt\n- Kein-Sprache-erkannt als expliziter Fehlerfall statt stillem Hängen\n- Nutzer kann Aufnahme jederzeit verwerfen, bleibt in Kontrolle"
        }
      />

      <VideoSlide
        title="Popup nach Abschluss"
        src="/demo-screenshots-gifs/extension-popup-finished-cropped.mov"
        bordered
        large
        notes={
          "- Aktionsprotokoll mit allen ausgeführten Schritten sichtbar\n- manuell starten, Klick auf Play"
        }
      />

      <VideoSlide
        title="Erfolgreicher Testlauf"
        src="/demo-screenshots-gifs/happy_case_video.mov"
        notes={
          "- Happy Case, kompletter erfolgreicher Durchlauf\n- manuell starten, Klick auf Play"
        }
      />

      <VideoSlide
        title="Fehlgeschlagener Testlauf"
        src="/demo-screenshots-gifs/bad_case_video.mov"
        notes={
          "- Bad Case mit Replan und anschließender Endlosschleife\n- zeigt genau das Zeiterfassungs-Problem aus der Tabelle\n- manuell starten, Klick auf Play"
        }
      />

      <VideoSlide
        title="Amazon-Testfall Kindle-Suche"
        src="/demo-screenshots-gifs/amazon-testcase-kindle.mov"
        notes={
          "- zeigt den Amazon-Testfall, Klick auf Produkt statt Suchknopf\n- Video über eine Minute lang, bei Zeitdruck vorspulen\n- manuell starten, Klick auf Play"
        }
      />

      <BulletSlide
        title="Qualitative Erkenntnisse TP1"
        columns={2}
        variant="list"
        bullets={[
          {
            text: "Positiv",
            subitems: [
              "Transkript-Darstellung als Rückmeldung",
              "Status-Sichtbarkeit über Farbgebung",
              "Kognitive Entlastung",
            ],
          },
          {
            text: "Kritisch",
            subitems: [
              "Dauer zu lang, Aktionsplanung dominiert",
              "Vertrauen in Aktionen niedrig",
              "Nutzen wenn Qualität ausreicht",
            ],
          },
          {
            text: "TP1-Vorschläge",
            subitems: [
              "Automatisches Aufnahmebeenden",
              "Zahlen-Buchstaben-Trennung bei Transkription",
            ],
          },
          {
            text: "Beobachtungen",
            subitems: [
              "Keine sehbeeinträchtigungs-spezifischen UX-Probleme",
              "Laptop underpowered für Inferenz",
            ],
          },
        ]}
      />

      <BulletSlide
        title="Bundesdruckerei-Kontext"
        columns={2}
        variant="list"
        bullets={[
          {
            text: "EU-Richtlinie 2016/2102",
            subitems: [
              "Öffentliche Stellen verpflichtet",
              "WCAG 2.2 für Webseiten und Apps",
            ],
          },
          {
            text: "BFSG Barrierefreie-Produkte-Gesetz",
            subitems: [
              "Ab 2025 für private Akteure",
              "Betrifft auch BDR-Produkte",
            ],
          },
          {
            text: "DSGVO und Bürgerdaten",
            subitems: [
              "Cloud-Übertragung Bürgerdaten kritisch",
              "Lokale In-Browser-KI zwingend",
            ],
          },
          {
            text: "BDR-Relevanz",
            subitems: [
              "Identitätsnachweis und eGovernment",
              "Barrierearme Sprachsteuerung als Feature",
            ],
          },
        ]}
      />
    </>
  );
}
