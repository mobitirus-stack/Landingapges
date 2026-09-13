# lp1 — Žemėlapio atradimas

Kryptis iš `config/vizualines-kryptys-v2.md`. Prekės ženklas: **Vyrų kambarys**
(`vyrukambarys.lt/lp1`). Šis planas parašytas PRIEŠ kodavimą ir atspindi galutinį rezultatą.

## 1. Spalvos (su vaidmenimis)

| Rolė | Hex | Naudojimas |
|---|---|---|
| Fonas | `#0F1A14` | puslapio bazė, tamsiai žalias |
| Paviršius | `#16241C` | kortelės/panelės, forma, žingsnių plytelės |
| Pakylėtas paviršius | `#1B2C22` | pin'o tooltip fonas |
| Riba | `#26392C` | linijos, kontūrai (ne teksto elementas, kontrastas netaikomas) |
| Tekstas | `#E7F5EE` | pagrindinis tekstas ant tamsaus fono |
| Tekstas (prigesintas) | `#A9C7B8` | antraštės, pagalbinis tekstas |
| Akcentas | `#5EEAD4` | CTA, nuorodos, fokusas, FAQ ženkliukai, „online“ taškas |
| Pin ženkliukas | `#FACC15` | žemėlapio pin'o forma (visada ta pati spalva — variaciją duoda avatarai, ne pin'ai) |
| Klaida | `#FCA5A5` | formos klaidų tekstas |

Kontrastas patikrintas skaičiavimu (WCAG santykio formulė): teksto/fono poros duoda
8.8–15.9:1, akcentas ant fono/paviršiaus — 10.9–12.1:1, tamsus tekstas ant akcento/pin
mygtukų — 11.6–12.1:1. Visos poros gerokai virš 4.5:1 ribos.

## 2. Tipografija

- Antraštės: **Manrope** 600/700/800 (h1 su -0.01em tracking, be perteklinio suspaudimo).
- Tekstas: **Inter** 400/500/600.
- Google Fonts kraunama per `preconnect` + vieną `<link>`, tik reikalingi svoriai (3+3),
  ne keturi kiekvienai šeimai — sąmoningai mažesnis payload nei įprastas šablonas.

## 3. Vizualinio rašto koncepcija

Puslapio šerdis — **pilno pločio stilizuotas SVG žemėlapis**, ne mažas iliustracinis
priedas. Žemėlapis sudarytas iš: bazinio gradiento, smulkaus gatvių tinklelio (SVG
`<pattern>`), keturių pagrindinių „prospektų“ (storesni įstriži brūkšniai), dviejų
antrinių gatvių, ~18 miesto kvartalų (suapvalinti stačiakampiai), parko dėmės (organinė
`path` forma) ir upės/kanalo linijos su akcento skaidrumu. Virš žemėlapio — 10 apskritų
pin'ų (klasikinė „ašaros“ forma, `#FACC15`), kiekviename — gradientinis avataras su
inicialu. Centre, virš žemėlapio, — didelė "match" kortelė: didesnis avataras, vardas,
amžius, atstumas, CTA.

Vienas orkestruotas judesio momentas: pin'ai ir match kortelė atsiranda paeiliui
(stagger, `animation-delay` pagal indeksą) puslapiui pasikrovus. Smulkesnės UI reakcijos
(leidžiamos pagal briefą): pin'o hover/focus tooltip su vardu ir atstumu, pulsuojantis
„online“ taškas ant match kortelės avataro, FAQ `+`/`–` perjungimas, formos lauko
paryškinimas fokusuojant. Visos animacijos išjungiamos su `prefers-reduced-motion: reduce`.

### ASCII wireframe (desktop)

```
┌─────────────────────────────────────────────────────────┐
│ VK Vyrų kambarys      Kaip veikia  Klausimai   [Kurti profilį] │
├─────────────────────────────────────────────────────────┤
│              (žymė) Interaktyvus žemėlapis                │
│        Atidaryk žemėlapį ir pamatyk, kas yra netoliese.    │
│              paantraštė + [Kurti profilį žemėlapyje]        │
│ ┌───────────────────────────────────────────────────────┐ │
│ │ [pin R] [pin I]      [pin A]        [pin T]  [pin G]   │ │
│ │   [pin K]     ┌─────────────────┐        [pin O]       │ │
│ │               │  avataras (84px) │                     │ │
│ │  [pin D]      │  Eglė, 29        │      [pin L]         │ │
│ │      [pin V]  │  2,3 km          │  [pin M]             │ │
│ │               │  [Žiūrėti anketą]│                      │ │
│ │               └─────────────────┘                       │ │
│ └───────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│  Nuo žymeklio iki pokalbio — 3 žingsniai (ikonos+tekstas)  │
├─────────────────────────────────────────────────────────┤
│  Miestai, kuriuose jau atsiranda žymekliai — miestų sąrašas│
├─────────────────────────────────────────────────────────┤
│  Kaip tikriname anketas prieš jas paskelbiant — 3 punktai  │
├─────────────────────────────────────────────────────────┤
│  Sukurk profilį žemėlapyje — forma (kairėje intro tekstas) │
├─────────────────────────────────────────────────────────┤
│  Dažniausiai užduodami klausimai — 5 <details>             │
├─────────────────────────────────────────────────────────┤
│  Footer: ženklas, nuorodos, 18+ blokas, copyright          │
└─────────────────────────────────────────────────────────┘
```

