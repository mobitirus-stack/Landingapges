# Analizė — url-1

**Šaltinis:** https://daddywonderland.love/landing-a
**Analizės metodas:** puslapio HTML šaltinio, sietino `assets/style.css` ir `assets/app.js` turinio patikra (svoris, struktūra, media query taškai, elgsena). Puslapis nebuvo atidarytas realioje naršyklėje su ekrano kopijomis — visos išvados grįstos šaltinio kodu.

**Svarbiausia struktūrinė pastaba:** šis konkretus URL (`landing-a`) yra **minimalistinis vieno ekrano variantas**, ne pilna daugiasekcinė nusileidimo puslapio versija. Bendras CSS/JS balas yra bendras visai platformai (jame yra klasės, skirtos kitiems puslapiams — pagrindiniam „index“, atsiskaitymo srautui, profilio redagavimui, pokalbiams), bet šiame konkrečiame URL realiai atvaizduojamos tik trys dalys: antraštė (nav), herojus su įmontuota registracijos forma, ir footeris. Jokių atsiliepimų, kainų, DUK ar „kaip veikia“ sekcijų šiame variante nėra — jos egzistuoja tik kaip CSS klasės kitiems to paties domeno puslapiams.

---

## 1. Kontekstas

**1.1 Auditorija ir jos būsena prieš įėjimą**
Lankytojas ateina jau žinodamas, kad tai suaugusiems skirta pažinčių platforma (18+ reitingas, aiškus pavadinimas antraštėje) — t.y. nėra apgaulingo „minkšto“ pozicionavimo, kuris slėptų temą. Tikėtina, kad lankytojas jau yra matęs reklaminę žinutę su konkrečiu pažadu prieš paspausdamas, todėl į patį puslapį ateina su jau susiformavusiu lūkesčiu ir žemu papildomo įtikinėjimo poreikiu — puslapis tuo ir naudojasi, praleisdamas įtikinėjimo etapą.

**1.2 Tikėtinas srauto šaltinis**
Puslapis turi `robots: noindex, nofollow` — sąmoningai pašalintas iš paieškos indekso. Tai kartu su URL pavadinimu (`landing-a`, t.y. A variantas) rodo, kad puslapis egzistuoja **tik mokamam srautui / A/B testavimui**, ne organinei paieškai. RTA reitingo žyma (suaugusiųjų turinio filtravimo standartas) ir penkių kalbų `hreflang` alternatyvos (lt/en/pl/ru/es per `?lang=` parametrą) rodo platesnį Baltijos/Rytų Europos regiono taikymą, tikėtina per affiliate/CPA tinklus ar suaugusiųjų reklamos platformas, ne per bendrą paieškos ar socialinių tinklų organinę auditoriją.

**1.3 Pasiūlymo esmė (savais žodžiais)**
Uždaros bendruomenės tipo pažinčių platforma suaugusiems Lietuvoje: nemokama registracija, realių (ne dirbtinių) narių anketos, abipusio patikimo (match) mechanika ir privatūs pokalbiai po susiejimo. Pinigų klausimas (ar/kada reikės mokėti) puslapyje visiškai nepaliečiamas — pasiūlymas pateikiamas tik kaip „prisijunk nemokamai per minutę“, be jokio užsiminimo apie tolimesnį monetizavimo modelį.

**1.4 Konversijos tikslas ir jo tipas**
Tikslas — užbaigta daugiapakopė registracijos forma (naujo naudotojo paskyros sukūrimas), ne skambutis, ne pirkimas, ne atsisiuntimas. Konversija vyksta tame pačiame ekrane be perėjimo į kitą puslapį (kol nepaspaudžiamas galutinis pateikimo mygtukas).

---

## 2. Įtikinėjimo grandinė

**2.1 Sekcijų sąrašas tvarka ir funkcija**
1. **Antraštė (nav)** — prekės ženklo identifikavimas, kalbos pasirinkimas, alternatyvus kelias jau esamiems nariams (prisijungimas), mobili meniu piktograma.
2. **Herojus + registracijos kortelė (viena, sujungta sekcija)** — atlieka *visą* įtikinėjimo ir konversijos darbą vienu metu: trumpas gyvo aktyvumo signalas, viena tiesioginė identifikacinė antraštė klausimo forma, viena paaiškinamoji eilutė, ir iškart trijų žingsnių registracijos forma be jokio tarpinio scroll.
3. **Poraštė (footer)** — prekės ženklo aprašymas keliais sakiniais, navigacijos nuorodų grupės, amžiaus patvirtinimo juosta, teisinio atitikimo ženkleliai, autorystės eilutė.
4. **Slapukų pranešimas** — plaukiojanti, atidėto pasirodymo (po trumpos pauzės) sutikimo kortelė.

