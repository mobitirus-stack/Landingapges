# VARIANT — `lg7-kabinetas`

Šaltiniai: `analize/sinteze.md` (F1–F17, FORMA — NEKARTOTI), `config/diferenciacijos-matrica.md` eilutė **#7**,
`config/terminu-zemelapis.md` stulpelis **#7**, `config/draudziamu-zodziu-sarasas.md`.

---

## Žingsnis 1 — planas prieš kodą

### Spalvos (4–6 įvardintų hex, vaidmenys)

| Kintamasis | Hex | Vaidmuo |
|---|---|---|
| `--ink` | `#2A211B` | riešutmedis — pagrindinis fonas, monolitinis, be sluoksnių |
| `--surface` | `#372C24` | paviršius — formos laukų fonas, `<details>` fonas, kortelės po turiniu (labai retai) |
| `--bone` | `#EFE6D8` | kaulas — pagrindinis teksto atspalvis ant fono |
| `--patina` | `#5F8C72` | patina — akcentas: stambus skaičius, `:focus-visible` žiedas, laukų/varnelės ribos, nuorodų pabraukimo spalva *(CTA mygtukas galiausiai perkeltas ant `--bone`/`--ink` poros dėl WCAG kontrasto — žr. Žingsnio 5 pastabą Nr. 1)* |
| `--band` | `#574A3F` | juosta — 3px horizontalūs skirtukai tarp sekcijų, laukų apatinės linijos, rėmeliai |

Antrinis tekstas gaunamas iš `--bone` su sumažintu krymumu (`color-mix` / `rgba`), naujo hex neįvedant.
Jokio aukso, jokios rožinės, jokio gradiento — tik šie penki vardai visame puslapyje.

### Tipografija

- **Gloock** 400 — `h1`, `Figure_value` (stambus skaičius). Naudojamas retai ir tik dideliu dydžiu — display šriftas neturi vaidmens tekste.
- **Jost** 300 — visas tekstinis turinys (pastraipos, sąrašai, DUK).
- **Jost** 500 — etiketės, mygtukų tekstas, nav, poraštės antraštės (`h2`/`h3`), kad būtų atskirtos nuo teksto svorio be spalvos ar didžiųjų raidžių.
- Tipo skalė, santykis **1.500**, bazė 16px: `1rem` (tekstas) → `1.5rem` (etiketės/h3) → `2.25rem` (h2) → `3.375rem` (h1) → `clamp(5rem,18vw,9rem)` (Figure_value, išimtis dėl hero vaidmens).
- Eilutės ilgis ribojama `max-width: 46rem` (measure), todėl niekur nesiekia 80 simbolių.
- `line-height`: tekstas (Jost, sans) 1.65; antraštės (Gloock, serif-charakterio display) 1.15–1.2 — serifiniam/display šriftui daugiau oro tarp raidžių eilutės viduje, bet mažiau tarp eilučių, nes jis vartojamas trumpoms, ne ilgoms eilutėms.

### Layout — koncepcija

Vienas siauras, centruotas takas (`max-width: 46rem`), be šoninių kolonų, be tinklelio linijų. Erdvė tarp
sekcijų — vienas iš trijų fiksuotų tarpų (32/96/192px), niekada tarpinė reikšmė. Sekcijas skiria ne šešėlis
ir ne kortelės riba, o **3px horizontali juosta** per visą turinio plotį. Puslapis atrodo kaip atversta,
ilga knygos skiltis, ne kaip UI ekranas — nėra jokios "kortelės ant fono" metaforos.

