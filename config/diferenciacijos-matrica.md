# Diferenciacijos matrica — 10 variantų × 14 ašių

**Fazė:** 2 (art direction). **Statusas:** privalomas įvestis visiems fazės 3 statybos agentams.
**Šaltiniai:** `analize/sinteze.md`, `analize/url-1..3.md`, `config/dizaino-kryptys.md`, `promptai/02-diferenciacija.md`.
**Taisyklė statybos agentui:** čia nurodytos reikšmės nėra pasiūlymas. Nukrypti nuo savo eilutės negalima;
jei kas nors neįmanoma techniškai — tai eskaluojama orkestratoriui, o ne keičiama savo nuožiūra.

Galutiniai aplankai: `variacijos/lg1-matmuo` … `variacijos/lg10-atvirukas`
(atitinka deployment schemą `vyrukambarys.lt/lg1` … `/lg10`).

---

# DALIS 1 — Bendras funkcinis skeletas (vienintelis dalykas, kurį dalinasi visi 10)

Skeletas aprašytas **funkcijomis**. Funkcija privaloma; jos forma, vieta, svoris ir eiliškumas — skiriasi
kiekviename variante (žr. ašį 8). Funkcijų numeracija paveldėta iš `analize/sinteze.md` dalies 1.

| ID | Funkcija | Ką konkrečiai privalo padaryti variantas | Minimali apimtis |
|---|---|---|---|
| F1 | Orientacija ir tapatybė | Per pirmą sekundę pasakyti, kas tai ir kad tai 18+ produktas | prekės ženklo žyma + amžiaus kategorijos signalas |
| F2 | Grįžtančio nario atskyrimas | Duoti jau registruotam žemo prioriteto išėjimą, nekonkuruojantį su pagrindiniu taku | 1 tekstinė nuoroda (ne mygtukas, ne antrinis CTA antraštėje) |
| F3 | Pozicionavimo teiginys | Viename tikrame `<h1>` pasakyti, kuo ši platforma skiriasi nuo to, ką lankytojas bandė | 1 `<h1>` + 1 paaiškinamoji eilutė |
| F4 | „Ar čia yra gyvų žmonių“ | Kiekybinis aktyvumo įrodymas, kuris **negali sugriūti** (nerodo nulio, tuščio sąrašo, neįtikimo skaičiaus) | 1 mechanizmas su apatine riba arba statiniu intervalu |
| F5 | „Ar tai tikri žmonės“ | Kokybinis autentiškumo / moderavimo signalas — **atskiras mechanizmas** nuo F4 | 1 sekcija arba blokas |
| F6 | Kas vyksta po registracijos | Funkcinis atsakymas: ką lankytojas gauna iš karto ir kaip veikia susiejimas | 3–5 punktai arba 1 pastraipa |
| F7 | Įsipareigojimo dydis | Kiek trunka, kiek laukų, kokių duomenų prašoma — **prieš** pradedant | 1 eilutė arba maža lentelė |
| F8 | Pinigų klausimas | Kas nemokama ir ar/kada atsiranda mokamas lygis | min. 1 eilutė, matoma prieš formos pabaigą |
| F9 | Privatumas ir kontrolė | Kas matoma viešai, kas ne, kaip pasitraukti | 1 sekcija arba blokas |
| F10 | Konversijos priemonė | Duomenų surinkimas **pačiame puslapyje**, laipsniškas įsipareigojimas, minimalus laukų kiekis | forma be backend'o, `action="#"` |
| F11 | Teisinis / atitikties uždarymas | Pilnametystė, taisyklės, privatumo politika | poraštė |
| F12 | Būsena ir klaidos | Vartotojas mato, kur yra, gali grįžti, klaida pranešama **tekstu** | HTML + JS validacija |
| F13 | Sėkmės būsena | Patvirtinimas puslapyje su kitu žingsniu (kliento pusėje) | 1 būsena |
| F14 | Slapukų sutikimas | Neblokuoja turinio ir neužstoja konversijos priemonės | 1 elementas |
| F15 | Pakartotinis CTA taškas | Bent vienas antras priėjimas prie to paties veiksmo | 1 taškas |
| F16 | Mažo įsipareigojimo kelias | Ne formos elementas dvejojančiam (atsakymai į abejonę), grąžinantis prie to paties veiksmo | 5 klausimai |
| F17 | Sąžiningas „kodėl dabar“ | Postūmis, pagrįstas tikru faktu. **Be laikmačių, be netikro vietų trūkumo, be išgalvotų akcijų** | 1 blokas arba eilutė |

## Struktūrinės taisyklės, galiojančios visiems 10

1. Pagrindinis veiksmas pasiekiamas **be scroll** (pati priemonė, jos pradžia arba neabejotinas priėjimas).
2. Vienas konversijos tikslas — registracija. Viskas kita pagalbinė.
3. Viena antraščių hierarchija be praleistų lygių, tiksliai vienas `<h1>`.
4. Kiekvienas formos laukas turi `<label>`; pasirinkimo būsena pranešama programiškai (`aria-pressed` / realūs `radio`), ne vien spalva.
5. HTML lygmens validacijos minimumas (`required`, `type`, `minlength`) nepriklausomai nuo JS.
6. Krauname tik tai, ką konkretus puslapis naudoja. Jokio bendro pluošto.
7. Sekcijų eiliškumas kiekviename variante skiriasi (ašis 8).
8. Funkcijas galima jungti arba skaidyti; praleisti — negalima.

## Skeleto draudimai, kylantys iš referencinių puslapių (privalomi visiems 10)

- **Jokio skaidymo lygiai į 3 žingsnius** ir jokios „N iš 3“ progreso juostos (sinteze §2.3, p. 26–27).
- **Jokios fiksuotos laukų sekos** „lytis → amžius+miestas → slapyvardis+paštas+slaptažodis“ (p. 28).
  Kiekvienas variantas pradeda formą nuo **kito** lauko tipo (nurodyta detaliojoje kortelėje).
- **Jokių piliulės formos „chip“ mygtukų** dvejetainiam lyties pasirinkimui (p. 45).
- **Jokio pulsuojančio „gyvo taško“** prie skaičiaus ir jokio skaičiaus kaip vienintelio įrodymo (p. 40, 42).
- **Jokios sticky, permatomos/blur antraštės su plona apatine linija** (p. 32).
- **Jokio hero CTA, kuris tik nuslenka prie formos** (p. 67) — CTA modelis kiekviename kitoks (ašis 9).
- **Jokių emoji kaip funkcinės piktogramų sistemos** (p. 48) ir jokio vėliavėlių kalbos perjungiklio (p. 47).
- **Jokio uždelsto plaukiojančio slapukų langelio apatiniame kampe** (p. 49) — slapukų forma kiekviename kita.

---

# DALIS 2 — Matrica: 14 ašių × 10 variantų

Kiekviena lentelė = viena ašis. Stulpelio (= ašies) reikšmės **nesikartoja**.

## Ašis 1 — Dizaino kryptis ir kodinis vardas

