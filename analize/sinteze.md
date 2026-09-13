# Sintezė — bendras pagrindas 10 variacijų

**Šaltiniai:** `analize/url-1.md`, `analize/url-2.md`, `analize/url-3.md` (daddywonderland.love `/landing-a`, `/landing-b`, `/landing-c`).
**Paskirtis:** vienas bendras funkcinis pagrindas + vienas jungtinis draudimų sąrašas + trys pozicionavimo kampai, perduodami fazės 2 (diferenciacijos matrica) ir fazės 3 (statyba) agentams.
**Ko čia NĖRA (sąmoningai):** jokių sprendimų dėl paletės, šriftų, dizaino krypčių ar jų priskyrimo variantams — tai fazės 2 darbas.

---

## DALIS 1 — Bendras funkcinis sekcijų skeletas

Visi trys šaltiniai dirba tą patį komercinį darbą: šaltą mokamą 18+ srautą paversti **užbaigta nemokama registracija vietoje**, nenukreipiant lankytojo niekur kitur ir neprašant mokėjimo. Tai ir yra skeletas, kurį perimame. Žemiau — funkcijos, kurias privalo atlikti kiekvienas iš 10 variantų. **Funkcija yra privaloma; jos įgyvendinimo forma, vieta puslapyje ir eiliškumas — laisvi ir privalo skirtis kiekviename variante.**

### A. Privalomos funkcijos (be jų variantas nelaikomas atliktu)

**F1. Orientacija ir tapatybė.**
Lankytojas per pirmą sekundę turi suprasti, kur pateko ir kad tai 18+ produktas. Šaltiniuose tai daro viršutinė juosta su ženklu. Funkcija — ne „navigacija“, o tapatybės ir amžiaus kategorijos patvirtinimas, kad reklamos pažadas ir puslapis sutaptų.

**F2. Grįžtančio nario atskyrimas.**
Jau registruotas lankytojas turi turėti savo, matomą, bet žemo prioriteto išėjimą (prisijungimas), kad netrikdytų pagrindinio tako ir nepildytų registracijos formos iš naujo. Funkcija — srautų išskyrimas, ne papildomas CTA.

**F3. Pozicionavimo teiginys (pagrindinis pažadas).**
Vienas teiginys, kuris pasako, kuo ši platforma skiriasi nuo to, ką lankytojas jau bandė, ir nuima svarbiausią abejonę prie įėjimo. Privalo būti viename tikrame `<h1>`.

**F4. Prieštaravimo „ar čia yra gyvų žmonių“ uždarymas.**
Bet koks mechanizmas, įrodantis, kad bendruomenė nėra tuščia. Privaloma sąlyga: mechanizmas **negali sugriūti** (neturi galimybės parodyti nulio, tuščio sąrašo ar akivaizdžiai pramanyto skaičiaus).

**F5. Prieštaravimo „ar tai tikri žmonės“ uždarymas.**
Autentiškumo / moderavimo signalas — atskira funkcija nuo F4. Kiekybinis aktyvumas ir kokybinis tikrumas yra du skirtingi prieštaravimai, ir bent du skirtingi mechanizmai turi būti panaudoti (šaltinių silpnoji vieta: viskas remiasi vienu skaičiumi).

**F6. Proceso paaiškinimas — kas vyksta po registracijos.**
Trumpas funkcinis atsakymas, ką lankytojas gauna iš karto po formos pateikimo ir kaip veikia susiejimo mechanika. Nei vienas šaltinis šito neturi — tai mūsų privalomas priedas, mažinantis neapibrėžtumo atmetimą.

**F7. Įsipareigojimo dydžio nustatymas.**
Lankytojas turi žinoti, kiek iš jo prašoma, dar prieš pradedant: kiek trunka, kiek žingsnių, kokių duomenų prašoma. Funkcija — lūkesčio kalibravimas, mažinantis nutraukimą viduryje.

