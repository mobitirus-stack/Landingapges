# v2-build-lp3.done.md — „Randu" · lp3 (Nuotraukų tinklelis / discovery grid)

Statybos agentas: `promptai/06-statyba-v2.md`, kryptis `config/vizualines-kryptys-v2.md` →
„## lp3 — Nuotraukų tinklelis (discovery grid)".

## Output failai

- `variacijosv2/lp3/index.html` (26.4 KB)
- `variacijosv2/lp3/assets/style.css` (13.5 KB)
- `variacijosv2/lp3/assets/app.js` (5.5 KB)
- `variacijosv2/lp3/VARIANT.md`

Puslapio bendras svoris (html+css+js): ~45 KB, gerokai po 1.5 MB ribos. CSS 13.5 KB — po 60 KB
ribos. Google Fonts kraunami per vieną `preconnect` + vieną stiliaus nuorodą (Plus Jakarta Sans
600/700, Inter 400/500/600). Jokių blokuojančių skriptų — vienintelis `<script>` yra
`assets/app.js` be `defer`/`async` reikalo, nes įdėtas prieš `</body>`.

## Priėmimo kriterijai (iš `promptai/06-statyba-v2.md`)

- [x] **Vizualinis raštas iš krypties įgyvendintas pilnai, dominuoja puslapyje** — 4/3/2 stulpelių
      tinklelis su 16 kvadratinių avatarų kortelių ir veikiančia filtro juosta (amžius + miestas)
      yra didžiausias, pirmas po herojaus ir vizualiai sunkiausias puslapio blokas, ne mažas priedas.
- [x] **Bent 8-12 skirtingų SVG avatarų, jokios realios/atsisiųstos nuotraukos** — sukurta **16**
      unikalių geometrinių duotone avatarų (apskritimai/trikampiai/rombai/žiedai, tiksliai dviem
      paletės spalvomis `#7C3AED` + `#18181B`), visi `aria-hidden="true"`. Jokių `<img>`, jokių
      atsisiųstų ar realių žmonių atvaizdų — patikrinta grep'u, faile nėra nė vieno `<img`.
- [x] **Kontrastas ≥4.5:1, prieinamumas, reduced-motion** — realiai apskaičiuota ir patikrinta
      Chrome/Playwright: tekstas/fonas 16.96:1, tekstas-muted/fonas 10.0:1, baltas tekstas/akcentas
      5.70:1, akcentas kaip tekstas/fonas 5.46:1, klaidos raudona/baltas 6.47:1, sėkmės
      žalia/fonas 7.29:1 — visi virš 4.5:1. `:focus-visible` patikrintas realiai (outline „solid"
      ant fokusuoto lauko). `prefers-reduced-motion: reduce` patikrintas per
      `page.emulateMedia` — kortelių opacity iškart `1` (nėra fade-in delsimo/paslėpto turinio).
- [x] **360px be horizontalaus scroll, formos veikia** — patikrinta Playwright/Chrome realiai
      360/768/1024/1440px: `scrollWidth === clientWidth` visuose keturiuose pločiuose. Tinklelis
      persitvarko **2 → 3 → 4 → 4** stulpelius (360/768/1024/1440), tiksliai atitinka reikalavimą
      dėl 2 stulpelių mobiliame. Forma: tuščių laukų validacija rodo klaidas (patikrinta), teisingi
      duomenys → sėkmės būsena (patikrinta, `is-visible`/`is-hidden` klasės perjungiamos teisingai).
      Filtrų testas: pasirinkus amžių 20-25 → rodomos 4 anketos; pridėjus miestą Vilnius →
      rodoma 1 (teisinga sankirta). Konsolėje jokių JS klaidų viso scenarijaus metu.
- [x] **SEO/OG/canonical/JSON-LD užpildyti** — `<title>` 47 simb., `description` 142 simb. (abu
      patikrinti programiškai), `canonical` → `https://vyrukambarys.lt/lp3`, `og:title/description/
      type/url/locale`, `lang="lt"`, du `application/ld+json` blokai (Organization + Service),
      abu patikrinti — validus JSON.
- [x] **Pilnas, tikras tekstas, jokio lorem ipsum** — antraštė, paantraštė, 3 papildomos sekcijos
      (kaip veikia / atranka / FAQ), 5 FAQ klausimai, registracijos forma su etiketėmis, klaidų ir
      sėkmės tekstais, footer su 18+ patvirtinimu ir BDAR nuoroda — visas tekstas parašytas
      specialiai šiam variantui, be lorem ipsum.

## Papildomos pastabos

- **Tracking stekas:** šis variantas dar neturi realaus GTM/Meta Pixel/OpenAI pixel kodo — vietoje
  jo tik `<!-- tracking: lead_form_submit -->` ir `<!-- tracking: lead_form_success -->` žymos
  (forma) prie CTA/sėkmės vietų, kaip reikalaujama. Kadangi jokio realaus tracking ID šiame faile
  nebuvo prieš pradedant darbą, „netrikdyk tracking steko" taisyklė šįkart neaktuali — pažymėta,
  kad diegiant tikrą GTM/Pixel ateityje, jį reikės įdėti būtent ten, kur yra šios komentaro žymos.
- **Terminija:** ši v2 partija yra atskira nuo v1 (`variacijos/`) termininio žemėlapio
  (`config/terminu-zemelapis.md` galioja `lg1..lg10`, ne `lp1..lp10`), todėl terminai („anketa",
  „susirašinėjimas" ir kt.) pasirinkti savarankiškai šiam variantui — užfiksuota `VARIANT.md` §5.
- **Registracijos forma sąmoningai vieno žingsnio** (ne trijų), kad neatkartotų
  `config/draudziamu-zodziu-sarasas.md` §7.3 p.26 draudžiamo trijų žingsnių modelio.
- **Bendrieji v1 klišių punktai patikrinti** (kaip nurodyta `promptai/06-statyba-v2.md`): jokio
  ALL-CAPS eyebrow (naudotas `.eyebrow` yra įprasto registro tekstas), jokio „→" mygtukuose, jokio
  „A · B · C" vidurio taškų modelio, jokio Bricolage Grotesque/Archivo šrifto.
- **Testavimo metodas:** realus Chrome per Playwright CLI (`npx playwright screenshot` / custom
  Playwright script su `channel: chrome`, nes standartinis bundled Chromium šioje macOS versijoje
  nepalaikomas — užfiksuota projekto atmintyje). Pirmas bandymas be papildomo laukimo parodė
  tuščią plotą tinklelio apačioje (360px pilno puslapio screenshot) — tai buvo tik ekrano nuotraukos
  laiko artefaktas (kortelių `fade+scale` `animation-delay` iki 0.62s dar nebuvo pasibaigęs
  screenshot metu), o ne realus defektas: pridėjus `--wait-for-timeout=1500`, visos 16 kortelių
  matomos (`opacity: 1`). Realiam vartotojui tai nepastebima (animacija trunka ~1.1s ir vyksta
  natūraliai įkeliant puslapį).
- Papildomai pridėta `scroll-margin-top` visoms `id` sekcijoms, kad sklandaus slinkimo (`scroll-
  behavior: smooth`) nuorodos (nav, footer, "peržiūrėti anketas") neuždengtų antraščių po `sticky`
  antrašte.