| # | Aplankas | Dizaino kryptis vienu sakiniu |
|---|---|---|
| 1 | `lg1-matmuo` | Matavimo / specifikacijos lapas: viskas puslapyje turi nurodytą matmenį, matomas bazinis tinklelis |
| 2 | `lg2-lenta` | Fizinė skelbimų lenta: antspauduoti lapeliai, storos juodos ribos, fiksuoti pasukimo kampai |
| 3 | `lg3-pultas` | Prietaisų skydelis: skalės, rodyklės, būsenų lemputės; puslapis kaip stebimas pultas |
| 4 | `lg4-silas` | Sodo / lauko dienoraštis: viena plati kolona, natūrali faktūra, lėtas ritmas |
| 5 | `lg5-salyga` | Sąlygų registras: tanki lentelė, viskas sunumeruota ir išskleidžiama, skaitomumas kaip argumentas |
| 6 | `lg6-talonas` | Rizografinė spauda dviem rašalais su persidengimu; forma — nukerpamas talonas |
| 7 | `lg7-kabinetas` | Uždaras kabinetas: riešutmedis, kaulo baltumo tekstas, storos juostos, siaura centrinė juosta |
| 8 | `lg8-vakaras` | Vakaro planuoklis: sotus spalvinis laukas, bento laiko blokai, pasirinkimo šakotuvas |
| 9 | `lg9-prieiga` | Komandų terminalas ant grafito: išvesties eilutės, prompt'as, fiksuoto pločio ritmas |
| 10 | `lg10-atvirukas` | Pastelinis atvirukų dėklas: koliažas, perverčiamos kortelės, asimetrinė šoninė juosta |

## Ašis 2 — Bazinė paletė (4–6 įvardintos hex reikšmės; **nė viena hex nesikartoja tarp variantų**)

| # | Spalvos |
|---|---|
| 1 | `#E9ECEF` lapas · `#16181D` grafitas · `#D5202C` kalibravimo raudona · `#FDFDFD` paviršius · `#C4CAD1` tinklelio linija |
| 2 | `#F2E205` lentos geltona · `#000000` juodas rašalas · `#2B4BFF` antspaudo mėlyna · `#FFFDF2` lapelis · `#E0D400` nuspausta geltona |
| 3 | `#0A1628` pultas · `#071120` gylis · `#12253F` prietaisas · `#D9E6F4` skalės tekstas · `#3FD0E8` signalas · `#6E8BA8` nuslopintas |
| 4 | `#C9D3C0` šalavijas · `#22301F` samana · `#7A3352` uogos rašalas · `#F1F4EA` popierius · `#9DAE92` riba |
| 5 | `#F5F7FA` registras · `#102A43` tekstas · `#00778A` petrolio akcentas · `#FFFFFF` eilutė · `#BCCCDC` lentelės linija |
| 6 | `#E7D8B4` ochrinis popierius · `#0B57A4` mėlynas rašalas · `#3AA35C` žalias rašalas · `#123A2F` persidengimas · `#6E6353` nublukęs |
| 7 | `#2A211B` riešutmedis · `#372C24` paviršius · `#EFE6D8` kaulas · `#5F8C72` patina · `#574A3F` juosta |
| 8 | `#3B2EDB` vakaro mėlyna · `#C3F53C` lajaus žalsva · `#FF6B57` koralas · `#F2F1FE` šviesa · `#1B1A33` tekstas |
| 9 | `#2B2B28` grafitas · `#201F1C` gilesnis sluoksnis · `#FFB000` gintaras · `#E8E2D6` išvestis · `#8B8680` komentaras |
| 10 | `#FBF7FF` rytas · `#F0E6FA` vakaras (gradiento galas) · `#6E4BA8` violetinė · `#FFC9A3` persikas · `#3C2A56` tekstas · `#E2D6F2` riba |

**Patikra:** 52 unikalios hex reikšmės, 0 pasikartojimų. Nė viena nesutampa su draudžiamomis
(`#12101a`, `#0d0b13`, `#1b1725`, `#241e30`, `#322942`, `#271f34`, `#dc3b68`, `#ff5c85`, `#c22c56`,
`#f0a93c`, `#4bc98a`) nei jų atpažįstamais atitikmenimis. Atstumai tarp variantų pagrindinių tonų:
raudona 358° / geltona 57° / žydra 190° / žalia 100° / petrolis 187° / mėlyna 210° / rusva 25° /
indigo 245° / gintaras 41° / violetinė 267°.

## Ašis 3 — Fono charakteris (5 kategorijos × po 2, daugiau nepasikartoja)

| # | Kategorija | Konkretus sprendimas |
|---|---|---|
| 1 | šviesus | plokščias vienspalvis lapas su 1px matomomis tinklelio linijomis |
| 2 | spalvotas | sotus geltonas laukas per visą puslapį, panelės ant jo |
| 3 | gradientinis | vertikalus gylio perėjimas `#0A1628` → `#071120`, be jokių dėmių ar švytėjimų |
| 4 | tekstūrinis | matinė spalva su smulkiu popieriaus grūdeliu (CSS `repeating` triukšmas, ne vaizdas) |
| 5 | šviesus | vėsus lentelinis fonas su balta eilučių juosta kas antrą eilutę |
| 6 | tekstūrinis | ochrinis popierius su rizografijos grūdeliu ir 2px rašalo ofsetu |
| 7 | tamsus | monolitinis riešutmedis be jokių sluoksnių ir be šešėlių |
| 8 | spalvotas | sotus mėlynas laukas, ant jo lajaus ir koralo blokai |
| 9 | tamsus | plokščias grafitas be gradientų, be švytėjimo |
| 10 | gradientinis | labai švelnus vertikalus `#FBF7FF` → `#F0E6FA` prausimas, be dėmių |

## Ašis 4 — Tipografinė pora (20 skirtingų šeimų, nė viena nesikartoja)

| # | Antraštės (vaidmuo) | Tekstas (vaidmuo) |
|---|---|---|
| 1 | **Chivo** 700 — antraštės ir matmenų skaičiai (tabuliariniai skaitmenys) | **Newsreader** 400 — visas tekstas, `line-height` 1.65 |
| 2 | **Anton** 400 — tik `h1` ir sekcijų antraštės, labai didelės | **Space Grotesk** 400/700 — tekstas, etiketės, mygtukai |
| 3 | **Sora** 600 — antraštės ir skalių reikšmės | **IBM Plex Sans** 400/500 — tekstas ir formos etiketės |
| 4 | **Fraunces** 500 (`opsz` ašis) — antraštės | **Karla** 400 — tekstas |
| 5 | **Source Serif 4** 600 — antraštės ir lentelės skiltys | **Atkinson Hyperlegible** 400/700 — **visas** tekstas, įskaitant smulkų |
| 6 | **Bitter** 700 — antraštės ir talono laukeliai | **Work Sans** 400 — tekstas |
| 7 | **Gloock** 400 — `h1` ir stambus skaičius | **Jost** 300/500 — tekstas |
| 8 | **Fredoka** 600 — antraštės ir blokų pavadinimai | **Plus Jakarta Sans** 400/600 — tekstas |
| 9 | **JetBrains Mono** 400/700 — antraštės, prompt'as, etiketės | **Inter Tight** 400 — ilgesnės pastraipos |
| 10 | **Lora** 500 italic — antraštės | **Manrope** 400/600 — tekstas |

Draudžiama visiems: **Bricolage Grotesque** ir **Archivo** (referencinių puslapių pora).

## Ašis 5 — Tipo skalė ir ritmas

