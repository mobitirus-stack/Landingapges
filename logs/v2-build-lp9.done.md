# v2 build lp9 — Nakties siluetas (App parduotuvės... ne, žr. pataisytą kryptį žemiau) — BAIGTA

**Pastaba dėl pavadinimo:** `config/vizualines-kryptys-v2.md` lp9 turi DVI aprašo versijas —
pirminę (eil. 89-98, „App parduotuvės stilius", SVG avatarai — v1 stiliaus 10-krypčių
sąrašas) ir vėlesnę viršstatančią (eil. 157-165, „Nakties siluetas", lp7-10 antros grupės
nuotrauka pagrįstas šablonas su `promptai/08-statyba-v2-foto.md`). Esami failai naudoja
ANTRĄJĄ (naujesnę, vėliau dokumente) kryptį — „Nakties siluetas" su hero nuotrauka — kas
sutampa su užduoties nurodymu patikrinti „hero nuotrauka pilname fone (moteris naktinio
miesto fone)". Tai teisinga interpretacija, ne klaida.

Šis darbas buvo **tęsinys**: ankstesnis agentas jau buvo sukūręs visus failus
(`index.html`, `assets/style.css`, `assets/app.js`, `assets/hero-portrait.jpg`), bet
nutrūko dėl API limito TIESIOG PRADĖJUS naršyklės patikrą, prieš baigdamas testus ir prieš
parašydamas `VARIANT.md`/šį `.done.md`. Šioje sesijoje failai **NEBUVO kuriami iš naujo** —
atlikta pilna patikra prieš `promptai/08-statyba-v2-foto.md`, `config/vizualines-kryptys-v2.md`
(§ lp9, abu aprašai), `config/draudziamu-zodziu-sarasas.md`. Rasta ir ištaisyta **1 reali
kontrasto klaida** (žr. žemiau) — visa kita atitiko iš pirmo karto.

## Output

- `variacijosv2/lp9/index.html` (8.0 KB) — nepakeistas
- `variacijosv2/lp9/assets/style.css` (8.9 KB) — **1 eilutė pakeista** (`--lp9-text-faint`
  nepermatomumas 0.46 → 0.58, kontrasto taisymas)
- `variacijosv2/lp9/assets/app.js` (2.2 KB) — nepakeistas
- `variacijosv2/lp9/assets/hero-portrait.jpg` (172 KB, 1024×1536 JPEG) — nepakeistas
- `variacijosv2/lp9/VARIANT.md` — naujai parašytas šioje sesijoje
- `logs/v2-build-lp9.done.md` — šis failas

Bendras katalogo svoris: ~196 KB — gerokai po 1.5 MB ribos. CSS 8.9 KB — po 60 KB ribos.

Rašyta TIK į `variacijosv2/lp9/` ir `logs/`. Kiti katalogai (išskyrus `promptai/` ir
`config/`, kaip nurodyta užduotyje) neskaityti ir nekeisti.

## Patikra

### Naršyklė — PRIEINAMA šioje sesijoje (skirtingai nei lp6 anksčiau)

Sistemoje rastas Google Chrome, bet ne su reikiamu Playwright branduoliu iš anksto.
Įdiegtas `playwright` per `pip3 install --user` (Python 3.9, `~/Library/Python/3.9/...`)
ir atsisiųstas suderinamas Chromium build (`playwright install chromium`, v1223) —
veikė be problemų šioje macOS versijoje (Darwin 21.6.0). Realiai atidarytas
`index.html` per `file://` ir patikrinta:

- **Scroll (`document.documentElement.scrollWidth/clientWidth/scrollHeight/clientHeight`)
  per 8 lango dydžius**: 320×568, 360×800, 375×667, 768×1024, 1024×1366, 1440×760,
  1440×900, 1920×1080. Horizontalaus overflow **0 nė viename** dydyje. Vertikalaus
  overflow **0** visuose ≥375px pločio dydžiuose; **1 atvejis** ties 320px (675px turinio
  į 568px aukščio langą) — tai aiškiai leidžiama specifikacijoje kaip išimtis <400px
  pločiui ir apdorota atskiru CSS `@media (max-width: 399px)` blokeliu.
