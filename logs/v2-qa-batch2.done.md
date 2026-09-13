# v2 QA — partija 2 (lp4, lp5, lp6) — atlikta

Data: 2026-09-14. Vertintojas: nepriklausomas QA agentas (Opus, aukštas effort).
Išvestis: `qa/v2-patikra-batch2.md`.

**VERDIKTAS: NEPRIIMTA — 0 iš 3. lp7–lp9 nepradedami.**
Kritinė riba (jokių realių nuotraukų) nepažeista nė viename. Perstatymo nereikia nė vienam.

| Variantas | Verdiktas | Sunkiausias punktas |
|---|---|---|
| lp4 | PERDARYTI | `index.html:219` — 9 žodžių sutapimas su `lp3/index.html:307` |
| lp5 | PERDARYTI | `index.html:96-99` / `:104-107` — `bust-c` ir `bust-e` atvaizduojami sulūžę (galva atskirta nuo liemens), abu neužblurinti kainos (`:283`) ir patikros (`:349`) kortelėse |
| lp6 | PERDARYTI | `style.css:288-292` + `app.js:14-24` — be JS visas hero pokalbis `opacity:0` (patvirtinta naršyklėje) |

## Checklist

### Metodika
- [x] Perskaityti `promptai/07-v2-qa-batch.md`, `promptai/06-statyba-v2.md`,
      `config/vizualines-kryptys-v2.md`, `config/draudziamu-zodziu-sarasas.md`,
      `qa/v2-patikra-batch1.md`
