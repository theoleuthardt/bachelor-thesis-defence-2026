import {
  TitleSlide,
  SectionHeaderSlide,
  ClosingSlide,
  BulletSlide,
  StatsSlide,
  CodeSlide,
  ImageSlide,
  DualImageSlide,
  QuoteSlide,
  KeyValueSlide,
  PipelineSlide,
  TableSlide,
  ComparisonSlide,
  TakeawaysSlide,
  TocSlide,
  CardsSlide,
  ContentSlide,
  QuadrantSlide,
  StateMachineSlide,
  BadgeGridSlide,
  LogoGridSlide,
  ImageGridSlide,
  VideoSlide,
} from "./slides/";
import Meter from "./components/Meter";
import RatingDots from "./components/RatingDots";
import Ref from "./components/Ref";

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
        footer="WCAG 2.2 als Standard. Diskrepanz zwischen Anspruch und Realität"
        notes="WHO 1,3 Mrd 16 Prozent Weltbevölkerung. WebAIM 95,9 Prozent. EU-Richtlinie seit 2021. Anspruch hinter Realität."
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

      <CardsSlide
        title="Zielgruppen und Datenschutzkonflikt"
        cards={[
          {
            icon: "eye",
            title: "Sehbehinderte Nutzer",
            description: "Dynamische Seiten überfordern Screenreader.",
          },
          {
            icon: "keyboard",
            title: "Motorisch eingeschränkte Nutzer",
            description: "Maus und Tastatur werden zur Hürde.",
          },
          {
            icon: "shield",
            title: "Datenschutzkonflikt",
            description: "Sprachdaten dürfen das Gerät nicht verlassen.",
          },
        ]}
        concludingRemark=""
        notes="Sehbehindert Screenreader klare Hierarchien Navigation. Motorisch Parkinson Zerebralparese Dyspraxie. Sprachsteuerung via LLM verarbeitet personenbezogene Daten. Sousa Kern Daten sollten Gerät nicht verlassen."
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
        notes="Sechs Cloud-Web-Agenten. Mind2Web begründet Feld. WebVoyager SeeAct GPT-4V. AutoWebGLM 6B. WebRL WebChallenger Architektur. Gemeinsam Barrierefreiheit nie Designziel."
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
        notes="Zerhoudi SLM 2,7B WebGPU 18 Probanden 36,4 Prozent Akzeptanz nur Suchassistenz keine Aktionsplanung. Browser-Use Python Playwright außerhalb Browser Token-Kosten Halluzinationen. Firefox Voice 12000 Nutzer Cloud-ASR keine LLMs vordefinierte Intents. Lücke lokal browserbasiert sprachgesteuert barrierearm."
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
        quote={<>Wie kann eine Browser-Erweiterung mit niedrigem Installationsaufwand entworfen werden, die Menschen mit einer motorischen oder Sehbehinderung ermöglicht, Webseiten <strong>ausschließlich durch Spracheingabe</strong> zu bedienen, unter der Bedingung, dass alle KI-Komponenten <strong>vollständig lokal im Browser</strong> inferiert werden?</>}
        notes="Forschungsfrage aus BA Kapitel 3. Betont niedrigen Installationsaufwand beide Zielgruppen und vollstaendig lokale Inferenz."
      />

      <SectionHeaderSlide number="03" title="Entwurf der Systemarchitektur" />

      <ContentSlide
        title="Vier MV3-Ausführungskontexte"
        content="Der Service Worker hat keinen DOM-Zugriff. Manifest V3 zwingt zur Aufteilung."
        boxes={[
          {
            icon: "layers",
            title: "Popup und Background",
            description: "Bedienung und Orchestrator mit Zustandsautomat.",
          },
          {
            icon: "globe",
            title: "Content Script",
            description: "Liest und bedient das DOM direkt.",
          },
          {
            icon: "cpu",
            title: "Offscreen Document",
            description: "Einziger Ort für dauerhafte KI-Inferenz.",
          },
          {
            icon: "mic",
            title: "Permission-Tab als 5. Kontext",
            description: "Löst die Mikrofon-Berechtigung separat.",
          },
        ]}
        notes="MV3 zwingt vier Kontexte. Popup React ARIA WCAG AA. Background Orchestrator FSM 7 Zustände browser.storage.local. Content Script DOM-Extraktion max 100 Elemente Aktionsausführung. Offscreen wllama ONNX Runtime Web WebAssembly. Permission-Tab fünfter Kontext gemeinsamer chrome-extension Ursprung isMicPermissionError NotAllowedError."
      />

      <ImageSlide
        title="Systemarchitektur"
        imageSrc="/architecture-overview.png"
        imageAlt="Systemarchitektur-Übersicht"
        notes="Abbildung aus BA. Background vermittelt alle Nachrichten. Offscreen hostet Parakeet und wllama."
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
        caption="Generation-Zähler verwirft veraltete Rückkehrer bei Service-Worker-Restarts"
        notes="createMessageRouter typ-sicheres Dispatching über TypeScript-Generics, identisch in allen Kontexten, jede Antwort als Promise.resolve. FSM 7 Zustände idle bis executing, danach zurück zu ready. transitionTo persistState broadcastStatus STATUS_UPDATE an Popup."
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
        notes="WXT vereinheitlicht Vite Build Auto-Imports Hot-Module-Replacement Chrome und Firefox. TypeScript und React 19 fürs Popup. Parakeet-TDT von NVIDIA für die Spracherkennung, über ONNX Runtime Web im Browser ausgeführt. wllama WebAssembly-Anbindung an llama.cpp für Qwen GGUF. Playwright und Puppeteer bewusst nicht gewählt, zusätzliche Berechtigungen Prozesse Kollision mit assistiven Technologien."
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
        notes="Fünf Stufen. Audio getUserMedia 16kHz. Parakeet int8 ONNX. DOM Reduktion 6 bis 50. Qwen 1.5B GBNF. Validierung im Content Script."
      />

      <CardsSlide
        title="GBNF-Grammatik und Validierung"
        columns={2}
        cards={[
          {
            icon: "filter",
            title: "GBNF-Grammatik",
            description: "Erzwingt gültiges JSON auf Token-Ebene",
          },
          {
            icon: "cpu",
            title: "Systemprompt",
            description: "Zusammenfassung aller nötigen Informationen für KI",
          },
          {
            icon: "checkCircle",
            title: "validatePlannedActions",
            description: "Erkennung/Verwerfung von Halluzinationen",
          },
          {
            icon: "wrench",
            title: "coerceType",
            description: "Aktionstypenanpassung, Replan bei Fehlern",
          },
        ]}
        concludingRemark=""
        notes="GBNF wichtigster Mechanismus, dynamisch pro offered-Element, Modell kann nur angebotene Selektoren. actionHintFor fill select click, nur erster Schritt planen. Map-Lookup Selektoren auf Elemente, Zähler dropped unknownSelector typeMismatch. fill auf select wird zu select, fill auf nicht füllbar abgelehnt, done false bei Truncation löst Replan aus."
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
        notes="selectTopElements aus BA 5.6. fillableBonus 1000 bei Fill-Befehlen. viewportBonus 0,3. Begrenzung 6 bis 50. Regression führte zu Bonus-Erhöhung."
      />

      <TakeawaysSlide
        title="Robustheit Konvergenz und Fallback"
        variant="funnel"
        items={[
          {
            icon: "scissors",
            title: "Truncate at First DOM Change",
            description: "Plan endet beim ersten DOM-ändernden Klick.",
          },
          {
            icon: "waves",
            title: "DOM-Stabilisierung",
            description: "Wartet auf ein ruhiges DOM vor der Planung.",
          },
          {
            icon: "shield",
            title: "Konvergenzsicherungen",
            description: "Zähler und Signaturen stoppen Endlosschleifen.",
          },
          {
            icon: "lifeBuoy",
            title: "Deterministischer Fallback",
            description: "Regelbasierter Notausgang ganz ohne LLM.",
          },
        ]}
        notes="Truncate click als DOM-ändernde Aktion, DOM neu eingelesen gegen blinde Klicks. MutationObserver 250ms Idle 1500ms Hard-Timeout. Generation-Zähler planSignature Watchdog 60s MAX_REPLAN 5. buildFallback bei commandImpliesFill RegEx-Extraktion, fillableBonus 0,5 auf 1000, Dauer 156 auf 118 s."
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
          { label: "Hardware", value: "Windows 11, i5-1245U, 16 GB, Chrome 150" },
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
        notes="TP1 Netzhautdegeneration Lupe 500 bis 800 Prozent. Formativer Einzelfalltest Nielsen. Triangulation Beobachtung Interview Telemetrie. Warum N=1, falls gefragt: Nielsen 2000 erster Nutzer deckt ca. 31 Prozent der Kernprobleme auf, ideal wären 3 bis 5 aber steilster Erkenntniszuwachs bei N=1. Zielgruppe schwer zugänglich, Rekrutierungsengpass im Bachelorarbeits-Zeitrahmen. Tiefe statt Breite, ein Fall im Detail statt vieler Meinungen. Triangulation über 4 Aufgaben kompensiert, multimethodisch statt statistischer Generalisierung. N=1 nicht generalisierbar aber qualitativ abgesichert."
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
            cells: ["Amazon-Suche", "Teilweise", "2", "Produkt statt Such-Button"],
            isFragment: true,
          },
          {
            cells: ["Zeiterfassung", "Fehlgeschlagen", "3", "Endlosschleife"],
            isFragment: true,
          },
        ]}
        notes="Nur Google erfolgreich. Confluence Login statt Suche. Amazon Produkt statt Suchknopf. Zeiterfassung Endlosschleife. Hauptfehler Selektor-Disambiguierung."
      />

      <ImageGridSlide
        title="Popup-Zustände"
        columns={3}
        bordered
        images={[
          { src: "/demo-screenshots-gifs/extension-popup-download-view.png", alt: "Popup Download-Ansicht" },
          { src: "/demo-screenshots-gifs/extension-popup-idle.png", alt: "Popup Ready-Zustand" },
          { src: "/demo-screenshots-gifs/extension-popup-record.png", alt: "Popup Recording-Zustand" },
          { src: "/demo-screenshots-gifs/extension-popup-planning.png", alt: "Popup Planning-Zustand" },
          { src: "/demo-screenshots-gifs/extension-popup-no-speech-detected.png", alt: "Popup keine Sprache erkannt" },
        ]}
        notes="Download-Ansicht beim Erststart. Ready-Zustand. Recording während Aufnahme. Planning während LLM-Aktionsplanung. Kein-Sprache-erkannt als Fehlerfall. Aufnahme verwerfen als Nutzerkontrolle."
      />

      <VideoSlide
        title="Popup nach Abschluss"
        src="/demo-screenshots-gifs/extension-popup-finished-cropped.mov"
        bordered
        large
        notes="Popup nach Abschluss der Aufgabe, Aktionsprotokoll sichtbar. Manuell starten per Klick auf Play."
      />

      <VideoSlide
        title="Erfolgreicher Testlauf"
        src="/demo-screenshots-gifs/happy_case_video.mov"
        notes="Happy Case erfolgreicher Durchlauf. Manuell starten per Klick auf Play."
      />

      <VideoSlide
        title="Fehlgeschlagener Testlauf"
        src="/demo-screenshots-gifs/bad_case_video.mov"
        notes="Bad Case Fehlerfall mit Replan und Endlosschleife. Manuell starten per Klick auf Play."
      />

      <VideoSlide
        title="Amazon-Testfall: Kindle-Suche"
        src="/demo-screenshots-gifs/amazon-testcase-kindle.mov"
        notes="Amazon Testfall Kindle-Suche Produkt statt Suchknopf. Manuell starten per Klick auf Play, Video ist ueber 1 Minute lang, ggf. vorspulen."
      />

      <TableSlide
        title="Telemetrie subjektiv vs. gemessen"
        headers={["Aufgabe", "Geschätzt", "Gemessen", "NFA-11"]}
        rows={[
          { cells: ["Zeiterfassung", "ca. 10 s", "74,4 s / 72,2 s", "Nein"] },
          {
            cells: ["Google", "nicht beziffert", "70,4 s / 13,4 s", "Nein"],
            isFragment: true,
          },
          {
            cells: ["Confluence", "ca. 10 s", "17,2 bis 20,7 s", "Nein"],
            isFragment: true,
          },
          {
            cells: ["Amazon", "über 10 s", "73,8 s / 78,3 s", "Nein"],
            isFragment: true,
          },
        ]}
        notes="Spanne 13,4 bis 78,3 s. NFA-11 unter 10 s nie eingehalten. TP1 schätzt ca. 10 s. Kognitive Entlastung trotz hoher Latenz."
      />

      <KeyValueSlide
        title="Kernergebnisse und Interview"
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
        notes="Spanne 13,4 bis 78,3 s. Fallback nie ausgelöst. Subjektive Wahrnehmung deutlich kürzer. Bedienbarkeit 4 Feedback 5 Vertrauen 2."
      />

      <BadgeGridSlide
        title="Erfüllte Anforderungen"
        subtitle="17 funktionale und 12 nicht-funktionale Anforderungen"
        tone="blue"
        groups={[
          {
            label: "Funktionale Anforderungen",
            items: [
              "FA-01",
              "FA-02",
              "FA-04",
              "FA-05",
              "FA-06",
              "FA-07",
              "FA-08",
              "FA-09",
              "FA-11",
              "FA-13",
              "FA-15",
              "FA-16",
              "FA-17",
              "FA-18",
              "FA-19",
              "FA-20",
              "FA-22",
            ],
          },
          {
            label: "Nicht-funktionale Anforderungen",
            items: [
              "NFA-1",
              "NFA-2",
              "NFA-3",
              "NFA-4",
              "NFA-5",
              "NFA-6",
              "NFA-7",
              "NFA-8",
              "NFA-10",
              "NFA-13",
              "NFA-14",
              "NFA-16",
            ],
          },
        ]}
        notes="29 von 35 Anforderungen erfüllt. Audioaufnahme Transkription Aktionsplan DOM-Ausführung UI Statusanzeige Fehlermeldungen. Lokal offline Barrierefreiheit WCAG AA Tastaturbedienbarkeit assistive Technologien Chrome Firefox Ladezeit Modell-Caching."
      />

      <KeyValueSlide
        title="Nicht erfüllte Anforderungen"
        items={[
          {
            status: "danger",
            label: "NFA-11",
            value: "Klar verfehlt, Latenz bis 78,3 s statt unter 10 s",
          },
          {
            status: "danger",
            label: "NFA-12",
            value: "Klar verfehlt, RAM rund 3 statt 2 GB",
          },
          {
            status: "danger",
            label: "FA-12",
            value: "Nicht durchgängig erfüllt, Selektor-Genauigkeit 2 von 4",
          },
          {
            status: "danger",
            label: "FA-10",
            value: "Teilweise erfüllt, Replan liefert nicht immer brauchbaren Plan",
          },
          {
            status: "danger",
            label: "FA-21",
            value: "Nicht erfüllt, Endlosschleife statt Fehlerstatus",
          },
          {
            status: "danger",
            label: "FA-03",
            value: "Nicht erfüllt, Zahlen werden als Wörter transkribiert",
          },
        ]}
        footer="Hauptfehlerquellen: Selektor-Disambiguierung & Latenz"
        notes="NFA-11 Latenz bis 78,3 s. NFA-12 RAM 3 statt 2 GB, eventuell durch andere Laptop-Prozesse. FA-12 Selektor-Genauigkeit 2 von 4, Login-Klick und Produktauswahl falsch. FA-10 Replan reagiert aber nicht immer brauchbar. FA-21 Zeiterfassung Endlosschleife statt Fehlerstatus oder Alternative. FA-03 Ziffernfolgen als ausgeschriebene Wörter erkannt."
      />

      <KeyValueSlide
        title="Limitationen"
        items={[
          {
            label: "Stichprobe",
            value: "n=1, keine Kontrollgruppe",
          },
          {
            label: "Browser",
            value: "Nur Chrome getestet, Safari offen",
          },
          {
            label: "Funktionsumfang",
            value: "Scroll nicht umgesetzt",
          },
          {
            label: "Feedback-Kanal",
            value: "Keine Sprachausgabe",
          },
        ]}
        footer="Trotzdem gut angekommen: Transkript-Darstellung und Status-Farben."
        notes="n=1 keine Kontrollgruppe. Nur Chrome getestet Safari offen. Scroll nicht umgesetzt. Keine Sprachausgabe. Positiv trotzdem Transkript-Darstellung Status-Sichtbarkeit kognitive Entlastung."
      />

      <SectionHeaderSlide number="06" title="Fazit & Ausblick" />

      <ComparisonSlide
        title="Erfolge und Herausforderungen"
        layout="split"
        items={[
          {
            icon: "checkCircle",
            title: "Architektur und Datenschutz erfüllt",
            description: "",
          },
          {
            icon: "alertTriangle",
            title: "Performanz und Modellgrenzen",
            description: "",
          },
        ]}
        footer="Bewusster Kompromiss. Datenschutz und Offline vs. Leistungsfähigkeit kleiner Modelle."
        notes="NFA-1 100 Prozent lokal MV3-Konformität. GBNF verhindert JSON-Syntax-Fehler. Deterministischer Fallback faengt Modellfehler ab, Pipeline-Dauer 156 auf 118 s. 13,4 bis 78,3 s pro Schritt NFA-11 verfehlt. 1,5B-Modell Selektor-Halluzinationen, Vertrauen 2 von 5, semantische Fehlwahl unter validen Kandidaten bleibt."
      />

      <CardsSlide
        title="Fazit"
        cards={[
          {
            icon: "target",
            title: "Forschungsfrage bejaht",
            description: "Lokale Kette aus ASR, Planung und DOM-Interaktion funktioniert.",
          },
          {
            icon: "scale",
            title: "Bewusster Kompromiss",
            description: "Cloud-Modelle liefern mehr Kontext, aber weniger Datenschutz.",
          },
          {
            icon: "award",
            title: "Beitrag zur Teilhabe",
            description: "Barrierearme Sprachsteuerung, vollständig lokal umgesetzt.",
          },
        ]}
        concludingRemark="Prototypenstadium, nicht final gelöst. 1 von 4 Aufgaben erfolgreich, Vertrauen 2 von 5."
        notes="Forschungsfrage grundsätzlich bejaht, lokale Kette aus ASR Aktionsplanung DOM-Interaktion funktioniert, Machbarkeit ohne Cloud bewiesen. Praxistauglichkeit eingeschränkt, nur 1 von 4 Aufgaben erfolgreich, Fehlerquellen DOM-Selektor-Auswahl und Latenz. Antwortzeit und Ausführungsgenauigkeit noch nicht für selbstständige Bedienung ausreichend, Vertrauen 2 von 5. Nachvollziehbar dass bisherige Lösungen Cloud und größere Modelle nutzen, mehr Kontext und Rechenleistung. Datenschutz und Offline-Vorteile als Kompromiss mit geringerer Leistungsfähigkeit kleiner Modelle. Trotzdem Beitrag zur digitalen Teilhabe bei gewahrtem Datenschutz."
      />

      <BulletSlide
        title="Ausblick"
        columns={2}
        variant="icon"
        bullets={[
          {
            icon: "gitBranch",
            text: "Open-Source auf GitHub",
            subitems: [
              "Weiterentwicklung nach Fertigstellung",
              "Bestehende Probleme künftig behoben",
            ],
          },
          {
            icon: "cpu",
            text: "Bessere Aktionsplanung",
            subitems: [
              "DOM-Selektor-Auswahl des Modells verbessern",
              "NFA-11 Latenz-Ziel erreichen",
            ],
          },
          {
            icon: "mic",
            text: "Aufnahme und Transkription",
            subitems: [
              "Automatisches Beenden nach Stimme absenken",
              "Verbesserte Transkription von Zahlen",
            ],
          },
          {
            icon: "checkCircle",
            text: "Größere Testreihe",
            subitems: [
              "Mehr Teilnehmer aus der Zielgruppe",
              "Mehr Feedback durch Open-Source-Tests",
            ],
          },
        ]}
        notes="Open-Source auf GitHub nach Fertigstellung dieser Arbeit, bestehende Probleme und nicht erfüllte Anforderungen künftig behoben. Verbesserung der Aktionsplanung und DOM-Selektor-Auswahl des lokalen Modells. Automatisches Beenden der Aufnahme nach Absenken der Stimme. Verbesserte Transkription von Zahlen. Erreichen von NFA-11 für geringe Wartezeit und bessere Performance. Über Open-Source Tests mit größerer Teilnehmerzahl für mehr Feedback von Menschen der Zielgruppe."
      />

      <ClosingSlide
        title="Vielen Dank."
        message="Gibt es Fragen?"
        author="Theo Leuthardt"
        email="theo.leuthardt@bdr.de"
        company="Bundesdruckerei GmbH"
      />

      <BulletSlide
        title="Backup WCAG-Verstöße im Detail"
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
        notes="81 Prozent Kontraste. 54,5 Prozent Alt-Texte. Screen Reader Survey 1539 Antworten. 85,9 Prozent sehen Webseiten als Hebel."
        references={[
          {
            id: "1",
            label: "[WebAIM, 2024b] WebAIM (2024b). The WebAIM Million Report.",
          },
          {
            id: "2",
            label: "[WebAIM, 2024a] WebAIM (2024a). Screen Reader User Survey #10 Results.",
          },
        ]}
      />

      <TableSlide
        title="Backup Funktionale Anforderungen"
        headers={["ID", "Beschreibung", "Priorität"]}
        rows={[
          { cells: ["FA-01", "Audioaufnahme über Mikrofon nach Berechtigung", "Muss"] },
          { cells: ["FA-02", "Lokale Transkription ohne Cloud", "Muss"], isFragment: true },
          { cells: ["FA-06", "Transkript an lokales LLM übergeben", "Muss"], isFragment: true },
          { cells: ["FA-07", "LLM generiert strukturierten Aktionsplan", "Muss"], isFragment: true },
          { cells: ["FA-11", "Aktionsplan sequentiell ausführen", "Muss"], isFragment: true },
          { cells: ["FA-16", "UI für Aufnahme und Status", "Muss"], isFragment: true },
        ]}
        notes="Auszug FA-Liste. Muss-Anforderungen. Vollständige Liste in BA Kapitel 3.2."
      />

      <TableSlide
        title="Backup Nicht-funktionale Anforderungen"
        headers={["ID", "Anforderung", "Priorität"]}
        rows={[
          { cells: ["NFA-1", "Alle Daten lokal verarbeitet", "Muss"] },
          { cells: ["NFA-2", "Offline nach initialem Download", "Muss"], isFragment: true },
          { cells: ["NFA-3", "Farbkontraste WCAG AA", "Muss"], isFragment: true },
          { cells: ["NFA-6", "Kompatibilität mit assistiven Technologien", "Muss"], isFragment: true },
          { cells: ["NFA-11", "Latenz unter 10 s", "Soll"], isFragment: true },
          { cells: ["NFA-14", "Modelle im Browser-Cache persistiert", "Muss"], isFragment: true },
        ]}
        notes="Auszug NFA-Liste. Muss und Soll. Vollständige Liste in BA Kapitel 3.2."
      />

      <ImageSlide
        title="Backup Aktivitätsdiagramm"
        imageSrc="/interaction-concept-activity-diagram.png"
        imageAlt="Aktivitätsdiagramm"
        imageClassName="image-large"
        notes="Aktivitätsdiagramm aus BA. Vollständiger Ablauf vom Popup-Öffnen bis ready."
      />

      <DualImageSlide
        title="Backup Sequenzdiagramm"
        leftSrc="/interaction-concept-sequence-diagram-part-1.png"
        leftAlt="Sequenzdiagramm Teil 1"
        rightSrc="/interaction-concept-sequence-diagram-part-2.png"
        rightAlt="Sequenzdiagramm Teil 2"
        notes="Sequenzdiagramm aus BA in zwei Teilen. Nachrichtenfluss zwischen Kontexten."
      />

      <CodeSlide
        title="Backup validatePlannedActions (5.9)"
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
        notes="Map von Selektoren auf Elemente. coerceType korrigiert fill auf select. Lehnt nicht füllbare ab. Zähler steuern Replan."
      />

      <CodeSlide
        title="Backup buildFallback (5.13)"
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
        notes="Nur bei commandImpliesFill. Extrahiert Fill-Wert per RegEx. Oberstes füllbares Eingabefeld plus Submit. Kein LLM."
      />

      <CodeSlide
        title="Backup setNativeValue (5.12)"
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
        notes="Reaktive Frameworks ignorieren naives .value. Setter aus Prototyp-Deskriptor. InputEvent und change danach."
      />

      <BulletSlide
        title="Backup wxt.config.ts und Permission-Tab"
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
        notes="WXT Config. Permissions. CSP wasm-unsafe-eval. Hotkey. Permission-Tab als fünfter Kontext gemeinsamer Ursprung."
      />

      <TableSlide
        title="Backup Vollständige NFA-Zielerfüllung"
        headers={["NFA", "Anforderung", "Status", "Messwert"]}
        rows={[
          { cells: ["NFA-1", "100 % lokale Ausführung", "Erfüllt", "Keine externen Anfragen"] },
          { cells: ["NFA-2", "Offline nach Download", "Erfüllt", "Alle Funktionen offline"], isFragment: true },
          { cells: ["NFA-3", "Farbkontraste WCAG AA", "Erfüllt", "4,7 bis 15,4 zu 1"], isFragment: true },
          { cells: ["NFA-11", "Latenz unter 10 s", "Klar verfehlt", "bis 78,3 s"], isFragment: true },
          { cells: ["NFA-12", "RAM unter 2 GB", "Knapp verfehlt", "rund 3 GB"], isFragment: true },
          { cells: ["NFA-14", "Modell-Caching", "Erfüllt", "Keine erneuten Downloads"], isFragment: true },
        ]}
        notes="NFA-1 bis NFA-3 erfüllt. NFA-11 klar verfehlt. NFA-12 knapp verfehlt. NFA-14 erfüllt. Vollständige Matrix in BA Kapitel 6.2."
      />

      <BulletSlide
        title="Backup Qualitative Erkenntnisse TP1"
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
        notes="Positiv Transkript Status Farbgebung. Kritisch Dauer Vertrauen. Vorschläge automatisches Aufnahmebeenden. Keine sehbeeinträchtigungsspezifischen UX Probleme."
      />

      <BulletSlide
        title="Backup Bundesdruckerei-Kontext"
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
        notes="EU-Richtlinie 2016/2102. BFSG ab 2025. DSGVO Bürgerdaten. BDR Identitätsnachweis eGovernment. Lokale KI zwingend."
      />
    </>
  );
}
