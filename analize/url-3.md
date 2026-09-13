# Analizė — url-3: https://daddywonderland.love/landing-c

> Šaltinis: viena iš keliolikos serverio pusėje generuojamų „landing-*" variantų (šis — „landing-c"). Puslapis turi `noindex, nofollow` — tai reklamai skirtas puslapis, neskirtas organinei paieškai. Bendra HTML apimtis ~15 KB, CSS ~9 KB, JS ~4 KB, be jokių paveikslėlių (tik inline SVG ir emoji). Analizė paremta HTML/CSS/JS šaltiniu ir puslapio turinio apžvalga; jokie media failai neišsaugoti.

---

## 1. Kontekstas

**1.1 Auditorija ir jos būsena prieš įėjimą.** Suaugę (18+) lietuviakalbiai vartotojai, atėję iš mokamos reklamos, ieškantys pažinčių/susitikimų platformos. Tikėtina, kad auditorija jau susidūrusi su konkuruojančiomis pažinčių platformomis ir yra skeptiška dėl netikrų anketų / robotų — puslapis tiesiogiai atsako į šią nuostatą jau antraštėje.

**1.2 Tikėtinas srauto šaltinis.** Mokama paieškos/socialinių tinklų reklama (žymė `noindex,nofollow` rodo, kad puslapis nėra skirtas SEO srautui). Palaikomos kelios kalbos per `hreflang` (lt/en/pl/ru/es) ir kalbos parametrą URL, kas rodo daugiakalbę reklamos strategiją tam pačiam pasiūlymui skirtinguose geo/kalbų segmentuose.

**1.3 Pasiūlymo esmė (savais žodžiais).** Uždara, nemokama registracija pažinčių bendruomenėje, pozicionuojama kaip autentiška alternatyva – akcentas ne į funkcijas ar kainą, o į tai, kad nariai yra tikri, geografiškai patikrinami (konkrečiuose miestuose) ir kad registracija užtrunka trumpai. Pasiūlymas neturi jokios mokamos plano ar prenumeratos komunikacijos šiame puslapyje — visas dėmesys sutelktas į registracijos veiksmą.

**1.4 Konversijos tikslas ir jo tipas.** Mikro-konversija: trijų žingsnių registracijos formos užpildymas (be el. pašto patvirtinimo žingsnio šiame puslapyje matomo). Tikslas — kuo greičiau surinkti minimalius profilio duomenis (lytis, ieškoma lytis, amžiaus grupė, miestas, slapyvardis, el. paštas, slaptažodis) ir sukurti paskyrą; tolesnis kelias (pagal bendrą svetainės JS pluoštą) veda į vidinę „susipažinimo" (swipe/match) sąsają su pokalbiais.

## 2. Įtikinėjimo grandinė

**2.1 Sekcijų sąrašas tvarka + funkcija.**
1. Viršutinė navigacija — prekės ženklo identitetas, kalbos perjungiklis, nuoroda prisijungimui esamiems nariams, mobili meniu piktograma. Funkcija: orientacija ir grįžtančio vartotojo takas, nekonkuruoja su pagrindiniu CTA.
2. Aktyvumo ženkliukas virš pagrindinės antraštės — realaus laiko/dienos aktyvumo skaičius. Funkcija: momentinis socialinis įrodymas dar prieš skaitant pagrindinį pažadą.
3. Hero antraštė + paantraštė — pagrindinis pozicionavimo teiginys (autentiškumas vs. robotai/fake). Funkcija: uždaro pagrindinį įėjimo prieštaravimą „ar čia tikri žmonės".
4. Geografinio pasiskirstymo sąrašas (miestai + anketų skaičius kiekviename) — konkretizuoja „tikrumo" pažadą skaičiais. Funkcija: antrinis, lokalus socialinis įrodymas, taip pat netiesiogiai kvalifikuoja auditoriją (rodo, kad platforma aktuali ir mažesniuose miestuose, ne tik sostinėje).
5. Registracijos kortelė (3 žingsnių forma), vizualiai šalia hero teksto tame pačiame ekrane be scroll — pati konversijos priemonė.
6. Poraštė — antrinė navigacija (platforma/pagalba/teisė/bendruomenė), pilnametystės juosta, autorių teisių eilutė, atitikties ženkliukai (18+/RTA/BDAR). Funkcija: teisinis padengimas ir pasitikėjimo signalai, ne konversija.
7. Slapukų pranešimas (uždelstas, apačioje, localStorage atsimenamas). Funkcija: teisinė atitiktis, minimaliai trukdanti pagrindinei srauto eigai.

