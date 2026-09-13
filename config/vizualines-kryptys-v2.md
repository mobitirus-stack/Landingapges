# 10 vizualinių krypčių — v2 partija (variacijosv2/lp1..lp10)

**Kontekstas:** Jonas peržiūrėjo v1 (10 variantų `variacijos/`) ir pasakė — per daug tekstiniai,
reikia vizualaus, profesionalaus dizaino, panašaus į realius dating app'us (žemėlapiai su pin'ais,
kortelių karuselės, nuotraukų tinkleliai, VIP/patikrinimo ženkleliai). Referenciniai puslapiai
(daddywonderland.love, susipazink.com, slaptaspasimatymas.com, draugas.lt) analizuoti struktūriškai
— dauguma jų patys yra minimalūs/formos-orientuoti, todėl vizualinis „sunkumas" čia yra **mūsų
sprendimas**, ne kopija.

**GRIEŽTA RIBA VISIEMS 10:** JOKIŲ realių/atsisiųstų/scrape'intų žmonių nuotraukų. Visi „nariai",
avatarai, profilių atvaizdai — TIK iliustruoti/abstraktūs SVG (geometriniai pavidalai, stilizuoti
siluetai, inicialų ženkliukai, gradientiniai „blur portretai"). Tai patvirtinta su Jonu.

Kiekviena kryptis turi savo paletę (skiriasi nuo v1 ir tarp savęs), pagrindinį vizualinį raštą ir
avatarų stilių. Kodinis vardas atitinka `lpN`.

---

## lp1 — Žemėlapio atradimas
- **Vizualinis raštas:** pilno pločio žemėlapis (stilizuotas SVG — gatvių tinklelis, ne tikras
  žemėlapis), ant jo išsibarstę apskriti pin'ai su iliustruotais avatarais; centre — didelė "match"
  kortelė su avataru, vardu, atstumu.
- **Paletė:** fonas `#0F1A14` tamsiai žalias, akcentas `#5EEAD4` mėtinė, paviršius `#16241C`,
  tekstas `#E7F5EE`, pin ženkliukas `#FACC15` gintarinė.
- **Šriftai:** Manrope (antraštės) + Inter (tekstas).
- **Avataras:** apskriti gradientiniai „blur portretai" (CSS radial-gradient + SVG triukšmas,
  jokio veido, tik spalvinė dėmė su inicialu).

## lp2 — Swipe kortelių dėklas
- **Vizualinis raštas:** vertikalus kortelių dėklas telefono rėme (CSS mockup), kortelės su
  avataru, vardu/amžiumi, patinka/nepatinka mygtukais; už rėmo — didelė antraštė.
- **Paletė:** fonas `#FFF1F2` šviesiai rožinis, akcentas `#E11D48` ryški raudona, antrinis
  `#1E293B`, paviršius `#FFFFFF`, riba `#FECDD3`.
- **Šriftai:** Sora (antraštės) + Nunito Sans (tekstas).
- **Avataras:** geometriniai daugiakampiai „low-poly" portretai (SVG poligonai, abstraktūs veidai).

## lp3 — Nuotraukų tinklelis (discovery grid)
- **Vizualinis raštas:** tankus 3-4 stulpelių tinklelis su kvadratiniais avatarų kortelėmis
  (kaip Instagram discovery), hover/tap efektas, filtro juosta viršuje.
- **Paletė:** fonas `#FAFAF9` beveik baltas, akcentas `#7C3AED` violetinė, tekstas `#18181B`,
  paviršius `#F4F4F5`, riba `#E4E4E7`.
- **Šriftai:** Plus Jakarta Sans (antraštės) + Inter (tekstas).
- **Avataras:** duotone geometrinės formos (apskritimai/trikampiai dviem paletės spalvomis).

## lp4 — Gyvo aktyvumo juosta
- **Vizualinis raštas:** live-feed sąrašas („X ką tik prisijungė", „Y ir Z susirašinėja") su
  mažais apskritais avatarais ir pulsuojančiu online indikatoriumi; šalia — statistikos dashboard
  su skaitikliais ir mini grafikais (SVG sparkline).
- **Paletė:** fonas `#0B1120` tamsiai mėlynas, akcentas `#22D3EE` žydra, antrinis `#4ADE80` žalia,
  paviršius `#111827`.
- **Šriftai:** Space Grotesk (antraštės) + IBM Plex Sans (tekstas).
- **Avataras:** monogramos apskritimuose (inicialas + gradientinis fonas, be veido formos).

## lp5 — VIP / premium atrakinimas
- **Vizualinis raštas:** hero su „užrakinto" turinio efektu (blur/mozaikos kortelės, kurias
  „atrakina" registracija), aukso/juodos VIP ženkliukai, premium kortelės su rėmeliu.
- **Paletė:** fonas `#0C0A09` beveik juodas, akcentas `#D4AF37` auksinė, paviršius `#1C1917`,
  tekstas `#F5F5F4`.
- **Šriftai:** Cormorant (antraštės) + Karla (tekstas).
- **Avataras:** silueto formos (vientisas kontūras, be detalių) su aukso apvadu, „blur" efektas
  prieš registraciją.