| # | Santykis | Vertikalus ritmas |
|---|---|---|
| 1 | **1.200** | 8px bazinis tinklelis, matomas; kiekvienas tarpas — 8 kartotinis |
| 2 | **1.618** | be tinklelio; tarpai iš dviejų reikšmių (24 / 72) ir nieko tarp |
| 3 | **1.250** | 4px žingsnis, skalių padalos kas 4px |
| 4 | **1.414** | dideli tarpai: 40 / 80 / 128, ritmas lėtėja slenkant žemyn |
| 5 | **1.125** | 6px žingsnis, lentelės eilutės aukštis fiksuotas 44px |
| 6 | **1.333** | 12px žingsnis, talono perforacija kas 12px |
| 7 | **1.500** | 3 tarpų reikšmės: 32 / 96 / 192; daugiau jokių |
| 8 | **1.260** | bento blokų tinklelis 16px gap, blokų aukščiai 1/2/3 vienetai |
| 9 | **1.150** | eilutės aukštis = 1.5 simbolio; visas vertikalus ritmas matuojamas eilutėmis, ne pikseliais |
| 10 | **1.350** | 10px žingsnis, kortelės tarpai 20px, šoninė juosta 30px nuo turinio |

## Ašis 6 — Tinklelio logika ir lygiavimas

| # | Tinklelis |
|---|---|
| 1 | Griežtas 12 stulpelių, visas turinys lygiuojamas į kairę, plati (2 stulpeliai) tuščia kairė paraštė matmenims |
| 2 | Asimetrinis, be stulpelių; blokai persidengia 16–24px ir pasukti fiksuotais kampais (−1.5° / +1°) |
| 3 | Split 50/50: kairė slenka, dešinė sticky per visą aukštį |
| 4 | Viena plati kolona (max 62rem), centruota, dideli vertikalūs tarpai |
| 5 | Tankus 8 stulpelių, lentelinis; skaičiai lygiuojami į dešinę, tekstas į kairę |
| 6 | Dvi nelygios kolonos 2:1 **be** tarpinių linijų; tekstas į kairę, talonas dešinėje |
| 7 | Siaura centrinė juosta (max 46rem), labai daug oro, 3px storio skirtukai |
| 8 | Bento: skirtingo dydžio blokai 4 stulpelių rėmelyje, blokai nesilygiuoja į vieną bazę |
| 9 | Viena kolona, kairysis lygiavimas, fiksuoto pločio simbolių ritmas (72 simboliai eilutėje) |
| 10 | Asimetrinis 2/3 + 1/3, dešinėje siaura šoninė juosta, kuri slenka lėčiau už turinį |

## Ašis 7 — Hero tipas

| # | Hero |
|---|---|
| 1 | Centrinė antraštė be vaizdo, po ja horizontali **matmenų eilutė** (laukų skaičius, trukmė, kaina) ir vienas įvesties laukas |
| 2 | Tipografinis plakatas be jokio UI — tik antraštė, antspaudas ir vienas mygtukas apačioje |
| 3 | Gyvas mini pultas dešinėje: skalė, kurioje rodyklė reaguoja į pasirinktą vietovę |
| 4 | Full-bleed fotografija, tekstas apačioje ant jos |
| 5 | Sąlygų lentelė pirmame ekrane; forma prasideda tos pačios lentelės apačioje |
| 6 | Horizontali marquee juosta su pasiūlymu virš antraštės |
| 7 | Stambus skaičius (rezultatas) kaip vienintelis vizualas |
| 8 | Klausimas + keturi atsakymo blokai, vedantys į formą |
| 9 | Eilutė po eilutės išspausdintas pasiūlymas kaip komandos išvestis (statinis, be animacijos) |
| 10 | Kortelių dėklas, kurį galima perversti |

Sąmoningai **nenaudojamas** „split kairė tekstas / dešinė vaizdas“ hero tipas — jis per arti
`analize/sinteze.md` §2.3 p. 24 draudimo.

## Ašis 8 — Sekcijų tvarka (kiekviena seka skiriasi nuo visų kitų devynių)

Žymėjimas: **H** antraštė · **P** pozicionavimas · **Q** kiekybinis aktyvumas · **A** autentiškumas/moderavimas ·
**M** mechanika po registracijos · **Į** įsipareigojimo dydis · **€** pinigų klausimas · **K** privatumas ·
**FORM** konversijos priemonė · **D** atsakymai dvejojančiam · **N** kodėl dabar · **R** pakartotinis priėjimas ·
**L** teisinė poraštė · **C** slapukai.

| # | Seka |
|---|---|
| 1 | H → P → Į → FORM(1 laukas) → € → M → A → Q → FORM(pilna)+sėkmė → D → L → C |
| 2 | H → P → N → A → FORM(modalas) → M → € → Q → K → D → L → C |
| 3 | H → P+FORM(sticky) → Q → M → Į → K → A → € → R → D → L → C |
| 4 | H → P → K → M → N → A → Q → Į → D → € → FORM → L → C *(+ nuolatinė apatinė juosta)* |
| 5 | H → P → €+Į(lentelė) → FORM → A → M → K → Q → D → R → L → C |
| 6 | **C(viršutinė juosta)** → H → marquee → P → Q → € → FORM(talonas) → M → A → Į → D → K → L |
| 7 | H → P(skaičius) → K → FORM(įrašomos eilutės) → € → M → A → Į → Q → D → R → L → C |
| 8 | H → P+FORM(pradžia) → M → FORM(tęsinys) → Q → N → € → A → K → D → L → C |
| 9 | H → P → Į → M → FORM(prompt) → A → € → Q → K → D → R → L → C |
| 10 | H → P+FORM(dėklas) → D → M → K → A → € → Q → Į → N → L → C |

Nė viena seka nesutampa su referencine A (`H → centruotas hero → forma → L`) ar B
(`H → Q → P → miestai → FORM → L → C`).

## Ašis 9 — CTA modelis

| # | Modelis | Kaip pasiekiamas be scroll |
|---|---|---|
| 1 | **Vieno lauko įėjimas**: hero'e vienas laukas, jo reikšmė perkeliama į pilną formą žemiau | pats laukas hero'e |
| 2 | **Pilno ekrano modalas**: mygtukas atidaro perdangą su visa forma | mygtukas pirmame ekrane |
| 3 | **Inline forma sticky dešinėje kolonoje**, matoma per visą puslapį | pirmas laukas hero'e |
| 4 | **Nuolatinė apatinė juosta** su veiksmu; pilna forma puslapio gale | juosta nuo pirmos sekundės |
| 5 | **Sąlygų kortelė su forma jos viduje** — forma yra paskutinės lentelės eilutės | lentelė pirmame ekrane |
| 6 | **Nukerpamas talonas**: forma atrodo kaip atkarpa su perforacija | talonas dešinėje pirmame ekrane |
| 7 | **Įrašomos eilutės sakinyje** (fill-in-the-blank): laukai įterpti į tekstą | sakinys pirmame ekrane |
| 8 | **Pasirinkimo šakotuvas**: keturi blokai, pasirinkimas atidaro likusius laukus | blokai pirmame ekrane |
| 9 | **Komandų prompt'as**: po vieną klausimą eilutėje, atsakymai lieka matomi virš | prompt'as pirmame ekrane |
| 10 | **Perverčiamas kortelių dėklas**: po vieną klausimą kortelėje | dėklas pirmame ekrane |

