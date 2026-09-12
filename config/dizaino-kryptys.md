# 10 dizaino krypčių — pradinė atskyrimo bazė

Fazės 2 agentas šias kryptis gali tikslinti, bet **negali** jų suartinti. Nė vienas šriftas ir nė
viena hex reikšmė nesikartoja tarp krypčių. Jei projektas reikalauja kitokio turinio, keičiama
kryptis visa, ne jos dalis.

---

## 01 — Techninis šveicariškas
- **Paletė:** fonas `#E9ECEF`, tekstas `#16181D`, akcentas `#D5202C`, paviršius `#FFFFFF`, ribos `#C4CAD1`
- **Šriftai:** Archivo (antraštės, 600/700, suspausti tarpai) + Newsreader (tekstas, 1.65 line-height)
- **Tinklelis:** griežtas 12 stulpelių, viskas lygiuojama į kairę, plati kairė paraštė
- **Hero:** centrinė antraštė be vaizdo, po ja viena horizontali duomenų eilutė
- **Kampai:** 0px, be šešėlių, skyrimas tik tarpais
- **Judesys:** vienas puslapio užkrovimo sekos momentas — antraštė atsiskleidžia per kaukę
- **Vaizdai:** techninės diagramos SVG
- **Kodo konvencija:** BEM (`block__element--modifier`)

## 02 — Neo-brutalizmas
- **Paletė:** fonas `#FFFFFF`, tekstas `#000000`, akcentas `#F2E205`, antrinis `#2B4BFF`, ribos `#000000`
- **Šriftai:** Anton (antraštės, labai didelės) + Space Grotesk (tekstas)
- **Tinklelis:** asimetrinis, blokai persidengia, sąmoningai netolygios paraštės
- **Hero:** tipografinis plakatas be jokio UI, mygtukas apačioje
- **Kampai:** 0px + 4px juodi rėmeliai + kietas `6px 6px 0` šešėlis
- **Judesys:** mygtukas fiziškai „nusispaudžia“ paspaudus (tik reakcija į veiksmą)
- **Vaizdai:** stambi geometrija, be fotografijų
- **Kodo konvencija:** semantiniai vientisi vardai (`offer-panel`, `proof-strip`)

## 03 — Tamsus techninis mėlynas
- **Paletė:** fonas `#0A1628`, paviršius `#132540`, tekstas `#DCE7F5`, akcentas `#4DD2FF`, antrinis `#7B61FF`
- **Šriftai:** Sora (antraštės) + IBM Plex Sans (tekstas)
- **Tinklelis:** split-screen 50/50, dešinė pusė sticky
- **Hero:** gyvas mini demo arba skaičiuoklė dešinėje pusėje
- **Kampai:** 12px, švelnus vidinis švytėjimas vietoje šešėlių
- **Judesys:** vienas skaičiaus skaitiklio paleidimas įėjus į ekraną
- **Vaizdai:** duomenų vizualizacija, jokių nuotraukų
- **Kodo konvencija:** `data-` atributai + minimalios klasės

## 04 — Organinis žolinis
- **Paletė:** fonas `#C9D3C0`, tamsus `#22301F`, akcentas `#E0A32E`, paviršius `#F2F4EE`, ribos `#9DAE92`
- **Šriftai:** Fraunces (antraštės, optiniai ašiai) + Karla (tekstas)
- **Tinklelis:** viena plati kolona, centruotas lygiavimas, dideli vertikalūs tarpai
- **Hero:** full-bleed fotografija su tekstu apačioje
- **Kampai:** stambūs 24px, be šešėlių
- **Judesys:** vienas lėtas fono spalvos perėjimas scrollinant
- **Vaizdai:** natūralios faktūros fotografija
- **Kodo konvencija:** utility klasės (`u-stack-lg`, `u-measure`)

## 05 — Korporatyvinis pasitikėjimas
- **Paletė:** fonas `#F5F7FA`, tamsus `#102A43`, akcentas `#0E9F6E`, paviršius `#FFFFFF`, ribos `#BCCCDC`
- **Šriftai:** Source Serif 4 (antraštės) + Source Sans 3 (tekstas)
- **Tinklelis:** tankus 8 stulpelių, daug lentelinės informacijos
- **Hero:** forma pirmame ekrane, kairėje — pasiūlymo sąlygos
- **Kampai:** 4px, plona riba vietoje šešėlio
- **Judesys:** formos žingsnių indikatoriaus perėjimas (reakcija į veiksmą)
- **Vaizdai:** piktogramos linijomis, sertifikatų blokai
- **Kodo konvencija:** ilgi semantiniai vardai su prefiksu (`trust-`, `offer-`)