- **Ekrano nuotraukos** 320/360/768/1440px pločiuose — vizualiai patikrinta: veidas/
  figūra matomi visuose dydžiuose (nenukirsti per pusę), kortelė netrukdo figūrai,
  kortelė vizualiai atsiskiria nuo fono (šešėlis `0 30px 70px rgba(0,0,0,.55)` +
  1px riba `rgba(250,250,249,.10)`).
- **Kontrastas perskaičiuotas iš REALIŲ `getComputedStyle()` reikšmių** (ne iš CSS
  failo teksto), WCAG 2.1 santykinio ryškumo formule (Python, savarankiškai
  implementuota, patikrinta rankiniu skaičiavimu prieš tai kaip kryžminė patikra):
  - Pagrindinis tekstas `#FAFAF9` ant kortelės `#18181B`: **16.96:1**.
  - `--lp9-text-muted` (68%) ant kortelės: **8.35:1**.
  - `--lp9-text-faint` PRIEŠ taisymą (46%) ant kortelės: **4.49:1** — FAILINA 4.5:1
    (naudota `.lp9-brand-tag`, `.lp9-legend`, `.lp9-consent` [18+ teisinis tekstas],
    `.lp9-social-proof`, `.lp9-legal-nav a`, `.lp9-legal-age`).
  - CTA tekstas `#1A1206` ant CTA fono `#FBBF24`: **11.10:1**.
  - Klaidos pranešimo tekstas `#FCA5A5` ant kortelės: **9.33:1**.
  - **Po taisymo** (`--lp9-text-faint` → 58%): **6.38:1**, patvirtinta ir Python
    formule, ir tiesiogiai iš naršyklės `getComputedStyle().color`.
- **Fontai patikrinti per `getComputedStyle().fontFamily`** tiesiogiai naršyklėje
  (ne iš CSS teksto): `.lp9-headline`/`.lp9-brand-name` → `Cormorant, Georgia, "Times
  New Roman", serif`; visi formos/teksto elementai → `Mulish, "Segoe UI", Arial,
  sans-serif`. **Karla NIEKUR nenaudojamas** (grep per visus 3 failus — 0 atitikmenų).

### Mechaninė (grep/python)

- **Klasių prefiksas**: visos 27 unikalios HTML klasės ir visi CSS selektoriai su
  tašku (išskyrus klaidingus teigiamus rezultatus iš `url("...jpg")`/`w3.org` SVG
  data-URI eilučių, kurie NĖRA klasių pavadinimai) turi `lp9-` prefiksą — 0 išimčių.
- **Bendrinės klasės be prefikso** (`hero/container/wrapper/btn/card/section/grid/
  row/col/cta/feature/testimonial/footer-links`) — nerasta jokių be `lp9-` prefikso.
- **Draudžiami hex** (`config/draudziamu-zodziu-sarasas.md` §7.1: `#12101a`,
  `#0d0b13`, `#1b1725`, `#241e30`, `#322942`, `#271f34`, `#dc3b68`, `#ff5c85`,
  `#c22c56`, `#f0a93c`, `#4bc98a`) — nerasta nė vieno; visos naudojamos spalvos
  (`#0F0F14`, `#18181B`, `#1A1206`, `#1E1B4B`, `#4ADE80`, `#FAFAF9`, `#FBBF24`,
  `#FCA5A5`) atitinka krypties aprašą.
- **Draudžiami šriftai** (`Bricolage Grotesque`, `Archivo`, ir konkrečiai šiam
  variantui — `Karla`, jau panaudotas lp5/lp6) — nerasta nė vieno.
- **Draudžiamos klišės/frazės** (§1, §9.1–§9.4 — tuščios marketingo frazės, netikra
  skuba, netikras socialinis įrodymas) — nerasta nė vienos.
- **Tekstas apie nuotraukoje esantį asmenį**: patikrinta, kad NIEKUR nėra teiginio,
  jog nuotraukoje pavaizduotas žmogus yra konkretus/realus narys — nuotrauka
  naudojama tik kaip dekoratyvinis fonas (`role="img" aria-hidden="true"`, ne
  prasminga `<img>`).
