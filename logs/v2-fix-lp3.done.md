# lp3 — QA taisymų atlikimas (PERDARYTI, daugiausia taisymų → ištaisyta)

Šaltinis: `qa/v2-patikra-batch1.md`, skyrius „lp3 — „Randu“ / Nuotraukų tinklelis → PERDARYTI“ ir
skyrius „Kryžminė patikra tarp lp1/lp2/lp3“.

## 1. Draudžiami ir kolizuojantys CSS klasių vardai → `lp3-` prefiksas
Failai: `index.html`, `assets/style.css`, `assets/app.js`.

Pervadinta 13 klasių vardų (visos naudojimo vietos atnaujintos visuose trijuose failuose vienu metu,
per tikslų regex su token'o riba, kad nepaliestų giminingų, bet skirtingų klasių):

- 6 draudžiami §4 vardai: `.container`→`.lp3-container`, `.hero`→`.lp3-hero`, `.btn`→`.lp3-btn`,
  `.btn-primary`→`.lp3-btn-primary`, `.section`→`.lp3-section`, `.footer-links`→`.lp3-footer-links`.
- Kryžminė kolizija su lp2 (nurodyta QA kryžminėje patikroje): `.faq-list`→`.lp3-faq-list`,
  `.field-error`→`.lp3-field-error`, `.form-status`→`.lp3-form-status`.
- Papildomai patikrinta prieš `config/draudziamu-zodziu-sarasas.md` §4 ir pervadinta dėl bendrinio/
  rizikingo pavadinimo bei aktyvaus JS naudojimo: `.avatar-card`→`.lp3-avatar-card` (`app.js:28`),
  `.chip`→`.lp3-chip` (`app.js:45,51`), `.field`→`.lp3-field` (`app.js:70`), ir `.avatar-meta`→
  `.lp3-avatar-meta` (susijusi su p.3 kontrasto taisymu žemiau).

NEKEISTA (nebuvo draudžiamuose sąrašuose, nekolizuoja, todėl palikta, kaip ir nurodyta neperdaryti
daugiau nei reikia): `.btn-ghost`, `.btn-sm`, `.section-head`, `.section-alt`, `.hero-lede`,
`.hero-actions`, `.hero-trust`, `.faq-item`, `.faq-icon`, `.avatar-overlay`, `.consent-field`,
`has-error`, `is-visible`, CSS kintamasis `--container` (nepaliestas — tai ne klasė).

**Filtrų JS logika nepaliesta** — `app.js` diff prieš/po rodo TIK klasių vardų pakeitimus
(`.avatar-card`→`.lp3-avatar-card`, `.chip`→`.lp3-chip`, `.field`→`.lp3-field`,
`"form-status ..."`→`"lp3-form-status ..."`); amžiaus/miesto filtravimo, formos validacijos ir
gimimo metų generavimo eilutės — identiškos.

Patvirtinimas grep'u — draudžiamų vardų kaip atskirų token'ų (ne kaip dalies kitų vardų,
pvz. `hero-lede`, `--container`, `btn-ghost`) faile nebeliko:
```
grep -nE 'class="[^"]*\b(container|hero|btn|btn-primary|section|footer-links)\b[^"]*"' index.html
  → 0 atitikmenų be lp3- prefikso
grep -nE '\.(container|hero|btn|section|footer-links)\b' assets/style.css
  → 0 atitikmenų be lp3- prefikso arba --container kintamojo
```

## 2. `index.html:306` antraštė
„Kaip tai veikia“ → **„Registracija, naršymas, pirmas pokalbis“** — trijų daiktavardžių forma,
sąmoningai NE „Nuo X iki Y“ konstrukcija (tokią jau naudoja lp1 „Nuo žymeklio iki pokalbio“ ir lp2
„Nuo kortelės iki pokalbio“), ir NE pažodinė „Kaip tai veikia“ (draudžiamas §3 sąrašo įrašas).
Paantraštės pastraipa (body tekstas, ne antraštė) nekeista.

## 3. WCAG kontrasto pataisymas — `.lp3-avatar-meta` (buvęs `.avatar-meta`, `style.css:379-387`)
Gradientas `linear-gradient(to top, rgba(24,24,27,0.72), rgba(24,24,27,0))` pakeistas į vientisą
foną `rgba(24,24,27,0.82)` po visu meta bloku (jis jau yra fiksuoto aukščio blokelis apatiniame
kortelės krašte, ne per visą kortelę — gradientas buvo vienintelė problema).

Perskaičiuotas kontrastas (WCAG formulė, baltas tekstas ant sudėtos spalvos virš abiejų naudojamų
kortelių fonų):
- ant `#FAFAF9`: **10.23:1**
- ant `#F4F4F5`: **10.40:1**

Abu gerokai viršija reikalaujamą ≥4.5:1 (ir buvusį geriausią 7,3:1 apatiniame krašte).

## 4. Vizualinio turinio išplėtimas — 4 naujos duotone figūros
Anksčiau „Kaip tai veikia“/„Registracija“ sekcijose buvo 0 vizualo. Pridėta:
- 3 naujos unikalios duotone SVG kompozicijos (72×72, ta pati sistema: `#7C3AED`/`#18181B` ant
  `#F4F4F5`/`#FAFAF9`, `viewBox 0 0 96 96`) — po vienai prie kiekvieno iš 3 žingsnių sekcijoje
  „Registracija, naršymas, pirmas pokalbis“ (nauja `.step-visual` klasė, `style.css`).
- 1 papildoma kompozicija registracijos sekcijos antraštėje („Sukurti anketą“), virš `<h2>`.
Visos 4 kompozicijos yra naujos, nesikartoja su jokia iš 16 tinklelio kortelių.

## 5. `index.html`, script tag
`<script src="assets/app.js">` → `<script src="assets/app.js" defer>` (nuoseklumui su lp1/lp2).

## Kas NEKEISTA (patikrinta)
- Filtrų JS logika (amžius/miestas), formos validacija, gimimo metų generavimas — nepaliesta
  (diff `app.js` rodo tik klasių pervadinimus).
- Paletė, šriftai, tinklelio 2/3/4 stulpelių struktūra — nekeista.
- Tracking: faile nėra realaus GTM/Meta Pixel/OpenAI pixel kodo — tik du
  `<!-- tracking: lead_form_submit -->` / `<!-- tracking: lead_form_success -->` komentarai, abu
  paliesti nebuvo (patikrinta grep'u prieš ir po).
- Kiti `variacijosv2/lpN*` katalogai neskaityti.
- Atsarginės kopijos prieš keičiant: `/private/tmp/.../scratchpad/lp3-backup/`
  (`index.html`, `style.css`, `app.js`).

## Patikrinta
- `diff` prieš/po visų 3 failų peržiūrėtas pilnai — pakeitė tik aukščiau išvardintus punktus,
  jokių netikėtų šalutinių pakeitimų.
- Grep patvirtino, kad nė vienas iš 6 draudžiamų ir 3 kolizuojančių klasių vardų nebeliko be
  `lp3-` prefikso.
- Kontrasto skaičiavimas atliktas programiškai (Python, WCAG 2.1 santykinio ryškumo formulė).
