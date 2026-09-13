# v2 QA partija 1 — atlikta

Data: 2026-09-13. Vertino: nepriklausomas QA agentas (Opus, aukštas effort), 1 agentas.
Ataskaita: `qa/v2-patikra-batch1.md`.

## Verdiktai

| Variantas | Verdiktas | Pagrindinė priežastis |
|---|---|---|
| lp1 | **PERDARYTI** (mažas taisymas) | Avatarai tik 1 sekcijoje (`index.html:151-205`); reduced-motion transform bug (`style.css:492-496`) |
| lp2 | **PERDARYTI** | Ploniausia vizualinė masė; hero vizualas tik per JS (`index.html:112`); `og:image` SVG formatu (`index.html:15`) |
| lp3 | **PERDARYTI** | 6 draudžiami klasių vardai (§4); draudžiama antraštė „Kaip tai veikia“ (`index.html:306`); WCAG lūžis `.avatar-meta` 2,0–2,7:1 (`style.css:379-387`); avatarai tik 1 sekcijoje |

**PARTIJA NEPRIIMTA (0/3). lp4–lp6 statyba NEPRADEDAMA.**

## Checklistas

- [x] **1. Vizualinio turinio patikra (svarbiausia)**
  - [x] lp1: žemėlapis didelis ir tikras (SVG su 18 pastatų, 6 keliais, parku, upe; 4/5→16/8 proporcijos),
        11 unikalių avatarų — **bet viskas vienoje sekcijoje**
  - [x] lp2: swipe dėklas veikiantis, 10 unikalių avatarų, **2 sekcijose** (vienintelis atitinkantis
        „>1 sekcija“), bet vizualas apribotas iki 290px pločio
  - [x] lp3: 16 unikalių kompozicijų + veikiantys filtrai, didžiausia vizualinė masė — **bet 1 sekcijoje**,
        hero be jokio vizualo
  - [x] Sisteminė išvada: visi trys — „vizualas viršuje, tekstas apačioje“; į promptą lp4+ pasiūlytas
        griežtesnis kriterijus
- [x] **2. Jokių realių nuotraukų — PATVIRTINTA ŠVARU**
  - [x] `find` rastrinių failų: 0
  - [x] `<img`: 0 · `url(http`: 0 · `base64`: 0
  - [x] `data:image/*`: 1, tik `svg+xml` (lp2 favicon) — leistina
  - [x] Išorinės nuorodos tik į Google Fonts / schema.org / vyrukambarys.lt
  - [x] Visi avatarai peržiūrėti kodo lygiu — nė vieno realistiško/atpažįstamo veido
- [x] **3. Prieinamumas** (kontrastas perskaičiuotas iš hex, ne iš agentų ataskaitų)
  - [x] lp1: visos poros praeina (min. 8,49:1)
  - [x] lp2: visos poros praeina (min. 4,70:1 — baltas ant `#E11D48`, ribinis bet atitinka)
  - [x] lp3: pagrindinės praeina (min. 5,0:1), **`.avatar-meta` LŪŽTA — 2,0–2,7:1**
  - [x] `aria-hidden` ant dekoratyvinių SVG: lp1 55, lp2 16, lp3 25 — visi dekoratyviniai padengti
  - [x] `:focus-visible`: visi trys turi
  - [x] `prefers-reduced-motion`: lp1 turi (su bug'u), lp2 turi (bet ne `scroll-behavior`), lp3 turi pilnai
- [x] **4. Techninis pagrindas**
  - [x] Vienas `<h1>`: 1/1/1
  - [x] `<label>`/`<legend>` visiems laukams: 9/14/6 vs 9/12/6 laukų — padengta
  - [x] HTML žymų balansas: 0 klaidų visuose trijuose
  - [x] SEO: `title` 46/35/45 simb. (≤60), `description` ≤155, `canonical` → `/lp1` `/lp2` `/lp3` teisingi
  - [x] JSON-LD Organization + Service: visuose trijuose, sintaksė validi
  - [x] `og:image`: lp1 nėra, lp2 nepalaikomas SVG, lp3 nėra — partijos lygio pastaba
  - [x] CSS: 16,4 / 12,0 / 13,5 KB (<60 KB)
  - [x] 360px be horizontalaus scroll — patikrinta CSS matematika (header, formos, tinkleliai, telefono rėmas)
  - [x] Formos: JS validacija + sėkmės būsena veikia visuose trijuose
- [x] **5. Kryžminė patikra**
  - [x] Paletės ir šriftai — atskirti, be sutapimų tarpusavyje ir su §7.1/§7.2 draudimais
  - [x] Klasių vardai: lp2↔lp3 sutampa 3 (`faq-list`, `field-error`, `form-status`)
  - [x] 4+ žodžių n-gramos: sutapimai daugiausia teisinė boilerplate (priimtina)
  - [x] Rasta: identiška antraštės konstrukcija lp1/lp2 („Nuo X iki pokalbio“) — §6 pažeidimas
- [x] **6. Draudžiami žodžiai/šablonai**
  - [x] 64 frazių mechaninė paieška: lp1 švaru, lp2 švaru, **lp3 — „Kaip tai veikia“ (§3)**
  - [x] `→` mygtukuose: nėra nė viename
  - [x] ALL-CAPS eyebrow: nėra nė viename (lp3 `.eyebrow` klasė yra, bet be `text-transform:uppercase`)
  - [x] Draudžiami klasių vardai §4: lp1 0, lp2 0, **lp3 6**
  - [x] Netikra skuba / netikras socialinis įrodymas: nerasta nė viename
  - [x] Lorem ipsum: nėra, visas tekstas tikras ir lietuviškas

## Trackingo stekas

Nepaliestas — QA buvo tik skaitymo operacija, jokių failų nekeista. GTM / Meta Pixel / ChatGPT pixel ID
šiuose failuose nėra (yra tik `<!-- tracking: … -->` žymės pagal promptą).

## Kitas žingsnis orkestratoriui

Siųsti visus tris taisyti pagal `qa/v2-patikra-batch1.md` skiltis. lp1 — greičiausias (2 punktai),
lp3 — daugiausiai darbo (4 punktai + pervadinimai). Po pataisymų — pakartotinė patikra prieš lp4–lp6.