Pastaba: klasikinės ilgo puslapio sekcijos — socialinio įrodymo blokas su atsiliepimais, „kaip tai veikia“ žingsniai, kainų kortelės, DUK — **šiame variante nėra iš viso**. Tai yra sąmoninga struktūrinė strategija (minimalus trintis prieš formą), ne praleista dalis.

**2.2 Kokį prieštaravimą uždaro kiekviena sekcija**
- Gyvo aktyvumo skaitiklis prie antraštės → uždaro prieštaravimą „ar čia apskritai yra žmonių“.
- Vieno klausimo antraštė + poantraštė apie trukmę → uždaro prieštaravimą „ar tai užtruks ilgai / sudėtinga“.
- Laipsniškas formos atskleidimas (pirma lengvi pasirinkimai, tik paskutiniame žingsnyje el. paštas/slaptažodis) → uždaro prieštaravimą „ar reikės iškart duoti asmeninius duomenis“.
- Amžiaus/taisyklių varnelė paskutiniame žingsnyje → uždaro teisinį/atitikties prieštaravimą (18+ patvirtinimas).
- Footerio teisiniai ženkleliai → uždaro bendrą „ar ši svetainė legali/tvarkinga“ prieštaravimą.
- **Neuždarytas prieštaravimas:** kaina/monetizavimas — apie tai puslapyje nekalbama visiškai (žr. Kritika).

**2.3 Socialinio įrodymo tipai ir pozicijos**
Vienintelis socialinio įrodymo elementas visame puslapyje — pulsuojantis „gyvas“ taškelis su skaičiumi, žyminčiu šiuo metu prisijungusių narių kiekį, patalpintas virš pagrindinės antraštės (eyebrow pozicijoje). Jokių atsiliepimų, narių nuotraukų, žiniasklaidos logotipų ar skaitliukų kitur puslapyje nėra. Užfiksuotu momentu šis skaičius rodė **nulį** — t.y. mechanizmas gali realiuoju laiku parodyti tuščią/nulinę reikšmę, kas veikia priešingai nei numatyta funkcija (žr. Kritika 6.1).

**2.4 Rizikos mažinimo mechanizmai**
Aiškus „nemokama“ žodis prie registracijos antraštės ir laiko lūkesčio nustatymas („užtrunka apie minutę“). Jokios pinigų grąžinimo garantijos, nemokamo bandomojo laikotarpio aprašymo ar atšaukimo sąlygų nėra — logiška, nes visas matomas veiksmas yra nemokama registracija, ne apmokamas produktas.

**2.5 Skubos / trūkumo mechanizmai**
Nėra laikmačių, ribotų vietų skaičiaus ar akcijos pabaigos datų. Vienintelis pseudo-skubos elementas — jau minėtas pulsuojantis „online dabar“ skaitiklis, kuris kuria momentinio aktyvumo, o ne trūkumo, įspūdį.

**2.6 Kainodaros pateikimo būdas**
Kainodara **nepateikiama visiškai** — nei skaičiumi, nei užuomina, nei „nemokama vs. mokama“ palyginimu. Vartotojas įveda visus registracijos duomenis nežinodamas, ar/kada bus prašoma mokėti.

---

## 3. CTA sistema

**3.1 CTA kiekis ir pozicijos**
- Pagrindinis CTA yra pati trijų žingsnių forma (ne atskiras mygtukas į kitą puslapį) — įterpta tiesiai į herojų.
- Antrinis CTA antraštėje — nuoroda esamiems nariams prisijungti (ne registruotis).
- Tretinis, žemo prioriteto CTA formos apačioje — tekstinė nuoroda „jau turi paskyrą“ tiems, kas jau užsiregistravę.
- Footeryje pasikartoja nuoroda atgal į registraciją ir į prisijungimą, plius viena išorinė nuoroda į bendruomenės forumą (atsidaro naujame lange, ne konversijos kelias).

