# v2 build lp6 — Pokalbio peržiūra (chat preview) — BAIGTA

Šis darbas buvo **tęsinys**: ankstesnis agentas jau buvo sukūręs visus failus
(`index.html`, `VARIANT.md`, `assets/style.css`, `assets/app.js`, `assets/og-image.png`),
bet nutrūko dėl API limito prieš parašydamas šį `.done.md`. Šioje sesijoje failai
**NEBUVO kuriami iš naujo** — atlikta pilna patikra prieš `promptai/06-statyba-v2.md`,
`config/vizualines-kryptys-v2.md` (§ lp6) ir `config/draudziamu-zodziu-sarasas.md`.
Jokių turinio klaidų nerasta, jokių taisymų nereikėjo — failai palikti nepakeisti.

## Output (esami, patikrinti failai)

- `variacijosv2/lp6/index.html` (26.7 KB)
- `variacijosv2/lp6/assets/style.css` (15.4 KB)
- `variacijosv2/lp6/assets/app.js` (5.1 KB — formos validacija, slaptažodžio rodymo
  perjungiklis, orkestruotas chat burbulų atsiradimas per `IntersectionObserver`)
- `variacijosv2/lp6/assets/og-image.png` (1200×630 PNG, 65 KB — patikrinta `file`+`sips`)
- `variacijosv2/lp6/VARIANT.md`
- `logs/v2-build-lp6.done.md` (šis failas)

Bendras katalogo svoris: 132 KB — gerokai po 1.5 MB ribos. CSS 15.4 KB — po 60 KB ribos.

Rašyta TIK į `variacijosv2/lp6/` ir `logs/`. Kiti katalogai neskaityti (išskyrus bendrus
config/promptai failus, kaip nurodyta užduotyje).

## Patikra

### Mechaninė (grep/python), realiai atlikta šioje sesijoje

- **Klasių prefiksas**: visos HTML klasės ir visi CSS selektoriai su tašku turi `lp6-`
  prefiksą — patikrinta `grep -oE` per visą `index.html` ir `style.css`, 0 išimčių.
- **Draudžiami hex** (`config/…` §7.1: `#12101a`, `#0d0b13`, `#1b1725`, `#241e30`,
  `#322942`, `#271f34`, `#dc3b68`, `#ff5c85`, `#c22c56`, `#f0a93c`, `#4bc98a`) — nerasta
  nė vieno.
- **Draudžiami šriftai** (`Bricolage Grotesque`, `Archivo`) — nerasta; naudojama
  Poppins + Karla, po vieną `preconnect` porą ir vieną stiliaus nuorodą (ne 4 svoriai
  kiekvienai šeimai — vengta §7.2 klišės).
- **Draudžiamos klišės/frazės** (§1, §9.1–§9.4: tuščios marketingo frazės, netikra
  skuba, netikras socialinis įrodymas, uždarumo/kovos-su-botais retorika) — nerasta nė
  vienos frazės.
- **Bendrinės klasės be prefikso** (`hero/container/wrapper/btn/card/section/grid/row/
  col/cta/feature/testimonial/footer-links`) — nerasta (vieninteliai atitikimai buvo
  `lp6-hero` ir pan., t.y. su prefiksu, kas leidžiama).
- **ALL-CAPS eyebrow, „→“ mygtukuose** — nerasta.
- **Kontrastas perskaičiuotas nepriklausomai** (Python, WCAG 2.1 santykinio ryškumo
  formulė iš hex, ne spėta): visos teksto/fono poros ≥4.5:1 — žemiausia reikšmė 4.79:1
  (`#15803D` ant `#F0FDF4`, akcento nuorodos tekstas). Šviesesnis `--lp6-accent`
  (`#16A34A`, baltas tekstas ant jo = 3.30:1) patikrinta CSS grep'u — **niekur
  nenaudojamas kaip tekstinio elemento fonas ar teksto spalva**, tik dekoratyviai
  (SVG varnelės ženkliukas, favicon) — VARIANT.md §5 aprašytas sprendimas patvirtintas
  kode.
- **SEO**: `<title>` 52 simboliai (≤60 ✔), `description` 129 simboliai (≤155 ✔),
  `og:*` (image 1200×630 PNG, ne SVG ✔), `canonical` → `https://vyrukambarys.lt/lp6`,
  `lang="lt"` ant `<html>`, JSON-LD — patikrinta `json.loads()`, sintaksiškai validus,
  turi Organization + Service.
- **Semantika/a11y**: vienas `<h1>`, `<main>/<nav>/<footer>` yra; visi 36 `<svg>`
  elementai turi `aria-hidden="true"` (visi dekoratyvūs — jokio prasmingo SVG be
  teksto poros); 6 `<label>` visiems 6 formos laukams; `:focus-visible` apibrėžtas;
  `@media (prefers-reduced-motion: reduce)` išjungia animacijas IR nustato
  `scroll-behavior: auto`.
- **Responsive/scroll**: CSS peržiūrėtas rankiniu būdu — nėra jokių fiksuotų `px`
  pločių, viršijančių 360px konteinerį be `min()/clamp()`; telefono mockup naudoja
  `width: min(320px, 82vw)`; `body { overflow-x: hidden }` kaip papildoma apsauga.

### Playwright / naršyklė — NEPRIEINAMA šioje aplinkoje

