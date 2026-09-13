# lp5 — „Aukso raktas" — VIP / premium atrakinimas

> Šis failas parašytas užbaigimo/QA etape: ankstesnis statybos agentas jau buvo sukūręs
> `index.html`, `assets/style.css`, `assets/app.js`, `assets/og-image.png`, bet nutrūko dėl API
> limito prieš parašydamas `VARIANT.md` ir `logs/v2-build-lp5.done.md`. Šis dokumentas aprašo
> turinį TOKĮ, KOKS JIS YRA PO patikrinimo ir taisymo (žr. `logs/v2-build-lp5.done.md` §"Kas
> buvo pataisyta" dėl konkretaus pakeitimo).

## 1. Paletė (su vaidmenimis)

| Kintamasis | Hex | Vaidmuo |
|---|---|---|
| `--lp5-bg` | `#0C0A09` | pagrindinis puslapio fonas, beveik juodas |
| `--lp5-surface` | `#1C1917` | kortelių / paviršių fonas |
| `--lp5-surface-2` | `#241F1A` | pakylėtas paviršius (forma, siena, „top" narystė) |
| `--lp5-surface-3` | `#2C2620` | siluetų užpildo spalva (avataro `fill`) |
| `--lp5-text` | `#F5F5F4` | pagrindinis tekstas ant tamsaus fono |
| `--lp5-muted` | `#A89A82` | antrinis / prigesintas tekstas (eyebrow, pastabos) |
| `--lp5-muted-2` | `#C9BFAE` | kūno tekstas (šviesesnis už `muted`) |
| `--lp5-gold` | `#D4AF37` | pirminis akcentas — auksinė (CTA, apvadai, siluetų kontūras) |
| `--lp5-gold-dim` | `#B8952E` | prigesinta auksinė (antriniai apvadai, `--line` mygtukai) |
| `--lp5-ink` | `#0C0A09` | tekstas ant aukso fono (mygtukai, ženkleliai) |
| `--lp5-border` / `--lp5-border-soft` | `#3A342C` / `#2A251F` | ribos ant tamsaus fono |
| `--lp5-danger` | `#F87171` | formos klaidų tekstas |
| `--lp5-success` | `#86EFAC` | „Patvirtinta" antraštė patikros kortelėse |

**Kontrastas (perskaičiuota nuo hex, WCAG santykinio ryškumo formulė — auksas ant beveik juodo
fono yra rizikinga kombinacija tik iš pažiūros, realūs skaičiai patikrinti):**

| Pora | Santykis |
|---|---|
| `--lp5-gold` tekstas/apvadas ant `--lp5-bg` | **9.4 : 1** |
| `--lp5-gold` ant `--lp5-surface` | **8.3 : 1** |
| `--lp5-ink` tekstas ant `--lp5-gold` mygtuko | **9.4 : 1** |
| `--lp5-muted` ant `--lp5-bg` | **7.2 : 1** |
| `--lp5-muted` ant `--lp5-surface-2` (giliausias atvejis) | **5.9 : 1** |
| `--lp5-danger` ant `--lp5-surface-2` | **5.9 : 1** |

Visos poros ≥ 4.5:1 reikalavimą viršija su atsarga; nė viena nesiartina prie ribos.

## 2. Tipografija

- Antraštės: **Cormorant** (500/600/700) — serifinis, prabangos registro šriftas.
- Tekstas: **Karla** (400/500/700).
- Abu kraunami per vieną `preconnect` porą + vieną `<link>`, po 3/4 svorius — ne per daug.
- Mygtukų šriftas — Karla 700, be ALL-CAPS.

## 3. Vizualinio rašto koncepcija

„Aukso raktas" pristatomas kaip **užrakintas VIP klubas**: visi kitų narių profiliai visame
puslapyje rodomi kaip **auksu apvesti siluetai su blur/mozaikos efektu** — jie „atsirakina"
(vizualiai, ne funkciškai) tik registracijos sekcijoje, kur prieš/po pora parodo tą patį profilį
blur → patvirtinta (varnelės ženkliuku). VIP ženkleliai (auksinė piliulė) žymi aukštesnio lygio
profilius sienoje, hero eilutėje ir narystės kortelėse.

Etiška riba: nėra jokio suklastoto laikmačio, „liko tik X vietų" ar realaus laiko lankytojų
skaičiaus. „Aštuoni profiliai, kurie šiandien laukia atrakinimo" yra statinė iliustracija (fiksuoti
pavyzdiniai profiliai kaip produkto savybės demonstracija), ne dinamiškas trūkumo pranešimas —
skaičius nesikeičia, nėra jokio pretenzijos į realaus laiko duomenis.

### ASCII wireframe

```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Aukso raktas         Narystės  Patikra  Klausimai [CTA] │
├─────────────────────────────────────────────────────────────┤
│ HERO (2 col desktop)                                         │
│  H1 + lede + 2 CTA          │ 4× užrakinta kortelė:          │
│  „Kiekvienas užrakintas      │  siluetas(blur) + miesto/amž.  │
│   profilis slepia..."        │  užrašas + spynos ženkliukas   │
├─────────────────────────────────────────────────────────────┤
│ SIENA — 8 užrakintų profilių tinklelis (2×4 / 4×2), kai kurie│
│  su mozaikos overlay, 2 su VIP ženkleliu                      │
├─────────────────────────────────────────────────────────────┤
│ NARYSTĖS — 2 kortelės (Auksinė / Platininė), kiekviena su     │
│  savo siluetu viršuje ir kainos/privalumo sąrašu              │
├─────────────────────────────────────────────────────────────┤
│ ŽINGSNIAI — 3 ikonų kompozicijos (raktas/skydas/atrakinimas)  │
├─────────────────────────────────────────────────────────────┤
│ PATIKRA — tekstas kairėje, dešinėje 3 „Patvirtinta" siluetai  │
│  su varnelės ženkliuku (PO PUSLAPIO VIDURIO)                  │
├─────────────────────────────────────────────────────────────┤
│ DUK — 5 klausimai (akordeonas, tekstinė sekcija)              │
├─────────────────────────────────────────────────────────────┤
│ FORMA — kairėje prieš/po siluetų pora (blur → patvirtinta),   │
│  dešinėje registracijos forma su narystės pasirinkimu         │
│  (PO PUSLAPIO VIDURIO)                                        │
├─────────────────────────────────────────────────────────────┤
│ FOOTER — prekės ženklas, teisinės nuorodos, 18+ blokas        │
└─────────────────────────────────────────────────────────────┘
```

## 4. Avatarų SVG sistema — siluetai su aukso apvadu

**9 skirtingų bazinių siluetų** (`lp5-bust-a` … `lp5-bust-i`), kiekvienas — vientisas kontūras
(galva + liemuo kaip `<circle>` + `<path>`), be veido detalių, užpildytas `--lp5-surface-3` ir
apvestas `--lp5-gold` (`stroke-width: 2.4`). Skirtumai TIKRAI matomi (patikrinta realiu render'iu,
ne tik kode) — kiekvienas siluetas turi kitokią proporciją/formą, ne tik CSS `scaleX(-1)` veidrodį:

| ID | Forma | Aprašymas |
|---|---|---|
| `bust-a` | Klasikinis | vidutinė galva, apvalūs pečiai — bazinė forma |
| `bust-b` | Pilnas siluetas | maža galva, labai platūs/pilni pečiai (beveik per visą plotį) |
| `bust-c` | Didelė galva | didelė galva (r=32), siauri pečiai — „galva-akcentas" |
| `bust-d` | A-linijos trikampis | tiesiomis linijomis platėjantis apsiaustas, ne kreivė |
| `bust-e` | Kupolo forma | vientisas lankas (SVG `A` arc) — apvalus „kupolo" liemuo |
| `bust-f` | Pasviręs (asimetrinis) | vienas petys aukštesnis/siauresnis, kitas platesnis/žemesnis — realiai skiriasi veidrodinėje versijoje |
| `bust-g` | Su kuodu | prie galvos pridėtas mažas apskritimas (šukuosenos bumbulas) |
| `bust-h` | V formos apykaklė | pečių linijoje V formos įpjova prie kaklo |
| `bust-i` | Kampuotas | stačiakampio formos, plokšti pečiai (ne apvalūs) |

Naudojimas per sekcijas (18 panaudojimų iš 9 unikalių formų): hero (a, f-veidrodis, i, g),
siena (a, b, c, d, e, f, g, h — visos 8 skirtingos vienoje sekcijoje, be pasikartojimo),
narystės (e, i), patikra (c, f-veidrodis, b), forma (d prieš/po — sąmoningai tas pats profilis
abiejose pusėse, nes tai ta pati istorija).

**Svarbu (žr. `logs/v2-build-lp5.done.md`):** ankstesnė versija turėjo tik 5 bazines formas ir
pasikliovė CSS veidrodžiu (`scaleX(-1)`) papildomai variacijai — bet visos 5 formos buvo
simetriškos kairė/dešinė, todėl veidrodis nekeitė vaizdo ir siena realiai atrodė kaip vienas
pakartotas ženkliukas. Pataisyta pridedant 4 naujas, iš esmės kitokios siluetos formas (b nauja
proporcija, d/e/i visiškai kitokia kontūro geometrija, f — sąmoningai asimetriška, kad veidrodis
realiai veiktų) ir perskirstant sienos tinklelį taip, kad visos 8 kortelės rodo skirtingą formą.

Blur/mozaikos efektas (`--visual--blur`, `--visual--mosaic`) simuliuoja „neatrakintą" profilį;
verifikuotas apvalas ženkliukas (`--verified-badge`) su varnele žymi patvirtintus profilius.

## 5. Sekcijų vizualinio pasiskirstymo savikontrolė (§4 reikalavimas)

| # | Sekcija | Realus vizualas (>1 elementas)? | Kur |
|---|---|---|---|
| 1 | `lp5-hero` | TAIP — 4 užrakinti siluetai + spynų ženkliukai | viršuje |
| 2 | `lp5-wall` (siena) | TAIP — 8 skirtingų siluetų tinklelis + VIP ženkleliai | po hero |
| 3 | `lp5-tiers` (narystės) | TAIP — 2 siluetai narystės kortelėse | vidurys |
| 4 | `lp5-steps` (žingsniai) | NE — 3 mažos ikonos (30px), be avataro | vidurys |
| 5 | `lp5-trust` (patikra) | TAIP — 3 „Patvirtinta" siluetai su varnele | **po puslapio viduriu** |
| 6 | `lp5-faq` | NE — akordeonas, grynas tekstas | po viduriu |
| 7 | `lp5-signup` (forma) | TAIP — prieš/po siluetų pora + forma | **po puslapio viduriu** |

**Santykis: 5 iš 7 sekcijų (71%) turi realų vizualą, ≥ 50% reikalavimas įvykdytas.**
Siluetai pasirodo **5 skirtingose `<section>`** (reikalavimas — bent 3, bent viena po viduriu) —
`lp5-trust` IR `lp5-signup` abi po puslapio viduriu ir abi su realiu vizualu, ne vien tekstu —
tiksliai kaip reikalauja §4 dėl formos ir pasitikėjimo sekcijų.

## 6. Judesys

Vienas orkestruotas momentas: aukso švytėjimo pulsas per pirmą užrakintų kortelių eilę hero
sekcijoje (`lp5-shimmer`, suveikia vieną kartą su paeiliui vėluojančiu `animation-delay`).
Smulkios funkcinės UI reakcijos (nesiskaito kaip antras „judesys"): patvirtinimo ženkliuko
pulsavimas (`lp5-pulse`, begalinis, bet mažas ir funkcinis), sienos kortelės hover/focus pakėlimas,
FAQ akordeono nativus atidarymas. Visos animacijos išjungiamos per
`@media (prefers-reduced-motion: reduce)`, įskaitant `html { scroll-behavior: auto; }`.

## 7. Techninės pastabos

- Klasės: visos su `lp5-` prefiksu — patikrinta grep'u prieš
  `config/draudziamu-zodziu-sarasas.md` §4/§7/§9, jokių atitikmenų be prefikso.
- `og:image` — `assets/og-image.png`, tikras PNG 1200×630 (patikrinta `file`/`sips`), ne
  pervadintas SVG.
- Puslapio bendras svoris (html+css+js+og PNG) ≈ 244 KB — gerokai po 1.5 MB ribos. CSS ≈ 19.9 KB
  — po 60 KB ribos.
- Tracking: `<!-- tracking: lp5_hero_cta_click -->`, `<!-- tracking: lp5_form_submit -->`,
  `<!-- tracking: lp5_form_success -->` — tik žymos, jokio realaus GTM/Pixel kodo (jo šiame
  variante ir nebuvo, tikrinti nereikėjo — nauja statyba, ne esamas produkcinis failas).