```
DESKTOP (≥1024px)                          MOBILE (360–767px)
┌──────────────────────────────┐           ┌──────────────────┐
│ Kabinetas         Turi bylą? │           │ Kabinetas         │
│ ─ ─ ─ suaugusiems nuo 18 ─ ─ ─│           │ suaugusiems 18+   │
│                               │           │───────────────────│
│      Matomumas: nulis,       │           │  Matomumas:       │
│      kol jo nenustatai pats. │           │  nulis, kol jo    │
│      (lede, 1 eilutė)        │           │  nenustatai pats. │
│                               │           │                   │
│            0 0                │           │       0 0         │
│      (reelinis skaičius)      │           │  (mažesnis dydis) │
│  tiek mato tavo bylą be leid.│           │  tiek mato be leid.│
│═══════════ 3px juosta ═══════│           │══ 3px juosta ═════│
│  Neviešumas nėra pažadas...   │           │  (ta pati tvarka, │
│═══════════════════════════════│          │  viena kolona,    │
│  Prašymas (sakinys+laukai)   │           │  laukai po vienu  │
│═══════════════════════════════│          │  kitu, be dviejų  │
│  Kaina                        │           │  stulpelių niekur)│
│═══════════════════════════════│          └───────────────────┘
│  Kas vyksta toliau            │
│═══════════════════════════════│
│  Peržiūra                     │
│═══════════════════════════════│
│  Kiek tai užima                │
│═══════════════════════════════│
│  Aktyvumas                     │
│═══════════════════════════════│
│  Jei dar dvejoji (5× details) │
│═══════════════════════════════│
│  Grįžti prie prašymo (R)      │
│═══════════════════════════════│
│  Poraštė / teisinė            │
└──────────────────────────────┘
  (Cookie juosta — plokščia, per visą pločio apačią, iškyla iškart, ne pavėluotai)
```

Lygiavimas: viskas į kairę teksto viduje (natūralu skaitymui), bet visas blokas centruotas lange. Jokio
dešinės kolonos, jokio split layout. `Figure_value` centruotas horizontaliai kaip vienintelis puslapio vaizdas.

### Principai (3)

1. **Vienas skaičius, viena reikšmė.** Vizualas puslapyje tik vienas — stambus "00", kuris pats yra
   pozicionavimo teiginys (numatytasis matomumas = nulis). Jokių papildomų iliustracijų, ikonų ar nuotraukų.
2. **Riba vietoj šešėlio.** Erdvę struktūrina ne gylis (šešėliai, sluoksniai), o linija — 3px juosta. Puslapis
   plokščias, bet nesumaišomas su minimalizmo klišėmis, nes juosta yra sunki, ne plaukinė.
3. **Forma kaip sakinys, ne kaip anketa.** Vienas grafinis-gramatinis vienetas: laukai yra žodžiai sakinyje,
   ne stulpelis su etiketėmis šalia langelių.

### Kur išleidžiama drąsa

Vienas sakinys su septyniais įterptais laukais, kuris privalo skaitytis natūraliai lietuviškai net užpildytas —
tai vienintelė vieta, kur rizikuojama grynai kalbine/gramatine prasme, o visa kita puslapyje yra tyli.

---

## Žingsnis 2 — savikritika prieš kodą

**Klausimas: „jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?"**

Pradinė kryptis (žr. `config/diferenciacijos-matrica.md` DALIS 5, lg7 įrašas) buvo **TAIP** — bet kuris
dizaineris, gavęs "uždaras kabinetas, riešutmedis, siaura juosta", pirmiausia pasiūlytų Playfair Display,
auksinį akcentą, plaukinius skirtukus. Tai jau pataisyta matricos lygmenyje (Playfair → Gloock, auksas → patina,
plaukiniai → 3px juostos). Aš tikrinu, ar toliau, statybos lygmeny, vėl nenuslystu į tą patį šabloną:

- **Ar hero vėl tampa "centruota antraštė + mygtukas" (draudimas p. 22–25)?** Taisiau: hero yra H1 + reelinis
  skaičius, mygtuko hero'e **nėra** — CTA pasiekiamas tik per formos sakinį žemiau, ne per hero mygtuką, kuris
  tik nuslenka (draudimas p. 67). Skaičius yra turinys, ne dekoras.
- **Ar `Figure_value` netampa "gyvo taško" pulsavimu (draudimas p. 40, 42)?** Ne — jis suformuojamas **vieną
  kartą** užkrovus ir po to sustoja, nepulsuoja, nėra "vienintelis įrodymas": kiekybinis įrodymas (Q/"Aktyvumas")
  yra atskira sekcija su atskiru skaičiumi ir apatine riba.