## lp6 — Pokalbio peržiūra (chat preview)
- **Vizualinis raštas:** telefono ekrano mockup su chat burbulais, avatarais šalia žinučių,
  "typing..." indikatorius; po juo — trumpų sėkmės istorijų kortelės.
- **Paletė:** fonas `#F0FDF4` šviesiai žalias, akcentas `#16A34A` sodri žalia, tekstas `#14532D`,
  paviršius `#FFFFFF`.
- **Šriftai:** Poppins (antraštės) + Karla (tekstas).
- **Avataras:** apskriti flat-illustration veidai (paprastos formos: apskritimas + 2 taškai + linija,
  be realizmo).

## lp7 — Patikrinimo / saugumo pirmumas
- **Vizualinis raštas:** centrinis "verified" ženklas (didelis SVG varnelės skydas), aplink —
  patikrinimo žingsnių iliustracijos (dokumentas, veido skenas kaip abstraktus piktogramų rinkinys,
  ne tikras veidas), statistikos juosta apie patikrintus profilius.
- **Paletė:** fonas `#EFF6FF` šviesiai mėlynas, akcentas `#2563EB` sodri mėlyna, tekstas `#1E3A5F`,
  paviršius `#FFFFFF`.
- **Šriftai:** Outfit (antraštės) + Source Sans 3 (tekstas).
- **Avataras:** piktogramų stiliaus (linijinis žmogaus simbolis apskritime, ne portretas).

## lp8 — Istorijų karuselė (stories)
- **Vizualinis raštas:** horizontali slenkanti "stories" juosta (apskriti avatarai su spalvotu
  žiedu kaip Instagram stories), po ja — didelė citata/istorija kortelė.
- **Paletė:** fonas `#FDF4FF` šviesiai violetinis, akcentas gradientas `#F472B6`→`#A855F7`,
  tekstas `#3B0764`, paviršius `#FFFFFF`.
- **Šriftai:** Fraunces (antraštės) + Mulish (tekstas).
- **Avataras:** akvarelės stiliaus dėmės (SVG organiškos formos, 2-3 sluoksniai, jokio veido).

## lp9 — App parduotuvės stilius
- **Vizualinis raštas:** telefono ekrano mockup su app sąsaja (tab baras apačioje, kortelių
  sąrašas viduje), šalia — App Store/Google Play stiliaus (bet ne prekės ženklo) atsisiuntimo
  mygtukai kaip iliustracijos, žvaigždučių reitingas.
- **Paletė:** fonas `#18181B` grafitas, akcentas `#FB923C` oranžinė, paviršius `#27272A`,
  tekstas `#FAFAFA`.
- **Šriftai:** Archivo (antraštės — SVARBU: čia LEIDŽIAMA, nes v1 draudimas buvo tik referencinei
  porai su Bricolage Grotesque; patikrinti prieš naudojant) + DM Sans (tekstas). *Saugiau: naudoti
  Lexend vietoj Archivo, jei abejotina.*
- **Avataras:** flat dizaino kortos formos piktogramos su geometriniu "veidu" (3 formų kompozicija).

## lp10 — Suporuotų istorijų vitrina
- **Vizualinis raštas:** "prieš/po" arba poros kortelės su dviem susijungiančiais avatarais
  (animacija — du apskritimai susijungia į vieną), sėkmės istorijų tinklelis.
- **Paletė:** fonas `#FFFBEB` šviesiai gintarinis, akcentas `#F59E0B` gintaras, antrinis `#EC4899`
  rožinė, tekstas `#451A03`.
- **Šriftai:** Bricolage Grotesque (antraštės — PATIKRINTI, ar leidžiama, žr. v1 draudimų sąrašą;
  jei draudžiama, naudoti Fraunces) + Work Sans (tekstas).
- **Avataras:** du susiliejantys gradiento apskritimai (Venn diagramos stiliaus kompozicija).

---

## Bendros techninės taisyklės (visiems 10)
- Vienas `index.html` + `assets/style.css` (+`app.js` jei reikia animacijai/interaktyvumui).
- Realus, pilnas tekstas (copy) — panašios kokybės kaip v1, bet NEBŪTINA identiška terminija/
  prekės ženklai (nauja partija, gali turėti naujus prekės ženklų vardus).
- Formos: registracijos forma veikianti be backend'o (`action="#"`, JS validacija, sėkmės būsena).
- SEO: title/description/OG/canonical → `https://vyrukambarys.lt/lp{{N}}`.
- Prieinamumas: kontrastas ≥4.5:1, `:focus-visible`, `alt`/`aria-label` dekoratyviems SVG
  (`aria-hidden="true"`), `prefers-reduced-motion`.
- Responsive 360/768/1024/1440, be horizontalaus scroll.
- CSS <60KB, puslapis <1.5MB, be blokuojančių skriptų.
- 18+ patvirtinimo / teisinis blokas poraštėje (kaip v1).
- `<!-- tracking: event_name -->` vietoje analitikos.
