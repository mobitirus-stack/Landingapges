# lp2 — „Poros“ · Swipe kortelių dėklas

## 1. Spalvos (su vaidmenimis)

| Rolė | Hex | Panaudojimas |
|---|---|---|
| `--bg` fonas | `#FFF1F2` | puslapio fonas, šviesiai rožinis |
| `--accent` akcentas | `#E11D48` | mygtonai, piktogramos, patinka-veiksmas, akcentinės linijos |
| `--accent-text` (papildomas, saugus tekstui) | `#BE123C` | akcento spalvos tekstas/nuorodos ant šviesaus fono — `#E11D48` tiesiogiai kaip smulkaus teksto spalva ant `#FFF1F2` fono duoda tik ~4.43:1 kontrastą (ribinis), todėl smulkiam tekstui naudojame patamsintą to paties atspalvio versiją, kad garantuotai ≥4.5:1. Mygtonų fonui ir dideliems elementams paliktas tikslus `#E11D48`, nes ten kontrastas skaičiuotas atskirai (žr. §3).
| `--secondary` antrinis | `#1E293B` | pagrindinis tekstas, dėklo telefono korpusas |
| `--surface` paviršius | `#FFFFFF` | kortelės, forma, header |
| `--border` riba | `#FECDD3` | linijos, kortelių kraštinės, footer atskyrimas |

## 2. Tipografija
- Antraštės: **Sora** (600/700).
- Tekstas: **Nunito Sans** (400/600).
- Google Fonts, po vieną `<link>` su `preconnect`, be perteklinio svorių kiekio (2 šeimos × 2 svoriai).

## 3. Kontrasto patikra (rankinis skaičiavimas prieš statant)
- Baltas tekstas ant `#E11D48` mygtono fono: santykis ≈ **4.70:1** — praeina normaliam tekstui.
- `#1E293B` tekstas ant `#FFFFFF`/`#FFF1F2`: ≈ **14.6:1** / **~13.9:1** — puikus.
- `#475569` (slate-600) antrinis/pritildytas tekstas ant `#FFF1F2`: ≈ **6.9:1** — praeina.
- `#E11D48` kaip smulkaus teksto/nuorodos spalva ant `#FFF1F2`: ≈ **4.43:1** — per žemas ribinis atvejis, todėl tokiam naudojimui skiriamas `--accent-text: #BE123C` (≈6:1+).
- Realiame naršyklės patikrinime (Playwright) dar kartą patikrinta žemiau, §7.

## 4. Vizualinio rašto koncepcija (proza)

Puslapis statomas aplink vieną didelį, veikiantį objektą: **vertikalų kortelių dėklą telefono
korpuso iliustracijoje**. Telefonas nėra nuotrauka — tai CSS/SVG sukonstruotas korpusas
(`--secondary` spalvos rėmas, apvalūs kampai, viršuje trumpa „ausytė“ juosta, apačioje namų
juostelė) — technikos objekto **mockup**, ne realaus telefono nuotrauka. Korpuso viduje — trys
sluoksniuotos kortelės (aktyvi + dvi už jos, šiek tiek pasukto pasislinkusios), kiekviena su
low-poly avataru, vardu/amžiumi ir dviem apskritais veiksmo mygtonais apačioje („nepatinka“ ✕
kairėje, „patinka“ ♥ dešinėje). Paspaudus mygtoną, viršutinė kortelė realiai nuslysta ir
pasisuka į atitinkamą pusę, dingsta, o dėklas pasipildo nauja kortele iš eilės — tai vienintelis
funkcinis, orkestruotas judesio momentas, kurio aplink sukasi visas puslapis.

Už telefono rėmo (dešinėje/apačioje, priklausomai nuo pločio) — didelė antraštė ir paaiškinimas,
kas tai per dėklas. Žemiau hero sekcijos kortelių/avatarų motyvas kartojasi dar du kartus:
(1) žingsnių sekcijoje kaip mažas iliustratyvus prierašas prie kiekvieno žingsnio, ir (2)
atskiroje „dėklo galerijos“ sekcijoje — horizontalioje juostoje su 6+ skirtingais low-poly
avatarais ir miestų žymomis, parodančioje, kad dėkle yra daug skirtingų anketų, ne viena
pakartota kortelė.

### ASCII wireframe (≥1024px)