**3.2 Ką pažada paspaudimas (funkciškai)**
Kiekvienas pasirinkimo/„toliau“ mygtukas formoje **nekeičia puslapio** — tai kliento pusės (JS) žingsnio perjungimas tame pačiame ekrane su vizualiu progreso brūkšniu ir žingsnio skaitikliu. Tik paskutinis, galutinis mygtukas atlieka tikrą serverio užklausą (POST). Prisijungimo/nav mygtukai veda į atskirus, jau egzistuojančius puslapius (ne į tą pačią formą).

**3.3 Formos laukai ir prašomos informacijos kiekis**
Informacija prašoma laipsniškai, per tris žingsnius, mažėjančio patogumo tvarka:
- 1 žingsnis: du pasirinkimai mygtukų-žetonų pavidalu (savęs identifikavimas + ieškomo partnerio identifikavimas) — jokio teksto įvedimo.
- 2 žingsnis: du išsirenkami laukai (amžiaus grupė iš penkių intervalų; miestas iš ~17 Lietuvos miestų sąrašo + „kitas“).
- 3 žingsnis: slapyvardis, el. paštas, slaptažodis (su rodyti/slėpti perjungikliu) ir privaloma 18+/taisyklių sutikimo varnelė.
Iš viso — apie 6 duomenų punktus prieš paskyros sukūrimą, su tyčiniu „lengviausia pirma, jautriausia paskutinę“ išdėstymu (commitment escalation modelis).

**3.4 Kas vyksta po pateikimo**
Iš statinio šaltinio negalima patvirtinti, kas tiksliai rodoma po sėkmingo pateikimo (reikėtų realaus naršyklės testo su faktišku registracijos bandymu, o tai nebuvo šios analizės apimtyje ir tyčia neatlikta). Užfiksuota tik tiek: forma turi paslėptą būsenos požymį, kuris, esant klaidai, automatiškai atidaro trečią (paskutinį) žingsnį iš naujo, t.y. sistema sugeba grąžinti vartotoją į ten, kur jis buvo, o ne priversti pildyti nuo pradžių.

---

## 4. Struktūra ir elgsena

**4.1 Hero tipas ir kas matoma be scroll**
Hero tipas — centruotas, vienos kolonos, be jokio iliustracinio vaizdo; jo turinys yra pats registracijos kortelės blokas, sujungtas su antrašte į vieną vizualų vienetą (forma **yra** herojus, ne atskira sekcija po juo). Dėl to be scroll paprastai matoma: prekės ženklas ir nav, gyvo aktyvumo eilutė, pagrindinė antraštė-klausimas, viena paaiškinamoji eilutė ir bent pirmas formos žingsnis (du pasirinkimo mygtukų rinkiniai). Tikslus matomumas priklauso nuo ekrano aukščio ir nebuvo tikrintas realiame naršyklės lange.

**4.2 Navigacijos elgsena, sticky elementai**
Viršutinė navigacija yra prilipdyta (sticky) prie viršaus visą laiką, su permatomu/blur fonu ir plona apatine linija. Kalbos pasirinkimo išskleidžiamasis meniu valdomas per JS su aria-atributais. Slapukų pranešimas — plaukiojanti kortelė, pasirodanti po trumpos pauzės, atsimenama per naršyklės localStorage (nebeberodoma pakartotinai tam pačiam įrenginiui).

**4.3 Mobilus elgesys ir kuo skiriasi nuo desktop**
Žemiau tam tikro pločio slenksčio: teksto formos navigacijos nuorodos pasislepia už „burger“ mygtuko, prekės ženklo pilnas žodinis logotipas pasislepia palikdamas tik trumpą ženkliuką, sumažėja nav vidiniai atitraukimai, sumažėja herojaus ir registracijos kortelės vidinis paddingas. Siauresniame lange (apytiksliai išmaniojo telefono plotyje) formos 2 žingsnio du greta esantys laukai (amžius/miestas) persitvarko į vieną koloną vietoj dviejų. Pati forma struktūriškai nesikeičia — tas pats trijų žingsnių modelis veikia ir mobiliajame, ir desktop rodinyje.

---

## 5. Technika