**Formos pradžios laukas kiekviename kitas** (draudimas p. 28): 1 — el. paštas · 2 — vietovė ·
3 — vietovė žemėlapio skalėje · 4 — ko ieškoma · 5 — el. paštas lentelės eilutėje · 6 — amžiaus tarpsnis ·
7 — kreipinys · 8 — vakaro tipas · 9 — prisijungimo vardas · 10 — nuotaika/ko tikimasi.
**Žingsnių skaičius kiekviename kitas:** 2 / 1 / 2 / 1 / 1 (išskleidžiama) / 2 / 1 / 4 / 5 / 5.
**Nė viename — ne 3 žingsniai ir jokios „N iš 3“ juostos.**

## Ašis 10 — Kampų ir šešėlių kalba

| # | Kalba |
|---|---|
| 1 | 0px, jokių šešėlių; skyrimas tik tarpais ir 1px tinklelio linija |
| 2 | 0px + 3px juodi rėmeliai + kietas `6px 6px 0` ofsetas (be suliejimo) |
| 3 | 12px, jokių išorinių šešėlių; vidinė 1px šviesos riba (`inset`) |
| 4 | Asimetrinis organinis radius `24px 4px 24px 4px`, jokių šešėlių |
| 5 | 4px; vietoje šešėlio — 1px riba ir **dviguba apatinė linija** po lentelės skilties eilute |
| 6 | 0px; vietoje šešėlio — 2px rašalo ofsetas (misregistracija) ir perforacijos punktyras |
| 7 | 0px; 3px storio horizontalios juostos; jokių šešėlių, jokių plaukinių linijų |
| 8 | Mišrūs: 28px dideliems blokams, 6px mažiems; jokių šešėlių |
| 9 | 2px; 1px gintarinės ribos, mirksintis blokinis kursorius vietoje bet kokio šešėlio |
| 10 | 999px mygtukams + 18px kortelėms; minkštas `0 10px 30px` šešėlis **tik po viršutine dėklo kortele** |

## Ašis 11 — Vienas orkestruotas judesio momentas

| # | Momentas | Tipas |
|---|---|---|
| 1 | `h1` atsiskleidžia per horizontalią kaukę vieną kartą užkrovus | užkrovimas |
| 2 | Mygtukas fiziškai nusispaudžia — ofsetinis šešėlis suvalgomas, blokas pasislenka 6px | reakcija |
| 3 | Pasirinkus vietovę, pulto rodyklė perbėga į tos vietovės padalą | reakcija |
| 4 | Fono spalva lėtai pereina iš dienos į vakarą slenkant žemyn | scroll |
| 5 | Lentelės eilutė išsiskleidžia žemyn paspaudus „ką tai reiškia“ | reakcija |
| 6 | Marquee juosta slenka nuolat — vienintelis judesys puslapyje | nuolatinis |
| 7 | Stambus skaičius susiformuoja iš atskirų skaitmenų vieną kartą užkrovus | užkrovimas |
| 8 | Pasirinkus bloką, bento lenta persitvarko (blokai keičia dydį ir vietą) | reakcija |
| 9 | Įvedus atsakymą, virš prompt'o išspausdinama nauja išvesties eilutė | reakcija |
| 10 | Viršutinė dėklo kortelė apverčiama | reakcija |

6 iš 10 — reakcija į vartotojo veiksmą (2, 3, 5, 8, 9, 10). **Jokio `fade-and-slide-up` ant sekcijų.
Jokių hover perėjimų ant kortelių.** `prefers-reduced-motion: reduce` išjungia visus dešimt.

## Ašis 12 — Vaizdinė medžiaga

| # | Tipas | Rastrinių vaizdų |
|---|---|---|
| 1 | Techniniai matmenų brėžiniai (inline SVG su išnašomis ir strėlėmis) | ne |
| 2 | Stambi geometrija ir antspaudo formos | ne |
| 3 | Prietaisų skalės, rodyklės ir duomenų vizualizacija | ne |
| 4 | Natūralios faktūros fotografija (full-bleed) | **taip** |
| 5 | Linijinės piktogramos ir atitikties blokai | ne |
| 6 | Duotone fotografija dviem rašalais | **taip** |
| 7 | Stambi tipografika kaip vienintelis vaizdas | ne |
| 8 | Plokščios iliustracijos paletės spalvomis | ne |
| 9 | ASCII ir tinklelio grafika | ne |
| 10 | Koliažo iškarpos (popieriaus fragmentai) | **taip** |

## Ašis 13 — Balso tonas

| # | Tonas |
|---|---|
| 1 | Tikslus, matuojantis — kiekvienas teiginys turi skaičių arba vienetą |
| 2 | Tiesmukas, garsus, trumpi sakiniai; niekada nieko neaiškina du kartus |
| 3 | Techniškas, diagnostinis — kalba apie būsenas ir rodmenis |
| 4 | Ramus, pasakojantis, ilgesni sakiniai |
| 5 | Dalykinis-teisinis, kruopštus; visada nurodo, kur tai parašyta |
| 6 | Šiltas, buitinis, su lengva šypsena |
| 7 | Santūrus, mažakalbis; niekada nekelia balso |
| 8 | Energingas, žaismingas, kviečiantis |
| 9 | Instrukcinis, imperatyvus, be jokių pridėtinių žodžių |
| 10 | Švelnus, empatiškas, pirmuoju asmeniu |

## Ašis 14 — Kodo konvencija

| # | Klasių stilius | Failai |
|---|---|---|
| 1 | BEM: `spec__row--wide`, `sheet__mark` | `index.html`, `assets/style.css` |
| 2 | Semantiniai vientisi vardai: `offerboard`, `stamp`, `pinnote` | `index.html`, `styles/main.css` |
| 3 | `data-` atributai + minimalios klasės: `[data-gauge]`, `[data-state="on"]` | `index.html`, `static/panel.css`, `static/panel.js` |
| 4 | Utility klasės: `u-stack-lg`, `u-measure`, `u-bleed` | `index.html`, `assets/garden.css` |
| 5 | Ilgi semantiniai vardai su prefiksu: `terms-line`, `ledger-figure` | `index.html`, `css/ledger.css` |
| 6 | kebab-case be prefiksų: `ink-strip`, `coupon-tear`, `press-mark` | `index.html`, `press/style.css` |
| 7 | CSS-modulių stilius: `Panel_root`, `Panel_title`, `Figure_value` | `index.html`, `assets/study.css` |
| 8 | Komponentiniai prefiksai: `c-block`, `l-board`, `is-picked` | `index.html`, `ui/board.css`, `ui/board.js` |
| 9 | Sutrumpinti su brūkšneliu: `tm-line`, `tm-prompt`, `tm-out` | `index.html`, `bin/term.css`, `bin/term.js` |
| 10 | Dvižodžiai semantiniai: `story-panel`, `answer-list`, `deck-card` | `index.html`, `assets/pastel.css`, `assets/pastel.js` |

Draudžiami klasių vardai visiems: `hero`, `container`, `wrapper`, `btn`, `btn-primary`, `btn-secondary`,
`card`, `section`, `section-title`, `grid`, `row`, `col`, `cta`, `feature`, `feature-card`, `testimonial`,
`footer-links`.

---

# DALIS 3 — Detaliosios variantų kortelės

## lg1 — `lg1-matmuo`