`npx playwright install chromium` grąžino klaidą: **„Playwright does not support
chromium on mac12“** (sistema — Darwin 21.6.0 / macOS Monterey, `mac12` nebepalaikomas
naujausios Playwright versijos, 1.63.0). Realaus naršyklės render'io 360px/1440px ir
gyvos „Rašo...“ animacijos patikrinti nepavyko. Vietoj to atlikta:
- Rankinis `app.js` logikos patikrinimas: `IntersectionObserver` paleidžia
  `lp6-phone--played` klasę, kai telefono mockup patenka į matomą sritį (slenkstis
  0.35), burbulai gauna laipsnišką `transitionDelay` (0.16s žingsniu); su
  `prefers-reduced-motion` — klasė pridedama iš karto be animacijos.
- „Rašo...“ taškų pulsavimas įgyvendintas grynu CSS `@keyframes lp6-typing-bounce`
  (nepriklauso nuo JS laikmačio), taigi visada rodomas ir visada veikiantis, kai
  CSS įkeltas.
- **Rekomendacija kitai sesijai**: jei reikia realaus vizualinio patvirtinimo, reikės
  arba atnaujinti Playwright/macOS aplinką, arba naudoti kitą sistemą su palaikoma
  macOS versija.

## PRIĖMIMO KRITERIJAI (iš `promptai/06-statyba-v2.md`)

- [x] Vizualinis raštas iš krypties įgyvendintas pilnai, dominuoja puslapyje — telefono
      ekrano mockup su chat burbulais ir „Rašo...“ indikatoriumi hero sekcijoje (ne maža
      iliustracija — pilno pločio, 560px aukščio šerdinis elementas); avatarų sistema
      kartojasi per sėkmės istorijas, pasitikėjimo juostą ir registracijos mini-eilutę.
- [x] Bent 8-12 skirtingų SVG avatarų, jokios realios/atsisiųstos nuotraukos — lygiai
      10 unikalių `<symbol>` (`lp6-face-01`…`10`), formulė apskritimas+2 taškai+linija/
      lankas, naudojami ~19 kartų per puslapį; jokių `<img>` su realiu failu, jokių
      atsisiųstų nuotraukų (og-image.png yra paties puslapio SVG kompozicijos eksportas).
- [x] Kontrastas ≥4.5:1, prieinamumas, reduced-motion — perskaičiuota nepriklausomai
      Python WCAG formule, žemiausia 4.79:1; `:focus-visible`, `aria-hidden`,
      `prefers-reduced-motion` patikrinti kode.
- [x] 360px be horizontalaus scroll, formos veikia — statinė CSS analizė nerodo
      overflow rizikos (žr. aukščiau); JS validacija patikrinta skaitant kodą — kiekvienam
      laukui yra `valid()` funkcija, klaidos žinutė, sėkmės būsena su `form.reset()`.
      Realaus naršyklės patvirtinimo NEPAVYKO atlikti (Playwright neveikia šioje macOS
      versijoje — žr. aukščiau).
- [x] SEO/OG/canonical/JSON-LD užpildyti — patikrinta ilgiai, JSON validumas, PNG
      1200×630 formatas.
- [x] Pilnas, tikras tekstas, jokio lorem ipsum — antraštė, paantraštė, 5 turinio
      sekcijos (žingsniai/istorijos/pasitikėjimas/registracija/DUK), 5 DUK klausimai,
      forma su etiketėmis ir klaidų tekstais, footer su 18+ patvirtinimu — visas tekstas
      prasminis lietuvių kalba.

### §4 mechaninis vizualinio pasiskirstymo reikalavimas — patikrinta atskirai

- Avatarų/vizualinė sistema pasirodo **4 sekcijose**: hero (chat), sėkmės istorijos,
  pasitikėjimo/saugumo sekcija, registracijos sekcija — atitinka „bent 3, iš kurių bent
  viena po viduriu“ (3 iš 4 yra po viduriu).
- Registracijos sekcija: turi 5 avatarų eilutę virš formos — ne grynas tekstas. ✔
- Pasitikėjimo sekcija: turi 6 avatarų juostą su patikros ženkleliais + 3 ikonų-
  kompozicijų sąrašą (dokumentas/skydas/spyna su etiketėmis) — ne grynas tekstas. ✔
- Sekcijų su realiu (>1 elemento) vizualu: hero, žingsniai (3 ikonų+skaičių
  kompozicijos), sėkmės istorijos, pasitikėjimas, registracija = 5 iš 6 turinio
  sekcijų (DUK lieka daugiausia tekstinis) → **~83%**, virš 50% ribos.

## Tracking stekas

Šiame variante nėra GTM/Meta Pixel/OpenAI pixel scriptų (tik du
`<!-- tracking: ... -->` žymekliai kaip event vietos: `lp6_view`, `lp6_signup_submit`,
`lp6_signup_success`) — jokių ID nebuvo ir nėra ką patikrinti šiuo aspektu šiame faile.

## Pastabos kitai sesijai

- Nieko taisyti nereikėjo — variantas jau atitiko visus kriterijus, kai buvo perimtas.
- Vienintelis apribojimas: realaus naršyklės (Playwright) patvirtinimo šioje sesijoje
  gauti nepavyko dėl macOS/Playwright versijų nesuderinamumo (žr. aukščiau) — jei
  prireiks, reikės kitos aplinkos su palaikoma macOS versija arba realaus prieinamo
  Chrome per CDP.