- **Ar tonas „santūrus, mažakalbis" nenuslysta į šaltą korporatyvinį tekstą?** Perrašiau pirmus juodraščio
  sakinius, kurie buvo per aiškinantys (“Mes suprantame, kad privatumas svarbus...”) į trumpus, baigtus
  sakinius be įžangų. Pridėta taisyklė sau: nė viena pastraipa neviršija 3 sakinių.
- **Ar “uždarumas” netampa pozicionavimu per atranką/eliminavimą (draudimas p. 54)?** Patikrinau kiekvieną
  sekciją — niekur nesakoma “ne visiems”, “atrinkta”, “ribota bendruomenė”. Uždarumas kalbamas tik kaip
  **matomumo valdymas**, niekada kaip narystės atranka.

Pakeista prieš rašant kodą: pašalinta pradinė mintis daryti mažą prekės ženklo monogramą (kvadratas su
dviem raidėmis) — tai tiksliai draudžiamas motyvas (p. 34). Vietoje jo — grynas teksto logotipas.

**Antras atsakymas: NE.** Kitas dizaineris, gavęs tą patį briefą po šio pataisymo, greičiausiai vis tiek
padarytų gražų tamsų "premium" puslapį su švytinčiu CTA mygtuku viduryje ekrano — ne sakinį-formą su reeliniu
skaičiumi kaip vieninteliu vizualu.

---

## Žingsnis 3 — Turinys

### Prekės ženklas
**Kabinetas**

### Antraštė / nav
- Logotipas (tekstas): „Kabinetas"
- Amžiaus/tapatybės eilutė (F1), po logotipu, mažu šriftu: „Suaugusiems nuo 18 metų."
- Grįžtančio lankytojo nuoroda (F2), dešinėje, žemo prioriteto: „Turi bylą? Įeiti." → veda prie sekcijos
  „Kas vyksta toliau", kur paaiškinta, kaip įeinama be pakartotinio prašymo.

### H1 (F3 — pozicionavimo teiginys)
„Matomumas: nulis, kol jo nenustatai pats."

### Lede
„Kabinete niekas nemato tavo bylos, kol pats nepasirenki, kam ji rodoma."

### Figure (P — stambus skaičius, vienintelis vizualas)
- Reikšmė: **„00"**
- Poraštė po skaičiumi: „tiek lankytojų mato tavo bylą, kol pats jos neatveri"

### K — Neviešumas ir kontrolė (F9)
**h2:** „Neviešumas nėra pažadas — tai nustatymas."

„Byla lieka nematoma, kol pats nepažymi, ką rodyti: kreipinį, sritį ar patį buvimą kabinete. Peržiūrai
reikalingas minimumas matomas tik peržiūrą atliekantiems, niekam kitam.
Ištrynimas — vienas veiksmas, be paaiškinimų mums.
Daugiau apie tai nekalbame."

### FORM — Prašymas (F10, CTA modelis: įrašomos eilutės sakinyje)
**h2:** „Prašymas"

Sakinys su įterptais laukais (viena logine seka, viena forma, be žingsnių):

„Čia mane vadins **[kreipinys]**, man **[amžius]**, esu iš **[sritis]**; susisiekti — adresu **[susisiekimo adresas]**,
o įeiti — žodžiu **[įėjimo žodis]**; pažymėdamas žemiau įsipareigoju, kad esu pilnametis ir laikausi kabineto
taisyklių **[varnelė]**."

- Mygtukas: „Įteikti prašymą"
- Sėkmės būsena (tas pats veiksmo pavadinimas): „Prašymas įteiktas." + „Peržiūra prasideda dabar. Toliau
  viską rasi susisiekimo adresu, kurį įrašei."
