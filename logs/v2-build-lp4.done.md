# v2-build-lp4.done.md — „Vyrų kambarys" · lp4 (Gyvo aktyvumo juosta)

Statybos agentas: `promptai/06-statyba-v2.md`, kryptis `config/vizualines-kryptys-v2.md` →
„## lp4 — Gyvo aktyvumo juosta". **Šis QA/užbaigimo etapas** — ankstesnis statybos agentas jau
buvo sukūręs visus failus (`index.html`, `VARIANT.md`, `assets/*`), bet nutrūko dėl API limito
prieš parašydamas šį `.done.md`. Šioje sesijoje turinys buvo patikrintas (ne kurtas iš naujo) ir
patvirtintas realiu naršyklės testu — trūkumų, kuriuos reikėtų taisyti, nerasta.

## Output failai (jau buvo, patikrinti)

- `variacijosv2/lp4/index.html` (30.0 KB)
- `variacijosv2/lp4/assets/style.css` (20.3 KB)
- `variacijosv2/lp4/assets/app.js` (5.6 KB)
- `variacijosv2/lp4/assets/og-image.svg` (4.9 KB) + `assets/og-image.png` (115.9 KB, 1200×630 —
  patikrinta `file`/`sips`, tikras PNG, ne pervadintas SVG)
- `variacijosv2/lp4/VARIANT.md`

Puslapio bendras svoris (html+css+js+og PNG): ~177 KB — gerokai po 1.5 MB ribos. CSS 20.3 KB —
po 60 KB ribos. Google Fonts kraunami per vieną `preconnect` porą + vieną stiliaus nuorodą
(Space Grotesk 600/700, IBM Plex Sans 400/600 — tik du svoriai vienai šeimai, ne keturi).
Vienintelis `<script>` yra `assets/app.js` su `defer`, be blokuojančių skriptų.

## Priėmimo kriterijai (iš `promptai/06-statyba-v2.md`)

- [x] **Vizualinis raštas iš krypties įgyvendintas pilnai, dominuoja puslapyje** — gyvo aktyvumo
      juosta (live-feed su pulsuojančiais online taškais, kas 6s papildoma nauju įrašu per JS,
      išjungiama per `prefers-reduced-motion`) hero dešinėje, statistikos dashboard su 4 SVG
      sparkline grafikais, miestų sąrašas su mini sparkline + avatarais, patikrintų narių juosta.
      Patikrinta realiu Chromium/Playwright screenshot'u 1440px ir 360px — vizualas dominuoja per
      visą scroll'ą, ne tik hero juostoje.
- [x] **Bent 8-12 skirtingų SVG/CSS avatarų, jokios realios/atsisiųstos nuotraukos** — **12**
      unikalių monogramų apskritimuose (`lp4-avatar--1` … `lp4-avatar--12`), kiekvienas su savo
      gradiento pora iš šalto spektro paletės. Grep'u patikrinta: nė vieno `<img>` tego visame
      `index.html` ir SVG faile, nė vienos nuorodos į `.jpg/.jpeg/.png/.webp` išskyrus patį
      `og-image.png` (savas, ne stock). Visi avatarai `aria-hidden="true"`, realus vardas/veiksmas
      šalia paliktas kaip tikras tekstas ekrano skaitytuvui.
- [x] **Kontrastas ≥4.5:1, prieinamumas, reduced-motion** — perskaičiuota nuo nulio (WCAG
      santykinio ryškumo formulė, ne senas skaičiavimas): pagrindinis tekstas/fonas 15.88:1,
      prigesintas tekstas/fonas 7.43:1, mygtuko tekstas/akcentas 8.90:1, klaidos raudona/paviršius
      6.41:1, sėkmės/klaidos juostos 14–16:1. Kritiškiausias atvejis — avatarų monogramų tekstas
      `#04121a` ant gradiento (pvz. `#3b82f6`) — **5.16:1** kampe ir **7.21:1** gradiento centre
      (ten, kur realiai stovi tekstas), abu virš ribos. `:focus-visible` apibrėžtas globaliai
      (3px outline), dekoratyviniai SVG — `aria-hidden`, prasmingi (sparkline) — su `<title>`.
      `@media (prefers-reduced-motion: reduce)` išjungia visas animacijas + `scroll-behavior: auto`.
- [x] **360px be horizontalaus scroll, formos veikia** — patikrinta **realiu Chromium per
      Playwright** (ne tik skaitant kodą): 360/768/1024/1440px visuose keturiuose
      `scrollWidth === clientWidth` (jokio horizontalaus scroll). Forma: pateikus tuščią/klaidingą
      el. paštą ir amžių 17 → rodomos teisingos klaidos lietuviškai; pataisius (galiojantis
      el. paštas, amžius 25, slaptažodis 11 simb., sutikimo varnelė) → sėkmės būsena
      „Ačiū! Profilis sukurtas…" pasirodo teisingai. FAQ akordeonas (`aria-expanded` perjungimas)
      taip pat patikrintas realiai — veikia.