## 06 — Retro spauda
- **Paletė:** fonas `#EFE3CE`, tamsus `#3A2416`, akcentas `#B4471F`, antrinis `#C9962B`, ribos `#8A6A45`
- **Šriftai:** Bitter (antraštės) + Work Sans (tekstas)
- **Tinklelis:** trys kolonos su tarpinėmis linijomis, tekstas lygiuojamas abipus
- **Hero:** horizontali marquee juosta su pasiūlymu virš antraštės
- **Kampai:** 2px, spaudos grūdelio tekstūra fone
- **Judesys:** marquee juostos nuolatinis slinkimas (vienintelis judesys puslapyje)
- **Vaizdai:** duotone fotografija dviem paletės spalvomis
- **Kodo konvencija:** kebab-case be prefiksų (`price-list`, `field-row`)

## 07 — Kontrastinė prabanga
- **Paletė:** fonas `#1A1614`, šviesus `#EDE7DC`, akcentas `#B99A55`, paviršius `#241F1C`, ribos `#4A423C`
- **Šriftai:** Playfair Display (antraštės) + Jost (tekstas)
- **Tinklelis:** labai daug oro, turinys siauroje centrinėje juostoje
- **Hero:** stambus rezultato skaičius kaip pagrindinis vizualas
- **Kampai:** 0px, plaukiniai auksiniai skirtukai, be šešėlių
- **Judesys:** vienas atskleidimas — skaičius suformuojamas iš skaitmenų
- **Vaizdai:** minimalūs, viena tamsi produkto nuotrauka
- **Kodo konvencija:** CSS moduliams būdingi vardai (`Panel_root`, `Panel_title`)

## 08 — Žaismingas ryškus
- **Paletė:** fonas `#F4F3FF`, akcentas `#3B2EDB`, antrinis `#C3F53C`, trečias `#FF6B57`, tekstas `#1B1A33`
- **Šriftai:** Plus Jakarta Sans (antraštės) + Outfit (tekstas)
- **Tinklelis:** bento išdėstymas, skirtingo dydžio blokai
- **Hero:** klausimas + atsakymo pasirinkimas, kuris veda į formą
- **Kampai:** mišrūs — 32px dideliems blokams, 8px mažiems
- **Judesys:** atsakymo pasirinkimo perėjimas (reakcija į veiksmą)
- **Vaizdai:** plokščios iliustracijos paletės spalvomis
- **Kodo konvencija:** komponentiniai prefiksai (`c-`, `l-`, `is-`)

## 09 — Gintarinis terminalas
- **Paletė:** fonas `#12100E`, tekstas `#E8E2D6`, akcentas `#FFB000`, pilka `#8B8680`, paviršius `#1D1A16`
- **Šriftai:** JetBrains Mono (antraštės ir etiketės) + Inter Tight (tekstas)
- **Tinklelis:** viena kolona, kairysis lygiavimas, fiksuoto pločio ritmas
- **Hero:** eilutė po eilutės atsirandantis pasiūlymas kaip komandų išvestis
- **Kampai:** 2px, be šešėlių, plonos gintarinės ribos
- **Judesys:** hero teksto spausdinimo seka vieną kartą užkrovus
- **Vaizdai:** ASCII / tinklelio grafika
- **Kodo konvencija:** sutrumpinti vardai su brūkšneliu (`tm-row`, `tm-cta`)

## 10 — Pastelinis redakcinis
- **Paletė:** fonas `#FBF7FF`, akcentas `#CBB8F0`, antrinis `#FFC9A3`, tekstas `#3C2A56`, ribos `#E2D6F2`
- **Šriftai:** Lora (antraštės) + Manrope (tekstas)
- **Tinklelis:** asimetrinis 2/3 + 1/3, dešinėje siaura šoninė juosta
- **Hero:** kortelių dėklas, kurį galima perversti
- **Kampai:** pilnai apvalinti 999px mygtukams, 16px paviršiams
- **Judesys:** kortelių vertimas (reakcija į veiksmą)
- **Vaizdai:** švelnios koliažo iškarpos
- **Kodo konvencija:** dvižodžiai semantiniai vardai (`story-panel`, `answer-list`)

---

## Kryžminė patikra prieš statybą

| Ašis | Patikra |
|---|---|
| Šriftai | 20 skirtingų šriftų, nė vienas nesikartoja |
| Fonas | 5 šviesūs, 3 tamsūs, 2 spalvoti — jokių dviejų vienodų |
| Hero tipas | 10 skirtingų |
| Kampai | 0 / 0+rėmeliai / 12 / 24 / 4 / 2 / 0+plaukiniai / mišrūs / 2 / 999+16 |
| Judesys | 10 skirtingų momentų, 6 iš jų — reakcija į vartotojo veiksmą |
| Kodo konvencija | 10 skirtingų klasių vardų sistemų |