- **SEO**: `<title>` 60 simbolių (≤60 ✔, riba), `description` 138 simbolių (≤155 ✔),
  `canonical`/`og:url` → `https://vyrukambarys.lt/lp9`, `og:image` = ta pati
  `hero-portrait.jpg` (1024×1536, atitinka `og:image:width/height` meta), JSON-LD —
  `json.loads()` patvirtino sintaksinį validumą.
- **Semantika/a11y**: 1× `<h1>`, `<main>/<footer>/<nav>` yra; 4 `<svg>` + 2
  dekoratyvūs `<div>` (hero, scrim) = 6× `aria-hidden="true"`, visi atitikmenys;
  5 `<label>` (2 radio + 3 select) visiems 6 formos laukams (2 radio dalija bendrą
  `fieldset`/`legend`); `:focus-visible` apibrėžtas CTA/select/legal-nav nuorodoms
  ir `:has(input:focus-visible)` radio mygtukams; `@media (prefers-reduced-motion:
  reduce)` išjungia transitions.
- **Tracking**: `<!-- tracking: lp9_form_submit -->` — vienintelė žyma, palikta
  nepaliesta. Jokių GTM/Meta Pixel/OpenAI pixel ID šiuose failuose nėra (grep
  `gtag|GTM|fbq|pixel` — 0 atitikmenų), taigi nieko realaus nebuvo rizikos sugadinti.

## Rastos ir ištaisytos klaidos

1. **Kontrastas `--lp9-text-faint` (46% → 58% nepermatomumo).** Vienintelis realus
   trūkumas — žr. detales aukščiau ir `VARIANT.md`. Taisymas: `assets/style.css`,
   1 eilutė (`:root { --lp9-text-faint: ... }`), patikrinta, kad daugiau NIEKAS
   faile nepasikeitė (Edit įrankis keičia tik nurodytą tikslų teksto atitikmenį).

Kitų klaidų nerasta — struktūra, spalvos, šriftai, klasių vardai, SEO, a11y,
responsive, tracking atitiko reikalavimus iš pirmo karto.

## PRIĖMIMO KRITERIJAI (iš `promptai/08-statyba-v2-foto.md`)

- [x] Vienas ekranas be scroll (arba minimalus, pagrįstas) — patikrinta realiai
      Playwright/Chromium 8 lango dydžiuose; 0 overflow ≥375px, minimalus pagrįstas
      vertikalus scroll tik ties 320px (leidžiama specifikacijoje).
- [x] Hero nuotrauka pilname fone, figūra matoma visuose dydžiuose — patikrinta
      ekrano nuotraukomis 320/360/768/1440px, `background-position` keičiasi per
      breakpointus, veidas/figūra visada matomi.
- [x] Kortelė su forma (lytis+data+CTA), kontrastas ≥4.5:1 kortelės viduje —
      patikrinta ir ištaisyta (žr. aukščiau); po taisymo žemiausia reikšmė 6.38:1.
- [x] 3 pasitikėjimo ženkliukai, teisinė juosta, 18+ tekstas — visi yra
      (`.lp9-badges` × 3, `.lp9-legal-nav` su Pagalba/Taisyklės/Privatumo politika/
      Apie mus + `.lp9-legal-age` „18+", ir `.lp9-consent` su 18+ patvirtinimu prie CTA).
- [x] SEO/og:image (naudoja hero-portrait.jpg) užpildyti — patikrinta, `og:image`
      dydžiai atitinka realų failą.
- [x] Klasės su prefiksu, jokių draudžiamų vardų — patikrinta grep'u, 0 išimčių.
- [x] Tamsi kortelė (`#18181B`) vizualiai atsiskiria nuo tamsios nuotraukos fone —
      šešėlis + riba, patvirtinta ekrano nuotraukomis abiejuose breakpointuose.
- [x] Tekstas niekur neteigia, kad nuotraukoje esantis žmogus yra konkretus realus
      narys — patikrinta, atitinka.