```
┌───────────────────────────────────────────────────────────────────┐
│ Poros                    Veikimas  Saugumas  Klausimai [Sukurti →]│  <- nav (nesulipęs, ne sticky)
├───────────────────────────────────────────────────────────────────┤
│  PERBRAUK KAIREN ARBA DEŠINĖN —      ┌─────────────────────┐      │
│  spręsk pats, kas patenka į          │  ▓▓▓▓ telefono korpusas ▓▓ │      │
│  pokalbį.                            │  ┌───────────────┐  │      │
│                                       │  │  ● low-poly    │◄─ kortelė #3 (už)
│  Paaiškinimo pastraipa (2-3 sak.)     │  │    avataras    │  │      │
│                                       │  │  Vardas, amžius│  │      │
│  [Sukurti savo kortelę]               │  │   (✕)   (♥)    │  │      │
│  (vizualizacija, ne tikros nuotr.)    │  └───────────────┘  │      │
│                                       └─────────────────────┘      │
├───────────────────────────────────────────────────────────────────┤
│  Nuo kortelės iki pokalbio                                         │
│  Pirma — ...      Antra — ...      Trečia — ...                   │
├───────────────────────────────────────────────────────────────────┤
│  Kortelės, kurias sutiksi dėkle                                    │
│  (⬤⬤⬤⬤⬤⬤ horizontali avatarų+miestų juosta, scroll mobile)        │
├───────────────────────────────────────────────────────────────────┤
│  Kas saugo dėklą nuo netikrų anketų                                │
│  [rankinė peržiūra] [amžiaus patikra] [pranešimo mygtukas]         │
├───────────────────────────────────────────────────────────────────┤
│  Prieš registruojantis (5× <details>/<summary>)                    │
├───────────────────────────────────────────────────────────────────┤
│  Sukurk savo kortelę — registracijos forma (1 stulpelis)            │
├───────────────────────────────────────────────────────────────────┤
│  Footer: aprašymas + nuorodos viena eilute + 18+ juosta + © eilutė │
└───────────────────────────────────────────────────────────────────┘
```
360px versijoje: nav susitraukia iki „Poros“ + [Sukurti], teksto nuorodos paslepiamos (jokio
hamburger meniu — jos vis tiek pasiekiamos scrolinant); hero — tekstas virš telefono mockupo,
vienas stulpelis; žingsniai/saugumas — vertikaliai vienas po kito; avatarų juosta lieka
horizontali su `overflow-x` scroll tik tos vienos juostos viduje (ne visas puslapis).

## 5. Avataro SVG sistema — kaip generuojami „nariai“ be realių veidų

- Vienas bendras SVG `<symbol id="lowpoly-bust">` (apibrėžtas vieną kartą paslėptoje sprite
  sekcijoje, `position:absolute;width:0;height:0` — NE `display:none`, kad `<use>` veiktų visose
  naršyklėse), sudarytas iš **14 trikampių poligonų** (7 galvos daugiakampiui + 7 pečių/liemens
  trapecijai), sudėliotų `viewBox="0 0 100 100"` erdvėje, apipjaustytas apskritimu.
- Kiekvienas poligonas priklauso vienai iš 5 spalvų grupių (`--f1`..`--f5`), o pati spalvų
  reikšmė ateina iš CSS custom properties, kurios paveldimos į `<use>` „šešėlinį“ medį — taigi
  vienas geometrijos apibrėžimas gali būti perpiešiamas skirtingomis spalvomis be jokio HTML
  dubliavimo.
- 10 skirtingų klasių (`.avatar--rose`, `.avatar--slate`, `.avatar--amber`, `.avatar--teal`,
  `.avatar--plum`, `.avatar--coral`, `.avatar--indigo`, `.avatar--sand`, `.avatar--forest`,
  `.avatar--berry`) kiekviena apibrėžia savo `--f1`..`--f5` paletę (5 to paties tono atspalviai
  nuo tamsaus iki šviesaus) — vizualiai kiekvienas avataras atrodo kaip savarankiškas low-poly
  portretas, nors geometrija bendra.
- Jokių akių/nosies/burnos formų — tik abstrakti daugiakampė galvos+liemens kompozicija su baltu
  facetų kontūru (kaip low-poly meno kūriniuose). Niekas nepanašu į konkretų ar atpažįstamą veidą.
- Naudojama: 8 kortelės swipe dėkle (skirtingos), + dar 2 papildomos avatarų galerijos juostoje
  (iš viso 10 skirtingų spalvinių derinių — atitinka 8-12 reikalavimą).

## 6. Failai
- `index.html`, `assets/style.css`, `assets/app.js` (swipe animacijos logika + validacija).

## 7. Savikritikos / patikros pastabos
Žr. `logs/v2-build-lp2.done.md` — ten užfiksuoti realūs Playwright patikrinimai 360px/1440px,
kontrasto skaičiavimai realiame DOM ir swipe funkcionalumo patvirtinimas.