**F8. Pinigų klausimo uždarymas.**
Aiškus pasakymas, kas nemokama ir ar/kada atsiranda mokamas lygis. Visi trys šaltiniai šią funkciją **praleidžia** — žmogus atiduoda prisijungimo duomenis visiškai nenutuokdamas, ar vėliau bus prašoma mokėti. Mūsų variantuose ši funkcija privaloma (bent viena eilute), nes po registracijos prarastas pasitikėjimas kainuoja brangiau nei prarastas paspaudimas.

**F9. Privatumo ir kontrolės uždarymas.**
18+ kategorijoje veikia atskira baimė: „kas tai matys ir ką aš kontroliuoju“. Funkcija — pasakyti, kas rodoma viešai, kas ne, ir kaip pasitraukti. Šaltiniuose jos nėra visai.

**F10. Konversijos priemonė — duomenų surinkimas puslapyje.**
Registracijos veiksmas vyksta pačiame puslapyje, nesiunčiant lankytojo kitu adresu, su laipsnišku įsipareigojimo didinimu (lengviausi pasirinkimai pirma, jautriausi duomenys paskutiniai). Rinktinų duomenų apimtis — minimali, reikalinga paskyrai sukurti.

**F11. Teisinis ir atitikties uždarymas.**
Pilnametystės patvirtinimas, taisyklės, privatumo politika, atitikties signalai. Funkcija dviguba: teisinė apsauga verslui + „ši svetainė tvarkinga“ signalas lankytojui.

**F12. Būsenos ir klaidos grąžinimas.**
Lankytojas visada mato, kurioje vietoje yra, gali grįžti atgal ir, suklydęs, nepradeda nuo nulio. Klaida pranešama tekstu, ne vien spalva.

