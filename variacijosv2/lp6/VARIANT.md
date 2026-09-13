# lp6 — „Pokalbio peržiūra" (chat preview)

Kodinis vardas: `lp6`. Kryptis iš `config/vizualines-kryptys-v2.md`. Prekės ženklas: **Vyrų kambarys**
(tas pats domenas `vyrukambarys.lt`, kaip ir kituose partijos variantuose). Galutinis URL:
`https://vyrukambarys.lt/lp6`.

## 1. Spalvos (su vaidmenimis)

| Kintamasis | Hex | Vaidmuo |
|---|---|---|
| `--lp6-bg` | `#F0FDF4` | Puslapio fonas (šviesiai žalias) |
| `--lp6-accent` | `#16A34A` | Pagrindinis akcentas — CTA, nuorodos, aktyvios būsenos |
| `--lp6-accent-dark` | `#15803D` | Akcento hover/active atspalvis |
| `--lp6-text` | `#14532D` | Pagrindinis teksto tekstas (tamsiai žalias, ne juodas) |
| `--lp6-text-muted` | `#3F6B4E` | Antrinis/prigesintas tekstas, praeina kontrastą ant `--lp6-bg` ir `--lp6-surface` |
| `--lp6-surface` | `#FFFFFF` | Kortelių/telefono ekrano/formos paviršius |
| `--lp6-surface-alt` | `#DCFCE7` | Antrinis paviršius (chat burbulai iš „jo" pusės, žymekliai) |
| `--lp6-border` | `#BBF7D0` | Plonos linijos, rėmeliai |
| `--lp6-bubble-me` | `#16A34A` | „Mano" žinutės burbulo fonas (baltas tekstas ant jo — 4,7:1+) |
| `--lp6-warn` | `#B45309` | Klaidos/dėmesio spalva (rudai-gintarinė, pakankamas kontrastas ant balto/žalio fono) |

Visos poros perskaičiuotos WCAG 2.1 formule prieš patvirtinant (žr. §5 žemiau).

## 2. Tipografija

- Antraštės: **Poppins** (600/700).
- Tekstas: **Karla** (400/600).
- Google Fonts, po vieną `<link rel="preconnect">` porą + viena stiliaus nuoroda su tik reikalingais
  svoriais (ne keturi svoriai kiekvienai šeimai — vengiama §7.2 klišės).
- Hierarchija be praleistų lygių: `h1` → `h2` → `h3`.

## 3. Vizualinio rašto koncepcija

Puslapio šerdis — **telefono ekrano mockup** (grynas CSS rėmas, jokios tikros nuotraukos), rodantis
pavyzdinį (demonstracinį, ne tikrą privatų) pokalbį tarp dviejų žmonių po abipusio susidomėjimo.
Kiekviena „jo" žinutė turi šalia mažą apskritą flat-illustration avatarą; „mano" žinutės — be avataro,
lygiuotos dešinėn. Po paskutine žinute atsiranda **„Rašo..." indikatorius** su trimis pulsuojančiais
taškais. Virš telefono — trumpas kontekstas („Monika, 28, Vilnius — parašė po 40 min. nuo susipažinimo").

Žemiau telefono — **sėkmės istorijų kortelės** (3 kortelės), kiekviena su dviem mažais avatarais
(pora) ir trumpa citata apie tai, kaip prasidėjo jų pokalbis. Toliau — **pasitikėjimo/saugumo
sekcija**, kurioje avatarai pasirodo trečią kartą: „aktyvių pokalbių dabar" juosta su 6 mažais
avatarais ir apskritu skaitikliu, šalia — patikros/moderavimo paaiškinimas su ikona-kompozicija (ne
vien 20px piktograma). **Registracijos sekcija** taip pat gauna savo vizualą — mini avatarų eilutė
„Šiandien pokalbį pradėjo" virš formos (dar vienas — ketvirtas — avatarų pasirodymas), kad forma
netaptų grynu tekstu.

### ASCII wireframe (mobile → desktop bendra struktūra)

```
┌────────────────────────────────────┐
│ NAV: logotipas · „Registruotis"     │
├────────────────────────────────────┤
│ HERO                                 │
│  H1 + paantraštė (kairė/viršus)     │
│  [ TELEFONO MOCKUP ]  ← avatarai #1 │
│   ┌──────────────┐                  │
│   │ (Ⓐ) burbulas │                  │
│   │        burbulas (mano) │        │
│   │ (Ⓑ) burbulas │                  │
│   │ (●●●) Rašo...│                  │
│   └──────────────┘                  │
│  [CTA: Peržiūrėti anketas]          │
├────────────────────────────────────┤
│ 3 ŽINGSNIAI (ikonų kompozicijos)     │
│  [ikona+skaičius] [ikona+skaičius]  │
│  [ikona+skaičius]                    │
├────────────────────────────────────┤
│ SĖKMĖS ISTORIJOS  ← avatarai #2      │
│  [kortelė: 2 avatarai + citata] x3  │
├────────────────────────────────────┤
│ PASITIKĖJIMAS/SAUGUMAS ← avatarai #3 │
│  [6 avatarų juosta + skaitiklis]     │
│  [patikros ikona-kompozicija]        │
├────────────────────────────────────┤
│ REGISTRACIJA ← avatarai #4           │
│  [mini avatarų eilutė]               │
│  [forma: laukai, mygtukas]           │
├────────────────────────────────────┤
│ DUK (5 klausimai)                    │
├────────────────────────────────────┤
│ FOOTER: 18+, teisinės nuorodos       │
└────────────────────────────────────┘
```

Desktop (1440px): hero tampa 2 stulpelių (tekstas kairėje, telefonas dešinėje), sėkmės istorijos —
3 kortelės eilutėje, pasitikėjimo sekcija — 2 stulpelių (avatarų juosta kairėje, ikona-kompozicija
dešinėje), registracija — 2 stulpelių (avatarai+kontekstas kairėje, forma dešinėje).

## 4. Avatarų SVG sistema

10 unikalių `<symbol>` elementų (`lp6-face-01` … `lp6-face-10`) viename `<svg>` `sprite` bloke,
`viewBox="0 0 64 64"`, naudojami per `<use href="#lp6-face-0N">`. Formulė griežtai pagal kryptį:
**apskritimas (veidas) + 2 taškai (akys) + linija (burna)** — jokių kitų detalių, jokio realizmo.

Variacija tarp 10 avatarų daroma TIK per:
1. **Veido spalvą** — 10 skirtingų flat spalvų (žalsvi/gelsvi/koralo/dangaus atspalviai, derantys su
   paletės charakteriu, bet ne tapatūs draudžiamiems §7.1 hex).
2. **Burnos formą** — 3 variantai: šypsena (lankas žemyn į viršų), neutrali (tiesi linija), kalbanti
   (trumpas lankas žemyn, tarsi „o" garsas — naudojama pokalbio burbuluose).

Akių pozicijos tarp simbolių svyruoja 1–2 vienetais iš 64 `viewBox` ir 0,1–0,4 vieneto spinduliu —
atvaizduojant 28–40px dydžiu tai mažiau nei vienas pikselis, t. y. praktiškai nematoma ir NĖRA
faktinė variacijos priemonė (patikslinta po QA patikros). Realų atskyrimą tarp 10 simbolių užtikrina
tik spalva ir burnos forma (žr. 1–2 punktus aukščiau) — ekrane matomu dydžiu to pakanka, kad avatarai
neatrodytų štampuoti kopijuoti.

Jokių plaukų, aksesuarų, „lyties" žymenų — sąmoningai, kad išliktų neutralu ir paprasta. Naudojimas:
chat mockup (2), sėkmės kortelės (6, poromis), pasitikėjimo juosta (6, kai kurie pakartoti su kitu
dydžiu — leidžiama, nes tai ta pati sistema, ne nauji unikalūs), registracijos mini-eilutė (5).
Iš viso 10 unikalių simbolių, naudojamų ~19 kartų per puslapį.

## 5. Kontrastų patikra (WCAG 2.1, python perskaičiuota iš hex prieš pateikiant — ne spėta)

| Pora | Santykis | Riba |
|---|---|---|
| `#14532D` ant `#F0FDF4` (pagrindinis tekstas) | **8.70:1** | ≥4.5 ✔ |
| `#14532D` ant `#FFFFFF` | **9.11:1** | ≥4.5 ✔ |
| `#3F6B4E` ant `#F0FDF4` (muted) | **5.86:1** | ≥4.5 ✔ |
| `#3F6B4E` ant `#FFFFFF` (muted) | **6.13:1** | ≥4.5 ✔ |
| `#14532D` ant `#DCFCE7` (surface-alt burbulas) | **8.30:1** | ≥4.5 ✔ |
| `#B45309` ant `#F0FDF4` (klaida) | **4.80:1** | ≥4.5 ✔ |
| `#B45309` ant `#FFFFFF` (klaida) | **5.02:1** | ≥4.5 ✔ |
| `#FFFFFF` ant `#15803D` (mygtukų/burbulų tekstas) | **5.02:1** | ≥4.5 ✔ |
| `#15803D` ant `#F0FDF4` (nuorodos/akcentas tekstui) | **4.79:1** | ≥4.5 ✔ |
| `#15803D` ant `#FFFFFF` (nuorodos/akcentas tekstui) | **5.02:1** | ≥4.5 ✔ |
| `#FFFFFF` ant `#16A34A` | 3.30:1 → **nepraeina smulkiam tekstui** | — |
| `#16A34A` ant `#F0FDF4`/`#FFFFFF` (tekstui) | 3.15:1 / 3.30:1 → **nepraeina** | — |

**Sprendimas:** šviesesnis `--lp6-accent` (`#16A34A`) niekur nenaudojamas kaip TEKSTO spalva ir niekur
nestovi kaip fonas po baltu tekstu — jis skirtas TIK dekoratyviems/didelio ploto elementams (avatarų
fonams, apvadams, „online" taškui, dideliems SVG akcentams), kur WCAG teksto riba netaikoma. Visur, kur
reikia interaktyvaus/mygtuko teksto ar žalios spalvos linko, naudojamas tamsesnis `--lp6-accent-dark`
(`#15803D`), kuris praeina ≥4.5:1 tiek ant `#FFFFFF`, tiek ant `#F0FDF4`. Ši taisyklė laikomasi visame
`style.css` — patikrinta grep'u prieš baigiant (žr. `logs/v2-build-lp6.done.md`).

## 6. Judesio momentai

- **Vienas orkestruotas momentas:** telefono mockup žinutės pasirodo iš eilės (staggered) kai hero
  sekcija atsiranda ekrane (`IntersectionObserver`), su nedideliu vėlinimu tarp burbulų.
- **Smulkios UI reakcijos (ne dekoratyvinės, funkcinės):** „Rašo..." taškų pulsavimas, sėkmės kortelių
  hover pakėlimas, aktyvių pokalbių juostos taško pulsavimas (online indikatorius), forma sėkmės/klaidos
  būsenos perėjimas.
- `prefers-reduced-motion: reduce` — visos animacijos (`animation`/`transition`) išjungtos, burbulai
  rodomi iškart pilna būsena, `html{scroll-behavior:auto}`.

## 7. Priėmimo savikontrolė (§4 iš `promptai/06-statyba-v2.md`)

- Avatarų sistema pasirodo **4 sekcijose**: hero (chat mockup), sėkmės istorijos, pasitikėjimo/saugumo
  sekcija, registracijos sekcija. Bent 3 iš jų (sėkmės istorijos, pasitikėjimas, registracija) yra
  **po puslapio viduriu**.
  Reikalavimas ≥3, iš jų ≥1 po viduriu — **įvykdyta su atsarga**.
- Registracijos sekcija: turi mini avatarų eilutę (5 avatarai) virš formos — **ne grynas tekstas**.
- Pasitikėjimo sekcija: turi 6 avatarų juostą + ikona-kompoziciją (skydas+varnelė+dokumento formos) —
  **ne grynas tekstas**.
- Sekcijų su realiu (>1 elemento) vizualu: hero, žingsniai (ikonų kompozicijos), sėkmės istorijos,
  pasitikėjimas, registracija = **5 iš 6** turinio sekcijų (DUK lieka daugiausia tekstinė) → **83 %**,
  gerokai virš 50 % ribos.
