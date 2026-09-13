# lp4 — „Vyrų kambarys" — Gyvo aktyvumo juosta

## 1. Paletė (su vaidmenimis)

| Kintamasis | Hex | Vaidmuo |
|---|---|---|
| `--lp4-bg` | `#0B1120` | pagrindinis puslapio fonas, tamsiai mėlynas |
| `--lp4-surface` | `#111827` | kortelių / paviršių fonas |
| `--lp4-surface-2` | `#1A2333` | pakylėtas paviršius (hover, aktyvūs elementai) |
| `--lp4-border` | `#243047` | plonos ribos ant tamsaus fono |
| `--lp4-accent` | `#22D3EE` | pirminis akcentas — žydra (CTA, nuorodos, grafikai) |
| `--lp4-accent-ink` | `#04252C` | tamsus tekstas ant žydros (mygtukų rašalas) |
| `--lp4-secondary` | `#4ADE80` | antrinis akcentas — žalia (online būsena, teigiami skaičiai) |
| `--lp4-text` | `#E7ECF5` | pagrindinis tekstas ant tamsaus fono |
| `--lp4-text-muted` | `#96A3BF` | antrinis / prigesintas tekstas |
| `--lp4-danger` | `#F87171` | klaidų būsenos |

Avatarų sistemai naudojami papildomi tono variantai iš tos pačios šalto spektro šeimos
(`#3B82F6` mėlyna, `#2DD4BF` teal, `#38BDF8` sky, `#34D399` smaragdinė) — jokios naujos
prekės ženklo spalvos, tik gradiento partneriai akcentui ir antriniam.

## 2. Tipografija