**F13. Sėkmės būsena.**
Po pateikimo — aiškus patvirtinimas puslapyje, kuris pasako kitą žingsnį. Šaltiniuose ši funkcija neegzistuoja arba neverifikuojama; mūsų variantuose ji privaloma (statyba be backend'o, todėl būsena rodoma kliento pusėje).

**F14. Slapukų / duomenų sutikimas.**
Atitikties elementas, kuris neblokuoja pirminio turinio suvokimo ir neužstoja konversijos priemonės.

### B. Privalomos funkcijos, kurių šaltiniuose nebuvo (mūsų pranašumas)

**F15. Pakartotinis CTA taškas.**
Šaltiniuose pagrindinis veiksmas pasirodo tik vieną kartą; nepaspaudęs lankytojas daugiau priminimo negauna. Kiekvienas mūsų variantas privalo turėti bent vieną antrą priėjimą prie to paties veiksmo (forma taip pat gali būti pasiekiama iš kito puslapio taško).

**F16. Mažo įsipareigojimo tarpinis kelias dvejojantiems.**
Bent vienas ne formos elementas, leidžiantis abejojančiam gauti atsakymą ir grįžti prie veiksmo, o ne išeiti (informacinis blokas, atsakymai į dažniausią abejonę ar pan.). Ne antras konkuruojantis konversijos tikslas — pagalbinis kelias atgal į tą patį veiksmą.

**F17. Sąžiningas „kodėl dabar“.**
Postūmis veikti šiandien, pagrįstas tikru faktu (aktyvumo ritmas, kas įvyksta iš karto), **be laikmačių, be netikro vietų trūkumo, be išgalvotų akcijų**.

### C. Struktūrinės taisyklės, galiojančios visiems 10

1. **Pagrindinis veiksmas pasiekiamas be scroll** — bet kokia forma (pati priemonė, jos pradžia arba neabejotinas priėjimas prie jos).
2. **Vienas konversijos tikslas** — registracija. Viskas kita yra pagalbinė.
3. **Viena antraščių hierarchija be praleistų lygių** (`h1` → `h2` → `h3`), tiksliai vienas `h1`.
4. **Kiekvienas formos laukas turi savo `<label>`**, pasirinkimo būsena pranešama programiškai, ne vien spalva.
5. **HTML lygmens validacijos minimumas** nepriklausomai nuo JS (šaltiniuose duomenų tikrinimas paliktas vien skriptui).
6. **Krauname tik tai, ką konkretus puslapis naudoja** — jokio bendro visai platformai skirto pluošto (visų trijų šaltinių bendra techninė klaida).
7. **Sekcijų eiliškumas kiekviename variante skiriasi** — funkcijų rinkinys tas pats, jų tvarka ir svoris ne.
8. **Funkcijas galima jungti į vieną sekciją arba skaidyti**, jei nuo to nenukenčia jų darbas; draudžiama tik jas praleisti.

---

## DALIS 2 — FORMA — NEKARTOJAME

Jungtinis, sulietas ir be dublikatų visų trijų šaltinių 7 skyrių sąrašas. **Tai griežtas draudimų sąrašas.** Draudžiama tiek tiksli reikšmė, tiek akivaizdžiai atpažįstamas jos atitikmuo (pvz. atspalvis, kurį eilinis žiūrovas priskirtų tai pačiai spalvai). Fazės 2 agentas šį sąrašą perkelia į `config/draudziamu-zodziu-sarasas.md` §7 ir tikrina prieš kiekvieną krypties priskyrimą; fazės 4A agentas tikrina mechaniškai.

### 2.1 Spalvos (tikslios reikšmės ir jų artimi atitikmenys)

1. `#12101a` — violetinio atspalvio beveik juoda spalva viso puslapio fono bazei.
2. `#0d0b13` — antrinis dar tamsesnis beveik juodas fono sluoksnis.
3. `#1b1725` — kortelės / paviršiaus spalva ant tamsaus fono.
4. `#241e30` — pakylėto paviršiaus (plytelės, antrinės kortelės) spalva.
5. `#322942` ir `#271f34` — rėmelių / skiriamųjų linijų atspalviai.
6. `#dc3b68` — rožinė-raudona kaip pagrindinė CTA ir prekės ženklo spalva.
7. `#ff5c85` — šviesesnis to paties akcento variantas (hover / gradiento galas).
8. `#c22c56` — tamsesnis to paties akcento variantas (gradiento galas).
9. `#f0a93c` — gintarinė / auksinė kaip antrinė akcento, ženkliukų ir teisinių pastabų spalva.
10. `#4bc98a` — mėtinė žalia kaip „prisijungęs“ / sėkmės / patvirtinimo spalva.
11. Rožinės spalvos **gradientas** ant pagrindinių mygtukų (tamsesnis → šviesesnis to paties atspalvio perėjimas).
12. Visa sluoksniuota tamsi sistema kaip principas: beveik juodas fonas + vos šviesesni kortelių paviršiai + vienas sotus rožinis akcentas.
13. Radialinės rožinės ir gintarinės šviesos dėmės, paskleistos po herojumi kaip fono švytėjimas.
14. Prigesintas (muted) šviesaus teksto atspalvis ant tamsaus fono kaip pagrindinė pagrindinio teksto spalva.

### 2.2 Šriftai ir tipografija

15. „Bricolage Grotesque“ — bet kokiam vaidmeniui.
16. „Archivo“ — bet kokiam vaidmeniui.
17. Šių dviejų šeimų pora (display + tekstas) kaip tipografinė sistema.
18. Antraščių tarpliterinis tarpas, suspaustas maždaug trimis–keturiomis su puse procento į minusą, kaip atpažįstamas stiliaus parašas.
19. Sunkus display šrifto svoris kartu su suglaudintu tarpu tarp raidžių kaip antraščių charakteris.
20. Šriftų krovimas iš Google Fonts dviem šeimomis, kiekvienai po keturis svorius, per bendrą `preconnect` ir vieną stiliaus nuorodą (perteklinio šrifto svorio modelis).
21. Antraščių hierarchija su praleistais lygiais (`h1` → `h2` → `h5`) ir poraštės skilčių pavadinimai `h5` lygyje.

### 2.3 Layout ir išdėstymo sprendimai

22. Centruotas, vienos kolonos herojus be jokio vaizdo, kurio visą turinį sudaro ženklas, vienas sakinys ir vienintelis mygtukas.
23. Centruotas herojus, kuriame vietoj antraštės stovi tiesioginis identifikacinis klausimas, o iškart po juo — formos pradžia be iliustracijos.
24. Dviejų stulpelių herojus, kur viena pusė skirta tekstui su įrodymu, o kita — iš karto matomai registracijos formai, abi be scroll.
25. Forma, įauginta į herojų taip, kad ji pati **ir yra** herojus (be jokio pasakojimo sluoksnio prieš ją).
26. Registracijos skaidymas lygiai į **tris** žingsnius.
27. Horizontali progreso juosta kartu su žodiniu žingsnių skaitikliu („N iš 3“) virš formos.
28. Fiksuota laukų seka per žingsnius: pirma — savęs ir ieškomo asmens lytis; antra — amžiaus intervalas su gyvenamu miestu; trečia — slapyvardis, pašto adresas, slaptažodis ir sutikimo varnelė.
29. Amžiaus ir miesto laukai, sudėti į dviejų stulpelių eilutę, kuri siauresniame lange susilieja į vieną.
30. Trijų fiksuotų reikšmių suapvalinimo skalė (apie 8, 14 ir 22 px), vienodai uždėta ir ant mygtukų, ir ant kortelių, ir ant plytelių.
31. Pilnai apvalintos piliulės (`border-radius: 100px`) ženkleliams ir juostelėms.
32. Viršutinė juosta, prilipdyta prie ekrano viršaus, permatoma su suliejimo efektu ir plonyte linija pačioje apačioje.
33. Antraštės elementų eilė: monograma, viena nav nuoroda, kalbos vėliavėlės meniu, prisijungimo mygtukas, meniu piktograma — būtent tokia seka.
34. Mažas kvadratinis gradientinis dviejų raidžių ženkliukas apvalintais kampais prekės ženklo vietoje.
35. Poraštės tinklelis: ženklo su aprašymu blokas, greta trys nuorodų kolonos, po jomis centruota pilnametystės juosta ir apatinė autorių teisių eilutė su ženkliukų plytelėmis.
36. Atitikties žymų (pilnametystės, suaugusiųjų turinio reitingo, duomenų apsaugos) surikiavimas smulkiomis apvestomis plytelėmis šalia autorinės eilutės — draudžiama būtent tokia grupavimo ir pateikimo forma.
37. Mobilus modelis, kur ženklo žodinė dalis dingsta paliekant tik kvadratinį ženkliuką, o vienintelė nav nuoroda slepiama už „burger“ mygtuko.
38. Sekcijų tvarkos modelis A: antraštė, centruotas herojus su vieninteliu veiksmu, iškart po jo forma, tada poraštė — be jokio įrodymo, kainos ar klausimų bloko tarpe.
39. Sekcijų tvarkos modelis B: navigacija, aktyvumo ženklas, antraštė su paantrašte, miestų sąrašas, forma, teisinė poraštė, o pabaigoje — slapukų juosta.

### 2.4 Vizualiniai motyvai ir elgsenos modeliai

40. Pulsuojančio „gyvo taško“ animacija šalia tikralaikio skaičiaus.
41. Prisijungusiųjų skaičiaus ženkliukas, padėtas viršum antraštės kaip pirmas akį pasitinkantis puslapio elementas.
42. Tikralaikis narių skaičius, paliktas **vieninteliu** pasitikėjimo įrodymu visame puslapyje.
43. Geografinio pasiskirstymo sąrašas: miestų pavadinimai su anketų skaičiumi prie kiekvieno iš jų, einantis kaip antraštės priedas.
44. Registracijos kortelė, plūduriuojanti virš fono, su švytinčiu plonu brūkšniu viršutiniame krašte ir minkštu švytėjimu.
45. Piliulės formos perjungiami „chip“ mygtukai dvejetainiam lyties / ieškomos lyties pasirinkimui vietoj `radio` elementų.
46. Slaptažodžio „rodyti/slėpti“ perjungiklis kaip tekstas, kintantis tarp dviejų būsenų (be piktogramos).
47. Kalbos perjungiklis, sudėtas iš vėliavėlės emoji, rodyklės ir išskrendančio sąrašo, kuriame pasirinktoji kalba pažymėta varnele.
48. Emoji kaip funkcinė piktogramų sistema (vėliavėlė, smeigtukas ir pan.) vietoj ikonų rinkinio.
49. Slapukų sutikimas, pateiktas nedidele apvalinta plūduriuojančia kortele apatiniame kampe, kuri iššoka kiek pavėlavusi ir įsimenama `localStorage`.
50. Visiškas rastrinių vaizdų nebuvimas kaip signatūra (vien kode įrašyti SVG ir emoji) — variantas, kuris renkasi „be vaizdų“ kryptį, privalo tai daryti kitokiu vizualiniu pagrindu.
51. Palankiukas, įrašytas tiesiai į kodą SVG duomenų adresu, naudojamas prekės ženklo žyma.
52. Herojaus veiksmo mygtukas, kuris tėra vidinė nuoroda iki formos ir kartu vienintelis pagrindinis puslapio veiksmas.

### 2.5 Terminija ir būdingi žodžiai

53. Pozicionavimas per „ramesnę, be pertekliaus“ alternatyvą triukšmingoms programėlėms.
54. Įrėminimas per uždarumą ir atranką (ribota, atrinkta, ne visiems atvira bendruomenė) kaip svarbiausias skiriamasis teiginys.
55. Autentiškumo argumentas, statomas ant teiginio, kad už anketų stovi realūs, savo noru užsirašę žmonės — kaip pagrindinis skirtumo įrodymas.
56. Antraštės įrėminimas per opoziciją botams / netikroms anketoms.
57. Tiesioginis identifikacinis klausimas („kas tu / ko ieškai“ tipo) kaip pagrindinė antraštė.
58. Formos pavadinimo palydovas, jungiantis nemokamumą su apytiksle trukme minutėmis, padėtas iškart po pavadinimu.
59. Vienodas veiksmažodžio-daiktavardžio „anketos kūrimo / tęsimo“ žodyno modelis, kartojamas per visus formos žingsnius.
60. Teisinių žymų dėliojimas santrumpų eilute (pilnametystė, suaugusiųjų reitingas, duomenų apsauga) kaip pasitikėjimo elementas.

### 2.6 CTA formuluočių modeliai

61. Vieno ar dviejų žodžių mygtukų tekstai, sudėlioti iš beasmenio liepiamojo veiksmažodžio su daiktavardžiu, be jokio emocinio krūvio.
62. Tarpinių žingsnių mygtukai, pavadinti vienu tęsimo prasmės žodžiu.
63. Grįžimo mygtukas, kartojamas kiekviename žingsnyje nuo antrojo, kaip vienintelis būdas pasitaisyti.
64. Žemo prioriteto tekstinė nuoroda esamiems nariams, įsprausta iškart po forma.
65. Prisijungimo mygtukas kaip vienintelis antrinis CTA antraštėje.
66. Poraštėje pakartota nuoroda atgal į registracijos sekciją kaip vienintelis pakartojimo taškas.
67. Registracijos CTA, žadantis skubų ir nemokamą anketos atsiradimą, bet iš tikrųjų tik nuslenkantis prie formos.

> **Bendra taisyklė virš viso sąrašo:** draudžiamas ne tik atskiras punktas, bet ir bet kuris atpažįstamas jų derinys. Jei variantas naudoja tamsų fonų sluoksniavimą, sotų akcentą, piliulės formas ir įmontuotą žingsninę formą vienu metu — jis pažeidžia sąrašą net jei kiekviena atskira reikšmė kita.

---

## DALIS 3 — Trys galimi pozicionavimo kampai

Kampai išvesti iš šaltinių kritikos (6 skyriai): visi trys puslapiai kalba **tam pačiam** lankytojui ir remiasi vienu ir tuo pačiu argumentu (tikri žmonės + greita nemokama registracija). Kiekvienas kampas žemiau paima kitą neuždarytą prieštaravimą, kitą auditorijos pjūvį ir kitą įrodymo tipą — todėl variantai, kuriems priskirti skirtingi kampai, natūraliai gaus skirtingus žodžius, skirtingą sekcijų svorį ir skirtingą CTA logiką.

### Kampas A — Skaidrumas ir įrodymas („žinai, kur eini“)

**Kam:** tam, kas jau bandė kelias pažinčių programėles ir nusivylė — sumokėjo už nematomus rezultatus, atsimušė į mokamą sieną vidury pokalbio arba įtaria, kad kitoje pusėje nėra gyvo žmogaus. Šis žmogus nebijo 18+ temos, jis bijo būti apgautas antrą kartą.
**Kuo skiriasi:** visas svoris tenka funkcijoms F5, F6 ir F8 — mechanikos, moderavimo ir pinigų klausimo atvėrimui dar prieš formą. Tai vienintelis kampas, kuris kainos klausimą kelia pats, savo iniciatyva, o ne slepia. Priešingai nei B, jis nekalba apie diskretiškumą; priešingai nei C, jis lėtina lankytoją, o ne skubina.

### Kampas B — Kontrolė ir diskretiškumas („tu sprendi, kiek matosi“)

**Kam:** atsargiam lankytojui, kuriam pats didžiausias stabdys yra ne platformos kokybė, o pasekmės — kad jį atpažins, kad duomenys kur nors iškeliaus, kad iš to nebus kaip išeiti. Dažnai tai mažesnio miesto arba uždaresnės aplinkos žmogus, kuriam viešumas kainuoja daugiau nei registracija.
**Kuo skiriasi:** pagrindinis darbas — F9 ir F7: ką matys kiti, ko nematys, kas laikoma, kaip ištrinti. Tai vienintelis kampas, kuriame mažo įsipareigojimo tarpinis kelias (F16) yra pagrindinis, o ne pagalbinis elementas — dvejojantis gauna atsakymą prieš duodamas el. paštą. Skirtingai nuo A, čia argumentas ne apie platformos sąžiningumą, o apie lankytojo saugumą; skirtingai nuo C, čia visai nėra skubos elemento, nes skuba šiam žmogui veikia priešingai.

### Kampas C — Rezultatas ir momentumas („kas įvyksta po registracijos“)

**Kam:** apsisprendusiam, veiksmo siekiančiam lankytojui, kuris neskaito argumentų ir nenori jų skaityti — jam svarbu, ar šįvakar bus su kuo pasikalbėti. Šis pjūvis konvertuoja greičiausiai ir brangiausiai kainuoja, kai puslapis verčia jį laukti.
**Kuo skiriasi:** viskas pajungta F6, F15 ir F17 — kas konkrečiai vyksta pirmomis minutėmis po pateikimo, kelis kartus pasiekiamas tas pats veiksmas, ir sąžiningas „kodėl dabar“ be laikmačių ar išgalvoto trūkumo. Tai vienintelis kampas, kuris legitimiai naudoja aktyvumo ritmo argumentą; A jį atmestų kaip neįrodomą, B — kaip spaudimą.

---

## Perdavimo pastaba fazei 2

- Skeletas (Dalis 1) — **privalomas visiems 10**; skiriasi tik funkcijų tvarka, svoris ir forma.
- Draudimų sąrašas (Dalis 2) — perkeliamas į `config/draudziamu-zodziu-sarasas.md` §7 pilnai.
- Kampai (Dalis 3) — **trys kampai dešimčiai variantų**, todėl kiekvienas kampas naudojamas kelis kartus; tą patį kampą gavę variantai privalo skirtis visomis 14 matricos ašių, o tas pats kampas jiems negali tapti ta pačia antraštės konstrukcija ar tuo pačiu terminu (žr. `config/terminu-zemelapis.md`).
- Kampų skaidymas smulkiau (pvz. auditorijos pjūvis kiekvienam variantui atskirai) — fazės 2 sprendimas, ne šios sintezės.
