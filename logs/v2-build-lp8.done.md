# v2 build lp8 — Pastelinis minimalizmas (hero nuotrauka) — BAIGTA

Tęsinys po nutrūkusios sesijos: ankstesnis agentas jau buvo sukūręs `index.html`,
`assets/style.css`, `assets/app.js`, `assets/hero-portrait.jpg`, bet nutrūko dėl API
limito prieš ištaisydamas 2 rastas klaidas ir prieš parašydamas `VARIANT.md`/šį log'ą.

## Ką radau perėmus darbą

Statiškai skaitant `style.css` prieš taisant paaiškėjo, kad **abu pranešti bugai jau
buvo faktiškai ištaisyti kode** (matomai ankstesnis agentas spėjo pritaikyti CSS
pataisas prieš pritrūkstant limito, tiesiog nespėjo to užfiksuoti log'e):
- Jau buvo `.lp8-success[hidden] { display: none; }` (specifiškumas 0,2,0 > 0,1,0
  bazinės `.lp8-success{display:flex}` taisyklės, taigi teoriškai jau veikė).
- Jau buvo `min-width: 0` ir ant `.lp8-select-wrap`, ir ant `.lp8-selects select`.

Vietoj to, kad pasitikėčiau vien statine analize, **realiai patikrinau naršyklėje**
(žr. žemiau) — abu elgesiai iš tiesų jau veikė teisingai. Tada vis tiek sustiprinau
abi vietas (žr. „Taisymai" žemiau), kad apsauga būtų patikima ateičiai, ne vien
specifiškumo atsitiktinumas.

## Taisymai (šioje sesijoje, `assets/style.css`)

1. **Bug #1 (sėkmės pranešimas):** pridėta globali `[hidden] { display: none !important; }`
   taisyklė CSS failo viršuje (po `box-sizing` reset'o, prieš `html, body`). Tai
   garantuoja `hidden` atributo veikimą nepriklausomai nuo bet kurios komponento
   klasės `display` deklaracijos dabar ar ateityje — nebepriklauso vien nuo
   `.lp8-success[hidden]` specifiškumo prieš `.lp8-success`. Pridėtas paaiškinamasis
   komentaras kode.
2. **Bug #2 (360px overflow):** patvirtintas ir dokumentuotas jau esantis
   `min-width: 0` sprendimas ant `.lp8-select-wrap` (grid elemento) ir `select`
   (paties lauko) — pridėtas paaiškinamasis komentaras, kodėl tai būtina (grid
   elementų numatytoji `min-width` yra `auto`, ne `0`).

`index.html` **NEPALIESTAS** — jokių turinio ar tracking pakeitimų nereikėjo.

### Diff patikra

`diff` prieš atsarginę kopiją (`/private/tmp/.../scratchpad/backup-lp8/`) patvirtino:
pasikeitė TIK 2 pridėti komentaru paaiškinti CSS blokai (`[hidden]` globali taisyklė
+ 2 dokumentavimo komentarai), `index.html` diff — tuščias (0 skirtumų).

## Realaus naršyklės testas (Playwright + Chromium, ne vien CSS skaitymas)

Šioje aplinkoje `npx playwright` CLI veikia (1.63.0), bet naujausio Chromium build'o
(1208 revizija) vykdomasis failas trūko/nepilnas; **radau veikiantį alternatyvų
kelią**: `~/.npm/_npx/*/node_modules/playwright` cache'e yra keli playwright NPM
paketo versijų kopijos, o `~/Library/Caches/ms-playwright/chromium-1091` turi pilną
senesnės Chromium 120.0.6099.28 `.app` (macOS mac12/Monterey suderinamas). Paleidau
per `NODE_PATH=<cache>/node_modules node script.js` su
`chromium.launch({executablePath: '<chromium-1091 kelias>'})` — pavyko. **Pastaba
kitoms lp7/lp9/lp10 sesijoms**, jei Playwright „standard" paleidimas neveikia dėl
macOS versijos: šis apeinamasis kelias veikia be jokio papildomo diegimo.

Testuota `file://.../variacijosv2/lp8/index.html` per 360×740, 375×812, 768×1024,
1024×768, 1440×900:

| Plotis | Sėkmės pranešimas PRIEŠ submit | Horizontal overflow | Vertical overflow |
|---|---|---|---|
| 360 | `hidden` atributas yra, `display:none`, nematomas | ne | ne |
| 375 | tas pats | ne | ne |
| 768 | tas pats | ne | ne |
| 1024 | tas pats | ne | ne |
| 1440 | tas pats | ne | ne |

Papildomai 360px pločiui: užpildyta forma (lytis + pilna gimimo data) ir paspaustas
CTA — po submit `#lp8-success` atributas `hidden` pašalintas, `display:flex`,
elementas matomas (`offsetParent !== null`), o `#lp8-form` paslėpta. Jokių elementų,
kurių dešinysis kraštas viršytų `document.documentElement.clientWidth`, nerasta
jokiame patikrintame plotyje (automatinė patikra per visus DOM elementus).

Ekrano nuotraukos išsaugotos scratchpad'e (ne projekto kataloge):
`lp8-360w.png`, `lp8-360w-submitted.png`, `lp8-375w.png`, `lp8-768w.png`,
`lp8-1024w.png`, `lp8-1440w.png` — vizualiai patikrintos: kortelė skaitoma, veidas
matomas visuose dydžiuose, kontrastas atrodo geras, jokio layout lūžio.

## PRIĖMIMO KRITERIJAI (`promptai/08-statyba-v2-foto.md`)

- [x] **Vienas ekranas be scroll** — patvirtinta realiame naršyklės teste 5 pločiuose
      (360–1440px): `scrollHeight === clientHeight` visuose, jokio vertikalaus scroll.
- [x] **Hero nuotrauka pilname fone** — `hero-portrait.jpg` (1024×1536px, patikrinta
      `sips`) kaip `background-image` su `object-position`-analogišku
      `background-position` deriniu (skirtingas <641px ir ≥641px), figūra/veidas
      matomi visuose dydžiuose (patvirtinta ekrano nuotraukomis); tamsinantis scrim
      sluoksnis (`.lp8-hero-scrim`) apačioje/kairėje.
- [x] **Kortelė su forma** (lytis + gimimo data + CTA), **kontrastas ≥4.5:1** —
      perskaičiuota nepriklausomai Python WCAG 2.1 formule iš hex reikšmių (ne
      spėta): žemiausia reikšmė 5.53:1 (`#BE185D` ikona ant `#FDF2F8` sėkmės fono);
      pagrindinis tekstas 15.0:1, CTA baltas tekstas ant `#BE185D` 6.04:1, teisinės
      juostos tekstas 8.65:1. Visos poros virš 4.5:1 ribos.
- [x] **3 pasitikėjimo ženkliukai** — „Duomenys apsaugoti", „Patikrintos anketos",
      „Atsisakyti bet kada" (SVG + tekstas). **Teisinė juosta** — Pagalba/Taisyklės/
      Privatumas/Apie. **18+ tekstas** — ženkliukas juostoje + sutikimo sakinys prie CTA.
- [x] **SEO/og:image** — title/description/canonical/OG/Twitter/JSON-LD užpildyti;
      `og:image` naudoja tą pačią `hero-portrait.jpg`, `og:image:width/height`
      (1024/1536) atitinka realų failo dydį (patikrinta `sips`).
- [x] **Klasės su `lp8-` prefiksu** — `grep -oE 'class="[^"]*"'` per `index.html` +
      visi `.lp8-…` selektoriai `style.css`: 27 unikalios klasės, 0 be prefikso, 0
      atitikimų `config/draudziamu-zodziu-sarasas.md` §4 bendrinių vardų sąrašui
      (`hero/container/wrapper/btn/card/section/grid/…`).
- [x] **Draudžiami žodžiai/frazės** — automatinė Python patikra prieš visus §1, §2,
      §3, §9.1–§9.5 sąrašo punktus (94 frazės/žodžiai) tekste be HTML žymų: 0 sutapimų.
- [x] **Draudžiamos spalvos/šriftai (§7.1–§7.2)** — paletė (`#DB2777`/`#BE185D`/
      `#3B0764`/…) ir šriftai (Poppins + Nunito Sans) nesutampa su jokia §7.1/§7.2
      draudžiama reikšme (tamsi violetinė-juoda sistema ir Bricolage/Archivo — visai
      kita kryptis).
- [x] **Nuotraukoje esantis žmogus NĖRA pristatomas kaip konkretus realus narys** —
      viso teksto peržiūra (žr. `VARIANT.md`): nuotrauka naudojama tik kaip
      atmosferinis dekoratyvinis fonas (`aria-hidden`, be prasminio `<img>`/`alt`),
      niekur nesakoma „ji/jis yra narys/narė" ar panašiai.
- [x] **CSS <60KB, puslapis <1.5MB** — `style.css` 9.2 KB; visas katalogas (html+css+
      js+jpg) 246 KB (0.235 MB).

## Tracking stekas

Patikrinta `diff`'u prieš atsarginę kopiją: `index.html` liko **visiškai nepaliestas**
šioje sesijoje. `<!-- tracking: page_view -->`, `<!-- tracking: cta_click -->`,
`<!-- tracking: lead_submit -->` žymekliai (event vietos, ne realūs GTM/Meta/OpenAI
ID — šiame variante jokių trečiųjų šalių scriptų nėra) — nepakeisti.

## Output

- `variacijosv2/lp8/index.html` — nepaliestas (patikrinta, klaidų nerasta)
- `variacijosv2/lp8/assets/style.css` — 2 taisymai (žr. aukščiau), `diff` patikrintas
- `variacijosv2/lp8/VARIANT.md` — naujai parašytas (trūko)
- `logs/v2-build-lp8.done.md` — šis failas

Rašyta TIK į `variacijosv2/lp8/` ir `logs/`. Kiti `variacijosv2/lpN*` katalogai
neskaityti (tik `find` failų sąrašui iš `variacijosv2/` šaknies, be turinio
skaitymo); `logs/v2-build-lp6.done.md` perskaitytas tik kaip formato pavyzdys.

## Pastabos kitai sesijai

Nėra neužbaigto darbo lp8 variante — abu žinomi bugai ištaisyti ir realiai patikrinti
naršyklėje, visi priėmimo kriterijai patvirtinti, `VARIANT.md` parašytas.