**2.2 Kokį prieštaravimą uždaro kiekviena sekcija.**
- Aktyvumo ženkliukas → „ar čia apskritai kas nors yra".
- Hero antraštė/paantraštė → „ar tai ne botai/fake profiliai".
- Miestų sąrašas → „ar yra žmonių mano mieste/regione".
- Registracijos forma (trumpumas, žingsnių indikatorius, laiko įvertis) → „ar tai užtruks ilgai / ar tai sudėtinga".
- Poraštės teisiniai elementai → „ar tai legalu / kur skųstis / ar mano duomenys saugūs".

**2.3 Socialinio įrodymo tipai ir pozicijos.** Du tipai, abu skaitiniai (ne tekstiniai atsiliepimai): (a) bendras „aktyvūs šiandien" skaičius hero viršuje virš antraštės; (b) miestų sąrašas su anketų skaičiais po hero paantrašte. Nėra jokių vartotojų atsiliepimų, reitingų, spaudos logotipų ar „kaip matyta" elementų šiame variante.

**2.4 Rizikos mažinimo mechanizmai.** Jokios eksplicitinės garantijos, bandomojo laikotarpio ar atšaukimo komunikacijos nėra. Vienintelis rizikos mažinimas yra numanomas: registracija pavadinta nemokama ir trumpa (laiko įvertis nurodytas šalia formos antraštės).

**2.5 Skubos/trūkumo mechanizmai.** Labai silpni/netiesioginiai — vienintelis elementas yra dienos aktyvumo skaičius, kuris implikuoja gyvą, kintantį bendruomenės dydį, bet nėra jokio atskaitos laikmačio, ribotos vietos ar išnykstančio pasiūlymo.

**2.6 Kainodaros pateikimo būdas.** Kainodara apskritai nerodoma šiame puslapyje — registracija pozicionuojama kaip nemokama, jokios užuominos apie premium/mokamą lygį, planus ar kainas.

## 3. CTA sistema