- Antraštės: **Space Grotesk** (600/700).
- Tekstas: **IBM Plex Sans** (400/500/600).
- Abu kraunami iš Google Fonts su `preconnect` + vienu `<link>` (2 šeimos, po du svorius —
  ne keturis, kad neatitiktų draudžiamo „perteklinio šrifto krovimo" modelio §7.2/20).
- Antraščių tarpai — įprasti (be sukryžiuoto -3–4,5% letter-spacing signature, §7.2/18-19).

## 3. Vizualinio rašto koncepcija

„Vyrų kambarys" pristatomas kaip bendruomenė, kurioje **matai gyvenimą prieš prisijungdamas**:
kairėje hero pusėje — tekstas ir CTA, dešinėje — pavyzdinė **gyvo aktyvumo juosta** (live-feed
sąrašas su monogramų avatarais ir pulsuojančiu online tašku). Žemiau — statistikos „dashboard"
su 4 skaitikliais ir SVG sparkline grafikais, kai kurie su mini avatarų klasteriu. Toliau —
3 žingsnių eiga, pasitikėjimo/patikros sekcija su patikrintų narių juosta, miestų aktyvumo
sąrašas su mini grafikais, registracijos forma su „kas šiuo metu aktyvus" juosta šalia,
DUK ir poraštė.

Visos „gyvo veiksmo" iliustracijos aiškiai pateikiamos kaip **pavyzdinis / iliustracinis rodinys**
(„pavyzdinė sekundės nuotrauka", „tokia veikla vyksta kiekvieną dieną") — NE kaip tikras
realaus laiko duomenų srautas apie būtent šį apsilankymą, ir NE kaip dirbtinė skuba
(jokių atgalinių laikmačių, jokių „liko X vietų", jokių „X žmonių žiūri šį puslapį dabar").
Tai produkto savybės vizualizacija — ta pati logika, kaip lp2 telefono makete rodomas swipe
dėklas ar lp1 žemėlapio pin'ai — o ne manipuliatyvus melagingas pranešimas.

### ASCII wireframe

```
┌─────────────────────────────────────────────────────────────┐
│ NAV: Vyrų kambarys        Aktyvumas  Statistika  DUK  [Reg.] │
├─────────────────────────────────────────────────────────────┤
│ HERO (2 col desktop)                                         │
│  H1 + paragrafas + 2 CTA        │ ┌─ Gyvo aktyvumo juosta ─┐ │
│  „500+ aktyvių narių šiandien"  │ │ (avatar) Vėjūnė prisijungė│ │
│                                  │ │ (avatar) Živilė...      │ │
│                                  │ │ (avatar) Odeta + Raminta...│ │
│                                  │ └─────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ STATISTIKA — 4 kortelės: skaičius + sparkline SVG            │
│ [1 240 narių] [68% grafikas] [avataras+avataras +126/sav.]   │
├─────────────────────────────────────────────────────────────┤
│ EIGA — 3 žingsniai (ikona-kompozicija + trumpas tekstas)      │
│  1) Profilis  2) Naršymas  3) Pirmas pokalbis (+ mini avataras)│
├─────────────────────────────────────────────────────────────┤
│ PASITIKĖJIMAS — didelis patikros ženklas + patikrintų narių   │
│  avatarų juosta su varnelės ženkliuku ant kiekvieno            │
├─────────────────────────────────────────────────────────────┤
│ MIESTAI — 5 miestų sąrašas: pavadinimas, narių sk., mini      │
│  sparkline, 1 avataras prie kiekvieno                         │
├─────────────────────────────────────────────────────────────┤
│ REGISTRACIJA — forma (vardas/el.paštas/miestas/amžius/slapt.) │
│  virš formos: „Kas šiuo metu aktyvus" — 6 avatarų juosta      │
├─────────────────────────────────────────────────────────────┤
│ DUK — 5 klausimai (akordeonas, tekstinė sekcija)              │
├─────────────────────────────────────────────────────────────┤
│ FOOTER — prekės ženklas, nuorodos, 18+ blokas, copyright      │
└─────────────────────────────────────────────────────────────┘
```

## 4. Avatarų SVG/CSS sistema

12 skirtingų monogramų apskritimuose (CSS `linear-gradient` fonas + inicialai `<span>` viduje,
`aria-hidden="true"` ant dekoratyvios dalies, o vardas/veiksmas šalia — tikras tekstas, kurį
skaito ekrano skaitytuvas). Jokių veidų, jokių siluetų — grynas geometrinis ženkliukas.

| # | Inicialai | Vardas (pavyzdiniuose įrašuose) | Gradientas |
|---|---|---|---|
| 1 | VĖ | Vėjūnė | `--lp4-accent` → `--lp4-secondary` |
| 2 | ŽI | Živilė | `--lp4-secondary` → `--lp4-accent` |
| 3 | OD | Odeta | `--lp4-accent` → `#3B82F6` |
| 4 | RA | Raminta | `#3B82F6` → `--lp4-accent` |
| 5 | KA | Kamilė | `--lp4-secondary` → `#2DD4BF` |
| 6 | VI | Viltė | `#2DD4BF` → `--lp4-secondary` |
| 7 | DO | Dovilė | `--lp4-accent` → `#2DD4BF` |
| 8 | MI | Milda | `#38BDF8` → `--lp4-secondary` |
| 9 | NE | Neringa | `--lp4-secondary` → `#38BDF8` |
| 10 | JU | Justina | `--lp4-accent` → `#34D399` |
| 11 | PA | Paulina | `#34D399` → `--lp4-accent` |
| 12 | AU | Aušra | `#3B82F6` → `#2DD4BF` |

Naudojimas per sekcijas (žr. §5 savikontrolę žemiau): hero live-feed (6), statistika (4 mini +
klasteris), eiga (1 pavyzdinis paminėjimas), pasitikėjimas (6 su varnele), miestai (5), forma (6).
Tie patys 12 avatarų perpanaudojami skirtingose kombinacijose — tai numatyta (realaus produkto
elgsena), ne klaida.

Online taškas: 8px apskritimas `--lp4-secondary` su `box-shadow` žiedu, pulsuojantis
`@keyframes lp4-pulse` (scale+opacity), išjungiamas per `prefers-reduced-motion`.

Sparkline: inline `<svg viewBox="0 0 120 36">` su `<polyline>`, spalva pagal kontekstą
(augimas → `--lp4-secondary`, neutralu → `--lp4-accent`), su `<title>` trumpu apibūdinimu.

## 5. Sekcijų vizualinio pasiskirstymo savikontrolė (§4 reikalavimas)

| Sekcija | Realus vizualas (>1 elementas)? | Kur |
|---|---|---|
| Hero | TAIP — live-feed juosta, 6 avatarai + pulsas | viršuje |
| Statistika | TAIP — 4 sparkline SVG + avatarų klasteris | po hero |
| Eiga (3 žingsniai) | TAIP — 3 ikonų kompozicijos + 1 mini avataras | vidurys |
| Pasitikėjimas | TAIP — didelis „verified" ženklas + 6 avatarai su varnele | **po puslapio viduriu** |
| Miestai | TAIP — 5× mini sparkline + 5 avatarai | po viduriu |
| Registracija | TAIP — forma + 6 avatarų „aktyvūs dabar" juosta | po viduriu |
| DUK | NE — akordeonas, tekstas | po viduriu |

**Santykis: 6 iš 7 sekcijų (be nav/footer) turi realų vizualą = 86 % ≥ 50 %.**
Avatarai pasirodo **6 skirtingose `<section>`** (reikalavimas — bent 3, bent viena po viduriu) —
reikalavimas smarkiai viršytas. Forma IR pasitikėjimo sekcija abi turi realų vizualą (ne vien tekstą).

## 6. Kalbinė/struktūrinė diferenciacija nuo žinomų batch1 sprendimų

- Nekartojama „Nuo X iki Y" antraštės konstrukcija (lp1/lp2 jau naudoja) — čia „Tavo pirmos
  savaitės eiga".
- Pavyzdiniai vardai (12 iš viso — žr. §4 lentelę) patikrinti su lp1/lp2 sąrašais. Po v2 QA
  pataisos (2026-09-14): 6 vardų, kurie iš pradžių sutapo su lp2 (Ugnė, Gabrielė, Aistė, Ieva,
  Simona, Karolina), pakeisti į Vėjūnė, Živilė, Odeta, Raminta, Dovilė, Justina. Kadangi
  originalūs sąrašo #9 (Justina) ir #11 (Dovilė) jau naudojo tuos pačius vardus, jie taip pat
  pervadinti į Neringa ir Paulina, kad išliktų 12 unikalių vardų be dublikatų pačiame lp4 faile.
  Ankstesnis teiginys „naudojamas visiškai kitas 12 vardų sąrašas, nesikartojantis su lp1/lp2"
  buvo neteisingas — dabar tai patikrinta ir ištaisyta.
- Registracijos forma — **vieno ekrano**, NE 3 žingsnių su progreso juosta (draudžiamas
  referencinis modelis §7.3/26-27).
- Amžius ir miestas NĖRA sudėti į tą pačią dviejų stulpelių eilutę (draudžiamas modelis §7.3/29) —
  kiekvienas savo pilno pločio eilutėje.
- Slaptažodžio rodyti/slėpti — su SVG akies ikona, ne tekstinis perjungiklis (draudžiama §7.4/46).
- 18+ sutikimo formuluotė — identiška lp1/lp2/lp3 (teisinis tekstas, sąmoningai nekeičiama,
  patvirtinta QA batch1 ataskaitoje kaip priimtina išimtis).

## 7. Techninės pastabos

- Klasės: visos su `lp4-` prefiksu, jokių `config/draudziamu-zodziu-sarasas.md` §4 bendrinių vardų.
- `og:image` — PNG 1200×630, eksportuotas Playwright screenshot'u iš `assets/og-image.svg`
  (lokali kompozicija, ne stock).
- Tracking: `<!-- tracking: lp4_signup_submit -->`, `<!-- tracking: lp4_signup_success -->`,
  `<!-- tracking: lp4_faq_toggle -->` — tik žymos, jokio realaus GTM/Pixel kodo.