- [x] **SEO/OG/canonical/JSON-LD užpildyti** — `<title>` ir `description` užpildyti, `canonical`
      → `https://vyrukambarys.lt/lp4`, pilnas OG rinkinys (`og:image` — **PNG 1200×630**,
      patikrinta `file`/`sips` komandomis, ne `.svg` tiesiogiai), `twitter:card`, `lang="lt"`,
      du `application/ld+json` blokai (Organization + Service, su `suggestedMinAge: 18`).
- [x] **Pilnas, tikras tekstas, jokio lorem ipsum** — antraštė, paantraštė, 6 turinio sekcijos
      (aktyvumas/statistika/eiga/pasitikėjimas/miestai/registracija) + DUK (5 klausimai) + footer
      su 18+ patvirtinimu. Grep'u patikrinta — jokio „lorem", jokių draudžiamų frazių iš
      `config/draudziamu-zodziu-sarasas.md` (§1/§3/§9 sąrašai patikrinti tiesiogine paieška).

## §4 mechaninis vizualinio pasiskirstymo patikrinimas (papildomas kriterijus)

Suskaičiuota tiesiogiai per `<section>` žymas (7 turinio sekcijos, be nav/footer):

| # | Sekcija | Realus vizualas (>1 elementas)? |
|---|---|---|
| 1 | `lp4-hero` (aktyvumas) | TAIP — live-feed juosta, 5 avatarai + pulsas, JS papildomi įrašai |
| 2 | `lp4-stats` (statistika) | TAIP — 4× SVG sparkline + 4 avatarų klasteris |
| 3 | `lp4-eiga` (3 žingsniai) | TAIP — 3 ikonų kompozicijos + 1 avataras pavyzdyje |
| 4 | `lp4-pasitikejimas` | TAIP — didelis „verified" SVG ženklas + 6 avatarai su varnele |
| 5 | `lp4-miestai` | TAIP — 5× mini sparkline + 5 avatarai |
| 6 | `lp4-registracija` (forma) | TAIP — forma + 6 avatarų „aktyvūs dabar" juosta |
| 7 | `lp4-duk` (FAQ) | NE — akordeonas, grynas tekstas |

**Santykis: 6 iš 7 = 86% ≥ 50% reikalavimo.** Avatarai pasirodo **6 skirtingose `<section>`**
(reikalavimas — bent 3, bent viena po viduriu) — reikalavimas gerokai viršytas, o registracijos
IR pasitikėjimo sekcijos abi turi realų vizualą, ne vien tekstą — tiksliai kaip reikalauja §4.

## Klasių vardai (`config/draudziamu-zodziu-sarasas.md` §4)

Grep'u patikrinti visi `class="..."` atributai `index.html` ir visi CSS selektoriai
`assets/style.css` — **100% turi `lp4-` prefiksą**, nerasta nė vieno bendrinio vardo
(`hero`/`container`/`wrapper`/`btn`/`card`/`section`/`grid`/`cta`/`feature`/`testimonial` ir t.t.
be prefikso).

## Papildomos pastabos

- **Tracking stekas:** faile nėra realaus GTM/Meta Pixel/OpenAI pixel kodo — tik
  `<!-- tracking: lp4_hero_cta_click -->`, `<!-- tracking: lp4_signup_submit -->`,
  `<!-- tracking: lp4_signup_success -->`, `<!-- tracking: lp4_faq_toggle -->` žymos, kaip
  reikalaujama šiam etapui. Kadangi realaus tracking ID faile nebuvo prieš šią peržiūrą,
  „netrikdyk tracking steko" taisyklė čia neaktuali — bet užfiksuota, kad diegiant tikrą
  GTM/Pixel ateityje, jį reikės įdėti būtent šių komentarų vietose.
- **Testavimo metodas:** realus Chromium (cache'uotas `chromium-1091` iš ankstesnio Playwright
  diegimo, nes standartinis `chromium_headless_shell` šioje macOS 12 versijoje nepalaikomas —
  ta pati pastaba kaip lp3 žurnale) per custom Playwright skriptą: 4 breakpoint'ų scroll testas,
  formos validacijos/sėkmės testas, FAQ toggle testas, pilno puslapio screenshot 360px ir 1440px.
  Visi testai praėjo be JS klaidų.
- **Pakeitimų nebuvo** — po pilnos peržiūros (turinys, kontrastas, klasės, avatarai, responsive,
  SEO) jokių trūkumų, kuriuos reikėtų taisyti, nerasta. `index.html`/`style.css`/`app.js`/
  `VARIANT.md` liko tokie, kokius paliko ankstesnis agentas.