- Klaidos (tekstu, ne tik spalva):
  - kreipinys tuščias/per trumpas: „Parašyk, kaip tave čia vadins — bent du ženklus."
  - amžius nepasirinktas: „Pasirink amžiaus rėžį."
  - sritis tuščia: „Įrašyk sritį, iš kurios esi."
  - susisiekimo adresas neteisingas: „Šis adresas neatrodo teisingas — patikrink formatą."
  - įėjimo žodis per trumpas: „Įėjimo žodis turi būti bent 8 ženklų."
  - varnelė nepažymėta: „Be šio pažymėjimo prašymo priimti negalime."

### € — Kaina (F8)
**h2:** „Kaina"

„Kabinetas veikia be įmokos. Jei kada nors atsirastų mokamas sluoksnis, apie tai būtų parašyta čia, iš anksto —
ne po to, kai jau būtum viduje."

### M — Kas vyksta toliau (F6, taip pat F2 paaiškinimas)
**h2 (id sąsajai iš nav):** „Kas vyksta toliau"

- „Prašymas patenka į peržiūrą — paprastai per parą."
- „Priėmus, byla tampa matoma tik tose srityse, kurias pats pasirenki."
- „Sutarimui įvykus, prasideda pašnekesys — iki tol niekas viešai nerodoma."
- „Jei bylą jau turi, prisijungimo nuoroda atkeliauja tuo pačiu susisiekimo adresu — antro prašymo pildyti
  nereikia."

### A — Peržiūra (F5, atskiras mechanizmas nuo Q)
**h2:** „Peržiūra"

„Kiekviena byla, prieš pasirodydama kabinete, pereina rankinę peržiūrą. Tikriname, ar kreipinys ir sritis
atitinka tai, kas parašyta, ir ar tai ne pakartotina byla."

### Į — Kiek tai užima (F7)
**h2:** „Kiek tai užima"

„Prašymui — penkios eilutės ir apie dvi minutes. Daugiau nieko neprašome, kol nesutarta kitaip."

### Q — Aktyvumas (F4, negali sugriūti, atskiras nuo A)
**h2:** „Aktyvumas"

„Praėjusią savaitę peržiūrą praėjo bent 80 bylų — mažiau nebūna, nepaisant sezono."

### D — Jei dar dvejoji (F16, 5 klausimai, `<details>`)
**h2:** „Jei dar dvejoji"

1. **K:** „Kas mato, kad esu čia užsiregistravęs?"
   **A:** „Niekas, kol pats to nepažymi. Bylos numatytoji būsena — nematoma."
2. **K:** „Ar galiu bet kada pasitraukti?"
   **A:** „Taip, vienu veiksmu — be laiškų ir be klausimų."
3. **K:** „Kas atsitinka su mano duomenimis, jei pasitraukiu?"
   **A:** „Byla ištrinama, o susisiekimo adresas pašalinamas iš aktyvaus sąrašo."
4. **K:** „Ar kas nors gali mane atpažinti iš aprašymo?"
   **A:** „Sritį ir kreipinį renkiesi pats — konkretaus miesto ar tikro vardo nereikalaujame."
5. **K:** „Ar vėliau atsiras mokestis, apie kurį dabar nežinau?"
   **A:** „Ne netikėtai. Jei kas nors keistųsi, tai būtų parašyta čia, iš anksto."

### R — Pakartotinis priėjimas (F15)
„Jei nutolai nuo prašymo, jis vis dar čia." + nuoroda „Grįžti prie prašymo" → `#prasymas`

### L — Teisinė poraštė (F11)
„Kabinetas skirtas tik pilnamečiams. Įteikdamas prašymą patvirtini, kad tau ne mažiau kaip 18 metų."
Nuorodos: „Taisyklės" · „Privatumo politika"
„© 2026 Kabinetas."

### C — Slapukai (F14)
„Ši svetainė naudoja tik būtinuosius slapukus veikimui užtikrinti. Daugiau — privatumo politikoje."
Mygtukai: „Sutinku" / „Tik būtinieji"