- **Prekės ženklas:** **Matmuo**
- **Kilmė (1 eilutė):** prasidėjo nuo dviejų inžinierių skaičiuoklės, kurioje jie matavo, kiek laiko iš tikrųjų užtrunka susipažinti, ir paaiškėjo, kad niekas to nematuoja.
- **Auditorijos pjūvis:** 28–40 m., inžinerinio ar IT profilio, prieš registruodamasis nori tikslių skaičių, o ne pažadų.
- **Pozicionavimo kampas:** **A — skaidrumas ir įrodymas.** Kiekvienas teiginys turi matmenį: kiek laukų, kiek minučių, kiek kainuoja, kiek žmonių per parą.
- **Balso tonas + 3 būdingos konstrukcijos:**
  - „Laukų: 5. Iš jų privalomų: 4.“ *(duomenų eilutė vietoje sakinio)*
  - „Tai užima tiek, kiek užima — vidutiniškai 70 sekundžių.“ *(atsargus tikslinimas)*
  - „Jei kuris nors skaičius pasikeis, jis pasikeis ir čia.“ *(pažadas apie duomenis, ne apie jausmą)*
- **Formos pradžia:** el. pašto laukas hero'e → likę 4 laukai pilnoje formoje žemiau (2 etapai).
- **Kur išleidžiama drąsa:** matomas bazinis 8px tinklelis ir matmenų išnašos su strėlėmis aplink tikrus puslapio elementus.

## lg2 — `lg2-lenta`

- **Prekės ženklas:** **Lenta**
- **Kilmė:** iš tikros skelbimų lentos Kauno kieme, ant kurios žmonės kabino ranka rašytus lapelius, ir tai veikė geriau nei bet kuri programėlė.
- **Auditorijos pjūvis:** 21–30 m., tiesmukas, greitai apsisprendžia, iš karto atpažįsta ir atmeta „pardavinėjimą“.
- **Pozicionavimo kampas:** **C — rezultatas ir momentumas.**
- **Balso tonas + 3 konstrukcijos:**
  - „Pakabini lapelį. Kažkas nuplėšia numerį. Viskas.“ *(trys trumpi sakiniai vietoj pastraipos)*
  - „Nieko čia gudraus nėra.“ *(savaiminis nuvertinimas vietoje pagyrimo)*
  - „Netinka — nuimk lapelį, ir jo nebėra.“ *(veiksmas → pasekmė, be tarpinių žodžių)*
- **Formos pradžia:** vietovė → visa forma vienu ekranu modale (1 etapas).
- **Kur išleidžiama drąsa:** visi blokai pasukti fiksuotais kampais ir persidengia; antspaudas uždėtas ant teksto, ne šalia jo.

## lg3 — `lg3-pultas`

- **Prekės ženklas:** **Pultas**
- **Kilmė:** buvusio radijo ryšio operatoriaus idėja — bendruomenė kaip eteris, kuriame matai, kur šviečia, o ne kur žadama.
- **Auditorijos pjūvis:** 26–38 m., duomenų žmogus; įtikina tai, ką gali pats stebėti, o ne tai, kas jam pasakojama.
- **Pozicionavimo kampas:** **C — rezultatas ir momentumas.**
- **Balso tonas + 3 konstrukcijos:**
  - „Rodmuo: 14 val. — aukščiausia padala parą.“ *(etiketė + reikšmė + kontekstas)*
  - „Kai skalė nukrenta žemiau vidurio, mes to neslepiame.“ *(prisipažinimas kaip pasitikėjimo priemonė)*
  - „Pasirink vietovę — rodyklė persistums.“ *(nurodo, ką padarys sąsaja)*
- **Formos pradžia:** vietovė žemėlapio skalėje → likę laukai (2 etapai).
- **Kur išleidžiama drąsa:** dešinė pusė yra realus prietaisas: skalė reaguoja į pasirinkimą dar prieš registraciją.

## lg4 — `lg4-silas`

- **Prekės ženklas:** **Šilas**
- **Kilmė:** sodyboje vykusių vakarienių ratelis, kuris išaugo į sąrašą, ir taisyklė nuo pirmos dienos buvo viena — niekas iš lauko nemato, kas viduje.
- **Auditorijos pjūvis:** 30–45 m., mažesnio miesto gyventojas; didžiausias stabdys — kad atpažins kaimynas.
- **Pozicionavimo kampas:** **B — kontrolė ir diskretiškumas.**
- **Balso tonas + 3 konstrukcijos:**
  - „Tavo vardas čia niekur neatsiranda, nebent tu pats jį parašai.“ *(ilgesnis, ramus sakinys su sąlyga)*
  - „Pasitraukti galima bet kada, ir tai užtrunka mažiau nei užsirašyti.“ *(palyginimas su jau atliktu veiksmu)*
  - „Mes nieko neskubiname — čia niekas nedega.“ *(tiesioginis skubos paneigimas)*
- **Formos pradžia:** ko ieškoma → viena forma be žingsnių (1 etapas).
- **Kur išleidžiama drąsa:** visas puslapis yra viena lėta kolona, kurios fonas per scroll pereina iš dienos į vakarą.

## lg5 — `lg5-salyga`

- **Prekės ženklas:** **Sąlyga**
- **Kilmė:** teisininkės projektas, gimęs po to, kai ji trečią kartą per metus aiškino draugams, ką jie iš tikrųjų pasirašė kitoje platformoje.
- **Auditorijos pjūvis:** 35–50 m.; jau kažkur užsirašė mokamai ir nustebo dėl sąskaitos; skaito smulkų šriftą.
- **Pozicionavimo kampas:** **A — skaidrumas ir įrodymas.**
- **Balso tonas + 3 konstrukcijos:**
  - „4 punktas: mokamo lygio nėra. Jei atsiras — bus 5 punktas.“ *(numeruota nuoroda į savo pačių tekstą)*
  - „Tai parašyta ir taisyklių 2.3 papunktyje, ne tik čia.“ *(kryžminė nuoroda)*
  - „Ką tai reiškia paprastai: nieko nemokėsi ir niekas neprašys kortelės.“ *(išskleidžiamas vertimas į buitinę kalbą)*
- **Formos pradžia:** el. paštas lentelės eilutėje → visa forma lentelės apačioje (1 etapas, eilutės išsiskleidžia).
- **Kur išleidžiama drąsa:** visas smulkus šriftas išdidintas iki 16px ir sudėtas į Atkinson Hyperlegible — skaitomumas yra pats argumentas.

## lg6 — `lg6-talonas`

- **Prekės ženklas:** **Talonas**
- **Kilmė:** iš 1994-ųjų skelbimų laikraščio rubrikos, kurią vietinė spaustuvė spausdino dviem rašalais ir kurioje atkarpą reikėdavo nukirpti žirklėmis.
- **Auditorijos pjūvis:** 40–55 m., nepasitiki programėlėmis, bet pasitiki spausdintu žodžiu; dažniau mažesnis miestas.
- **Pozicionavimo kampas:** **A — skaidrumas ir įrodymas.**
- **Balso tonas + 3 konstrukcijos:**
  - „Užpildai atkarpą — ir tiek to reikalo.“ *(buitinė intonacija)*
  - „Anksčiau už tai imdavo 3 litus. Dabar neima nieko.“ *(palyginimas su praeitimi)*
  - „Jei kas nors ne taip — perbrauk ir rašyk iš naujo.“ *(leidimas suklysti)*
- **Formos pradžia:** amžiaus tarpsnis → antra talono pusė (2 etapai).
- **Kur išleidžiama drąsa:** antras rašalas sąmoningai nusislinkęs 2px — visas puslapis atrodo kaip netiksliai atspausta atkarpa.

## lg7 — `lg7-kabinetas`

