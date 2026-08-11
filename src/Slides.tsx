import TitleSlide from './slides/TitleSlide';
import SectionHeaderSlide from './slides/SectionHeaderSlide';
import ClosingSlide from './slides/ClosingSlide';
import BulletSlide from './slides/BulletSlide';
import StatsSlide from './slides/StatsSlide';
import CodeSlide from './slides/CodeSlide';
import ImageSlide from './slides/ImageSlide';
import QuoteSlide from './slides/QuoteSlide';
import PipelineSlide from './slides/PipelineSlide';
import KeyValueSlide from './slides/KeyValueSlide';
import TableSlide from './slides/TableSlide';
import TakeawaysSlide from './slides/TakeawaysSlide';
import ComparisonSlide from './slides/ComparisonSlide';

export default function Slides() {
  return (
    <>
      <TitleSlide
        title="Natural Language Web Interaction"
        subtitle="Ein lokaler LLM-basierter Agent für barrierearme Webseitennutzung"
        author="Theo Leuthardt"
        date="Verteidigung 2026"
      />

      <SectionHeaderSlide number="01" title="Problem und Forschungsfrage" />

      <StatsSlide
        title="Web alltagskritisch, aber nicht für alle"
        stats={[
          { value: '1,3 Mrd.', label: 'Menschen mit Behinderung', source: 'WHO 2022' },
          { value: '95,9 %', label: 'Top-Webseiten verstoßen gegen WCAG', source: 'WebAIM 2024' },
          { value: '2016/2102', label: 'EU-Richtlinie verpflichtet öffentliche Stellen', source: 'seit 2021' },
        ]}
        footer="WCAG 2.2 (W3C, Dez. 2024) als Standard — Diskrepanz zwischen Anspruch und Realität"
        notes="WHO 2022 16 Prozent der Weltbevölkerung. WebAIM Million Report 95,9 Prozent. EU-Richtlinie 2016/2102 verbindlich seit 2021."
      />

      <BulletSlide
        title="WCAG-Verstöße im Detail"
        columns={2}
        bullets={[
          {
            text: 'Häufigste Fehler (WebAIM 2024)',
            subitems: [
              '81 % unzureichende Textkontraste',
              '54,5 % fehlende Alternativtexte',
              '48,6 % fehlende Formular-Labels',
              '44,6 % leere Links, 28,2 % leere Buttons',
            ],
          },
          {
            text: 'Screen Reader Survey #10',
            subitems: [
              '1539 Antworten, problematischste Barrieren',
              'CAPTCHAs, Menüs, Links, Tastatur, Formulare',
              '85,9 % sehen zugänglichere Webseiten als Hebel',
            ],
          },
          {
            text: 'Relevanz Bundesdruckerei',
            subitems: [
              'EU-Richtlinie 2016/2102 + BFSG',
              'DSGVO verbietet Cloud-Übertragung Bürgerdaten',
              'Lokale In-Browser-KI zwingend',
            ],
          },
          {
            text: 'Yu et al. (2025)',
            subitems: [
              'Selbst konforme Seiten erschweren Navigation',
              'Inkonsistente Überschriften, schlechte Beschriftungen',
            ],
          },
        ]}
        notes="Häufigste WCAG-Fehler aus WebAIM 2024. Screen Reader Survey mit 1539 Antworten. Bundesdruckerei-Rahmen EU-Richtlinie BFSG DSGVO. Yu et al. zeigen dass selbst konforme Seiten problematisch sind."
      />

      <BulletSlide
        title="Zwei Zielgruppen, ein Konflikt"
        columns={2}
        bullets={[
          {
            text: 'Sehbehinderte und blinde Nutzer',
            subitems: [
              'Screenreader benötigen klare Hierarchien',
              'Moderne dynamische Webseiten überfordern sie',
              'CAPTCHAs, komplexe Formulare (Yu et al. 2025)',
            ],
          },
          {
            text: 'Motorisch eingeschränkte Nutzer',
            subitems: [
              'Parkinson, Zerebralparese, Dyspraxie',
              'Maus und Tastatur als Hürde (Cossovich 2023)',
            ],
          },
          {
            text: 'Lösungsansatz Sprachsteuerung via LLM',
            subitems: [
              'Natürliche Sprache steuert Oberflächen (Pucci 2024)',
              'Aber LLM verarbeitet personenbezogene Daten',
            ],
          },
          {
            text: 'Datenschutz-Konflikt',
            subitems: [
              'Daten sollten Gerät nicht verlassen (Sousa und Kern 2023)',
              'Cloud-LLMs verstoßen gegen DSGVO bei Bürgerdaten',
            ],
          },
        ]}
        notes="Zwei Zielgruppen sehbehindert und motorisch eingeschränkt. Sprachsteuerung via LLM als Lösung. Datenschutz-Konflikt DSGVO personenbezogene Daten sollten Gerät nicht verlassen."
      />

      <BulletSlide
        title="Cloud-Web-Agenten"
        columns={2}
        bullets={[
          {
            text: 'Mind2Web (Deng 2023)',
            subitems: ['2000+ Aufgaben, 137 Webseiten', 'MindAct 2-stufig', 'Textbasiert, dynamische Zustände ignoriert'],
          },
          {
            text: 'WebVoyager (He 2024)',
            subitems: ['Screenshots plus HTML', 'Textlastige Seiten überfordern'],
          },
          {
            text: 'SeeAct (Zheng 2024)',
            subitems: ['GPT-4V plus Grounding-Modul', 'Visuelles Grounding 20 bis 25 pp Lücke'],
          },
          {
            text: 'AutoWebGLM (Lai 2024)',
            subitems: ['ChatGLM3-6B plus RL', 'Iterationsschleifen nicht robust'],
          },
          {
            text: 'WebRL und WebChallenger',
            subitems: ['WebRL Llama 4,8 auf 42,4 Prozent', 'WebChallenger PageMem 56,3 Prozent WebArena'],
          },
          {
            text: 'Gemeinsamkeit',
            subitems: ['DOM-Upload plus Cloud-Inferenz', 'Barrierefreiheit nie Designziel'],
          },
        ]}
        notes="Sechs Cloud-Web-Agenten mit jeweiligen Limitationen. Alle haben DSGVO-Problem durch Cloud-Upload. Barrierefreiheit in keiner Arbeit primäres Designziel."
      />

      <BulletSlide
        title="In-Browser und Open-Source"
        columns={2}
        bullets={[
          {
            text: 'Zerhoudi und Granitzer (2026)',
            subitems: [
              'Probabilistisches Modell plus SLM Phi 2,7B',
              'WebLLM WebGPU IndexedDB',
              '18 Probanden Session 6,8 auf 5,2',
              'Nur Suchassistenz keine Aktionsplanung',
            ],
          },
          {
            text: 'Browser-Use (2024)',
            subitems: [
              'Python Framework mit Playwright',
              'Nicht im Browser eingebettet',
              'Token-Kosten Latenz Halluzinationen',
            ],
          },
          {
            text: 'Firefox Voice (Cambre 2021)',
            subitems: [
              'Firefox Extension Sprachsteuerung',
              'Cloud-ASR vordefinierte Intents',
              '12000 Nutzer keine LLMs',
            ],
          },
          {
            text: 'Forschungslücke',
            subitems: [
              'Keine Arbeit kombiniert alle vier Kriterien',
              'Lokal plus browserbasiert plus sprachgesteuert plus barrierearm',
            ],
          },
        ]}
        notes="Drei nicht-cloudbasierte Ansätze mit jeweiligen Lücken. Forschungslücke ist die Kombination lokal browserbasiert sprachgesteuert barrierearm."
      />

      <QuoteSlide
        title="Forschungsfrage"
        quote="Wie kann eine Browser-Erweiterung mit niedrigem Installationsaufwand entworfen werden, die Menschen mit einer motorischen oder Sehbehinderung ermöglicht, Webseiten ausschließlich durch Spracheingabe zu bedienen, unter der Bedingung, dass alle KI-Komponenten vollständig lokal im Browser inferiert werden?"
        notes="Forschungsfrage aus BA Kapitel 3.1.4. Betont niedrigen Installationsaufwand beide Zielgruppen und vollstaendig lokale Inferenz."
      />

      <TableSlide
        title="NFA Zielerreichung"
        headers={['NFA', 'Anforderung', 'Status', 'Messwert']}
        rows={[
          { cells: ['NFA-1', '100 % lokale Ausführung', 'Erfüllt', 'Keine externen Anfragen'] },
          { cells: ['NFA-11', 'Latenz unter 10 s', 'Klar verfehlt', 'bis 78,3 s gemessen'], isFragment: true },
          { cells: ['NFA-12', 'RAM unter 2,0 GB', 'Knapp verfehlt', 'rund 3 GB'], isFragment: true },
        ]}
      />

      <SectionHeaderSlide number="02" title="Architektur" />

      <BulletSlide
        title="Vier MV3-Ausführungskontexte"
        columns={2}
        bullets={[
          {
            text: 'MV3-Restriktionen',
            subitems: [
              'Service Worker hat keinen DOM-Zugriff',
              'Kurzer Lebenszyklus bei Inaktivität',
              'Keine langlebige WASM-Ausführung',
            ],
          },
          {
            text: 'wxt.config.ts',
            subitems: [
              'Permissions offscreen activeTab storage',
              'host_permissions huggingface.co',
              'CSP wasm-unsafe-eval Hotkey Ctrl+Shift+Space',
            ],
          },
          {
            text: 'Popup und Background',
            subitems: [
              'React Popup 280 px mit ARIA',
              'Background als Orchestrator mit FSM',
              '7 Zustaende in browser.storage.local',
            ],
          },
          {
            text: 'Content und Offscreen',
            subitems: [
              'Content Script auf all_urls bei document_start',
              'DOM-Extraktion max 100 Elemente',
              'Offscreen Host fuer wllama und ONNX',
              '5. Kontext permission.html fuer Mikrofon',
            ],
          },
        ]}
        notes="Vier Kontexte unter MV3. Popup React 280px. Background Orchestrator FSM 7 Zustaende. Content Script DOM-Extraktion. Offscreen Document fuer wllama und ONNX. Permission-Tab als 5. Kontext."
      />

      <ImageSlide
        title="Architektur"
        subtitle="Abbildung 1 der BA"
        imageSrc="/fig1.png"
        imageAlt="Abbildung 1 Systemarchitektur"
        notes="Abbildung 1 aus der Bachelorarbeit. Zeigt In-Memory-Nachrichtenfluss zwischen Popup Service Worker Content Script und Offscreen Document."
      />

      <BulletSlide
        title="Message Router und Zustandsautomat"
        columns={2}
        bullets={[
          {
            text: 'createMessageRouter (5.2)',
            subitems: [
              'Typ-sicheres Dispatching',
              'In allen Kontexten identisch',
              'Jede Antwort als Promise.resolve',
            ],
          },
          {
            text: 'Zustandsautomat state.ts',
            subitems: [
              'transitionTo plus persistState',
              'broadcastStatus als STATUS_UPDATE',
              'Generation-Zaehler als Cancellation',
            ],
          },
          {
            text: 'Lazy-Initialisierung (5.3)',
            subitems: [
              'offscreenDocumentCreating-Flag',
              'waitForOffscreenCreation gegen Rennen',
              'reasons WORKERS und USER_MEDIA',
            ],
          },
          {
            text: 'Berechtigungs-Tab',
            subitems: [
              'isMicPermissionError erkennt NotAllowedError',
              'openPermissionTab oeffnet permission.html',
              'Gemeinsamer Ursprung gilt fuer Offscreen',
            ],
          },
        ]}
        notes="Message Router typ-sicher in allen Kontexten. Zustandsautomat mit Generation-Zaehler. Lazy-Initialisierung des Offscreen-Dokuments. Permission-Tab als 5. Kontext."
      />

      <SectionHeaderSlide number="03" title="Lokale KI-Pipeline" />

      <PipelineSlide
        title="Pipeline Überblick"
        stages={[
          { label: 'Audio', detail: 'getUserMedia 16 kHz PCM' },
          { label: 'Parakeet ASR', detail: 'TDT 0.6B v3 int8 ONNX' },
          { label: 'DOM-Reduktion', detail: 'selectTopElements 6 bis 50' },
        ]}
        caption="Stufe 1 und 2 der Pipeline"
        notes="Pipeline Stufe 1 Audioaufnahme und Stufe 2 Parakeet ASR. Audio wird zu 16 kHz PCM konvertiert. Parakeet TDT 0.6B v3 multilingual int8 ONNX."
      />

      <PipelineSlide
        title="Pipeline Überblick"
        stages={[
          { label: 'Qwen2.5 GBNF', detail: '1.5B Q4_K_M 4096 ctx' },
          { label: 'Validierung', detail: 'validate coerce' },
          { label: 'Ausführung', detail: 'execute im Content Script' },
        ]}
        caption="Stufe 3 bis 5 der Pipeline"
        notes="Pipeline Stufe 3 Qwen2.5 1.5B Q4_K_M mit GBNF. Stufe 4 Validierung mit coerceType. Stufe 5 Ausfuehrung im Content Script."
      />

      <BulletSlide
        title="GBNF-Grammatik und Validierung"
        columns={2}
        bullets={[
          {
            text: 'GBNF-Grammatik',
            subitems: [
              'Erzwingt JSON auf Token-Ebene',
              'Dynamisch pro offered-Element',
              'Modell kann nur angebotene Selektoren',
              'Bis 3 Aktionen pro Plan',
            ],
          },
          {
            text: 'Systemprompt 8 Anweisungen',
            subitems: [
              'actionHintFor weist fill select click zu',
              'Nur textartige Inputs erhalten fill',
              'Schritt 5 nur erster Schritt planen',
            ],
          },
          {
            text: 'validatePlannedActions (5.9)',
            subitems: [
              'Map Selektoren auf Elemente',
              'Erfundene Selektoren werden erkannt',
              'Zaehler dropped unknownSelector typeMismatch',
            ],
          },
          {
            text: 'coerceType und done-Forcing',
            subitems: [
              'fill auf select wird zu select',
              'fill auf nicht fuellbar abgelehnt',
              'done false bei truncation loest Replan aus',
            ],
          },
        ]}
        notes="GBNF erzwingueltiges JSON. Systemprompt mit 8 Anweisungen. validatePlannedActions mit coerceType. done-Forcing loest Replan aus."
      />

      <CodeSlide
        title="selectTopElements (5.6)"
        caption="DOM-Reduktion Keyword-Scoring fillableBonus 1000"
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
        notes="selectTopElements aus Codeausschnitt 5.6. fillableBonus 1000 bei Fill-implizierenden Befehlen. viewportBonus 0,3. Begrenzung auf 6 bis 50 Elemente."
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
        notes="validatePlannedActions aus Codeausschnitt 5.9. Map von Selektoren auf Elemente. coerceType korrigiert fill auf select und lehnt nicht fuellbare Elemente ab."
      />

      <SectionHeaderSlide number="04" title="Ablauf und Robustheit" />

      <BulletSlide
        title="Ablauf und Robustheit"
        columns={2}
        bullets={[
          {
            text: 'Ablauf in der Praxis',
            subitems: [
              'Hotkey Ctrl+Shift+Space startet Aufnahme',
              'Parallele ASR und DOM-Extraktion',
              'Status recording bis ready',
            ],
          },
          {
            text: 'Truncate at First DOM Change (5.10)',
            subitems: [
              'click als einzige DOM-aendernde Aktion',
              'Plan danach abgeschnitten',
              'DOM neu eingelesen verhindert blinde Klicks',
            ],
          },
          {
            text: 'DOM-Stabilisierung (5.16)',
            subitems: [
              'MutationObserver auf document.body',
              '250 ms Leerlauf 1500 ms Hard-Timeout',
            ],
          },
          {
            text: 'Konvergenzsicherungen',
            subitems: [
              'Generation-Zaehler verwirft veraltete Ergebnisse',
              'planSignature bricht bei Wiederholung ab',
              'MAX_REPLAN 5 Watchdog 60 s AbortController',
            ],
          },
        ]}
        notes="Ablauf mit Hotkey parallele ASR. Truncate bei erster DOM-Aenderung. DOM-Stabilisierung mit MutationObserver. Konvergenzsicherungen Generation-Zaehler planSignature Watchdog."
      />

      <ImageSlide
        title="Ablaufdiagramm"
        subtitle="Abbildungen 2 und 3 der BA"
        imageSrc="/fig2.png"
        imageAlt="Abbildung 2 Interaktionskonzept"
        notes="Abbildungen 2 und 3 aus der BA. Aktivitaetsdiagramm und Sequenzdiagramm des Interaktionskonzepts."
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
        notes="buildFallback aus Codeausschnitt 5.13. Nur bei commandImpliesFill. Extrahiert Fill-Wert per RegEx. Oberstes fuellbares Eingabefeld plus Submit-Button. Kein LLM-Aufruf."
      />

      <BulletSlide
        title="Regression und Fallback-Statistik"
        columns={2}
        bullets={[
          {
            text: 'Regression aus 5.3.6',
            subitems: [
              'fillableBonus 0,5 auf 1000 angehoben',
              'Keyword-Anker vor echtem Eingabefeld gewaehlt',
              'Zwei verschränkte Fehlermodi',
            ],
          },
          {
            text: 'Dreistufige Gegenmaßnahme',
            subitems: [
              '1 buildFallback deterministisch',
              '2 fillableBonus auf 1000',
              '3 Systemprompt geschärft',
            ],
          },
          {
            text: 'Telemetrie-Effekt',
            subitems: [
              'Replan-Iterationen bis 5 auf 1',
              'Pipeline-Dauer 156 s auf 118 s',
              'Im TP1-Test Fallback nie ausgeloest',
            ],
          },
          {
            text: 'DOM-Interaktion',
            subitems: [
              'buildSelector id name data-lava-idx',
              'setNativeValue Prototyp-Deskriptor',
              'InputEvent plus change fuer React Vue Svelte',
            ],
          },
        ]}
        notes="Regression fillableBonus 0,5 auf 1000. Dreistufige Gegenmaßnahme. Telemetrie-Effekt 156 auf 118 Sekunden aus Entwicklungs-Regression nicht aus TP1-Test. DOM-Interaktion mit setNativeValue."
      />

      <SectionHeaderSlide number="05" title="Evaluation" />

      <KeyValueSlide
        title="Nutzertest Profil TP1"
        subtitle="Formativer Einzelfalltest nach Nielsen 2000"
        items={[
          { label: 'Diagnose', value: 'Netzhautdegeneration 5 bis 10 cm Abstand' },
          { label: 'Assistive Technologien', value: 'Bildschirmlupe 500 bis 800 Prozent plus Screenreader' },
          { label: 'Hardware', value: 'Windows 11 i5-1245U 16 GB Chrome 150' },
          { label: 'Eingabe', value: 'Hotkey Ctrl+Shift+Space' },
          { label: 'Bewertung', value: 'Dreistufig erfolgreich teilweise fehlgeschlagen' },
          { label: 'Aufgaben', value: 'Zeiterfassung Google Confluence Amazon' },
        ]}
        notes="TP1 Netzhautdegeneration Bildschirmlupe 500 bis 800 Prozent. Formativer Einzelfalltest nach Nielsen. Triangulation Beobachtung Interview Telemetrie."
      />

      <TableSlide
        title="Aufgabenergebnisse (Tabelle 12)"
        headers={['Aufgabe', 'Ergebnis', 'Versuche', 'Beobachtung']}
        rows={[
          { cells: ['Google-Suche', 'Erfolgreich', '1', 'Klick auf Bilder'] },
          { cells: ['Confluence-Login', 'Teilweise', '3', 'Suche statt Login'], isFragment: true },
          { cells: ['Amazon', 'Teilweise', '2', 'Produkt statt Such-Button'], isFragment: true },
          { cells: ['Zeiterfassung', 'Fehlgeschlagen', '3', 'Endlosschleife Modell-Panic'], isFragment: true },
        ]}
      />

      <TableSlide
        title="Telemetrie subjektiv vs. gemessen"
        headers={['Aufgabe', 'Geschätzt', 'Gemessen', 'NFA-11']}
        rows={[
          { cells: ['Zeiterfassung', 'ca. 10 s', '74,4 s / 72,2 s', 'Nein'] },
          { cells: ['Google', 'nicht beziffert', '70,4 s / 13,4 s', 'Nein'], isFragment: true },
          { cells: ['Confluence', 'ca. 10 s', '17,2 bis 20,7 s', 'Nein'], isFragment: true },
          { cells: ['Amazon', 'über 10 s', '73,8 s / 78,3 s', 'Nein'], isFragment: true },
        ]}
      />

      <KeyValueSlide
        title="Kernergebnisse und Interview"
        items={[
          { label: 'Spanne', value: '13,4 bis 78,3 s NFA-11 nie eingehalten' },
          { label: 'Replan-Iterationen', value: 'meist 1 vereinzelt 2 Cap nicht erreicht' },
          { label: 'Fallback', value: 'Nie ausgeloest Fehler in Planqualitaet' },
          { label: 'Subjektive Wahrnehmung', value: 'TP1 schätzt ca. 10 s kognitive Entlastung' },
          { label: 'Bedienbarkeit', value: '4 von 5 Feedback 5 von 5' },
          { label: 'Vertrauen', value: '2 von 5 Erleichterung 3 von 5' },
        ]}
        notes="Kernergebnisse. Spanne 13,4 bis 78,3 Sekunden. Fallback nie ausgeloest. Subjektive Wahrnehmung deutlich kürzer. Interview Bedienbarkeit 4 Feedback 5 Vertrauen 2."
      />

      <BulletSlide
        title="Qualitative Erkenntnisse TP1"
        columns={2}
        bullets={[
          {
            text: 'Positiv',
            subitems: [
              'Transkript-Darstellung als Rueckmeldung',
              'Status-Sichtbarkeit ueber Farbgebung',
              'Kognitive Entlastung durch Sprachsteuerung',
            ],
          },
          {
            text: 'Kritisch',
            subitems: [
              'Dauer zu lang Aktionsplanung dominiert',
              'Vertrauen in Aktionen niedrig',
              'Nutzen wenn Qualitaet ausreicht',
            ],
          },
          {
            text: 'TP1-Vorschlaege',
            subitems: [
              'Automatisches Aufnahmebeenden',
              'Adressdaten mit Zahlen-Buchstaben-Trennung',
            ],
          },
          {
            text: 'Beobachtungen',
            subitems: [
              'Berechtigungsseite versehentlich abgelehnt',
              'Laptop underpowered',
              'Keine sehbeeinträchtigungs-spezifischen UX-Probleme',
            ],
          },
        ]}
        notes="Qualitative Erkenntnisse. Positiv Transkript Status Farbgebung. Kritisch Dauer Vertrauen. Vorschlaege automatisches Aufnahmebeenden. Beobachtungen Berechtigungsseite underpowered."
      />

      <SectionHeaderSlide number="06" title="Diskussion und Fazit" />

      <ComparisonSlide
        title="Erfolge und Herausforderungen"
        items={[
          {
            title: 'Architektur und Datenschutz erfuellt',
            description: 'NFA-1 100 Prozent lokal und MV3-Konformitaet erreicht. GBNF verhindert JSON-Syntax-Fehler. Deterministischer Fallback faengt Modellfehler ab 156 auf 118 s.',
          },
          {
            title: 'Performanz und Modellgrenzen',
            description: '13,4 bis 78,3 s pro Schritt NFA-11 verfehlt. 1,5B-Modell erzeugt Selektor-Halluzinationen. Fehlende Vision-Tokens visuelle Ueberdeckungen unsichtbar. Vertrauen 2 von 5.',
          },
        ]}
      />

      <TakeawaysSlide
        title="Lessons Learned"
        items={[
          {
            title: 'Fehlende Vision-Tokens',
            description: 'Reines Text-DOM liefert keine Information ueber visuelle Ueberdeckungen. Loesung lokale VLM sobald WebGPU Speicher bietet.',
          },
          {
            title: 'Modellgroesse 1,5B Parameter',
            description: 'Selektor-Halluzinationen durch Fallback geloest. Semantische Fehlwahl unter mehreren validen Kandidaten bleibt bestehen.',
          },
          {
            title: 'Inferenz-Latenz CPU WASM',
            description: 'Ueber 1 Minute pro komplexem Schritt. Typ-A durch GBNF geloest Typ-C durch Truncation plus DOM-Stabilisierung.',
          },
        ]}
      />

      <KeyValueSlide
        title="Fazit"
        subtitle="Forschungsfrage bejaht Machbarkeit bewiesen"
        items={[
          { label: 'Proof-of-Concept', value: 'Sprachsteuerung ohne Cloud-Zwang realisierbar' },
          { label: 'Kombination zwingend', value: 'Kleine In-Browser-KI plus regelbasierte Fallbacks' },
          { label: 'Praxistauglichkeit', value: 'Prototypenstadium 1 von 4 erfolgreich Vertrauen 2 von 5' },
          { label: 'Beitrag', value: 'Erste Loesung lokal barrierearm browserbasiert sprachgesteuert' },
        ]}
        notes="Fazit Forschungsfrage bejaht. Proof-of-Concept gezeigt. Kombination aus In-Browser-KI und Fallbacks zwingend. Prototypenstadium nicht final geloest."
      />

      <BulletSlide
        title="Ausblick"
        columns={2}
        bullets={[
          {
            text: 'WebGPU-Integration',
            subitems: [
              'Ablösung WASM CPU Engpass',
              'Direkte GPU-Beschleunigung im Browser',
              'Speedup Faktor 5 bis 10 Prognose',
            ],
          },
          {
            text: 'Lokale VLM',
            subitems: [
              'Multimodale Modelle fuer Screenshots',
              'Erkennt visuelle Ueberdeckungen',
              'Setzt WebGPU-Speicher voraus',
            ],
          },
          {
            text: 'Standardisierung',
            subitems: [
              'Chrome Built-in AI Prompt API',
              'Native In-Browser-LLM-Schnittstellen',
            ],
          },
          {
            text: 'Open-Source und Tests',
            subitems: [
              'Weiterentwicklung auf GitHub',
              'Aufnahmebeenden Zahlen-Transkription',
              'Groessere Testreihe mit Zielgruppe',
            ],
          },
        ]}
        notes="Ausblick WebGPU VLM Standardisierung Open-Source. Speedup Faktor 5 bis 10 Prognose. Groessere Testreihe mit mehr Teilnehmern der Zielgruppe."
      />

      <ClosingSlide
        title="Vielen Dank."
        message="Gibt es Fragen?"
        author="Theo Leuthardt"
        email="theo.leuthardt@bdr.de"
        company="Bundesdruckerei GmbH"
      />
    </>
  );
}