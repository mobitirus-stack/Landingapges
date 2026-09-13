# v2 partija 1 (lp1, lp2, lp3) — PAKARTOTINĖ patikra po taisymo ciklo

Data: 2026-09-13. Vertintojas: tas pats nepriklausomas QA agentas (Opus, aukštas effort).
Output: `qa/v2-patikra-batch1.md` → naujas skyrius „Pakartotinė patikra po taisymo (2026-09-13)“
(§P.0–§P.6, pridėta apačioje; originalios 207 eilutės `diff`'u patvirtintos kaip nepakitusios).

## VERDIKTAS

| Variantas | QA1 | Dabar |
|---|---|---|
| lp1 | PERDARYTI (2 pastabos) | **PRIIMTA** |
| lp2 | PERDARYTI (4 pastabos) | **PRIIMTA** |
| lp3 | PERDARYTI (4 pastabos) | **PRIIMTA** |

**PARTIJA PRIIMTA. lp4–lp6 galima pradėti.**
Lieka 1 nebaigtas kryžminės patikros punktas (vienos eilutės lp1 antraštė) — nestabdo kitos partijos,
naujo audito nereikia.

---

## Checklistas

### 1. Ar anksčiau nurodyti punktai realiai ištaisyti

- [x] **lp1 §1 avatarai >1 sekcijoje** — 2 sekcijos (`.lp1-discovery` 22 vnt. + `#registracija` 6 vnt.).
      Suskaičiuota programiškai skaidant HTML per `<section>`, ne pagal ataskaitą.
- [x] **lp1 §2 reduced-motion bug** — **išmatuota naršyklėje**, ne perskaityta iš CSS:
      senas CSS ties `prefers-reduced-motion:reduce` stumdavo online tašką 102/186 → **110/194 px**
      (8px abiem ašim); dabartinis CSS — 102/186 abiejuose režimuose. Klaida buvo reali, dabar jos nėra.
- [x] **lp2 §1 vizualinė masė** — avatarai 3 sekcijose (hero + steps 3×112px + gallery 10).
- [x] **lp2 §2 statinė pirma kortelė** — renderis su `--disable-javascript`: kortelė matoma
      (avataras + „Eglė, 27“ + „Vilnius“), ne tuščias rėmas.
- [x] **lp2 §3 og:image PNG** — `og:image` rodo į `.png` + `og:image:width/height` 1200/630.
- [x] **lp2 §4 reduced-motion scroll** — `@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}`.
- [x] **lp3 §1 draudžiami klasių vardai** — programiškai ištraukti VISI `class="…"` ir visi `.klasė`
      selektoriai, sutikrinti su §4 sąrašu (14 vardų): **0 sutapimų** HTML'e ir CSS'e. Pervadinta 13 vardų.
- [x] **lp3 §2 antraštė** — „Kaip tai veikia“ → „Registracija, naršymas, pirmas pokalbis“.
- [x] **lp3 §3 kontrastas** — perskaičiuota iš hex: 2,46:1 / 2,35:1 → **10,34:1 / 10,18:1**.
- [x] **lp3 §4 papildomos figūros** — 3 sekcijos su vizualu (`#tinklelis` 16, `#kaip-veikia` 3,
      `#registracija` 1). Ekrano nuotraukos patvirtina.
- [x] **lp3 smulkmena** — `<script src="assets/app.js" defer>`.

### 2. Ar taisymai neįvedė naujų problemų

- [x] **`diff` prieš taisymo agentų atsargines kopijas** (`scratchpad/lp1|lp2|lp3-backup/`) peržiūrėtas
      pilnai visiems 3 variantams × 3 failams. Pakeitimai = tiksliai tai, kas deklaruota, nieko daugiau.
- [x] **lp2 `app.js` diff — tuščias** (patvirtinta pačiam, ne pagal ataskaitą). Swipe mechanika nepaliesta.
- [x] **lp3 `app.js` diff — tik klasių vardų keitimai**; filtravimo, validacijos ir gimimo metų
      generavimo logika eilutė į eilutę identiška.
- [x] **HTML/CSS balansas** — 0 neuždarytų žymų visuose trijuose; 1× `<h1>`; 0 dublikuotų `id`.
- [x] **Klasių našlaičiai po lp3 pervadinimo** — abipusė patikra: 0 HTML klasių be CSS selektoriaus;
      vienintelė nenaudojama CSS klasė `visually-hidden` buvo ir anksčiau.
- [x] **Kryžminiai klasių sutapimai** — lp1∩lp2 = 0, lp1∩lp3 = 0, lp2∩lp3 = 0.
- [x] **CSS specifiškumo konfliktas lp2** — `.step-avatar` (112px) vs `.profile-card .avatar` (56%):
      pastarasis descendant selektorius, veikia tik dėkle. Konflikto nėra.
- [x] **lp2 kortelės dublikavimas** — nėra: `app.js:38` naudoja `stage.innerHTML = html` (perrašo).
      `<symbol id="lowpoly-bust">` (`:62`) yra prieš kortelę (`:116`) — `<use>` išsisprendžia.
- [x] **Kontrastas perskaičiuotas iš hex VISAM naujam turiniui** (ne tik lp3):
      lp1 presence `#A9C7B8`/`#16241C` 8,86:1, `#5EEAD4`/`#16241C` 10,89:1;
      lp2 `.step-tag` `#BE123C`/`#FFFFFF` 6,29:1; lp3 meta 10,34:1 / 10,18:1. Visos poros ≥4,5:1.
- [x] **Horizontalus scroll — realioje naršyklėje** (CDP, tikras viewport 360/768/1280/1440):
      `scrollWidth == clientWidth` visuose 12 derinių; neapgaubtų `overflow-x` elementų sąrašas tuščias.
- [x] **Draudžiami žodžiai/frazės** — pakartotinai nuskenuota §1–§5, §9: 0 sutapimų.
      §7.1 draudžiami hex — 0. Bricolage Grotesque / Archivo — 0.
- [x] **4-gramų kryžminė analizė** — likę sutapimai (18/14/8) yra tik 18+ teisinė formuluotė,
      poraštės teisinės nuorodos, formos laukų pavadinimai ir miestų sąrašas. **Nė vienas neatsirado
      per šį taisymo ciklą** (naujo teksto buvo tik 2 eilutės: lp1 presence etiketė, lp3 h2).
- [x] **`aria-hidden` ant naujų dekoratyvių SVG** — visuose (lp1 presence `<ul>`, lp2 step avatarai,
      lp3 step figūros). `:focus-visible` yra visuose trijuose.
- [x] **Trackingo stekas** — visi `<!-- tracking: … -->` žymekliai savo vietose ir nepakitę;
      realaus GTM / Meta Pixel / OpenAI pixel kodo ar ID šiuose failuose nėra ir nebuvo.
      **Ši patikra buvo tik skaitymo — produkciniai failai nekeisti.**

### 3. Ar neįtrauktas joks realus/atsisiųstas vaizdas

- [x] `<img` — 0; `url(http…)` — 0; `base64` — 0; `data:image/*` — 1 (lp2 inline SVG favicon, leistina).
- [x] **`og-image.png` kilmė patikrinta atskirai** (vienintelis rastrinis failas v2):
      - PNG chunk'ai: tik `IHDR`+`IDAT`+`IEND` — **jokių `tEXt`/`iTXt`/EXIF metaduomenų**;
      - `xattr`: `com.apple.quarantine …;Chrome;` **be atsisiuntimo įvykio UUID** — taip macOS žymi
        bet kurį Chrome įrašytą failą, įskaitant headless screenshot;
      - **turinys peržiūrėtas ir pažodžiui atitinka lokalų `og-image.svg`** (tas pats 15 poligonų
        low-poly biustas, ta pati piliulė, tas pats telefono korpusas, tie patys tekstai);
      - jokių fotografijos požymių — vientisos plokštumos, aštrios vektorinės briaunos.
      **Išvada: lokalus SVG rasterizavimas, ne atsisiųstas vaizdas.** Kliento riba išlaikyta 100 %.

### 4. Galutinis verdiktas

- [x] lp1 — **PRIIMTA**
- [x] lp2 — **PRIIMTA**
- [x] lp3 — **PRIIMTA**
- [x] Partija — **PRIIMTA**, lp4–lp6 galima pradėti.

---

## Vienintelis atviras punktas (neblokuoja)

**Ta pati antraštės konstrukcija lp1↔lp2 — §6 pažeidimas.**
`lp1/index.html:219` „Nuo žymeklio iki pokalbio“ ir `lp2/index.html:139` „Nuo kortelės iki pokalbio“.
QA1 nurodė „vienas iš dviejų turi būti perrašytas“, bet punktas buvo kryžminės patikros, o ne varianto
skyriuje, todėl nė vienas taisymo agentas jo nepaėmė.
**Sprendimas:** keisti lp1 (lp2 „kortelė“ yra jos krypties šerdis), pvz. „Trys žingsniai žemėlapyje“.
Vienos eilutės keitimas, pakartotinio audito nereikia.

## Rekomendacijos prieš lp4–lp6 (į `promptai/06-statyba-v2.md`)

1. Įrašyti mechaniškai tikrinamą reikalavimą: **krypties vizualinė sistema privalo pasirodyti bent
   3 skirtingose `<section>`, iš kurių bent viena — žemiau puslapio vidurio; forma ir bent viena
   pasitikėjimo sekcija negali būti grynas tekstas.** (Jei ši taisyklė būtų buvusi prompte, viso šio
   taisymo ciklo nebūtų reikėję.)
2. Įrašyti **`og:image` reikalavimą**: 1200×630 PNG, sugeneruotas lokaliai iš to paties varianto SVG
   (lp2 yra veikiantis pavyzdys: SVG → Chrome headless screenshot → PNG, be interneto).
3. Įrašyti **privalomą `lpN-` klasių prefiksą** — vienu ypu išsprendžia ir §4 draudžiamus vardus,
   ir kryžmines kolizijas tarp variantų.

## Metodika (ką darė šis agentas)

Skaitymo operacijos + laikinos instrumentuotos kopijos scratchpad'e. **Produkciniai failai nekeisti.**
- `diff` prieš `scratchpad/lpN-backup/` — visiems 9 failams.
- Kontrastas: Python, WCAG 2.1 santykinio ryškumo formulė, alfa sudėta su tikruoju fonu.
- Klasės/žodžiai/n-gramos: Python regex per HTML+CSS+JS.
- **Realioje naršyklėje:** Chrome headless + CDP (`Emulation.setDeviceMetricsOverride`,
  `setEmulatedMedia`, `Page.captureScreenshot`, `--disable-javascript`) — layout 4 plotuose,
  reduced-motion palyginimas senas/naujas CSS, no-JS renderis, ekrano nuotraukos vizualiam patvirtinimui.
- `og-image.png`: PNG chunk parseris, `xattr`, vizuali peržiūra prieš šaltinio SVG.
