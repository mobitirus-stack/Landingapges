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

---

# lp7–lp10 — ANTRA GRUPĖ: itin paprastas šablonas (Jono nurodyta kryptis)

**Naujas kontekstas:** Jonas parodė realius konkurentus (susipazink.com, slaptaspasimatymas.com,
pazintys40.lt) — visi naudoja TĄ PATĮ šabloną: pilno ekrano fotografija fone (moteris/pora,
šypsosi tiesiai į kamerą arba žiūri į telefoną) + maža, centruota, beveik permatoma/šviesi
registracijos kortelė ANT nuotraukos: logotipas, trumpa antraštė, lyties pasirinkimas (radio),
gimimo data (3 dropdown'ai: diena/mėnuo/metai), vienas ryškus CTA mygtukas, 3 pasitikėjimo
ženkliukai eilutėje, apatinė teisinė nuorodų juosta. **Jokio scroll'o — viskas telpa viename ekrane.**

**Kliento nurodymas:** „kitus padaryk tokius kur visai paprasti landing page, vien vizualai,
puslapis max paprastas. Backrounde sugeneruok mergina." **Patvirtinta su klientu:** vietoj
fotorealistiškos (negalimos — nei techniškai, nei etiškai/teisiškai saugios) moters nuotraukos,
naudojame **DIDELĘ STILIZUOTĄ SVG ILIUSTRACIJĄ** — meninis vector/line-art moters portretas ar
figūra, ELEGANTIŠKA, NE fotorealistiška, joks konkretus atpažįstamas žmogus. Ta pati struktūra,
tas pats vizualinis svoris (didelė figūra užima didžiąją ekrano dalį), bet iliustracija vietoj
nuotraukos.

**Bendra struktūra visiems 4 (skiriasi tik meninis stilius/paletė/nuotaika):**
- Pilno ekrano fonas: SVG/CSS iliustracija (figūra + fonas), be scroll — `100vh` konteineris.
- Maža centruota/dešinėje-kairėje pastumta kortelė (balta arba šviesi, ~380-420px pločio,
  `backdrop-filter: blur()` arba tiesiog nepermatoma su šešėliu) su: logotipas/prekės ženklas,
  1-2 eilučių antraštė, lyties radio (2 pasirinkimai), gimimo data (3 `<select>`), CTA mygtukas
  (pilnas pločio, ryški spalva), 3 maži pasitikėjimo ženkliukai (SVG ikonos + trumpas tekstas),
  apatinė teisinė juosta (Pagalba/Taisyklės/Privatumas/Apie/18+).
- Mobiliame (360px): kortelė užima visą pločio ~92%, iliustracija lieka fone (gali apsikirpti/
  sufokusuoti į figūros viršutinę dalį, kad veidas/figūra liktų matomi).

## lp7 — Auksinės valandos iliustracija
- **Nuotaika:** šilta, romantiška, saulėlydžio tonai.
- **Paletė:** iliustracijos fonas gradientas `#F97316`→`#7C2D12`, kortelės fonas `#FFF7ED`,
  akcentas/CTA `#EA580C`, tekstas `#431407`.
- **Šriftai:** Fraunces (logotipas/antraštė) + Inter (forma).
- **Iliustracijos stilius:** vector line-art moters siluetas/portretas pusiau profiliu, plaukai
  vėjyje (organiškos SVG linijos), saulėlydžio disko motyvas fone.

## lp8 — Pastelinis minimalizmas
- **Nuotaika:** švelnus, šviesus, prieinamas.
- **Paletė:** iliustracijos fonas `#FDF2F8`→`#E0E7FF` gradientas, kortelė balta `#FFFFFF`,
  akcentas `#DB2777`, tekstas `#3B0764`.
- **Šriftai:** Poppins (logotipas) + Nunito Sans (forma).
- **Iliustracijos stilius:** flat-illustration moters figūra (paprastos geometrinės formos,
  vienspalvis plaukų blokas, minimalistiniai veido bruožai — kaip madinga redakcinė iliustracija,
  NE realistiška).

## lp9 — Nakties siluetas
- **Nuotaika:** paslaptinga, elegantiška, „naktinis miestas".
- **Paletė:** iliustracijos fonas beveik juodas `#0F0F14`→`#1E1B4B` gradientas su miesto šviesų
  taškais, kortelė `#18181B` (tamsi, ne balta — kontrastas su šviesiu CTA), akcentas `#FBBF24`,
  tekstas `#FAFAF9`.
- **Šriftai:** Cormorant (logotipas) + Karla (forma).
- **Iliustracijos stilius:** tamsus siluetas/kontūras prieš apšviestą miesto fono liniją (skyline
  kaip paprastos SVG stačiakampių formos), be veido detalių — grynas kontūras.

## lp10 — Pavasario sodas
- **Nuotaika:** švieži, gaivūs, optimistiški.
- **Paletė:** iliustracijos fonas `#ECFDF5`→`#D1FAE5` su gėlių/lapų motyvais, kortelė balta su
  žalsvu atspalviu `#F0FDF4`, akcentas `#059669`, tekstas `#064E3B`.
- **Šriftai:** Fraunces italic (logotipas) + Karla (forma).
- **Iliustracijos stilius:** akvarelės stiliaus SVG kompozicija — moters figūra apsupta gėlių/lapų
  formų, organiškos, švelniai persidengiančios formos (kaip botaninė iliustracija su žmogumi).

## Techninės taisyklės lp7-10 (papildo bendras taisykles apačioje)
- VIENAS ekranas, be scroll (arba minimalus scroll tik labai mažuose ekranuose).
- Forma: lytis (radio) + gimimo data (3 select) + CTA — TIEK IR VISKAS pirmame žingsnyje (kaip
  referenciniai puslapiai), jokių papildomų laukų šiame ekrane.
- Iliustracija — inline SVG, optimizuota (nesudėtinga geometrija/keliai, ne šimtai mazgų), kad
  puslapis liktų lengvas.
- Kontrastas: kortelės tekstas/fonas turi būti ≥4.5:1 NEPRIKLAUSOMAI nuo foninės iliustracijos
  (kortelė turi savo fono spalvą/blur, ne tiesiog permatomas stiklas ant bet kokio iliustracijos
  ploto).
- `og:image` — PNG 1200×630, generuojamas iš tos pačios iliustracijos (be teksto/formos, vien
  vizualas + prekės ženklo pavadinimas).

---

# lp7–lp9 — TREČIA GRUPĖ: tas pats šablonas kaip lp4-6, kitas išdėstymas + naujos temos

**Kontekstas (2026-09-14):** lp4-6 (buvę lp7-9) patvirtinti kaip veikiantis šablonas — pilno ekrano
REALI Jono paties AI-sugeneruota nuotrauka fone + maža registracijos kortelė. Jonas paprašė dar 3
naujų variantų ta pačia struktūra, bet: (a) **kortelės pozicija/išdėstymas pakeistas** kiekviename,
kad variantai vizualiai skirtųsi ne tik paletę, ir (b) **naujos, dar nenaudotos temos/nuotaikos**
(neturi kartoti lp4 auksinė valanda/oranžinė, lp5 pastelinė rožinė, lp6 nakties tamsi/auksinė).

Nuotraukas generuoja pats Jonas per ChatGPT (kaip lp4-6 atveju) — promptai duoti jam tiesiogiai
pokalbyje. Statyba prasidės, kai gaus nuotraukas (`variacijosv2/lp7/assets/hero-portrait.jpg` ir t.t.),
pagal `promptai/08-statyba-v2-foto.md` šabloną, PRITAIKANT naują kortelės poziciją kiekvienam.

## lp7 — „Vasaros vakaras prie vandens" (Seaside summer evening)
- **Išdėstymas:** kortelė KAIRĖJE (priešingai nei lp4-6, kur visur dešinėje). Veidas/figūra
  nuotraukoje turi būti kadro DEŠINĖJE pusėje, kad liktų matomas prie kairėje esančios kortelės.
- **Paletė:** turkio/žydra `#0D9488` + šiltas koralas `#FB7185` akcentams, kortelės fonas
  šviesus `#F0FDFA`, tekstas `#134E4A`.
- **Nuotaika:** šilta vasaros naktis, terasa/paplūdimio baras, bokeh miesto/vandens šviesos.

## lp8 — „Vyno vakaras" (Wine bar evening)
- **Išdėstymas:** kortelė APAČIOJE, per visą plotį kaip „sheet"/modalas, iškylantis virš apatinio
  ~40% nuotraukos. Veidas turi būti kadro VIRŠUJE (viršutiniame trečdalyje), kad liktų matomas virš
  kortelės.
- **Paletė:** bordo/vyno raudona `#7F1D1D` + žvakės gintaras `#F59E0B`, kortelės fonas tamsus
  `#1C1210`, tekstas `#FDF4E7`.
- **Nuotaika:** intymus žvakėmis apšviestas vyno baras/restoranas, šiltas kontrastingas apšvietimas.

## lp9 — „Neoninis klubas" (Neon night)
- **Išdėstymas:** kortelė MAŽA, VIRŠUJE DEŠINĖJE (kompaktiška, kabanti plūduriuojanti kortelė, ne
  per visą aukštį) — daugiau nuotraukos lieka matoma. Veidas/figūra kadro APAČIOJE KAIRĖJE arba
  centre-apačioje, kad liktų atviros erdvės viršuje dešinėje kortelei.
- **Paletė:** elektrinė mėlyna `#2563EB` + purpurinė/magenta `#D946EF` neonas, kortelės fonas
  beveik juodas su blur/glass efektu `rgba(10,10,15,0.75)`, tekstas `#FAFAFA`.
- **Nuotaika:** neoninis naktinis klubas/gatvė, kontrastingas mėlynas/rožinis apšvietimas.

## Techninės pastabos lp7-9 statybai (kai turėsim nuotraukas)
- Panaudoti lp6 pamoką: bazinę `.lpN-hero { background-position }` VISADA testuoti Playwright
  screenshot'ais per platų diapazoną viewport'ų, ĮSKAITANT žemus/plačius langus (pvz. 1394×677,
  901×550), ne tik 1440×900 — trumpi/platūs desktop langai kritiškai keičia matomą vertikalią
  nuotraukos juostą (`background-size:cover` + portretinė nuotrauka + platus/žemas konteineris).
- lp8 (kortelė apačioje) ir lp9 (kortelė maža viršuje) reikalaus KITOKIOS `background-position`
  logikos nei lp4-6 (kur kortelė visada dešinėje) — veido pozicija nuotraukoje turi atitikti kortelės
  vietą, kad kortelė niekada neuždengtų veido.

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