- [x] Perskaityti visų trijų `index.html` + `assets/style.css` + `assets/app.js` + `VARIANT.md`
- [x] Statytojų `logs/v2-build-lp4/5/6.done.md` ataskaitomis **nesiremta**; visi jų teiginiai
      tikrinti iš naujo (rasti 3 neteisingi — žr. `qa/v2-patikra-batch2.md` „Partijos lygio
      pastabos" §3)
- [x] Produkciniai failai **nekeisti** — QA buvo tik skaitymo

### 1. Avatarų / vizualinės sistemos realumas (svarbiausia)
- [x] Patikrinti SVG `<symbol>` / `<path>` / `<circle>` duomenys, ne klasių skaičius
- [x] lp5 veidrodžio (`scaleX(-1)`) bug'as: **realiai ištaisytas** — 9 skirtingos geometrijos,
      veidrodis tik ant asimetriško `bust-f`
- [x] Visi 9 lp5 siluetai atvaizduoti po 110px realioje naršyklėje → **rasta: `bust-c` ir `bust-e`
      sulūžę** (12 ir 32 vienetų tarpas tarp galvos ir liemens)
- [x] lp5 „siena" nufotografuota → **rasta: 4 iš 8 kortelių po `--mosaic` neatskiriamos**
- [x] lp4 avatarai: 12 unikalių monogramų ✔, bet gradientai 1↔2/3↔4/5↔6/8↔9/10↔11 — ta pati pora
      apversta (~7 realūs deriniai). Kriterijų tenkina per monogramas, ne per spalvą
- [x] lp6 avatarai: „akių tarpo" variacija 1–2/64 vnt. = sub-pikselinė, nematoma; realiai skiria
      10 spalvų + 3 burnos formos. Kriterijų tenkina; `VARIANT.md:101` teiginys netikslus
- [x] Avatarų panaudojimas per sekcijas: lp4 — 6, lp5 — 5, lp6 — 4 (reikalavimas ≥ 1, kriterijus
      8–12 unikalių: lp4 12, lp5 9, lp6 10) ✔

### 2. Jokių realių nuotraukų
- [x] `<img` = 0 / `url(http…)` = 0 / `base64` = 0 visuose trijuose
- [x] `.jpg/.jpeg/.webp/.gif/.avif` = 0 failų
- [x] `data:image/*` — tik inline SVG (favicon, `select` rodyklė) — leistina
- [x] Visi 3 `og-image.png` patikrinti chunk'ais ir `xattr`: `1200x630`, tik `IHDR/IDAT/IEND`,
      jokių EXIF/`tEXt`/autorystės metaduomenų → lokalūs SVG rasterizavimai, ne stock
- [x] Išorinės nuorodos — tik Google Fonts / schema.org / vyrukambarys.lt

### 3. Prieinamumas
- [x] Kontrastas perskaičiuotas iš hex (61 pora, WCAG 2.1) — **visos teksto poros ≥ 4.5:1**
      visuose trijuose. Siauriausia: lp6 `#B45309`/`#FEF3C7` = 4,51:1
- [x] lp6 `--lp6-accent` (#16A34A, 3,30:1) patikrintas grep'u — kaip teksto/mygtuko spalva
      **nenaudojamas nė karto**, tik dekorui ✔
- [x] `aria-hidden` ant dekoratyvinių SVG ✔; lp4 sparkline'ai turi `role="img"` + `<title>` ✔
- [x] `:focus-visible` — globali taisyklė visuose trijuose ✔
- [x] `prefers-reduced-motion` + `html{scroll-behavior:auto}` visuose trijuose ✔;
      animacijos realiai išjungiamos (lp4 feed rotacija, lp5 shimmer+pulsas, lp6 burbulai)
- [x] Visi laukai su `<label>` ✔; `role="alert"` klaidoms, `role="status"` sėkmei ✔

### 4. Techninis pagrindas (matuota Chrome headless / CDP)
- [x] Horizontalus scroll 360 / 768 / 1024 / 1440 — **nėra nė viename variante nė viename plotyje**
- [x] lp5 ir lp6 `body{overflow-x:hidden}` nuimtas ir permatuota: po juo slepiasi **tik**
      `-999px` skip-link, realaus overflow nėra
- [x] 1× `<h1>`, 0 neuždarytų žymų, 0 dublikuotų `id` visuose trijuose
- [x] CSS 20,3 / 19,4 / 15,4 KB (limitas 60 KB) ✔; puslapio svoris toli iki 1,5 MB
- [x] SEO/OG/canonical/JSON-LD užpildyti teisingai (`vyrukambarys.lt/lp4|lp5|lp6`) ✔
- [x] `og:image` — realus PNG 1200×630 + `width`/`height` visuose trijuose ✔
- [x] Elgsena be JS: lp4 hero ✔ (statinis HTML), lp5 hero ✔ (statinis),
      **lp6 hero ✘ — burbulai `opacity:0`, tuščias telefono rėmas (ekrano nuotrauka)**

### 5. §4 vizualinio pasiskirstymo reikalavimas
- [x] Sekcijų ribos ir puslapio vidurys išmatuoti naršyklėje ties 1280px
- [x] ≥ 3 sekcijos su vizualu: lp4 6, lp5 5, lp6 4 ✔
- [x] ≥ 1 sekcija po puslapio viduriu: lp4 `#registracija`, lp5 `lp5-patikra` + `lp5-atrakinimas`,
      lp6 `lp6-registracija` ✔
- [x] Forma ne grynas tekstas: visi trys ✔
- [x] Pasitikėjimo sekcija ne grynas tekstas: visi trys ✔
- [x] Sekcijų su realiu vizualu dalis: 86 % / 71 % / 83 % (riba 50 %) ✔
- [x] **Batch1 sisteminė problema (vizualas tik viršuje) nepasikartojo**

### 6. Kryžminė patikra (lp4/lp5/lp6 tarpusavyje IR su lp1/lp2/lp3)
- [x] Klasių vardai — **0 sutapimų visose 15 porų** tarp lp1…lp6; 0 draudžiamų §4 vardų
- [x] Paletės — visos šešios atskirtos; §7.1 draudžiamos hex reikšmės: 0
- [x] Šriftai — Bricolage Grotesque / Archivo nenaudojami; **„Karla" pasikartoja lp5 ir lp6**
      (nurodyta pačiame `config/vizualines-kryptys-v2.md`, todėl ne statytojų klaida — sprendimas
      paliktas Jonui, į verdiktą neįskaičiuota)
- [x] Antraštės — **rasta: lp4:473 ≡ lp6:421 pažodžiui; lp5:315 ↔ lp6:233 ta pati konstrukcija**
- [x] 4-gramos — **rasta: lp3:307 ↔ lp4:219 ↔ lp6:233** („…iki pirmo pokalbio … trys žingsniai…");
      likę sutapimai = 18+ formuluotė + poraštės teisinis tekstas + miestų sąrašas (priimtina,
      kaip batch1)
- [x] Vardai — **rasta: lp4 ∩ lp2 = 6 vardai; lp6 ∩ lp1 = Eglė (tas pats amžius 29), Rūta, Tomas,
      Giedrė, Aistė**

### 7. Draudžiami žodžiai / šablonai
- [x] §1, §9.1, §9.2 klišės — 0 sutapimų
- [x] §9.3 netikra skuba — 0 laikmačių, 0 „liko X vietų", 0 „X žiūri dabar".
      lp4 „ką tik prisijungė" juosta — **kryptis ją tiesiogiai nurodo**, statytojas atskleidė
      trijose vietose („pavyzdys", „iliustracija", DUK). Priimta; rekomendacija (ne blokatorius) —
      `app.js:43-46` rotacijos „ką tik" žymas pakeisti reliatyviomis
- [x] §9.4 netikras socialinis įrodymas — **rasta 3 pažeidimai: lp5:218, lp6:324, lp6:356**
      (iliustracijos aprašomos kaip realūs nariai)
- [x] §3 bendriniai sekcijų pavadinimai — **rasta: lp5:369 „Dažniausiai užduodami klausimai"**
- [x] §8 šablonai — ALL-CAPS eyebrow nėra (lp5 `.lp5-eyebrow` be `text-transform`);
      „→" mygtukuose nėra; numeruoti 01/02/03 ten, kur turinys nėra seka — nėra
      (lp4/lp5/lp6 numeruoja tik realias žingsnių sekas)

### 8. Trackingas
- [x] GTM / Meta Pixel / OpenAI pixel kodo ar ID šiuose failuose **nėra ir nebuvo** — tik
      `<!-- tracking: … -->` žymos, visos savo vietose
- [x] Nieko nepridėta, nieko nepašalinta — patikra buvo tik skaitymo

## Kas toliau

1. Siųsti visus tris variantus taisymui pagal `qa/v2-patikra-batch2.md` „Užduotis taisymui" skyrius.
2. Taisymo agentams **privaloma** po pakeitimo patikrinti realioje naršyklėje, ne tik kode:
   lp5 — atvaizduoti `bust-c`/`bust-e`; lp6 — užkrauti su išjungtu JS.
3. Kryžminius punktus (lp4:473 ↔ lp6:421 antraštė; lp5:315 ↔ lp6:233 konstrukcija) turi paimti
   **vienas** agentas arba orkestratorius — batch1 tokį punktą paliko atvirą, nes jis buvo tik
   kryžminės patikros skyriuje.
4. Prieš lp7–lp10 statybą įrašyti į promptą: iliustracijos niekada neaprašomos kaip konkretūs
   realūs nariai (3 nepriklausomi pažeidimai = prompto spraga).