**3.1 CTA kiekis ir pozicijos.** Vienas pagrindinis, aukšto matomumo CTA — registracijos kortelės vidinė forma, esanti šalia hero teksto (matoma be scroll desktop'e). Papildomi žemesnio prioriteto veiksmai: prisijungimo nuoroda navigacijoje (grįžtantiems), du „tęsti" tipo mygtukai tarp formos žingsnių, „atgal" mygtukai kiekviename žingsnyje po pirmo, galutinis pateikimo mygtukas trečiame žingsnyje, ir tekstinė nuoroda po forma esamiems nariams. Poraštėje pakartojama nuoroda į registracijos sekciją.

**3.2 Ką pažada paspaudimas (funkciškai).** Pagrindinis CTA nenukreipia į kitą puslapį — jis progresyviai atskleidžia sekančius formos žingsnius toje pačioje kortelėje (JS valdomas žingsnių perjungimas su progreso juosta ir tekstiniu žingsnio skaitikliu). Tik paskutinio žingsnio pateikimas iš tikrųjų siunčia POST užklausą į registracijos endpoint'ą.

**3.3 Formos laukai ir prašomos informacijos kiekis.** Išskaidyta į 3 žingsnius, kad vienu metu matomas mažai laukų:
- 1 žingsnis: savo lytis (2 pasirinkimai mygtukais-kortelėmis) + ieškoma lytis (2 pasirinkimai).
- 2 žingsnis: amžiaus grupė (išskleidžiamas sąrašas, 5 diapazonai) + miestas (išskleidžiamas sąrašas, ~17 opcijų įskaitant „kitas miestas").
- 3 žingsnis: slapyvardis (tekstas), el. paštas, slaptažodis (su rodyti/slėpti perjungikliu), pilnametystės/taisyklių patvirtinimo varnelė su nuorodomis į taisykles ir privatumo politiką.
Iš viso 7 duomenų laukai + 1 sutikimo varnelė. Nėra telefono numerio, mokėjimo duomenų ar nuotraukos įkėlimo šiame etape.

**3.4 Kas vyksta po pateikimo.** Pačiame landing puslapyje aiškaus „ačiū"/patvirtinimo ekrano nėra — forma siunčiama serverio pusės apdorojimui (POST su CSRF žetonu). Sprendžiant iš bendro svetainės JS pluošto (naudojamo ir kitose, ne-landing, svetainės dalyse), tikėtinas tolesnis kelias — vidinė „susipažinimo" sąsaja su kortelių peržiūra, patinka/nepatinka veiksmais, savitarpio simpatijos pranešimu ir pokalbių langu su periodiniu atnaujinimu. Tai netiesioginė išvada iš bendro kodo, ne tiesiogiai matoma šiame URL.

## 4. Struktūra ir elgsena

**4.1 Hero tipas ir kas matoma be scroll.** Tekstinis, be jokios hero nuotraukos/iliustracijos. Dviejų stulpelių išdėstymas platesniuose ekranuose: kairėje — aktyvumo ženkliukas, antraštė, paantraštė, miestų sąrašas su varnelėmis; dešinėje — registracijos kortelė su pirmu formos žingsniu. Be scroll iškart matomas ir pagrindinis pažadas, ir konversijos veiksmas vienoje vietoje — nėra atskiro „scroll to convert" modelio.

**4.2 Navigacijos elgsena, sticky elementai.** Navigacija struktūriškai paprasta: prekės ženklas, viena vidinė nuoroda (į registraciją), kalbos perjungiklis (išskleidžiamas meniu), prisijungimo mygtukas, mobili „burger" piktograma. Kodas neturi „sticky/fixed" pozicionavimo požymių šiam antraštės blokui šiame CSS faile (t.y. nepastebėta priverstinio prilipimo prie viršaus slenkant); slapukų juosta iškyla apačioje su uždelsimu ir lieka, kol patvirtinama.

**4.3 Mobilus elgesys ir kuo skiriasi nuo desktop.** CSS turi lūžio taškus prie ~1040px, 900px, 760px ir 420px pločio. Pagrindiniai pokyčiai mažesniuose ekranuose: dviejų stulpelių hero išdėstymas tikėtinai suspaudžiamas į vieną koloną (forma po tekstu), navigacijos nuorodos paslepiamos po „burger" piktograma, mažesniame (420px) lūžyje papildomai koreguojami tarpai/dydžiai smulkiems elementams (pvz., formos kortelė, žingsnių juosta). Funkcinė JS logika (žingsnių perjungimas, kalbos meniu, slapukų juosta) identiška abiejose platformose — skiriasi tik CSS išdėstymas, ne funkcionalumas.

## 5. Technika

**5.1 Apytikslis svoris, kas stabdo užkrovimą, layout shift.** Labai lengvas puslapis: HTML ~15 KB, CSS ~9 KB, JS ~4 KB, jokių raster/vector paveikslėlių (favicon — inline SVG duomenų URI, piktogramos — inline SVG kode). Google Fonts (dvi šeimos) kraunamos su `preconnect` ir `display=swap`, kas sumažina tekstą blokuojantį laiką, bet gali sukelti nedidelį šrifto pakeitimo (FOUT) efektą. Kadangi nėra jokio hero vaizdo ar dinamiškai įkeliamo turinio virš sulankstymo linijos, apčiuopiamo layout shift rizikos šaltinio nepastebėta — vienintelis kintantis elementas yra vėluojanti slapukų juosta apačioje, kuri neturėtų stumti pagrindinio turinio (pozicionuota kaip fiksuota/plūduriuojanti, sprendžiant iš uždelsto atsiradimo elgesio).

**5.2 Antraščių hierarchija, meta, structured data.** Tik vienas H1 (pagrindinė hero antraštė) ir vienas H2 (registracijos kortelės antraštė) visame matomame puslapyje; poraštės skiltys naudoja H5 be H3/H4 tarpinių lygių — hierarchijos lygiai praleidžiami. Meta: yra `description`, pilnas Open Graph ir Twitter Card rinkinys, `hreflang` nuorodos 5 kalboms + x-default, `canonical`, bet **`robots: noindex, nofollow`** — sąmoningai neindeksuojamas puslapis (grynai reklaminis nukreipimo puslapis). Yra suaugusiųjų turinio žymėjimas (`rating: adult`, ICRA/RTA reitingo meta). Structured data (JSON-LD) apima tik `Organization` ir `WebSite` tipus su daugiakalbiškumo nuoroda — nėra `Product`, `Review`, `FAQPage` ar panašių praturtintų duomenų tipų.

**5.3 Prieinamumo problemos.** (a) Antraščių lygiai praleidžiami (H1→H2→H5), kas apsunkina navigaciją ekrano skaitytuvais pagal skiltis; (b) formos pasirinkimo mygtukai (lytis/ieškoma lytis, miestas per select — bet lyties pasirinkimas per savadarbius „chip" mygtukus) neturi `aria-pressed` ar panašios būsenos žymės, tik vizualinę klasę – pasirinkimo būsena nėra programiškai pranešama pagalbinėms technologijoms; (c) forma turi `novalidate` atributą ir laukuose nėra `required` atributų – validacija visiškai priklauso nuo JS, be jokio pagrindinio HTML/serverio pusės apsaugos tinklo, jei skriptas nepasileidžia; (d) slaptažodžio rodyti/slėpti mygtukas neturi `aria-label`, tik kintantį tekstą; (e) emoji naudojami kaip funkciniai/dekoratyvūs elementai (vėliavėlė, smeigtukas) be papildomo teksto alternatyvos ekrano skaitytuvams tam tikrose vietose.

## 6. Kritika

1. **Nėra jokio realaus rizikos mažinimo ar skubos mechanizmo.** Konversijos sprendimas remiasi tik smalsumu ir formos trumpumu, be jokio papildomo postūmio (pvz., aiškaus „kodėl dabar", laiko investicijos pagrindimo ar rizikos panaikinimo pažado). → Mūsų variacijose bent vienoje sekcijoje turi būti aiškus, sąžiningas rizikos mažinimo arba pagrindimo elementas (pvz., kas tiksliai vyksta po registracijos, ką vartotojas gauna nedelsiant), kad sprendimas remtųsi ne vien tik smalsumu.
2. **Vienintelis socialinis įrodymas yra skaitinis ir lengvai nuvertinamas.** Aktyvumo skaičius ir miestų sąrašas yra abstraktūs skaičiai be jokio kito patvirtinimo sluoksnio (nėra nei „kaip veikia" paaiškinimo, nei jokio kito pasitikėjimo signalo tipo). → Mūsų variacijose socialinis įrodymas turi remtis bent dviem skirtingais, vienas kitą papildančiais mechanizmais (pvz., kiekybinis + kokybinis/paaiškinamasis), kad nepriklausytų nuo vieno lengvai ignoruojamo skaičiaus.
3. **Nėra jokio „kaip tai veikia" paaiškinimo prieš įsipareigojant.** Vartotojas kviečiamas registruotis, nesuprasdamas, kas tiksliai vyks po registracijos (nei viena sekcija nepaaiškina proceso ar funkcijų). → Mūsų variacijose bent viena sekcija prieš CTA turi trumpai, funkciškai paaiškinti, kas laukia po registracijos, kad sumažėtų neapibrėžtumo sukeliamas atmetimas.
4. **Antraščių hierarchijos ir formos validacijos prieinamumo spragos.** (aprašyta 5.3) gali paveikti dalį auditorijos ir SEO/tools skaitomumą (net jei šis puslapis sąmoningai neindeksuojamas, prieinamumas vis tiek veikia realius vartotojus su pagalbinėmis technologijomis). → Mūsų variacijose būtina nuosekli antraščių hierarchija (H1→H2→H3...) ir bent minimali HTML lygmens (`required`, `aria-*`) validacija/žymėjimas, nepriklausomai nuo JS sluoksnio.
5. **Vienas statiškas CTA modelis be alternatyvos mažiau apsisprendusiems.** Visas puslapis veda tik į vieną veiksmą (registracijos formą) be jokio tarpinio, mažiau įpareigojančio žingsnio (pvz., informacijos gavimo, palyginimo ar „sužinoti daugiau" tako) tiems, kurie dar neapsisprendę pirmo apsilankymo metu. → Mūsų variacijose verta apsvarstyti bent vieną mažo įsipareigojimo tarpinį elementą (ne būtinai formos, o informacinį) šalia pagrindinio CTA, kad nebūtų prarandami dvejojantys lankytojai.

## 7. FORMA — NEKARTOTI

Draudžiama tiesiogiai kartoti mūsų variacijose:

1. Tiksli fono spalva `#12101a` (tamsus violetinis-juodas) kaip pagrindinis puslapio fonas.
2. Tiksli paviršiaus/kortelės spalva `#1b1725` su linijų/rėmelių atspalviu `#322942` / `#271f34`.
3. Tikslus akcentinis „rožinis/raudonas" tonas `#dc3b68` ir jo šviesesnis variantas `#ff5c85` kaip pagrindinė CTA/akcento spalva.
4. Tikslus gintarinis/geltonas tonas `#f0a93c` kaip antrinė akcento spalva.
5. Tikslus mėtinis/žalias tonas `#4bc98a` kaip sėkmės/patvirtinimo spalva.
6. Šrifto pora „Bricolage Grotesque" (antraštėms) + „Archivo" (pagrindiniam tekstui) iš Google Fonts.
7. Dviejų stulpelių hero išdėstymas, kur vienoje pusėje tekstas+socialinis įrodymas, kitoje — iškart matoma daugiapakopė registracijos forma tame pačiame ekrane be scroll.
8. Aktyvumo/buvimo internete skaitiklio ženkliukas (dienos aktyvių narių skaičiaus formuluotė) virš pagrindinės antraštės kaip pirmas matomas elementas.
9. Geografinio pasiskirstymo sąrašo su konkrečiais miestais ir anketų skaičiais prie kiekvieno kaip antraštės palydovas.
10. Registracijos suskaidymas būtent į 3 žingsnius su horizontalia progreso juosta ir tekstiniu „N iš 3 žingsnių" skaitikliu virš formos.
11. Formos laukų grupavimo tvarka: (lytis+ieškoma lytis) → (amžius+miestas) → (slapyvardis+el.paštas+slaptažodis+sutikimas) kaip fiksuota trijų žingsnių seka.
12. Pasirinkimo mygtukų („chip") vizualinis modelis lyties/paieškos pasirinkimui vietoje standartinių radio/select elementų.
13. Slaptažodžio lauko rodyti/slėpti perjungimo mygtuko vizualinis-tekstinis modelis (tekstas keičiasi tarp dviejų būsenų vietoje piktogramos).
14. Kalbos perjungiklio su vėliavėlės emoji + išskleidžiamu meniu modelis navigacijoje.
15. Vėluoto (uždelsto po kelių šimtų ms) slapukų pranešimo iškylimo apačioje elgesio modelis su `localStorage` įsiminimu.
16. Formos antraštės palydovo formatas „nemokama + apytikslis laiko įvertis minutėmis" tiesiai po formos pavadinimu.
17. CTA formuluočių modelis: trumpi (1–2 žodžių), beasmenio liepiamosios nuosakos veiksmažodžio + daiktavardžio mygtukų tekstai be šauktukų ar emocinio pertekliaus (pvz., veiksmas+objektas modelis registracijai, vieno žodžio „tęsti" tipo modelis tarpiniams žingsniams).
18. Emoji naudojimas kaip funkcinis pozicionavimo/vietos indikatorius (pvz., smeigtuko/vėliavos emoji šalia teksto) vietoje ikonų sistemos.
19. Sekcijų tvarka: navigacija → aktyvumo ženklas → hero antraštė/paantraštė → geografinis sąrašas → registracijos forma → poraštė su teisiniais/pilnametystės elementais → slapukų juosta.
20. Poraštės pilnametystės juostos su „18+" ženkliuku ir šalia esančiais atitikties ženkliukais (18+/RTA/BDAR eilutė) vizualinis išdėstymas.

