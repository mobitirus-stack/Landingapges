# VARIANT.md — `lg9-prieiga`

Statybos agentas: fazė 3 (`promptai/03-statyba.md`), matricos eilutė **#9**, terminų stulpelis **9**.
Prekės ženklas: **Prieiga**. Pozicionavimo kampas: **C — rezultatas ir momentumas**.

---

## 1. Planas prieš kodą

### Spalvos (4–6 įvardintos hex, iš matricos ašies 2, eilutė 9 — nekeičiama)

| Rolė | Hex | Panaudojimas |
|---|---|---|
| Fonas | `#2B2B28` grafitas | viso puslapio bazinis fonas, plokščias, be gradiento, be švytėjimo (ašis 3) |
| Paviršius (gilesnis sluoksnis) | `#201F1C` | „panelės" — hero išvesties blokas, forma, FAQ blokai, cookie juosta. Vienintelė vieta, kur leidžiamas prigesintas tekstas |
| Akcentas | `#FFB000` gintaras | 1px ribos, prompt'o `$` ženklas, nuorodos, fokuso žiedas, kursorius |
| Tekstas / išvestis | `#E8E2D6` | pagrindinis skaitomas tekstas ant abiejų fonų |
| Komentaras (antrinis) | `#8B8680` | tik ant `#201F1C` paviršiaus (žr. kontrasto pastabą žemiau) — pagalbinės eilutės, placeholderiai, smulkios pastabos |

**Kontrasto patikra (WCAG, skaičiuota realiai, ne apytiksliai):**
`#E8E2D6` ant `#2B2B28` = **11.01:1**, ant `#201F1C` = **12.78:1**. `#FFB000` ant `#2B2B28` = **7.75:1**, ant `#201F1C` = **9.00:1**. Visi trys — daugiau nei reikia net smulkiam tekstui.
`#8B8680` ant `#2B2B28` = **3.94:1** — **nepakanka** įprasto teksto ribai (4.5:1). Ant `#201F1C` = **4.57:1** — praeina, bet ribotai. **Sprendimas:** `#8B8680` naudojamas TIK elementuose, kurie visada guli ant `#201F1C` paviršiaus (forma, hero panelė, FAQ, cookie juosta), niekada tiesiai ant grynos `#2B2B28`. Ten, kur reikėjo antrinio teksto ant grynos `#2B2B28` (pvz. poraštės smulkus tekstas), naudojamas pagrindinis `#E8E2D6`, o ne komentaro spalva — kad nesumažintume kontrasto žemiau ribos.

### Tipografija