- **Prekės ženklas:** **Kabinetas**
- **Kilmė:** uždaro skaitymo kambario taisyklės, kur vienintelė sąlyga buvo ta, kad iš lauko nesimato, kas viduje sėdi.
- **Auditorijos pjūvis:** 38–55 m., turintis profesinę reputaciją (gydytojas, mokytojas, vadovas); pasekmės jam kainuoja daugiau nei registracija.
- **Pozicionavimo kampas:** **B — kontrolė ir diskretiškumas.**
- **Balso tonas + 3 konstrukcijos:**
  - „Matomumas: nulis, kol jo nenustatai pats.“ *(dviejų dalių sakinys su dvitaškiu, be būdvardžių)*
  - „Ištrynimas — vienas veiksmas, be paaiškinimų mums.“ *(pabrėžia, ko nereikės daryti)*
  - „Daugiau apie tai nekalbame.“ *(sakinys, kuris baigia temą)*
- **Formos pradžia:** kreipinys → viskas viename įrašomų eilučių sakinyje (1 etapas).
- **Kur išleidžiama drąsa:** forma nėra forma — tai vienas sakinys, kuriame įrašomos eilutės yra pačios laukai.

## lg8 — `lg8-vakaras`

- **Prekės ženklas:** **Vakaras**
- **Kilmė:** draugų grupės planuoklis, kuriame kiekvienas ketvirtadienis būdavo suplanuojamas per tris paspaudimus, ir kažkas pasiūlė taip planuoti ir pažintis.
- **Auditorijos pjūvis:** 22–32 m., planuoja šįvakar arba šį savaitgalį; neskaito argumentų.
- **Pozicionavimo kampas:** **C — rezultatas ir momentumas.**
- **Balso tonas + 3 konstrukcijos:**
  - „Pasirink, koks vakaras — likusią dalį sudėsim mes.“ *(pasiūlymas + pažadas viename sakinyje)*
  - „Ketvirtadienis čia gyviausias, ir tai ne mūsų nuopelnas.“ *(faktas + savaiminis nuvertinimas)*
  - „Dar du blokai — ir baigta.“ *(skaičiuoja, kiek liko, ne kiek padaryta)*
- **Formos pradžia:** vakaro tipas → keturi blokai (4 etapai, be progreso juostos).
- **Kur išleidžiama drąsa:** pasirinkus bloką visa bento lenta persitvarko — puslapis fiziškai keičia formą pagal atsakymą.

## lg9 — `lg9-prieiga`