**5.1 Apytikslis svoris, kas stabdo užkrovimą, layout shift**
Pats HTML dokumentas — apie 14.8 KB. Bendras stiliaus failas — apie 38.8 KB (~9.4 KB suspaustas), bendras skriptų failas — apie 16.3 KB (~4.6 KB suspaustas). Svarbu: **abu failai yra bendri visai svetainei**, ne šiam konkrečiam puslapiui — didelė jų dalis (kortelių-slinkties sąsaja, pokalbių atnaujinimas, profilio redagavimo išdėstymas, DUK akordeonas) šiame URL apskritai nepanaudojama, t.y. naršyklė gauna ir apdoroja gerokai daugiau kodo, nei realiai reikia šiam ekranui. Dvi „Google Fonts“ šeimos kraunamos per vieną CSS nuorodą su preconnect optimizacija — galimas trumpas šrifto pakeitimo efektas (FOUT), bet ne kritinis. Vaizdų puslapyje praktiškai nėra (tik SVG duomenų-URI palankiukas), tad layout shift dėl vaizdų rizika minimali.

**5.2 Antraščių hierarchija, meta, structured data**
Vienas `<h1>` (klausimo formos antraštė), vienas `<h2>` (formos vidinis paantraštis), teisingi `<label>` prie kiekvieno formos lauko. `robots` nustatytas į noindex/nofollow (sąmoningai neindeksuojama). Yra pilnas OpenGraph ir Twitter Card rinkinys, `canonical` nuoroda į save, penkių kalbų `hreflang` alternatyvos. Structured data apsiriboja tik `Organization` + `WebSite` tipais — nėra `Product`/`Service`/`FAQPage` žymėjimo, t.y. schema minimali konversijos puslapiui.

**5.3 Prieinamumo problemos**
- Pasirinkimo mygtukai (savęs/partnerio identifikavimo žetonai) pažymėti tik spalva/kraštine be `aria-pressed` ar panašios būsenos — ekrano skaitytuvo naudotojui neaišku, kas pasirinkta.
- Slaptažodžio rodymo/slėpimo mygtukas keičia tik teksto etiketę, be `aria-pressed` būsenos paskelbimo.
- Prigesintos (dim/muted) teksto spalvos ant tamsaus fono footeryje ir smulkiame tekste — kontrasto pakankamumas neabejotinai nepatikrintas, bet vizualiai rizikingas ir vertas patikrinti realiu įrankiu.
- Gyvo skaitiklio blokas neturi `aria-live` — jei reikšmė realiai kinta laiku, pakeitimai nebūtų automatiškai paskelbiami ekrano skaitytuvams.

---

## 6. Kritika

**6.1** Gyvo „narių prisijungę“ skaitiklio mechanizmas užfiksuotas rodantis **nulį** — t.y. pats socialinio įrodymo įrankis gali realiai parodyti priešingą efektą nei numatyta (tuščia bendruomenė, o ne aktyvi). *Mūsų variantai:* arba garantuoti, kad toks skaičius niekada nerodomas kaip nulis/tuščias (minimali apatinė riba, arba fallback tekstas), arba apskritai nenaudoti tikralaikio skaičiaus, jei jo teisingumas negarantuojamas.

**6.2** Nė karto iki (ir per) registracijos formos nepaminima, ar/kiek/kada reikės mokėti — vartotojas palieka el. paštą ir slaptažodį be jokio kainos lūkesčio. *Mūsų variantai:* aiškiai nurodyti kainos/nemokamo lygio modelį prieš arba per registraciją, kad nebūtų pasitikėjimo praradimo po registracijos.

**6.3** Puslapis visiškai atsisako klasikinės įtikinėjimo grandinės (nėra nei kaip-veikia, nei saugumo/patikros paaiškinimo, nei atsiliepimų, nei DUK) — statoma tik ant žemos trinties ir smalsumo. Šaltam, prekės ženklo dar nepažįstančiam mokamo srauto lankytojui tai gali reikšti prarastą konversiją iš atsargesnių vartotojų, kurie nori bent minimalaus pagrindimo prieš paliekant asmeninius duomenis. *Mūsų variantai:* įtraukti bent vieną trumpą pasitikėjimo/veikimo paaiškinimo mikro-elementą, nepaverčiant puslapio ilgu.

**6.4** Pasirinkimo žetonai (lyties/ieškomo partnerio) neturi programinės pažymėtos-būsenos semantikos asistuojančioms technologijoms — tai tikra prieinamumo spraga formoje, kuri yra vienintelis konversijos kelias. *Mūsų variantai:* naudoti tinkamą pažymėtos būsenos atributą (pvz., `aria-pressed` arba realų `radio`/`checkbox` po vizualiniu sluoksniu) kiekvienam pasirenkamam elementui.