- **Antraštės, prompt'as, etiketės:** JetBrains Mono, svoriai 400/700 (ašis 4, eilutė 9 — nekeičiama).
- **Ilgesnės pastraipos:** Inter Tight 400 — visos paaiškinamosios pastraipos (M, A, €, K, D sekcijų tekstas), kad monospace neliktų vieninteliu puslapio charakteriu (kliento reikalavimas: „monospace mažoms etiketėms ne terminalo variante" leidžiama tik čia, bet ilgas tekstas monospace'u sunkiai skaitomas — todėl pora, ne vienas šriftas).
- **Skalė:** santykis **1.150** (ašis 5). Bazė 16px → 18.4 → 21.16 → 24.33 → 27.98px. `h1` = 27.98px (≈1.75rem), `h2` = 21.16px (≈1.32rem), `h3`/etiketės = 18.4px (≈1.15rem), tekstas = 16px.
- **Eilutės aukštis = 1.5 simbolio** (ašis 5): visur `line-height: 1.5em`, be išimčių.
- **Vertikalus ritmas eilutėmis, ne pikseliais**: viena CSS kintamoji `--ln: 1.5em`; visi tarpai tarp blokų — `calc(var(--ln) * N)` (N = 1, 2, 3, 4), jokių laisvų px reikšmių tarpuose.
- Teksto eilutės ilgis: paragrafai apriboti `~68ch` (< 80 simbolių reikalavimas), Inter Tight gauna nedidelį papildomą `line-height` (1.6) prie bazinio 1.5, nes proporcinis šriftas tankesnis už monospace.

### Layout

Viena kolona, kairysis lygiavimas, fiksuoto pločio simbolių ritmas: **72 simboliai eilutėje** (`max-width: 72ch`, centruota `margin-inline: auto`, vidinis turinys lygiuojamas kairėn). Visas puslapis — tarsi vienas ilgas terminalo langas ant grafito darbastalio: šoninė paraštė (fonas `#2B2B28`) mato tik plačiuose languose; nuo 768px kolona atsiremia į kairę pusę su fiksuotu pločiu, siauresniuose — užima visą plotį su vidiniu `padding`.

**ASCII wireframe — desktop (≥1024px), kolona centruota, max 72ch:**

```
┌──────────────────────────── 72ch ────────────────────────────┐
│ prieiga@mazgas:~$                 jau esi naudotojas? prisijungti │  H
├─────────────────────────────────────────────────────────────┤
│ ┌─ tm-pane ───────────────────────────────────────────────┐ │
│ │ # mazgas veikia nuo 1997 metų. be modemo, tos pačios     │ │  P
│ │   taisyklės.                                              │ │
│ │ # validacija: rankinė, ne automatinė.                     │ │
│ │                                                            │ │
│ │ Atsakai į penkis klausimus ir iš karto matai, kas mazge   │ │  <h1>
│ │ aktyvus dabar.                                             │ │
│ │ Validacija rankinė. Paskyra be kainos. Pirmas sujungimas  │ │  <p>
│ │ dažnai įvyksta dar tą pačią valandą.                      │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ kiek tai užima                                                 │  Į (h2)
│ Penki klausimai. Apie tris minutes...                          │
│                                                                 │
│ kas įvyksta iš karto                                           │  M (h2)
│ > per pirmą minutę: ...                                        │
│ > per parą: ...                                                │
│ > nuo to momento: ...                                          │
│                                                                 │
│ ┌─ tm-pane #tm-form ─────────────────────────────────────────┐ │
│ │ paleidimas                                                 │ │  FORM (h2)
│ │ (tm-history — tušti iki pirmo atsakymo)                    │ │
│ │ $ prisijungimo vardas [ __________ ] [priimti vardą]       │ │
│ └────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ kas tikrina naudotojus  /  kaina  /  aktyvumas dabar /         │  A / € / Q
│ teisės ir matomumas                                            │  K
│                                                                 │
│ jei dar dvejoji  (5 klausimai-atsakymai, kiekvienas su         │  D
│ nuoroda „paleisti dabar")                                      │
│                                                                 │
│ pasiruošęs? $ Paleisti paskyrą dabar                           │  R
├─────────────────────────────────────────────────────────────┤
│ autorizacija (18+, taisyklės, privatumo teisės → #tm-privacy) │  L
├─────────────────────────────────────────────────────────────┤
│ [ tm-bar, fixed apačioje ] slapukai — supratau                │  C
└─────────────────────────────────────────────────────────────┘
```

**ASCII wireframe — mobile (360px):**

```
┌──────────────────┐
│prieiga@mazgas:~$  │  H (nav nuoroda eina žemiau, ne šalia)
│jau naudotojas?    │
│prisijungti        │
├──────────────────┤
│# mazgas nuo 1997..│  P — tm-pane, pilnas plotis,
│# validacija:      │      tekstas laisvai lūžta (ne 72
│  rankinė.         │      simbolių eilutė — žr. savikritiką)
│                   │
│Atsakai į penkis   │
│klausimus ir iš    │  <h1>
│karto matai...     │
├──────────────────┤
│kiek tai užima     │  Į
├──────────────────┤
│kas įvyksta iš     │  M
│karto              │
├──────────────────┤
│paleidimas         │  FORM
│$ prisijungimo     │
│  vardas           │
│[ input          ] │
│[ priimti vardą  ] │  (laukas ir mygtukas — po vieną
│                   │   po kitu, ne eilutėje)
├──────────────────┤
│... A / € / Q / K  │
├──────────────────┤
│jei dar dvejoji    │  D
├──────────────────┤
│pasiruošęs?        │  R
├──────────────────┤
│autorizacija       │  L
└──────────────────┘
  [ slapukai — supratau ]  ← fixed juosta apačioje, virš turinio, neblokuoja
```

### 3 principai

1. **Kiekvienas ekrano elementas yra arba komanda, arba jos išvestis** — nėra atskiro dekoratyvinio sluoksnio virš funkcijos. `$` ženklina veiksmą, paprastas tekstas be ženklo — pastraipą, `>` — sistemos atsakymą.
2. **Viena kolona, kairysis lygiavimas, fiksuotas plotis** — niekas nepersidengia, niekas neplūduriuoja, joks elementas nesikiša į kitą.
3. **Judesys egzistuoja tik kaip atsakas į vartotojo veiksmą** — nauja išvesties eilutė atsiranda tik įvedus atsakymą; niekas kitas puslapyje nejuda.

### Kur išleidžiama drąsa

Atsakymai niekada neišnyksta: kiekvienas įvestas atsakymas lieka matomas virš prompt'o kaip nuolat augantis seanso žurnalas, ir forma pati tampa savo pačios istorija — tai vienintelis įsimenamas elementas, visa kita puslapyje sąmoningai tylu.

---

## 2. Savikritika prieš kodą

**Pirmas atsakymas: TAIP.** „Hacker/terminalo" kryptis (JetBrains Mono, tamsus fonas, gintaro akcentas, prompt'ai) yra viena labiausiai perdirbtų dizaino klišių apskritai — pirmas instinktas būtų beveik juodas fonas, žalias arba gintarinis tekstas, spausdinimo (typewriter) animacija užkrovus ir dekoratyvūs „bash" langų kontūrai su trimis taškučiais viršuje. Bet kuris kitas dizaineris, gavęs tą patį briefą, greičiausiai atsidurtų būtent čia.

**Ką pakeičiau (jau užfiksuota `config/diferenciacijos-matrica.md` DALYJE 5, čia — savo žodžiais ir su vienu papildomu punktu):**

1. **Fonas pakeltas nuo beveik juodo iki atpažįstamai pilko** (`#2B2B28`, ne `#12100E` ar panašiai) — patikrinta skaičiais: kontrastas su bet kuriuo sinteze §2.1 draudžiamu beveik juodu fonu vizualiai ir hex atstumu pakankamai tolimas, žiūrovas šį foną įvardina kaip „grafitą", ne kaip „juodą su atspalviu".
2. **Jokios spausdinimo (typewriter) animacijos užkrovus.** Hero tekstas — jau parašyta, statiška išvestis. Vienintelis judesys visame puslapyje yra reakcija į vartotojo veiksmą (nauja išvesties eilutė po atsakymo), ne užkrovimo efektas. Tai buvo aiškiausias rizikos taškas, ir jis pašalintas visiškai, ne sušvelnintas.
3. **Jokių dekoratyvių „terminalo lango" elementų** (jokių trijų spalvotų taškučių viršuje, jokių fake `bash-3.2$` antraščių, jokių ASCII rėmelių iš `─│┌┐` simbolių dekoravimui). `$` ir `>` naudojami tik ten, kur jie žymi tikrą turinį (tikra komanda, tikra išvestis) — niekada kaip grynas dekoras.
4. **Antras (papildomas) atradimas rašant šį failą:** mirksintis blokinis kursorius (ašis 10) galėjo tapti antru, nesusijusiu judesio momentu greta reakcijos į atsakymą — tai pažeistų „vienas orkestruotas momentas". Sprendimas: kursorius realizuojamas kaip **native input caret** (`caret-color: #FFB000`) ten, kur įmanoma, o dekoratyvus blokinis kursorius rodomas tik prie AKTYVAUS prompt'o (ne prie istorijos eilučių) kaip to paties „laukiu tavo įvesties" momento dalis, ne kaip atskira animacija — ir jis, kaip ir viskas kitas, išjungiamas per `prefers-reduced-motion`.

**Antras atsakymas: NE.** Kitas dizaineris, laikydamasis to paties briefo be šio papildomo apmąstymo, greičiausiai paliktų typewriter efektą hero'e (nes tai „akivaizdu" terminalo kontekste) ir pridėtų dekoratyvų langų rėmelį „autentiškumui". Šis variantas sąmoningai atsisako abiejų.

---

## 3. Turinys

Terminija — tik iš `config/terminu-zemelapis.md` stulpelio **9**: paleidimas (registracija) · paskyra · naudotojas · mazgas (bendruomenė) · sujungimas (susiejimas) · seansas (susirašinėjimas) · autorizacija (patvirtinimas) · validacija (moderavimas) · prisijungimo vardas (slapyvardis) · e-adresas · frazė (slaptažodis, čia — „prieigos frazė") · regionas (miestas) · rėžis (amžiaus grupė, čia — „amžiaus rėžis") · be kainos (nemokama) · teisės (privatumas/matomumas).

Pastaba dėl heading formato: sąmoningai vengiama em brūkšnio konstrukcijos „ŽODIS — frazė" (draudžiama §7.2/§8.5) — visur, kur reikėjo skyriklio, naudojamas dvitaškis arba paprastas sakinys, niekada em brūkšnys prieš/po vieną žodį antraštėje.

### H — antraštė

- Prekės ženklo eilutė (monospace, kaip prompt): `prieiga@mazgas:~$`
- F2 (grįžtantis narys, žemo prioriteto tekstinė nuoroda): „jau esi naudotojas? prisijungti" → nukreipia į `#tm-login-note`, kuris paaiškina: „prisijungimo nuoroda atkeliauja el. paštu po validacijos — atskiro prisijungimo puslapio čia (dar) nėra."

### P — pozicionavimas (hero, statinė išvestis)

Komentaro eilutės (paviršiuje `#201F1C`, spalva `#8B8680`):
- `# mazgas veikia nuo 1997 metų. be modemo, tos pačios taisyklės.`
- `# validacija: rankinė, ne automatinė.`

`<h1>`: „Atsakai į penkis klausimus ir iš karto matai, kas mazge aktyvus dabar."
`<p>` (paantraštė): „Validacija rankinė. Paskyra be kainos. Pirmas sujungimas dažnai įvyksta dar tą pačią valandą."

### Į — įsipareigojimo dydis

`<h2>` kiek tai užima
„Penki klausimai. Apie tris minutes. Reikalingi duomenys: prisijungimo vardas, amžiaus rėžis, regionas, e-adresas, prieigos frazė. Nieko daugiau neprašome."

### M — kas įvyksta iš karto (mechanika po registracijos)

`<h2>` kas įvyksta iš karto
- `> per pirmą minutę: paskyra sukurta, validacija paleista.`
- `> per parą: el. paštu atkeliauja patvirtinimas, kai validacija baigta.`
- `> nuo to momento: matai mazgo naudotojus pagal regioną ir gali siūlyti sujungimą. po sujungimo prasideda seansas — susirašinėjimas tarp jūsų dviejų.`

### FORM — paleidimas (komandų prompt'as, 5 klausimai)

`<h2>` paleidimas

Laukai ta tvarka, kuria klausiama (mažiausiai jautrus → jautriausias, F10 reikalavimas):

1. **prisijungimo vardas** — `text`, `required`, `minlength=3`, `maxlength=20`, `pattern=[A-Za-z0-9_]{3,20}`. Pagalba: „3–20 simbolių: raidės, skaičiai, apatinis brūkšnys." Mygtukas: **priimti vardą**.
2. **amžiaus rėžis** — `select`, `required`. Reikšmės: 18–24 / 25–34 / 35–44 / 45–54 / 55 ir daugiau. Mygtukas: **priimti rėžį**.
3. **regionas** — `text`, `required`, `minlength=2`. Pagalba: „miestas ar apylinkė, kaip supranti pats." Mygtukas: **priimti regioną**.
4. **e-adresas** — `email`, `required`. Pagalba: „adresu atkeliaus validacijos patvirtinimas." Mygtukas: **priimti adresą**.
5. **prieigos frazė** — `password`, `required`, `minlength=8`. Pagalba: „bent 8 simboliai." Mygtukas (galutinis veiksmas): **paleisti paskyrą**.

Klaidų pranešimai (kaip išvesties eilutė, `role="alert"`, niekada vien spalva):
- vardas tuščias: „klaida: prisijungimo vardas privalomas."
- vardas neteisingas: „klaida: vardas per trumpas arba su neleistinais simboliais. naudok 3–20 raidžių, skaičių ar apatinį brūkšnį."
- vardas užimtas (rezervuotas sąrašas: admin/root/test/prieiga/naudotojas/mazgas): „klaida: šis vardas užimtas. bandyk kitą."
- rėžis nepasirinktas: „klaida: pasirink amžiaus rėžį."
- regionas tuščias/trumpas: „klaida: parašyk regioną (bent 2 simboliai)."
- e-adresas neteisingas: „klaida: e-adresas neatrodo teisingas. patikrink @ ir domeną."
- frazė trumpa: „klaida: prieigos frazė per trumpa. bent 8 simboliai."

Istorija (virš prompt'o, kiekviena eilutė su „keisti" mygtuku): `> prisijungimo vardas: <reikšmė>` / `> amžiaus rėžis: <reikšmė>` / `> regionas: <reikšmė>` / `> e-adresas: <reikšmė>` / `> prieigos frazė: ●●●●●●●●` (frazė NIEKADA neechoinama atviru tekstu — saugumo sprendimas, žr. §5).

Sėkmės būsena (F13):
- `$ paleidimas --patvirtinti`
- `> paskyra paleista.`
- `> validacija prasidėjo. patvirtinimą gausi adresu <echo el. paštas>.`
- `> gali grįžti į šį puslapį bet kada — seansas išliks."`

### A — kas tikrina naudotojus (autentiškumas / validacija, atskira nuo Q)

`<h2>` kas tikrina naudotojus
„Kiekvieną naują paskyrą prieš aktyvavimą peržiūri žmogus, ne vien algoritmas. Pranešimą apie įtartiną paskyrą peržiūrime per parą, ir, jei pasitvirtina, paskyra pašalinama."

### € — kaina

`<h2>` kaina
„Paleidimas ir pagrindinės mazgo funkcijos yra be kainos. Šiuo metu apmokamo lygio nėra. Jei tai kada nors pasikeis, apie tai pranešime iš anksto, prieš įsigaliojant, ne po fakto."

### Q — aktyvumas dabar (kiekybinis aktyvumas + „kodėl dabar", sąmoningai sujungta)

`<h2>` aktyvumas dabar
- `> praėjusią savaitę mazge įvyko nuo 40 iki 90 naujų sujungimų kas dieną, priklausomai nuo regiono.`
- `> aktyviausias mazgo laikas yra nuo 19 iki 23 valandos. paleidus paskyrą dabar, pataikai į šios savaitės aktyviausią langą.`

*(Sujungimo pagrindimas — žr. §5: F4 ir F17 abu remiasi tuo pačiu, jau turimu aktyvumo faktu, todėl skaidymas į du atskirus blokus tik pakartotų tą patį skaičių dviem sakiniais.)*

### K — teisės ir matomumas (privatumas ir kontrolė)

`<h2>` teisės ir matomumas
„Viešai matomas tik tavo prisijungimo vardas ir platus regionas. E-adresas, tiksli vietovė ir prieigos frazė niekada nerodomi kitiems naudotojams. Paskyrą gali sustabdyti arba ištrinti bet kada, be papildomų klausimų mums."

### D — jei dar dvejoji (mažo įsipareigojimo kelias, 5 klausimai)

`<h2>` jei dar dvejoji

1. **kiek trunka paleidimas?** — „Mažiau nei tris minutes. Penki klausimai, be tarpinių puslapių."
2. **ar reikės mokėti?** — „Ne. Paleidimas ir pagrindinės funkcijos yra be kainos, ir tai nesikeičia be išankstinio pranešimo."
3. **kaip patikrinami naudotojai?** — „Kiekvieną naują paskyrą prieš aktyvavimą peržiūri žmogus. Įtartinos paskyros šalinamos per parą nuo pranešimo."
4. **kas matys mano duomenis?** — „Kitiems naudotojams matosi tik prisijungimo vardas ir platus regionas. Likusi informacija lieka pas tave."
5. **ar galiu vėliau pasitraukti?** — „Taip. Paskyrą sustabdai arba ištrini pačiame mazge, be jokių papildomų klausimų."

Kiekvienas atsakymas baigiasi nuoroda „paleisti dabar" → `#tm-form`.

### R — pasiruošęs? (pakartotinis CTA taškas)

`<h2>` pasiruošęs?
Nuoroda: „Paleisti paskyrą dabar" → `#tm-form` (fokusas persikelia į pirmą tuščią lauką).

### L — autorizacija (teisinis / atitikties uždarymas, poraštė)

`<h2>` autorizacija
„Prieiga skirta tik pilnamečiams (18+). Tęsdamas/-a čia patvirtini savo amžių ir sutinki su mazgo taisyklėmis."

`<details>` „taisyklės" (išskleidžiama, realus sunumeruotas sąrašas — numeracija leidžiama, nes tai tikra seka, ne dekoras):
1. Reikia būti pilnametystės.
2. Vienas žmogus — viena paskyra.
3. Kito naudotojo duomenų neplatink už mazgo ribų.
4. Pažeidimą praneši — paskyrą peržiūrime per parą.

Nuoroda „privatumo teisės" → `#tm-privacy` (pakartotinai naudoja jau parašytą K sekciją — nekuriamas antras, dubliuojantis teisinis tekstas).

Copyright: „© 2026 Prieiga"

### C — slapukai

Fiksuota apatinė juosta (ne kampe, ne pavėluota, ne rounded corner kortelė — sąmoningai kitokia forma nei draudžiamas p. 49 modelis): „Šis mazgas naudoja slapukus veikimui ir statistikai." (naudojamas terminas „mazgas", ne bendrinis „svetainė" — pakaitalas draudžiamas §9.5). Mygtukas: **supratau** (pažymima `localStorage`, juosta daugiau nerodoma tos pačios naršyklės sesijoje).

---

## 4. Peržiūra 360px / 1440px ir savikritika po kodo

Tikrinta realiame Chrome per Playwright (`channel: "chrome"`, nes standartinis bundled Chromium
šioje mašinoje nepalaikomas — ta pati pastaba kaip `logs/build-06.done.md`). Patikrinta 360 / 768 /
1024 / 1440px: nė viename plotyje `scrollWidth` neviršija `clientWidth` (jokio horizontalaus scroll).

**Rasta ir ištaisyta reali klaida testuojant (ne tik kosmetinė):** mobiliajame lange (`≤767px`)
`.tm-prompt` pereina į `flex-direction: column`, o įvesties laukų bazinė taisyklė turėjo
`flex: 1 1 16em`. Column kryptimi `flex-basis` valdo **aukštį**, ne plotį — todėl telefono vaizde
teksto laukas išsipūsdavo iki ~230px aukščio (ekrano nuotrauka tai parodė iš karto). Pataisyta:
mobiliajame media query pridėta ta pati atributų kombinacija (`input[type="text"]`,
`input[type="email"]`, `input[type="password"]`, `select`) su `flex: 1 1 auto`, kad specifiškumas
sutaptų su bazine taisykle ir laimėtų dėl šaltinio tvarkos. Po pataisymo laukas 360px lange — įprasto
aukščio. Visi automatiniai testai (žr. žemiau) paleisti pakartotinai po pataisymo — visi PASS.

**Pašalintas perteklinis elementas:** poraštės nuorodų bloke buvo dvi nuorodos — „privatumo teisės"
(→ `#tm-privacy`) ir „autorizacija" (→ `#tm-legal`). Antroji nuoroda vedė **į tą pačią sekciją**,
kurioje pati ir buvo įdėta (poraštė = autorizacijos sekcija) — grynai dekoratyvus, nieko nedarantis
saviatgalinis elementas. Pašalinta, paliekant vieną prasmingą nuorodą („privatumo teisės").

**Automatiniai patikrinimai (Playwright, realus Chrome), 360px ir 1440px:**
- be horizontalaus scroll — PASS abiem pločiais;
- iš pradžių matomas tik 1-as žingsnis, likę 4 paslėpti — PASS;
- pilnas 5 klausimų srautas su klaidomis kiekviename žingsnyje (per trumpas vardas → užimtas vardas →
  tinkamas vardas → nepasirinktas rėžis → per trumpas regionas → blogas e-adresas → per trumpa frazė →
  sėkmė) — visos klaidos rodomos tiksliai su reikiamu tekstu, PASS;
- sėkmės būsena po penkto žingsnio su echo el. paštu — PASS;
- **prieigos frazė niekada neechoinama atviru tekstu** istorijoje (patikrinta ieškant realios įvestos
  reikšmės tekste — nerasta, vietoje jos `●●●●●●●●`) — PASS;
- konsolė švari, jokių `pageerror` — PASS abiem pločiais;
- `prefers-reduced-motion: reduce` išjungia kursoriaus animaciją (`animationName === "none"`) — PASS;
- **be JS** (`javaScriptEnabled: false`): visi 5 laukai matomi vienu metu kaip įprasta forma
  (progresyvaus patobulinimo bazinis lygis veikia) — PASS;
- klaviatūra: pilna „Tab" seka nuo puslapio pradžios logiška (peršokimo nuoroda → ženklas → prisijungimo
  nuoroda → 1-as laukas → jo mygtukas → FAQ nuorodos → pakartotinis CTA → poraštės `<details>`); `Enter"
  klaviatūroje pateikia žingsnį be pelės; „keisti" mygtukas istorijoje pasiekiamas ir grąžina į
  atitinkamą žingsnį — visi PASS.

**Antras (papildomas) savikritikos taškas po kodo:** ar terminija liko tiksliai stulpelio 9 ribose?
Patikrinta `grep` paieška — nė vienas kito varianto terminas ar prekės ženklas nerastas; vienas radinys
pataisytas darbo eigoje: cookie juostos tekste buvo panaudotas bendrinis pakaitalas „svetainė" (draudžiama
§9.5) vietoj priskirto termino „mazgas" konceptui #4 — pakeista į „Šis mazgas naudoja slapukus...".