- **Prekės ženklas:** **Prieiga**
- **Kilmė:** seno vilnietiško BBS mazgo, veikusio nuo 1997-ųjų, tęsinys — tos pačios taisyklės, tik dabar be modemo.
- **Auditorijos pjūvis:** 30–45 m., techninis; nori pats valdyti procesą ir mato, kai jį vedžioja.
- **Pozicionavimo kampas:** **C — rezultatas ir momentumas.**
- **Balso tonas + 3 konstrukcijos:**
  - `> įvesk vardą` *(prompt'as vietoje etiketės)*
  - „Atsakyk. Tada bus kitas klausimas.“ *(du sakiniai, abu imperatyvūs)*
  - „Klaida: šis vardas užimtas. Bandyk kitą.“ *(klaidos pranešimas kaip išvesties eilutė)*
- **Formos pradžia:** prisijungimo vardas → po vieną klausimą (5 eilutės).
- **Kur išleidžiama drąsa:** atsakymai neišnyksta — jie lieka išspausdinti virš prompt'o kaip seanso istorija.

## lg10 — `lg10-atvirukas`

- **Prekės ženklas:** **Atvirukas**
- **Kilmė:** rankomis rašytų atvirukų mainų ratelis, kuriame žmonės pirma parašydavo, o tik paskui susitikdavo.
- **Auditorijos pjūvis:** 25–35 m.; bijo ne pasekmių, o nemalonios patirties — nori švelnaus įėjimo ir galimybės pasitraukti be scenos.
- **Pozicionavimo kampas:** **B — kontrolė ir diskretiškumas.**
- **Balso tonas + 3 konstrukcijos:**
  - „Man irgi nepatiko pirmas kartas — todėl čia jis kitoks.“ *(pirmasis asmuo, asmeninė patirtis)*
  - „Gali sustoti ties bet kuria kortele ir grįžti rytoj.“ *(leidimas nebaigti)*
  - „Nieko neišsiunčiame, kol tu nepasakai.“ *(pasyvios grėsmės paneigimas)*
- **Formos pradžia:** nuotaika / ko tikimasi → penkios kortelės.
- **Kur išleidžiama drąsa:** dėklas yra ir hero, ir forma, ir pasakojimas — vienas elementas atlieka tris darbus.

## Pozicionavimo kampų paskirstymas

| Kampas | Variantai | Kodėl būtent šie |
|---|---|---|
| **A — skaidrumas ir įrodymas** | lg1, lg5, lg6 | Trys skirtingi „įrodymo“ tipai: skaičius (lg1), dokumentas (lg5), praeities palyginimas (lg6) |
| **B — kontrolė ir diskretiškumas** | lg4, lg7, lg10 | Trys skirtingos baimės: kaimynas (lg4), profesinė reputacija (lg7), nemaloni patirtis (lg10) |
| **C — rezultatas ir momentumas** | lg2, lg3, lg8, lg9 | Keturios skirtingos „dabar“ priežastys: paprastumas (lg2), stebimas aktyvumas (lg3), konkretus vakaras (lg8), proceso valdymas (lg9) |

---

# DALIS 4 — Patikra prieš `promptai/02-diferenciacija.md` §7

| §7 šablonas | Ar kuris nors variantas atitinka | Sprendimas |
|---|---|---|
| 1. Kreminis fonas ~`#F4F1EA` + display serifas + terakota ~`#D97757` | **Ne.** Artimiausi — lg6 (ochrinis `#E7D8B4` + Bitter) ir lg4 (šalavijas + Fraunces) | lg6 rašalai — mėlynas ir žalias, jokios terakotos; lg4 fonas sotus žalsvas, ne kreminis, o akcentas — tamsi uogų spalva, naudojama tik pabraukimuose, ne CTA. lg7 akcentas patina žalias, ne auksinis |
| 2. Beveik juodas fonas + rūgštinė žalia / vermilion | **Ne.** lg3 `#0A1628` yra tamsiai mėlynas (210°), ne juodas; lg9 `#2B2B28` yra atpažįstamai **pilkas**, ne juodas; lg7 `#2A211B` — rudas | Akcentai: žydra (lg3), gintaras (lg9), patina (lg7). Nė vienas nėra rūgštinė žalia ar vermilion |
| 3. Laikraštinis layout: plaukiniai brūkšniai + 0px + tankios stulpelinės kolonos | **Ne.** Pradinė kryptis 06 (trys kolonos su tarpinėmis linijomis) **pakeista** | lg6 dabar dvi nelygios kolonos **be** tarpinių linijų; lg1 turi 0px, bet skiria tarpais ir matomu tinkleliu, tekstas nesuskaidytas į kolonas; lg7 naudoja 3px storio juostas vietoj plaukinių |
| 4. SaaS kortelių rinkinys su vienodu `rgba(0,0,0,.1)` šešėliu + gradientinės dėmės | **Ne.** Aštuoni variantai neturi šešėlių visai | lg2 šešėlis kietas ir ofsetinis; lg10 vienintelis minkštas šešėlis — tik po viršutine dėklo kortele, nes tai fizinė krūva. Gradientinių dėmių nėra nė viename (lg3 ir lg10 gradientai — viso lapo plokštumos, ne dekoratyvinės dėmės) |
| 5. Template chrome (ALL-CAPS eyebrow, „A · B · C“, „ŽODIS — frazė“, `#0B0B0B`/`#111`, monospace etiketėms, „→“ mygtukuose) | **Ne**, su viena pagrįsta išimtimi | Visi šeši elementai įrašyti į `config/draudziamu-zodziu-sarasas.md` §5 ir §8. Išimtis: lg9 naudoja monospace — bet ne „mažoms etiketėms kaip dekorui“, o kaip **vienintelį puslapio šriftą antraštėms ir prompt'ui**, nes visas variantas yra terminalas. Tai turinio reikalavimas, ne įprotis |
| 6. Vieno žodžio akcentavimas antraštėje kita spalva ar kursyvu | **Ne.** Uždrausta visiems 10 | lg10 naudoja Lora italic, bet **visai** antraštei, ne vienam žodžiui |
| 7. `fade-and-slide-up` ant kiekvienos sekcijos + hover ant kiekvienos kortelės | **Ne.** Ašis 11: po vieną momentą variantui | Uždrausta atskirai §5 sąraše |
| 8. Numeruoti 01/02/03 ten, kur turinys nėra seka | **Ne.** Numeracija leidžiama tik ten, kur yra tikra seka | lg5 numeruoja sąlygų punktus (tai registras), lg6 — talono laukelius (tai blankas), lg9 — prompt'o eilutes (tai seka). Likę septyni nenumeruoja nieko |

---

# DALIS 5 — Savikritika: „ar bet kuris kitas dizaineris atsidurtų tiksliai čia?“

## lg1 — `lg1-matmuo`
**Pirmas atsakymas: TAIP.** „Techninis šveicariškas“ briefas → pilkas fonas, grotesk, raudonas akcentas,
12 stulpelių, 0px. Tai mokyklinė numatytoji reikšmė, ir dešimt dizainerių padarytų tą patį.
**Ką pakeičiau:** (a) šveicariškas neutralumas pakeistas į **matavimo lapą** — matmenų išnašos su strėlėmis
ir matomas 8px bazinis tinklelis yra ne dekoras, o turinys: visas kampas A remiasi tuo, kad kiekvienas
teiginys turi vienetą; (b) šriftų pora perdaryta — **Archivo pašalintas** (draudžiamas, referencinė pora)
ir pakeistas Chivo su tabuliariniais skaitmenimis, nes skaičių stulpeliai turi lygiuotis; (c) hero papildytas
horizontalia matmenų eilute ir **vienu įvesties lauku**, kad nebūtų „centruota antraštė ir mygtukas“
(sinteze §2.3 p. 22). **Antras atsakymas: NE** — kitas dizaineris padarytų švarų Swiss plakatą, ne lapą,
kuriame puslapis pats save matuoja.

## lg2 — `lg2-lenta`
**Pirmas atsakymas: TAIP.** „Neo-brutalizmas“ → baltas fonas, Anton, juodi rėmeliai, `6px 6px 0`, geltona.
Tai vienas kūnas, kurį atpažįsta visi, ir jis jau tapo savo paties šablonu.
**Ką pakeičiau:** (a) fonas nebe baltas, o **sotus geltonas laukas per visą puslapį** — brutalizmas paverstas
fizine skelbimų lenta, o ne stilistine citata; (b) pridėti **fiksuoti pasukimo kampai** (−1.5° / +1°) ir
persidengimas — lapeliai kabinami, ne dedami į tinklelį; (c) kietas šešėlis pagrįstas turiniu: tai popieriaus
krūvos storis, todėl jis naudojamas **tik** ant lapelių, ne ant visų elementų; (d) CTA modelis perkeltas į
pilno ekrano modalą, kad forma neliktų herojuje (referencinis modelis p. 25). **Antras atsakymas: NE.**

## lg3 — `lg3-pultas`
**Pirmas atsakymas: TAIP.** Tamsus mėlynas + žydra + violetinė + švytėjimai = numatytasis „dark tech SaaS“,
kurį sugeneruotų bet kas.
**Ką pakeičiau:** (a) **violetinis antrinis akcentas pašalintas** (`#7B61FF`) ir pakeistas nuslopintu plieno
mėlynu `#6E8BA8` — liko **vienas** signalinis tonas, todėl dingsta „neoninio dueto“ parašas; (b) uždrausti
bet kokie švytėjimo laukai ir radialinės dėmės — gylis daromas tik vertikaliu plokštumos perėjimu;
(c) judesys pakeistas iš „skaitiklis paleidžiamas įėjus į ekraną“ (per arti referencinio gyvo skaitiklio,
p. 40–42) į **rodyklę, kuri reaguoja į vartotojo pasirinkimą** — įrodymas tampa patikrinamas, o ne rodomas;
(d) dešinė kolona yra prietaisas su padalomis, ne kortelė. **Antras atsakymas: NE.**

## lg4 — `lg4-silas`
**Pirmas atsakymas: TAIP.** „Organinis žolinis“ → šalavijas, Fraunces, full-bleed nuotrauka, dideli tarpai,
auksinis akcentas. Tai 2023–2025 m. wellness numatytoji reikšmė.
**Ką pakeičiau:** (a) **auksinis akcentas `#E0A32E` pašalintas** — jis per arti draudžiamo `#f0a93c` ir per arti
lg9 gintaro; pakeistas tamsia uogų spalva `#7A3352`, kuri naudojama **tik pabraukimuose ir žymose**, o CTA
fonas yra tamsi samana — taip variantas neatkartoja „sodrus rausvas mygtukas“ modelio (p. 6, 11);
(b) pridėtas **CTA modelis „nuolatinė apatinė juosta“**, nes vienos ilgos kolonos kryptis kitaip pažeistų
taisyklę „veiksmas be scroll“; (c) turinio ašis perkelta nuo „natūralumo“ prie **kampo B — kas mato ir kaip
pasitraukti**, todėl pirmoji sekcija po hero yra privatumas, o ne nuotaika. **Antras atsakymas: NE** — kitas
dizaineris padarytų gražų botanikos puslapį be jokios apatinės juostos ir be privatumo kaip pirmo argumento.

## lg5 — `lg5-salyga`
**Pirmas atsakymas: TAIP.** „Korporatyvinis pasitikėjimas“ → šviesiai pilkas fonas, tamsiai mėlynas tekstas,
žalias akcentas, Source superšeima, 8 stulpeliai. Tai fintech numatytoji reikšmė.
**Ką pakeičiau:** (a) **žalias akcentas `#0E9F6E` pašalintas** — per arti draudžiamo `#4bc98a` „sėkmės žalio“;
pakeistas petrolio `#00778A`; (b) teksto šriftas pakeistas iš Source Sans 3 į **Atkinson Hyperlegible** —
tai ne stilistinis, o argumentinis sprendimas: variantas remiasi teiginiu, kad smulkus šriftas turi būti
perskaitomas, todėl smulkiausias tekstas puslapyje yra 16px ir specialiai skirtas skaitomumui;
(c) hero pakeistas iš „forma pirmame ekrane kairėje + sąlygos dešinėje“ (tai būtų referencinis dviejų
stulpelių modelis, p. 24) į **sąlygų lentelę kaip herojų**, kurios paskutinės eilutės ir yra forma.
**Antras atsakymas: NE.**

## lg6 — `lg6-talonas`
**Pirmas atsakymas: TAIP, ir dar blogiau — pradinė kryptis pažeidė §7.3.** „Retro spauda“ su trimis
kolonomis, tarpinėmis linijomis ir abipusiu lygiavimu yra tiksliai laikraštinis šablonas.
**Ką pakeičiau:** (a) trys kolonos su linijomis **pašalintos**; vietoje jų — dvi nelygios kolonos be jokių
tarpinių linijų; (b) kryptis perkelta iš „laikraštis“ į **rizografiją**: du rašalai su 2px misregistracija,
persidengimo spalva kaip trečia; (c) akcentas `#B4471F` (per arti terakotos iš §7.1) **pašalintas** — rašalai
dabar mėlynas ir žalias; (d) forma paversta **nukerpamu talonu** su perforacija, o ne dar viena kortele;
(e) slapukų juosta perkelta į **puslapio viršų** kaip spaustuvės žyma — taip variantas atsisako referencinio
uždelsto apatinio langelio (p. 49) ir kartu gauna sekcijų tvarką, kurios neturi niekas kitas.
**Antras atsakymas: NE.**

## lg7 — `lg7-kabinetas`
**Pirmas atsakymas: TAIP.** „Kontrastinė prabanga“ → tamsus fonas, Playfair Display, auksinis akcentas,
siaura centrinė juosta, plaukiniai skirtukai. Tai pats atpažįstamiausias „premium“ šablonas, ir jis dar
kliūva už §7.3 (plaukiniai + 0px) bei už lg9 gintaro.
**Ką pakeičiau:** (a) **Playfair Display pašalintas**, pakeistas Gloock — didelio kontrasto, bet ne
numatytasis; (b) **auksas `#B99A55` pašalintas**, pakeistas patina žalia `#5F8C72` — dingsta „tamsu + auksas“
lygtis ir kartu dingsta konfliktas su lg9; (c) fonas pakeistas iš beveik juodo `#1A1614` į **riešutmedį
`#2A211B`**, kurį žiūrovas įvardija kaip rudą, ne kaip juodą — taip variantas išeina iš sinteze §2.1
draudžiamos „sluoksniuotos tamsios sistemos“; (d) plaukiniai skirtukai pakeisti **3px juostomis**;
(e) CTA modelis perdarytas į **įrašomų eilučių sakinį** — prabangos vietoje atsiranda diskretiškumas,
kuris ir yra kampas B. **Antras atsakymas: NE.**

## lg8 — `lg8-vakaras`
**Pirmas atsakymas: TAIP.** „Žaismingas ryškus bento“ → šviesiai lelijinis fonas, indigo, lime, koralas,
geometrinis sans, 32px kampai. Tai 2024 m. startuolio numatytoji reikšmė.
**Ką pakeičiau:** (a) fonas apverstas — vietoje šviesaus lelijinio puslapis stovi ant **soties mėlynos
plokštumos**, o šviesa `#F2F1FE` naudojama tik tekstui ir blokams; tai iš karto atskiria jį nuo lg10
pastelinės krypties ir nuo „bento ant šviesaus“ klišės; (b) bento paverstas **laiko blokais** (vakaro
planuokliu) — tai turinio struktūra, ne dekoratyvinis tinklelis; (c) pasirinkimas **negali** būti piliulės
formos „chip“ (referencinis modelis p. 45), todėl tai keturi stambūs blokai su realiais `radio` po vizualiniu
sluoksniu; (d) pirmasis pasirinkimas yra **ne lytis**, o vakaro tipas — laukų seka sąmoningai kita nei
referencinė. **Antras atsakymas: NE.**

## lg9 — `lg9-prieiga`
**Pirmas atsakymas: TAIP.** Gintarinis terminalas ant beveik juodo, JetBrains Mono, spausdinimo animacija
užkrovus — tai vienas iš labiausiai perdirbtų „hacker“ šablonų, ir fonas `#12100E` būtų per arti draudžiamo
`#12101a`.
**Ką pakeičiau:** (a) fonas pakeltas iki **atpažįstamai pilko `#2B2B28`** — žiūrovas jį įvardija kaip grafitą,
ne kaip juodą, todėl variantas nepatenka nei į §7.2, nei į sinteze §2.1 draudimus, o gintaro kontrastas
išlieka; (b) spausdinimo animacija užkrovus **pašalinta** (ji dubliavo lg1 užkrovimo momentą ir buvo grynas
efektas) — vienintelis judesys dabar yra **reakcija**: įvedus atsakymą, virš prompt'o išspausdinama nauja
išvesties eilutė; (c) hero liko statiškas išvesties tekstas, todėl jis skaitomas ir be JS; (d) monospace
naudojimas pagrįstas: tai ne „mažos etiketės monospace'u“ (§7.5), o visas variantas, kurio turinys yra
komandų seansas. **Antras atsakymas: NE.**

## lg10 — `lg10-atvirukas`
**Pirmas atsakymas: TAIP.** Pastelinis lelijinis fonas, Lora, minkšti šešėliai, 999px mygtukai, kortelių
dėklas — tai numatytasis „švelnus“ šablonas, ir jis rizikuoja atkartoti referencinį piliulės motyvą (p. 31)
bei SaaS šešėlį (§7.4).
**Ką pakeičiau:** (a) 999px leidžiama **tik mygtukams** — ženkleliai ir juostelės piliulės formos
**uždrausti**, nes būtent jie yra referencinis parašas; (b) minkštas šešėlis paliktas **tik po viršutine
dėklo kortele** ir pagrįstas fiziškai: tai popieriaus krūva, o ne dekoratyvinis „elevation“ sluoksnis;
(c) pridėta **siaura šoninė juosta, slenkanti lėčiau už turinį** — asimetrija tampa struktūriniu, o ne
dekoratyviniu sprendimu; (d) dėklas atlieka tris darbus vienu metu (hero + forma + pasakojimas), todėl
puslapis neturi atskiros „kaip veikia“ sekcijos prieš formą — tai jį struktūriškai atskiria nuo lg8, kuris
irgi remiasi pasirinkimais. **Antras atsakymas: NE.**

---

# DALIS 6 — Kryžminė patikra (užpildyta)

| Patikra | Rezultatas |
|---|---|
| 14 ašių × 10 variantų, jokių pasikartojimų stulpelyje | ✔ |
| 20 šriftų, nė vienas dviejuose variantuose | ✔ (Bricolage Grotesque ir Archivo nenaudojami niekur) |
| 52 hex reikšmės, nė viena dviejuose variantuose | ✔ |
| Fono charakteris: 2 šviesūs / 2 tamsūs / 2 spalvoti / 2 tekstūriniai / 2 gradientiniai | ✔ |
| 10 skirtingų hero tipų | ✔ |
| 10 skirtingų sekcijų sekų, nė viena nesutampa su referenciniais modeliais A ir B | ✔ |
| 10 skirtingų CTA modelių, 10 skirtingų formos pradžios laukų, nė vienas ne 3 žingsnių | ✔ |
| 10 skirtingų judesio momentų, 6 iš jų — reakcija į veiksmą | ✔ |
| 10 skirtingų kodo konvencijų ir failų struktūrų | ✔ |
| Nė vienas variantas neatitinka §7 šablonų | ✔ (žr. dalį 4) |
| Savikritika užrašyta visoms 10 krypčių | ✔ (žr. dalį 5) |
