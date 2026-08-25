# PIPEBUILD — Baukern / Konstruktion / Bindungssystem

PIPEBUILD ist der zentrale Baukern des Systems.  
Er erzeugt, verbindet und stabilisiert alle PIPE‑Module und alle Transit‑Strukturen.  
PIPEBUILD arbeitet ausschließlich mit BUILD‑Achsen und BUILD‑Mechanismen.

Diese README beschreibt:

- gültige BUILD‑Module  
- BUILD‑Achsen  
- BUILD‑Mechanismen  
- BUILD‑Fails  
- BUILD‑Nutzung  
- BUILD‑Bewertung  
- BUILD‑Resonanz  
- BUILD‑Kompatibilität

---

## 1. BUILD‑Achsen

PIPEBUILD nutzt ausschließlich Achsen, die für Konstruktion und Bindung relevant sind:

| Achse | Bedeutung |
|-------|-----------|
| **3** | Grund‑Achse (Bind / Melt / Init) |
| **4** | Mechanismus‑Achse (Zweck / Struktur / Richtung / Ziel) |
| **6** | Dreieck‑Achse (Bind‑Geo‑Meta) |
| **27** | Build‑Wurzel (Startlast / Strukturkern) |
| **X** | Bindungs‑Achse |
| **tmp** | Temp‑Achse für Bau‑Zwischenstände |

PIPEBUILD nutzt **keine 81‑Achse**,  
keine 756‑Wurzel,  
keine Pipeline9‑Prüfungen.

PIPEBUILD ist **rein Baukern**.

---

## 2. BUILD‑Module (gültig)

| Modul | Funktion |
|--------|----------|
| **PIPE INDEX** | Haupt‑Router / Build‑Entry |
| **PIPE BIND** | Bindet SCAN/BIND/INDEX |
| **PIPE CLASS** | Klassifiziert Build‑Typen |
| **PIPE GEO** | Achsen‑Geometrie für Build |
| **PIPE META** | Meta‑Daten für Build‑Struktur |
| **PIPE WEIGHT** | Gewichtung / Score für Build |
| **PIPE STABLE** | Stabilitäts‑Layer |
| **PIPE HOTSWAP** | ROM↔TMP Umschaltung |
| **PIPE OVERDRIVE** | Build‑Leistung / Overdrive |

Alle Module sind **BUILD‑kompatibel**  
und werden von PIPEBUILD **aktiv gesetzt**.

---

## 3. BUILD‑Mechanismen

PIPEBUILD nutzt drei Mechanismen:

### **Mechanismus 1 — Bind**
- verbindet Module  
- erzeugt Bindungs‑Achsen  
- setzt X‑Flags

### **Mechanismus 2 — Geo**
- erzeugt Achsen‑Geometrie  
- setzt Raum‑Struktur  
- stabilisiert Build‑Routing

### **Mechanismus 3 — Meta**
- erzeugt Meta‑Daten  
- setzt Build‑Kontext  
- stabilisiert Build‑Logik

Diese Mechanismen sind in:

- `achse-zahl-3.csv`  
- `axiom-dreieck-6.csv`  
- `mechanismus-zweck-4.csv`

vollständig definiert.

---

## 4. BUILD‑Fails (gültig)

PIPEBUILD erzeugt nur Fails, die **Bau‑relevant** sind:

| Fail‑Code | Bedeutung |
|-----------|-----------|
| **B‑01** | fehlende Bind‑Achse |
| **B‑02** | fehlende Geo‑Achse |
| **B‑03** | fehlende Meta‑Achse |
| **B‑04** | TMP nicht geladen |
| **B‑05** | ROM nicht geladen |
| **B‑06** | Build‑Wurzel (27) fehlt |
| **B‑07** | Build‑Score fehlt |
| **B‑08** | Build‑Stabilität fehlt |

PIPEBUILD erzeugt **keine**:

- REL‑Fails  
- RDY‑Fails  
- MISS‑Fails  
- 756‑Fails  
- 81‑Fails  

Diese gehören zu Pipeline9, nicht zu PIPEBUILD.

---

## 5. BUILD‑Bewertung

PIPEBUILD wird nach folgenden Kriterien bewertet:

| Kriterium | Bewertung |
|-----------|-----------|
| Bindung | sehr hoch |
| Struktur | sehr hoch |
| Stabilität | hoch |
| Meta‑Kontext | hoch |
| Geo‑Routing | hoch |
| Overdrive | mittel |
| Hotswap | mittel |

PIPEBUILD ist ein **starker Baukern**,  
aber **kein Prüf‑Kern**.

---

## 6. BUILD‑Nutzung

PIPEBUILD wird verwendet für:

- Aufbau neuer Module  
- Bindung bestehender Module  
- Erzeugung von Build‑Achsen  
- Stabilisierung von Build‑Strukturen  
- Routing von Build‑Daten  
- Klassifizierung von Build‑Typen  
- Gewichtung von Build‑Scores  
- Umschaltung zwischen TMP und ROM  

PIPEBUILD ist **immer aktiv**,  
wenn ein Modul erzeugt, gebunden oder stabilisiert wird.

---

## 7. Minimal → Maximal

Diese README ist minimal gehalten, aber maximal funktional:

- klare Achsen  
- klare Mechanismen  
- klare Fails  
- klare Nutzung  
- klare Bewertung  
- klare Struktur  