### `<title>` ir meta description
- `<title>`: „Kabinetas — tu sprendi, kas tave mato" (36 simb.)
- `meta description`: „Suaugusiems skirtas kabinetas, kuriame matomumą nustatai pats. Be įmokos. Prašymas —
  vienas sakinys, be žingsnių ir be pertekliaus." (129 simb.)

---

## Žingsnis 5 — savikritika po kodo

Peržiūrėta realioje naršyklėje (Chromium per Playwright, `file://`) 360 / 768 / 1024 / 1440 pločiu.

### Pašalintas perteklinis elementas

Pirminiame kode kiekvienas įrašomas laukas sakinyje turėjo **matomą** mažą etiketę po savimi
(„kreipinys", „amžius", „sritis", „susisiekimo adresas", „įėjimo žodis"). Peržiūrėjus 1440px pločiu
paaiškėjo, kad tai grynas pasikartojimas — patį sakinį jau sudaro žodžiai, kurie pasako, ko klausiama
(„vadins ___", „man ___", „esu iš ___", „adresu ___", „žodžiu ___"). Matoma etiketė po kiekvienu lauku
nieko naujo neprideda, tik apsunkina sakinio skaitomumą smulkiu papildomu tekstu po kiekvienu žodžiu —
o šis puslapis visą savo drąsą išleidžia būtent į tai, kad forma skaitytųsi kaip vienas natūralus sakinys
(žr. „Kur išleidžiama drąsa" žingsnyje 1). **Pašalinta:** etiketės liko DOM'e (kiekvienas laukas tebeturi
tikrą `<label for=...>`, susietą su savo `id`), bet vizualiai paslėptos (`sr-only` technika — `clip`,
`1px×1px`, be `display:none`), todėl ekrano skaitytuvai jas toliau mato, o žmogus regi tik švarų sakinį.
Išimtis: varnelės etiketė („.") liko matoma, nes ji nėra dublis — tai sakinio taškas.

### Kitos pataisos, rastos peržiūros metu

1. **Kontrastas.** Patina žalia (`#5F8C72`) ant riešutmedžio fono (`#2A211B`) duoda ~4.12:1 — žemiau
   reikalaujamo 4.5:1 įprasto dydžio tekstui. Tai buvo naudota CTA mygtuko tekstui, klaidų pranešimams ir
   nuorodoms. **Pataisyta:** CTA mygtukas dabar `--bone` fonas + `--ink` tekstas (12.75:1); klaidų tekstas
   `--bone` (12.75:1); nuorodų numatytoji spalva `--bone-dim` (6.65:1), `:hover`/`:focus-visible` — `--bone`.
   `--bone-faint` skaidrumas pakeltas iš `.42` į `.55` (buvo 3.44:1, dabar ~4.85:1). Patina lieka vienintelis
   akcentas ten, kur kontrasto reikalavimas jai netaikomas arba ji jį atitinka: stambus skaičius (didelis
   tekstas, 3:1 pakanka, be to pažymėtas `aria-hidden`), `:focus-visible` žiedas ir laukų ribos (ne-teksto
   indikatoriai, 3:1), varnelės `accent-color`. Tai pakeitė ir spalvų lentelės aprašymą žingsnyje 1 (CTA
   nebe patina fonas) — žr. `assets/study.css` komentarą prie `--patina`.
2. **Reelio animacijos klaida.** Pirminis `@keyframes` naudojo `translateY(-900%)`, manant, kad procentas
   skaičiuojamas nuo vieno skaitmens aukščio (1em). Iš tikrųjų CSS `transform` procentai skaičiuojami nuo
   **paties elemento** dydžio (čia — 10 skaitmenų juostos, 10em), todėl skaičius nuslinkdavo toli už
   matomos srities ir „00" apskritai nesimatė. Pataisyta į `translateY(-9em)` (santykinis vienetas nuo
   šrifto dydžio, ne nuo konteinerio) — patikrinta Playwright'u, kad galutinė pozicija tiksliai rodo „00",
   tiek su animacija, tiek su `prefers-reduced-motion: reduce`.
3. **„Sakinys pirmame ekrane" (ašis 9).** Pradinis 96/32/32px tarpų derinys tarp herojaus, K ir FORM
   sekcijų reiškė, kad „Prašymas" prasidėdavo apie 1090px gylyje — už 900px lango ribų. Kadangi ašis 9
   tiesiogiai reikalauja sakinį pirmame ekrane, o bendra taisyklė (Dalis 2, p. 1) leidžia alternatyvą „jos
   pradžia", suspaudžiau tarpus **tik** kritiniame take (Nav → Mark → Privacy → Form) iki 0, palikdama
   pilną 96/192px ritmą visoms tolesnėms sekcijoms (Kaina ir toliau) — ten, kur „daug oro" niekam
   nekainuoja. Rezultatas: „Prašymas" antraštė ir sakinio pradžia dabar tiksliai ties 900px riba. Tai
   sąmoningas kompromisas tarp dviejų reikalavimų (ašis 5 „tik 32/96/192" ir ašis 9 „be scroll") — 0 nėra
   ketvirta reikšmė, o tų trijų nebuvimas ten, kur to reikalauja funkcija.
4. **F17 („sąžiningas kodėl dabar").** Ašies 8 sekoje raidė **N** lg7 eilutei nepriskirta — sekoje jos
   nėra. Kad F17 vis tiek būtų įvykdyta (privaloma visiems 10, žr. sinteze p. 65–66), ji sujungta su Q
   sekcija („Aktyvumas"): pridėtas sakinys „Peržiūros vyksta kas savaitę, ne pagal akciją ar limitą" — tikras,
   pasikartojantis faktas, be jokios skubos ar dirbtinio trūkumo, atitinkantis kampą B (šiam lankytojui
   skuba veiktų priešingai, žr. `analize/sinteze.md` Dalis 3).
5. **„Privatumo politika" poraštėje vs. „neviešumas" turinyje.** Terminų žemėlapio sąvoka 15 priskiria man
   žodį „neviešumas", o „privatumas" — `lg8`. Poraštės teisinės nuorodos pavadinimas „Privatumo politika"
   paliktas kaip yra, nes tai standartinis teisinio dokumento pavadinimas, privalomas visiems 10 variantams
   (F11), o ne pozicionavimo/funkcijos terminas — visame **turinyje** naudojamas tik „neviešumas".

### Patikrinta (Playwright + Chromium, `file://`, be tinklo)

- 360 / 768 / 1024 / 1440px — `scrollWidth === clientWidth` visuose keturiuose (be horizontalaus scroll).
- Konsolė švari visose plotmėse (0 `console`/`pageerror` pranešimų).
- Forma: tuščias pateikimas → visos 6 klaidos matomos tekstu, fokusas ant pirmo neteisingo lauko; teisingi
  duomenys → forma pasislepia, sėkmės būsena rodoma ir gauna fokusą.
- Slapukų juosta: rodoma pirmą kartą, išlieka po `reload()`, dingsta pasirinkus, pasirinkimas išlieka po
  antro `reload()` (`localStorage`).
- `prefers-reduced-motion: reduce` — reelio animacija išjungta, skaičius iš karto rodo galutinę „00" būseną.
- Klaviatūros `Tab` tvarka: skip-link → nav (2) → 6 formos laukai ta pačia tvarka kaip sakinyje → mygtukas
  → 5 DUK → grįžimo nuoroda → 2 poraštės nuorodos → 2 slapukų mygtukai — nuosekliai, be spąstų.
- Kontrastas paskaičiuotas rankiniu WCAG būdu ir patikrintas per realias `getComputedStyle` reikšmes:
  žemiausias rezultatas po pataisymo ~4.85:1 (`--bone-faint` etiketėms/poraštei), likusieji 6.6–12.75:1.
- Failų dydis: `assets/study.css` ~12.2KB, `index.html` ~11.2KB, `assets/app.js` ~2.8KB — gerokai po
  60KB/1.5MB biudžetų (šriftai kraunami iš Google Fonts CDN, ne lokaliai).