**6.5** Visas CSS/JS bendrinamas per visą svetainę ir pilnai atsiunčiamas net į šį vieno tikslo puslapį — didelė dalis kodo (kortelių slinkties sąsaja, pokalbių atnaujinimas, profilio/paskyros valdymas) niekada nepanaudojama šiame ekrane, kas didina apdorojimo (ne tik atsisiuntimo) kaštą, ypač silpnesniuose mobiliuose įrenginiuose. *Mūsų variantai:* kiekvienam variantui siųsti tik tai, kas jame realiai naudojama.

---

## 7. FORMA — NEKARTOTI

Šis sąrašas yra paviršius, kurio jokiame mūsų variante negalima atkartoti — nei tiksliai, nei akivaizdžiai atpažįstamai:

1. Fono spalva ~`#12101a` (beveik juodas, violetinio atspalvio tamsus fonas) kaip pagrindinė puslapio spalva.
2. Akcentinė rožinė-raudona spalva ~`#dc3b68` (su šviesesniu variantu ~`#ff5c85`) kaip pagrindinė CTA/prekės ženklo spalva.
3. Gintarinė/amber spalva ~`#f0a93c` kaip antrinė įspėjimo/akcentavimo spalva.
4. Žalsva/mint spalva ~`#4bc98a` kaip „gyvas/online“ indikatoriaus spalva.
5. Sluoksniuota tamsi paletė su paviršiaus kortelėms šiek tiek šviesesniais atspalviais nei fonas (~`#1b1725`, ~`#241e30`).
6. Šriftų pora „Bricolage Grotesque“ antraštėms + „Archivo“ tekstui.
7. Neigiamas raidžių tarpas (apie -3% iki -4.5%) visoms antraštėms kaip signatūrinis „glaustas“ stilius.
8. Suapvalinimo skalė su trimis fiksuotais žingsniais (~8/14/22px), taikoma vienodai mygtukams, kortelėms ir plytelėms.
9. Piliulės formos (pilnai apvalinti, `border-radius:100px`) ženkleliai/juostelės antraštėje ir prie gyvo skaitiklio.
10. Radialinių šviesos dėmių (rožinė + gintarinė) fonas už herojaus kaip foninis švytėjimas.
11. Registracijos/formos kortelė kaip „plūduriuojanti“ kortelė su plona viršutine šviesos linija ir švelniu švytėjimu viršuje.
12. Prilipdyta (sticky), permatoma/blur efekto viršutinė navigacija su plona apatine linija.
13. Pulsuojantis „gyvo taško“ animacijos motyvas šalia tikralaikio skaičiaus kaip vienintelis socialinio įrodymo mechanizmas.
14. Herojaus struktūra, kur vienas tiesioginis identifikacinis klausimas yra pagrindinė antraštė, o forma prasideda tiesiai po ja be jokio vaizdo.
15. Trijų žingsnių registracijos vedlys, įmontuotas tiesiai į herojų (ne atskirame puslapyje), su plonu progreso brūkšniu ir „X iš 3 žingsnių“ etikete.
16. Dviejų mygtukų „žetonų“ pasirinkimo modelis (piliulės formos perjungiami mygtukai eilutėje) dvejetainiam lyties/paieškos pasirinkimui.
17. Footerio teisinio atitikimo ženkliukų (18+/RTA/BDAR tipo) sugrupavimas mažomis apvestomis plytelėmis prie autorystės eilutės — pati grupavimo/vizualinio pateikimo forma (atskirus teisinius reikalavimus, jei jie privalomi mūsų produktui, formuluoti/išdėstyti kitaip).
18. Emoji vėliavėlė + rodyklė kaip kalbos perjungimo elementas antraštėje.
19. Veiksmo žodyno modelis, kur kiekvienas formos žingsnis vadinamas ta pačia „anketos kūrimo/tęsimo“ veiksmažodžio-daiktavardžio schema per visą srautą.
20. Slapukų pranešimas kaip maža plūduriuojanti apvalinta kortelė apatiniame kampe/centre, pasirodanti po trumpo atidėjimo ir įsimenama naršyklėje.

---