Mobiliame (360px) žemėlapio blokas išlaiko `aspect-ratio: 4/5`, pin'ai išsidėsto tais
pačiais procentiniais taškais (viewBox skalė automatiškai prisitaiko), match kortelė
sumažėja iki `min(240px, 80%)`.

## 4. Avatarų SVG sistema (be jokių realių veidų)

11 skirtingų avatarų (10 pin'ams + 1 match kortelei), kiekvienas — `<span class="lp1-avatar lp1-avatar--N">`:

1. **Spalvinė dėmė**: CSS `radial-gradient(circle at 30% 28%, --c2, --c1 72%)` ant
   `::before` pseudo-elemento — dviejų atspalvių gradientas, unikalus kiekvienam avatarui
   (teal/mint, rudas/gintarinis, žalias/mėtinis, mėlynas/dangaus, violetinis/levandų,
   bordo/koralinis, tamsiai žalias/smaragdinis, indigo/žydras, alyvuogių/geltonas,
   grafito/mėtinis, teal/gintarinis „match“ derinys).
2. **Vinjetė**: `::after` su `radial-gradient(circle at 50% 55%, rgba(0,0,0,.4), transparent 58%)`
   — patamsina centrą, kad inicialas išliktų skaitomas nepriklausomai nuo pasirinktos
   gradiento spalvos (garantuoja kontrastą, ne vien skaičiavimu paremtą prielaidą).
3. **„Triukšmas“**: bendra SVG `<filter id="lp1-grain">` su `feTurbulence` (fractalNoise) +
   `feColorMatrix`, konvertuojanti triukšmą į permatomą baltą grūdėtumą; taikoma per
   `filter: url(#lp1-grain)` + `mix-blend-mode: overlay` atskiram vidiniam sluoksniui —
   tai ir yra „SVG triukšmas“ krypties apraše.
4. **Inicialas**: vienas didžiosios raidės simbolis (Manrope 800), `aria-hidden="true"` —
   dekoratyvus, nes tikras vardas/atstumas jau pateiktas per `aria-label` ant pin'o
   arba matomą tekstą match kortelėje.

Jokio veido, jokios geometrinės „akių/burnos“ kompozicijos — tik spalva, gradientas,
grūdėtumas ir raidė, kaip numatyta krypties apraše.

## 5. Formos logika

Vienas formos žingsnis (be wizard'o): slapyvardis, amžius, esu/ieškau (native `<select>`,
ne pill/chip perjungikliai), miestas, el. paštas, slaptažodis (su „Rodyti slaptažodį“
žymimuoju langeliu, ne persijungiančiu tekstu), 18+ sutikimo varnelė. JS validacija
(`assets/app.js`) rodo klaidas prie kiekvieno lauko, fokusuoja pirmą klaidingą lauką,
sėkmės atveju paslepia formą ir rodo patvirtinimo panelę su `tabindex="-1"` fokusu.

## 6. Terminija (savarankiškai parinkta šiam variantui)

Kadangi `config/terminu-zemelapis.md` skirtas v1 (`lg1..lg10`), o ši partija (`lp1..lp10`)
yra atskira, žodynas parinktas savarankiškai ir nekartoja bendrinių pakaitalų
(„platforma“, „svetainė“, „vartotojas“ ir pan. nenaudojami): **žymeklis** (pin), **narys**
(žmogus kitoje pusėje), **profilis/anketa** (paskyra), **susidomėjimas yra abipusis**
(match), **pokalbis** (susirašinėjimas), **patvirtinimas** (18+ + taisyklės).

## 7. Sąmoningai vengta klišių

Be ALL-CAPS eyebrow (žymė normaliu registru), be „→“ mygtukuose, be generinių CSS klasių
(`hero/container/wrapper/btn/card/section/grid/row/col/cta/feature/testimonial/footer-links`
— viskas su `lp1-` priešdėliu ir specifiniais vardais), be emoji kaip funkcinių ikonų
(visos ikonos — inline SVG), be slaptažodžio rodymo kaip persijungiančio teksto, be
trijų žingsnių registracijos su progreso juosta, be lipnios permatomos/blur antraštės,
be netikrų „X žmonių dabar žiūri“ ar atgalinio skaičiavimo teiginių.
