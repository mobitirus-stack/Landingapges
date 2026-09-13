# Analizė — URL 2

**Šaltinis:** https://daddywonderland.love/landing-b
**Analizės data:** 2026-09-12
**Metodas:** HTTP fetch + HTML/CSS/JS šaltinio peržiūra (curl), be JS render'inimo naršyklėje. Puslapis pasirodė esąs pilnai server-side generuotas (PHP), ne SPA — CSS/JS yra atskiri statiniai failai, dalinami su visa svetaine (ne tik šiuo landing variantu).

---

## 1. Kontekstas

**1.1 Auditorija ir jos būsena prieš įėjimą**
Lietuviškai kalbantys 18+ suaugusieji, ateinantys iš mokamos reklamos, ieškantys atsitiktinių/laisvų pažinčių. Kategorija (suaugusiųjų pažintys) turi įgimtą pasitikėjimo deficitą — vartotojas tikėtinai skeptiškas dėl netikrų anketų/apgaulės, lygina su žinomomis pažinčių programėlėmis, nenori iš karto mokėti ar duoti daug asmeninių duomenų.

**1.2 Tikėtinas srauto šaltinis**
Mokama reklama (greičiausiai socialiniai tinklai/display), ne organinė paieška — puslapis turi `noindex, nofollow` meta žymą ir kelio pavadinimą, būdingą A/B testavimo variantui („landing-b"). Puslapis suprojektuotas kaip vieno ekrano, vieno veiksmo puslapis be scroll naratyvo — tai atitinka trumpo dėmesio srautą iš vaizdinės/mobiliosios reklamos.

**1.3 Pasiūlymo esmė (savais žodžiais)**
Nemokama, greita registracija į lietuvišką suaugusiųjų pažinčių bendruomenę, pozicionuojamą kaip ramesnę/be nereikalingo pertekliaus alternatyvą, akcentuojant realių, patys užsiregistravusių narių autentiškumą.

**1.4 Konversijos tikslas ir jo tipas**
Mikro-konversija: paskyros sukūrimas per tiesiogiai puslapyje įmontuotą kelių žingsnių formą. Tipas — nemokamas lead-gen/registracijos veiksmas; monetizacija (jei yra) vyksta jau po registracijos, produkto viduje — puslapyje apie tai jokios užuominos nėra.

---

## 2. Įtikinėjimo grandinė

**2.1 Sekcijų sąrašas tvarka (funkcija, ne turinys)**
1. Antraštė (sticky) — orientacija, prekės ženklo identitetas, antrinis mažo įsipareigojimo CTA (prisijungimui grįžtantiems), kalbos perjungimas.
2. Hero (centruotas, vienos kolonos) — prekės ženklas + vieno sakinio pasiūlymo esmė + vienas pagrindinis CTA mygtukas.
3. Registracijos kortelė (3 žingsnių forma) — visas konversijos mechanizmas, įmontuotas tiesiai po hero, be atskiros landing pasakojimo dalies.
4. Poraštė — teisinis/atitikties uždarymas (amžiaus patvirtinimas, taisyklės, privatumas), antrinė navigacija, atitikties ženkleliai.

Svarbu: šioje variacijoje **nėra** atsiliepimų, statistikos, DUK ar kainodaros sekcijų — puslapis sudarytas tik iš keturių funkcinių blokų.

**2.2 Kokį prieštaravimą uždaro kiekviena sekcija**
- Antraštės „prisijungti" mygtukas — uždaro „aš jau turiu paskyrą" atvejį, kad tai netrukdytų naujo vartotojo keliui.
- Hero eilutė — netiesiogiai atsako į „ar tai dar vienas triukšmingas/šlamštinis puslapis" nuogąstavimą per pozicionavimą.
- Kelių žingsnių forma su progreso juosta — uždaro „registracija per ilga" prieštaravimą, suskaidydama į mažus, matomos pažangos žingsnius.
- Pirmas žingsnis renkasi mygtukais-„chip'ais", ne išsiskleidžiančiais sąrašais — sumažina pirmo mikro-įsipareigojimo trintį prieš prašant sunkesnių laukų (el. paštas, slaptažodis).
- Poraštės amžiaus juosta ir teisiniai puslapiai — uždaro „ar tai teisėta/atitinkanti reikalavimus platforma" abejonę.
- Atitikties ženkleliai poraštėje — trumpas teisėtumo/reguliavimo signalas.
- Slapukų juosta (pasirodo su uždelsimu) — atitikties reikalavimas, neblokuojantis pirminio puslapio suvokimo.

**2.3 Socialinio įrodymo tipai ir pozicijos**
Šioje variacijoje socialinio įrodymo **nėra** — jokių narių skaičių, atsiliepimų, gyvo aktyvumo indikatorių ar žymėjimų žiniasklaidoje. Vienintelis panašus elementas — poraštės atitikties ženkleliai, bet tai teisėtumo, ne socialinio įrodymo signalas.

**2.4 Rizikos mažinimo mechanizmai**
Aiškiai nurodyta, kad registracija nemokama; formoje nėra jokio mokėjimo lauko; slaptažodžio matomumo perjungimas mažina įvedimo klaidų trintį. Nėra pinigų grąžinimo garantijos ar bandomojo laikotarpio pažado (nereikalingas, nes įėjimas jau nemokamas). Privalomas varnelės laukas dėl taisyklių/privatumo — tai teisinė apsauga verslui, ne vartotojo rizikos mažinimas.

**2.5 Skubos / trūkumo mechanizmai**
Jų **nėra** — nėra atgalinio skaičiavimo, „liko X vietų", riboto laiko pasiūlymo ar gyvo aktyvumo skaitliuko šioje variacijoje. Puslapis veikia be spaudimo, „amžinai galiojančio" tipo.

**2.6 Kainodaros pateikimo būdas**
Kainodaros **nėra** puslapyje apskritai — nei lentelės, nei planų palyginimo, nei kainos paminėjimo. Visa monetizacija atidėta į laiką po registracijos.

---

## 3. CTA sistema

**3.1 CTA kiekis ir pozicijos**
Iš esmės du skirtingi CTA tipai: (a) antraštės antrinis mygtukas prisijungimui grįžtantiems vartotojams (nuolat matomas dėl sticky antraštės); (b) hero pagrindinis mygtukas, kuris yra vidinė nuoroda (anchor), nuslenkanti prie registracijos kortelės, o ne atskiras puslapio perkrovimas. Po to seka trys nuoseklūs mikro-CTA formos viduje (du „tęsti" mygtukai + galutinis pateikimo mygtukas). Kito, pakartoto CTA puslapio apačioje ar poraštėje **nėra**.

**3.2 Ką pažada paspaudimas (funkciškai)**
Hero CTA — greitą nuslinkimą prie formos toje pačioje puslapio įkeltyje, be naujo puslapio užkrovimo. Prisijungimo mygtukas — pilną navigaciją į atskirą prisijungimo puslapį. Formos pateikimo mygtukas — realų serverio POST užklausimą, kuriantį paskyrą.

**3.3 Formos laukai ir prašomos informacijos kiekis**
1 žingsnis: lytis (dvi parinktys mygtukais) + ieškoma lytis (dvi parinktys mygtukais).
2 žingsnis: amžiaus grupė (5 diapazonai, išsiskleidžiantis sąrašas) + miestas (16 pavadintų miestų + „kitas" parinktis).
3 žingsnis: slapyvardis, el. paštas, slaptažodis (su matomumo perjungimu), privalomas varnelės laukas (18+ patvirtinimas + taisyklės/privatumas).
Iš viso 6 duomenų punktai iki paskyros sukūrimo — palyginti lengva pažinčių platformai (nėra nuotraukos įkėlimo, aprašymo ar telefono numerio patvirtinimo šiame etape).

**3.4 Kas vyksta po pateikimo**
Standartinis sinchroninis viso puslapio POST į serverio adresą (formoje nerasta AJAX/fetch logikos, priešingai nei kituose to paties JS pluošto komponentuose). Tikėtinas viso puslapio perkrovimas/nukreipimas po pateikimo; tiksli tolimesnė vieta neverifikuota, nes forma nebuvo realiai pateikta (nesiekiant kurti tikros paskyros trečios šalies serveryje). Kliento scenarijus tik atidaro trečią žingsnį iš naujo, jei serveris pažymi klaidos vėliavėlę puslapio perkrovime — tai rodo serverio pusėje atliekamą pakartotinį formos atvaizdavimą su klaidos būsena.

---

## 4. Struktūra ir elgsena

**4.1 Hero tipas ir kas matoma be scroll**
Centruotas, tekstinis hero (ne split su vaizdu) — prekės ženklo pavadinimas, vieno sakinio pasiūlymas, vienas mygtukas. Jokio hero vaizdo/nuotraukos/video/iliustracijos nėra. Tipiniame darbalaukio ekrane be scroll matoma: antraštė + pilnas hero + tikėtinai registracijos kortelės viršutinė dalis (dėl dosnaus vertikalaus hero paminkšninimo).

**4.2 Navigacijos elgsena, sticky elementai**
Antraštė yra sticky/fiksuota su permatomu suliejimo (blur) fonu slenkant, išlieka per visą puslapį. Turinys: prekės ženklas, vienas teksto nuorodos punktas (nuslenka į formą), kalbos perjungiklis (išskleidžiamas, 5 kalbos), prisijungimo mygtukas, (mobiliajame) meniu mygtukas. Kito scroll-pagrįsto elgesio (susitraukimas, pasislėpimas slenkant žemyn) nepastebėta.

**4.3 Mobilus elgesys ir kuo skiriasi nuo desktop**
Teksto nuorodos paslepiamos už meniu mygtuko (praktiškai formalumas, nes lieka tik vienas punktas); prekės ženklo teksto dalis paslepiama, liekant tik mažam kvadratiniam ženkliukui, kad vieta netrūktų; kalbos perjungiklis ir prisijungimo mygtukas sutankinami, kad tilptų vienoje eilutėje. Hero ir sekcijų vertikalus paminkšninimas sumažinamas. Registracijos kortelės vidinis paminkšninimas sutankinamas. Dviejų stulpelių formos eilutė (amžius+miestas) susilygina į vieną stulpelį po tam tikru pločio slenksčiu. Atskiro mobiliojo sticky CTA juostos (kaip yra kituose to paties kodo puslapiuose) šioje variacijoje **nėra**.

---

## 5. Technika

**5.1 Apytikslis svoris, kas stabdo užkrovimą, layout shift**
Gana lengvas puslapis: HTML ~15 KB, dalinamas CSS pluoštas ~39 KB (aptarnauja visą svetainę, ne tik šį variantą — jame yra daug šiam puslapiui nenaudojamų komponentų stilių), dalinamas JS pluoštas ~16 KB (ta pati situacija — didžioji dalis jo kodo, pvz. kortelių slankymo ir pokalbių atnaujinimo logika, šiame puslapyje niekada nesuveikia, nes atitinkamų elementų čia nėra — tai nereikalingas svoris šiam maršrutui). Kraunami du „Google Fonts" šriftai per preconnect + stylesheet nuorodą (viena antraštinė ir viena tekstinė šeima, po keturis svorius kiekviena) — realus render-blokavimo/šrifto pakeitimo (FOUT) rizikos taškas. Rastrinių vaizdų puslapyje **nėra** išvis (visi ženklai — inline SVG arba tekstas), tad LCP-vaizdo rizikos ir su vaizdais susijusio layout shift nėra. Bendrai: technika liesa, bet puslapiui tenka dalintis pertekliniu, visai svetainei skirtu CSS/JS pluoštu, o ne turėti savo, tam skirtą.

**5.2 Antraščių hierarchija, meta, structured data**
H1 elemento puslapyje **nėra išvis** — vizualinis prekės ženklo pavadinimas yra paprastas `div`, o vienintelė tikra antraštė yra H2 registracijos kortelėje; poraštėje naudojami H5. Meta rinkinys kitu atveju išsamus reklaminiam puslapiui: aprašomasis title, meta description, pilnas Open Graph rinkinys, Twitter card, suaugusiųjų turinio žymos, hreflang alternatyvos 5 kalboms, aiškus `noindex, nofollow` (sąmoningai neįtraukiama į organinę paiešką — atitinka tik-mokamo-srauto funkciją), minimalus JSON-LD grafas (tik Organization + WebSite — jokios Product/Offer/FAQ schemos).

**5.3 Prieinamumo problemos**
Trūksta H1 (antraščių hierarchija prasideda nuo H2 — pablogina ekrano skaitytuvo/naršymo pagal antraštes patirtį). Lyties/preferencijos „chip" pasirinkimai yra paprasti mygtukai, perjungiami tik per CSS klasę, be `aria-pressed`/`role="radiogroup"` — ekrano skaitytuvo naudotojui nėra jokio pranešimo, kuris pasirinkimas šiuo metu pažymėtas. Kalbos perjungiklis ir mobilus meniu korektiškai valdo `aria-expanded`. Formos etiketės tinkamai susietos per `for`/`id` (gerai). Slaptažodžio matomumo mygtukas turi teksto pakeitimą, bet be papildomo aria pranešimo. Spalvų paletė — tamsi tema su šviesiu tekstu ant tamsaus fono; didžioji dalis pagrindinio teksto naudoja pritildytą, švelnų atspalvį, kurio kontrasto santykį prieš tamsų foną vertėtų patikrinti, ypač smulkiam poraštės teisiniam tekstui.

---

## 6. Kritika

**6.1 Penkios silpnos vietos ir kaip mūsų variacijos turi jas išspręsti**

1. **Nėra H1 / silpna antraščių hierarchija.** Kenkia prieinamumui ir bet kokiai liekamajai SEO vertei net ir `noindex` puslapyje (nuskaitymo įrankiai, reklamos platformų tikrintuvai ir pagalbinės technologijos remiasi antraščių struktūra). *Sprendimas:* kiekviena mūsų variacija turi turėti tiksliai vieną tikrą H1 hero sekcijoje, nešantį pagrindinį pasiūlymą.

2. **Jokio socialinio įrodymo šioje variacijoje.** Kategorijai, kur pasitikėjimo deficitas didelis (baimė dėl netikrų anketų), tai praleista galimybė uždaryti prieštaravimą. *Sprendimas:* mūsų variacijose turi būti bent vienas lengvas, sąžiningas pasitikėjimo signalas šalia CTA (pvz. narių aktyvumo ar moderavimo užuomina), proporcingas srauto tipui.

3. **Vienintelis CTA pasirodymas be pakartojimo.** Jei lankytojas nepaspaudžia pirmo anchor CTA, kito priminimo puslapyje nėra. *Sprendimas:* mūsų variacijose turi būti bent vienas antrinis CTA pakartojimo taškas (pvz. pakartotas arba sticky mobilus CTA), neperkrautas.

4. **Vienas monolitinis CSS/JS pluoštas visai programėlei, kraunamas ir pirmo prisilietimo reklamos puslapyje.** Prideda išvengiamą svorį/parse laiką puslapiui, kurio vienintelis tikslas — konvertuoti. *Sprendimas:* mūsų variacijos turi krauti tik tai, ko reikia konkrečiam landing puslapiui.

5. **Jokios skubos/trūkumo priežasties veikti dabar.** Puslapis visiškai „amžinas", o šaltam mokamam srautui tai gali sumažinti tiesioginį veiksmą. *Sprendimas:* kur sąžininga ir tinkama, mūsų variacijos gali naudoti teisingą, švelnų skubos ar įrėminimo elementą (be dirbtinių laikmačių ar netikro trūkumo), skatinantį veikti dabar.

---

## 7. FORMA — NEKARTOTI

Šis sąrašas — puslapio paviršius. Mūsų variacijose **draudžiama**:

1. Tamsiai violetinis/tamsiai violetinis fono atspalvis (hex `#12101a` ir antrinis beveik juodas `#0d0b13`) kaip bendras puslapio fonas.
2. Rožinės/rausvos akcentinės spalvos gradiento šeima (`#dc3b68` → `#ff5c85` → `#c22c56`) pagrindiniams mygtukams ir akcentiniam tekstui.
3. Gintarinė/auksinė akcentinė spalva `#f0a93c` ženkleliams/teisiniams pastebėjimams.
4. Mėtų žalia spalva `#4bc98a` „online"/sėkmės/gyvo statuso indikatoriams.
5. „Bricolage Grotesque" kaip antraštinis/display šriftas.
6. „Archivo" kaip pagrindinis teksto šriftas.
7. Neigiamo raidžių tarpo (suglaudinta) antraščių stilistika kartu su sunkiu display šrifto svoriu.
8. Centruotas, vienos kolonos hero išdėstymas „prekės ženklas + viena eilutė + vienas mygtukas" be jokio vaizdo/iliustracijos.
9. Kelių žingsnių (3 žingsnių) registracijos forma, įmontuota tiesiai landing puslapyje, su progreso juosta ir žingsnio skaitikliu viršuje.
10. Bakstelėjimu pasirenkami „chip" tipo mygtukai (piliulės formos perjungiami mygtukai) binariniam lyties/preferencijos pasirinkimui kaip pirmas formos žingsnis.
11. Sticky, permatoma/suliejama (blur) antraštė su ženklo-monograma + vienu navigacijos punktu + kalbos vėliavėlės išskleidžiamu meniu + prisijungimo mygtuku + meniu mygtuku, būtent tokia iš kairės į dešinę tvarka.
12. Mažas kvadratinis gradiento „raidžių ženklas" (dvi raidės apvalintame kvadrate) kaip prekės ženklo ikona.
13. Registracijos kortelė su švelniu švytinčiu viršutinio krašto brūkšniu ir radialiniu švytėjimu tamsiame paviršiuje su suapvalintais kampais.
14. Poraštės išdėstymas: prekės ženklo+aprašymo stulpelis + trys nuorodų stulpeliai + centruota amžiaus patvirtinimo juosta + apatinė juosta su autorių teisėmis ir mažais ženklelio tipo žymomis (18+/RTA/BDAR).
15. Slapukų sutikimo juosta kaip plaukiojanti suapvalinta kortelė, prisegta prie apatinio kampo, pasirodanti po trumpo uždelsimo.
16. Terminija: „be nereikalingo triukšmo"/ramesnės alternatyvos pozicionavimas, „uždaros/kuruojamos bendruomenės" įrėminimas, „tikrų, patys užsiregistravusių narių" sąžiningumo teiginys kaip pagrindinė diferenciacijos formuluotė.
17. CTA formuluotės modelis: vieno veiksmažodžio frazė, žadanti greitą nemokamą anketos sukūrimą, veikianti kaip nuslinkimas prie formos, o ne kaip puslapio navigacija.
18. Sekcijų tvarkos modelis: antraštė → centruotas hero su vienu CTA → įmontuota registracijos forma → poraštė, be jokio tarpinio įrodymo/kainodaros/DUK bloko.
19. Kalbos perjungiklis su vėliavos emoji + išskleidžiamu meniu su varnele prie pasirinktos kalbos, antraštėje.
20. Slaptažodžio lauko „rodyti/slėpti" teksto perjungimo mygtuko modelis.

---

## Metodologinė pastaba
Puslapis analizuotas per HTTP užklausas (HTML/CSS/JS šaltinio failai), be realaus naršyklės atvaizdavimo ar formos pateikimo. Forma nebuvo pateikta (nesiekiant sukurti realios paskyros trečios šalies serveryje) — 3.4 punkto išvados apie tikslų nukreipimą po pateikimo yra išvestos iš kodo struktūros, ne stebėtos tiesiogiai.
