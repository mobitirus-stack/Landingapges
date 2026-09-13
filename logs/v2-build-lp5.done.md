# v2-build-lp5.done.md — „Aukso raktas" · lp5 (VIP / premium atrakinimas)

Statybos agentas: `promptai/06-statyba-v2.md`, kryptis `config/vizualines-kryptys-v2.md` →
„## lp5 — VIP / premium atrakinimas". **Šis QA/užbaigimo etapas** — ankstesnis statybos agentas
jau buvo sukūręs `index.html`, `assets/style.css`, `assets/app.js`, `assets/og-image.png`, bet
nutrūko dėl API limito prieš parašydamas `VARIANT.md` ir šį `.done.md`. Turinys buvo **patikrintas
(ne kurtas iš naujo)**, rastas vienas reikšmingas, tik realiu render'iu pastebimas trūkumas, jis
pataisytas, viskas patvirtinta realiu Chromium/Playwright testu.

## Kas buvo pataisyta (svarbiausia išvada)

**Avatarų sistema neatitiko §4 „8-10 skirtingų variacijų" reikalavimo iš tikrųjų, nors kode
atrodė, kad atitinka.** Originalus kodas turėjo 5 bazinius SVG siluetų simbolius (`lp5-bust-a`
… `-e`) ir naudojo CSS `.lp5-avatar--mirror { transform: scaleX(-1); }`, kad „padvigubintų"
variantų skaičių iki 8-10. **Bet visos 5 originalios kontūro formos buvo tiksliai simetriškos
kairė/dešinė** (galva centre, pečiai simetriški) — todėl veidrodinis atvaizdas vizualiai
**nesiskyrė nuo originalo nė vienu pikseliu**. Tai patvirtinau realiu Playwright screenshot'u
1440px: „Aštuoni profiliai" siena atrodė kaip vienas ir tas pats bendrinis „person" ikonos
ženkliukas, pakartotas 8 kartus — tiksliai tai, ko promptas draudžia („kad puslapis atrodytų
gyvas, ne vienas pakartotas elementas").

**Taisymas:** pridėjau 4 naujas, iš esmės kitokios geometrijos siluetų formas (`bust-f` iki
`bust-i`) — skiriasi ne kreivės niuansu, o visu kontūru (trikampė A-linija, kupolo lankas,
kampuotas stačiakampis, asimetriška pasukta poza) — iš viso **9 iš tikrųjų skirtingos formos**.
Perskirstiau „sienos" tinklelį (8 kortelių) taip, kad **visos 8 kortelės vienoje sekcijoje rodo
skirtingą siluetą**, be pasikartojimo. Po pataisymo pakartotas Playwright screenshot patvirtina:
kiekviena kortelė realiai atrodo kitaip (žr. crop `lp5-wallgrid.png` — klasikinis, platus,
didelė-galva, trikampis, kupolo, pasviręs, su kuodu, V-apykaklė — visos vizualiai atskiriamos).

Pilnas naujų formų aprašymas — `variacijosv2/lp5/VARIANT.md` §4.

## Output failai

- `variacijosv2/lp5/index.html` (28.9 KB) — **pataisytas**: 4 nauji SVG `<symbol>` apibrėžimai
  defs bloke, atnaujintos `<use href="#lp5-bust-*">` nuorodos hero/siena/narystės/patikra/forma
  sekcijose (žr. „Kas pataisyta" aukščiau). Tekstas, struktūra, SEO/JSON-LD, forma — nepaliesti.
- `variacijosv2/lp5/assets/style.css` (19.9 KB) — nepaliestas (avatarų CSS sistema jau buvo
  parašyta bendrai per klases, naujiems simboliams papildomo CSS nereikėjo).
- `variacijosv2/lp5/assets/app.js` (4.9 KB) — nepaliestas.
- `variacijosv2/lp5/assets/og-image.png` (183.8 KB, 1200×630, tikras PNG — patikrinta `file`
  ir `sips`) — nepaliestas.
- `variacijosv2/lp5/VARIANT.md` — **naujai parašytas** šioje sesijoje.

Puslapio bendras svoris (html+css+js+og PNG) ≈ 244 KB — gerokai po 1.5 MB ribos. CSS 19.9 KB —
po 60 KB ribos.

## Priėmimo kriterijai (iš `promptai/06-statyba-v2.md`)

- [x] **Vizualinis raštas iš krypties įgyvendintas pilnai, dominuoja puslapyje** — „užrakinto"
      turinio efektas (blur/mozaika) su aukso VIP ženkleliais ir premium kortelėmis pasirodo
      hero, sienoje, narystėse, patikroje ir formoje — patikrinta realiu Chromium/Playwright
      screenshot'u 360px ir 1440px, vizualas dominuoja per visą scroll'ą.
- [x] **Bent 8-12 skirtingų SVG avatarų, jokios realios/atsisiųstos nuotraukos** — **9** iš tikrųjų
      skirtingų siluetų formų (žr. taisymo aprašymą aukščiau), 19 panaudojimų per 5 sekcijas.
      Grep'u patikrinta: jokio `<img>` tego, jokios nuorodos į `.jpg/.jpeg/.webp`, vienintelis
      rastrinis failas — savas `og-image.png`. Visi dekoratyviniai SVG su `aria-hidden="true"`.
- [x] **Kontrastas ≥4.5:1, prieinamumas, reduced-motion** — perskaičiuota nuo hex (WCAG santykinio
      ryškumo formulė): auksas/fonas **9.4:1**, auksas/paviršius **8.3:1**, tekstas ant aukso
      mygtuko **9.4:1**, prigesintas tekstas/fonas **7.2:1**, prigesintas tekstas/giliausias
      paviršius **5.9:1**, klaidos raudona/paviršius **5.9:1** — visos poros virš ribos su
      atsarga (auksas ant beveik juodo fono TIK atrodo rizikingai, realiai kontrastas aukštas,
      nes auksas yra šviesi spalva). `:focus-visible` (3px auksinis outline) apibrėžtas
      globaliai. `@media (prefers-reduced-motion: reduce)` išjungia visas animacijas +
      `scroll-behavior: auto`, patikrinta CSS peržiūra.
- [x] **360px be horizontalaus scroll, formos veikia** — patikrinta **realiu Chromium per
      Playwright** (chromium-1208 iš cache, nes standartinis `chromium_headless_shell` šiai
      playwright versijai nebuvo atsisiųstas): 360px ir 1440px, abiem `scrollWidth === clientWidth`
      (jokio horizontalaus scroll). Forma: tuščia pateiktis → validacijos klaidos lietuviškai
      („Įrašyk bent 2 simbolių vardą." ir t.t.); pilnai užpildyta (vardas/amžius 30/miestas/
      planas/el.paštas/slaptažodis 11 simb./sutikimas) → sėkmės būsena pasirodo teisingai, be JS
      klaidų konsolėje. Narystės pasirinkimo mygtukai (`data-tier-pick`) sinchronizuojasi su
      formos `<select>` ir pastaba po forma — patikrinta veikiantis. Slaptažodžio rodymo/slėpimo
      perjungiklis — patikrintas, veikia (`type` pasikeičia password↔text).
- [x] **SEO/OG/canonical/JSON-LD užpildyti** — `<title>` 38 simb. (≤60), `description` 124 simb.
      (≤155), `canonical` → `https://vyrukambarys.lt/lp5`, pilnas OG rinkinys (`og:image` — PNG
      1200×630, patikrinta `file`/`sips`), `twitter:card`, `lang="lt"`, du `application/ld+json`
      blokai (Organization + Service, su `suggestedMinAge: 18`).
- [x] **Pilnas, tikras tekstas, jokio lorem ipsum** — antraštė, paantraštė, 5 turinio sekcijos +
      DUK (5 klausimai) + forma + footer su 18+ patvirtinimu. Grep'u patikrinta: jokio „lorem",
      jokių draudžiamų §1/§3/§9 frazių, jokių netikros skubos/trūkumo formuluočių (§9.3 —
      „liko tik X vietų", laikmačiai, „X žmonių žiūri dabar" ir pan. — NĖRA nė vieno).

## §4 mechaninis vizualinio pasiskirstymo patikrinimas (papildomas kriterijus)

| # | Sekcija | Realus vizualas (>1 elementas)? |
|---|---|---|
| 1 | `lp5-hero` | TAIP — 4 užrakinti siluetai + spynų ženkliukai |
| 2 | `lp5-wall` (siena) | TAIP — 8 skirtingų siluetų tinklelis + VIP ženkleliai |
| 3 | `lp5-tiers` (narystės) | TAIP — 2 siluetai narystės kortelėse |
| 4 | `lp5-steps` (žingsniai) | NE — 3 mažos (30px) ikonos, be avataro |
| 5 | `lp5-trust` (patikra) | TAIP — 3 „Patvirtinta" siluetai su varnele, **po viduriu** |
| 6 | `lp5-faq` | NE — akordeonas, grynas tekstas |
| 7 | `lp5-signup` (forma) | TAIP — prieš/po siluetų pora, **po viduriu** |

**Santykis: 5 iš 7 = 71% ≥ 50% reikalavimo.** Siluetai pasirodo **5 skirtingose `<section>`**
(reikalavimas — bent 3, bent viena po viduriu) — reikalavimas viršytas. Registracijos IR
pasitikėjimo sekcijos abi turi realų vizualą (siluetus), ne vien tekstą — tiksliai kaip
reikalauja §4.

## Klasių vardai (`config/draudziamu-zodziu-sarasas.md` §4)

Grep'u patikrinti visi `class="..."` atributai `index.html` ir visi CSS selektoriai
`assets/style.css` — **100% turi `lp5-` prefiksą**. Paieška pagal bendrinius vardus be prefikso
(`hero`, `container`, `wrapper`, `btn`, `card`, `section`, `grid`, `row`, `col`, `cta`, `feature`,
`testimonial`, `footer-links`) grąžino nulį atitikmenų be `lp5-` prefikso. §7 (spalvos/šriftai/
layout modeliai) ir §9 (klišės) patikrinti tiesiogine paieška — nerasta.

## Etiška riba (F17, `analize/sinteze.md`)

Patikrinta: jokio atgalinio laikmačio, jokio „liko tik X vietų", jokio suklastoto realaus laiko
lankytojų skaičiaus. „Aštuoni profiliai, kurie šiandien laukia atrakinimo" ir sienos tinklelis yra
**statinė iliustracija** (fiksuoti pavyzdiniai profiliai kaip produkto savybės demonstracija),
skaičius nesikeičia ir nesudaro įspūdžio apie realaus laiko duomenų srautą — atitinka lp4 QA
etape patvirtintą tą pačią logiką.

## Papildomos pastabos

- **Tracking stekas:** faile nėra realaus GTM/Meta Pixel/OpenAI pixel kodo — tik
  `<!-- tracking: lp5_hero_cta_click -->`, `<!-- tracking: lp5_form_submit -->`,
  `<!-- tracking: lp5_form_success -->` žymos. Kadangi realaus tracking ID prieš šią peržiūrą
  nebuvo, „netrikdyk tracking steko" taisyklė čia neaktuali šiam etapui, bet užfiksuota ateičiai.
- **Testavimo metodas:** realus Chromium (`chromium-1208` iš `~/Library/Caches/ms-playwright`,
  nes ką tik per npm įdiegtai playwright versijai reikalingas naujesnis
  `chrome-headless-shell-1243` build'as nebuvo atsisiųstas šioje aplinkoje — panaudotas jau
  cache'uotas senesnis build'as su `executablePath`) per custom Playwright skriptą scratchpad'e:
  360px/1440px scroll testas (be horizontalaus scroll abiem), pilno puslapio ir sekcijų crop
  screenshot'ai (avatarų vizualinis patikrinimas PRIEŠ ir PO taisymo), formos validacijos/sėkmės
  testas, narystės pasirinkimo ir slaptažodžio perjungiklio testas — visi praėjo be JS klaidų.
- **Backup pastaba:** prieš keičiant `index.html` atsarginė kopija į scratchpad NEBUVO padaryta
  (praleista šiame etape) — visi pakeitimai buvo tikslūs, siauri `Edit` pakeitimai su žinomu
  originaliu turiniu (jis jau buvo perskaitytas ir užfiksuotas šios sesijos pradžioje), todėl
  klaidos rizika minimali, bet tai nukrypimas nuo standartinės darbo tvarkos — kitą kartą prieš
  keitimą reikia padaryti kopiją iš anksto, ne po fakto.
