# VARIANT.md — `lg4-silas`

**Prekės ženklas:** Šilas
**Matricos stulpelis:** # 4 (`config/diferenciacijos-matrica.md`)
**Pozicionavimo kampas:** B — kontrolė ir diskretiškumas
**Terminija:** `config/terminu-zemelapis.md`, stulpelis 4

---

## Žingsnis 1 — Planas prieš kodą

### Spalvos (4–6 įvardintų hex reikšmių su vaidmenimis)

| Kintamasis | Hex | Vardas | Vaidmuo |
|---|---|---|---|
| `--c-popierius` | `#F1F4EA` | popierius | pagrindinis skaitomos kolonos paviršius, šviesus tekstas ant jo neinamas — tik tamsus |
| `--c-salavijas` | `#C9D3C0` | šalavijas | antrinis paviršius (dienos fono sluoksnis, plytelės, ribos fonas) |
| `--c-samana` | `#22301F` | samana | pagrindinis teksto tonas dienos metu; vakaro fono sluoksnio pagrindas; CTA mygtuko fonas |
| `--c-uoga` | `#7A3352` | uogos rašalas | **vienintelis** ryškesnis akcentas — tik pabraukimams, žymoms, formos lauko fokusui. Niekada CTA fonui |
| `--c-riba` | `#9DAE92` | riba | linijos, skirtukai, laukų kontūrai |

CTA mygtuko fonas sąmoningai — samana (tamsi žalia), tekstas ant jo — popierius. Taip išvengiama
„sodrus rausvas / auksinis mygtukas“ modelio, kurį atmetė fazės 2 savikritika (matrica, dalis 5, lg4).

### Tipografija

- **Antraštės:** `Fraunces`, `opsz` ašis, svoriai 500 (h1/h2) ir 600 (akcentuota antraštė formoje).
  Serifas — didesnis `line-height` (1.3 antraštėms).
- **Tekstas:** `Karla`, svoriai 400 (pastraipos) ir 700 (etiketės, mygtukų tekstas, akcentuoti žodžiai).
- Tik du svoriai kiekvienai šeimai (ne keturi — draudžiamas „perteklinio šrifto svorio modelis“).
- Tipo skalė: santykis **1.414**, bazė 17px. Tarpai dideli ir retėjantys žemyn (40 / 80 / 128px),
  ritmas sąmoningai lėtėja slenkant puslapiu žemyn — atkartoja turinio ritmą (diena → vakaras).
- Pastraipos ribojamos `u-measure` klase (~34ch), kad eilutė netaptų per ilga plačiame ekrane.

### Layout — koncepcija proza

Visas puslapis yra **viena plati kolona** (max 62rem), centruota horizontaliai, be jokių šoninių
stulpelių ar sticky elementų. Kolona pati visada guli ant stabilaus `--c-popierius` paviršiaus su
tamsiu `--c-samana` tekstu — kontrastas fiksuotas ir nepriklauso nuo scroll pozicijos (žr. judesio
skyrių žemiau — tai sąmoningas sprendimas dėl prieinamumo).

Už kolonos, per visą langą, guli **fiksuotas fono sluoksnis** (`position: fixed`, `z-index: -1`),
kuris simuliuoja lauko vaizdą (be jokios atsiųstos nuotraukos — sluoksniuoti CSS gradientai + inline
SVG gūbrio/gyvatvorės silueto linija + grūdėta triukšmo tekstūra per `feTurbulence` SVG filtrą).
Šis sluoksnis per scroll pereina iš šviesaus dienos tono į tamsų vakaro toną — tai vienintelis
puslapio judesys (ašis 11).

Herojus (P) yra pirmo ekrano aukščio sekcija, kurioje šis fono sluoksnis matomas pilnai (full-bleed),
o `h1` ir paantraštė guli **apačioje**, ant tamsesnės apatinės gradiento dalies (užtikrintas kontrastas
tekstui — šviesus tekstas ant tamsėjančios apatinės juostos, ne ant viso dangaus).

### ASCII wireframe — desktop (≥1024px)

```
┌──────────────────────────────────────────────────────────┐
│ Šilas · 18+ ratas                    Jau esi rate? Įeiti. │ ← H (nesticky)
├──────────────────────────────────────────────────────────┤
│                                                            │
│              [ fiksuotas lauko fonas, full-bleed ]         │
│                                                            │
│                                                            │
│           Šilas yra ratas, kuriame tu nusprendi,           │ ← P (h1 apačioje)
│                  kiek apie tave žino kiti.                 │
│         Nė vienas svečias nemato daugiau, nei pats...      │
├──────────────────────────────────────────────────────────┤
│                    ┌──────────────────┐                    │
│                    │  u-measure tekstas│                    │ ← K, M, N, A, Q, Į
│                    │  viena kolona     │                    │   (kiekvienas — h2 +
│                    │  62rem max        │                    │    1-2 pastraipos)
│                    └──────────────────┘                    │
├──────────────────────────────────────────────────────────┤
│              D — 5 klausimai (details/summary)              │
├──────────────────────────────────────────────────────────┤
│                    € — pinigų klausimas                     │
├──────────────────────────────────────────────────────────┤
│              FORM — viena forma, be žingsnių                │
├──────────────────────────────────────────────────────────┤
│                    L — teisinė poraštė                       │
│                    C — slapukų juosta (inline, ne plūduriuojanti)│
└──────────────────────────────────────────────────────────┘
   [ Vieta rate laukia.              Įstoti į ratą  ]  ← nuolatinė apatinė juosta (fixed)
```

### ASCII wireframe — mobile (360px)

```
┌──────────────────┐
│ Š · 18+  [Įeiti] │ ← H, sutrumpintas
├──────────────────┤
│ [lauko fonas]     │
│                   │
│  Šilas yra ratas, │ ← P
│  kuriame tu...    │
├──────────────────┤
│ K                 │
│ M                 │
│ N                 │
│ A                 │
│ Q                 │
│ Į                 │ (viena kolona, pilnas plotis
├──────────────────┤  minus 16-24px paraštė)
│ D (sutraukta)     │
├──────────────────┤
│ €                 │
├──────────────────┤
│ FORM              │
├──────────────────┤
│ L / C             │
└──────────────────┘
[ Vieta laukia. [Įstoti] ] ← fixed apačioje, per visą plotį
```

### Principai (3)

1. **Viena kolona, jokių šoninių trukdžių.** Dėmesys visada vienoje vietoje — kaip skaitant
   dienoraštį, ne naršant paneliais.
2. **Vienintelis ryškesnis akcentas (uogos rašalas) niekada netampa CTA fonu.** Jis lieka
   pabraukimuose ir žymose — spalva niekada nešaukia, ji pažymi.
3. **Fonas juda taip lėtai, kad lankytojas jį pastebi tik atsigręžęs atgal.** Judesys papildo
   skaitymą, o ne reikalauja dėmesio sau.

### Kur išleidžiama drąsa

Vienas elementas yra įsimintinas — lėtas fiksuoto lauko fono perėjimas iš dienos į vakarą slenkant
žemyn per visą puslapį; visa kita (tipografija, spalvos, sekcijų forma) lieka tylu ir disciplinuota.

---

## Žingsnis 2 — Savikritika prieš kodą

**Klausimas:** jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?

**Pirmas atsakymas: TAIP, dalinai.** „Organinis žolinis wellness puslapis“ (šalavijas, Fraunces,
full-bleed gamtos nuotrauka, dideli tarpai, auksinis akcentas) yra 2023–2025 m. numatytoji kryptis,
kurią sugeneruotų bet kas — tai jau užfiksuota `config/diferenciacijos-matrica.md` dalyje 5 (fazės 2
savikritika lg4 eilutei), ir aš tą sprendimą paveldžiu bei laikausi jo:

- **(a) Auksinis akcentas jau pašalintas fazėje 2** — pakeistas tamsia uogų spalva `#7A3352`, naudojama
  tik pabraukimuose/žymose, o CTA fonas — tamsi samana, ne sodrus akcentas.
- **(b) Pridėtas CTA modelis „nuolatinė apatinė juosta“**, nes vienos ilgos kolonos kryptis kitaip
  pažeistų taisyklę „veiksmas be scroll“.
- **(c) Turinio ašis perkelta nuo „natūralumo“ prie kampo B** — pirmoji sekcija po herojaus yra
  privatumas (K), ne nuotaika ar estetika.

**Ką pridedu aš, statybos etape (naujas rizikos sluoksnis, kurio matrica dar nesprendė):**

- **(d) Rizika: „full-bleed nuotrauka + tekstas apačioje“ pati savaime yra kelionių/wellness tinklaraščio
  numatytoji hero forma**, net pašalinus auksą. Sprendimas: fonas nėra vien gradiento dėmė — tai
  sluoksniuota scena (dangaus gradientas + inline SVG gyvatvorės/lauko silueto linija su nelygiu,
  „ranka pieštu“ kontūru + grūdėta CSS/SVG triukšmo tekstūra), ir **būtent šis sluoksnis** yra tas
  pats fiksuotas elementas, kuris juda scroll'inant per visą puslapį — hero neturi atskiro, vienkartinio
  vaizdo, kuris daugiau niekur nesikartotų.
- **(e) Rizika: nuolatinis kontrasto pažeidimas, jei tekstas ir fonas keistųsi kartu.** Jei ir teksto,
  ir fono spalva interpoliuotų vienu metu per scroll, kontrastas neišvengiamai kris žemiau 4.5:1 kažkurioje
  tarpinėje pozicijoje. **Sprendimas:** skaitomas turinys visada guli ant stabilaus `--c-popierius`
  paviršiaus su fiksuotu `--c-samana` tekstu; **juda tik fonas UŽ kolonos** (fiksuotas sluoksnis, kurio
  matoma dalis yra tik prie kolonos kraštų plačiame ekrane ir hero sekcijoje). Taip judesio reikalavimas
  (ašis 11) įvykdytas nepakenkiant prieinamumui — tai dokumentuojamas, sąmoningas pasirinkimas, ne
  matricos apėjimas: fonas vis tiek keičiasi iš dienos į vakarą per visą scroll ilgį, kaip nurodyta.
- **(f) Failų konvencija:** matricos ašis 14 priskiria `assets/garden.css` (ne bendrą promptų šabloną
  `assets/style.css`), nes unikalus failo vardas yra pati diferenciacijos priemonė — kiti 9 variantai
  turi savo unikalius failų vardus (žr. `logs/build-03.done.md` precedentą tam pačiam sprendimui
  lg3 variante). Laikausi ašies 14, ne bendro `promptai/03-statyba.md` šablono teksto, nes užduotis
  pati nurodė „PILNAS specifikavimas — matrica, stulpelis #4, perskaityk visas 14 ašių pats“.

**Antras atsakymas po pataisymų: NE** — kitas dizaineris, gavęs tik pirminę frazę „sodo dienoraštis“,
padarytų gražų botanikos tinklaraštį su nuotrauka viršuje ir daugiau nieko judančio; jis nepasiektų
nei sluoksniuotos scenos be tikros nuotraukos, nei fiksuoto teksto/fono atskyrimo dėl kontrasto, nei
privatumo kaip pirmo argumento po herojaus.

---

## Žingsnis 3 — Turinys

### Antraštinė juosta (H)

- Ženklo žyma: **Šilas** + tekstinė žyma „18+ ratas“
- Grįžtančio svečio nuoroda (žemo prioriteto): **„Jau esi rate? Įeiti.“** → nukreipia į paaiškinimą
  poraštėje (žr. C/L žemiau), nes atskiro prisijungimo puslapio šioje statybos fazėje nėra.

### Herojus / pozicionavimas (P)

- **H1:** „Šilas yra ratas, kuriame tu nusprendi, kiek apie tave žino kiti.“
- **Paantraštė:** „Nė vienas svečias nemato daugiau, nei pats atrenki parodyti — o pasitraukti gali
  bet kada, be paaiškinimų.“

### Privatumas — „Užuovėja“ (K)

- **H2:** „Užuovėja, ne vitrina.“
- P1: „Tavo vardas čia niekur neatsiranda, nebent tu pats jį parašai. Kraštas rodomas apytiksliai,
  ne tiksliu adresu. Šneka prasideda tik tada, kai įvyksta sąskambis — ne anksčiau.“
- P2: „Pasitraukti galima bet kada, ir tai užtrunka mažiau nei užsirašyti — vienas paspaudimas
  laiške, jokių klausimų, jokio laukimo.“
- Sąrašas „Matoma / nematoma“:
  - Matoma kitiems (jei pats parašai): vardas, karta, apytikslis kraštas.
  - Nematoma niekam: laiškų adresas, slaptas žodis, tikslus adresas.

### Mechanika po registracijos (M)

- **H2:** „Kas nutinka, kai įstoji.“
- Punktai:
  1. „Iš karto atsiranda tavo vieta rate — tuščia, kol jos pats nepapildai.“
  2. „Kai tavo vieta sutampa su kito svečio paieška, gimsta sąskambis — apie jį pranešame abiem
     iš karto, laiškų adresu.“
  3. „Sąskambiui atsiradus, prasideda šneka — trečias jos niekada nemato.“
  4. „Jei sąskambio dar nėra, vieta tiesiog lieka rate, kol pati nuspręsi ją pakeisti ar išeiti.“

### Kodėl dabar (N)

- **H2:** „Kodėl verta užsukti šiandien, o ne kada nors.“
- P: „Rato gyvenimas juda savo pačiu ritmu — kai diena aprimsta ir darbai baigti, sąskambių
  atsiranda daugiau nei vidudienį, o savaitgaliais šneka gyvesnė nei savaitės viduryje. Mes to
  nepaskubiname ir niekur neįrašome laikmačio — tai tiesiog tikras rato ritmas, kurį matai tokį,
  koks jis yra.“

### Autentiškumas / ravėjimas (A)

- **H2:** „Ravėjimas prieš kiekvieną naują vietą.“
- P: „Kiekviena nauja vieta rate pereina rankinį ravėjimą, prieš tai, kai ją pamato kiti svečiai —
  ravėdami žvelgiame, ar laiškų adresas tikras ir ar aprašymas neprimena kito, jau esančio. Tai
  atskiras darbas nuo skaičių žemiau: vieni rodo, kiek rate juda, kiti — kad tai, kas juda, yra
  tikra.“

### Kiekybinis aktyvumas (Q)

- **H2:** „Kiek rate juda.“
- P1: „Per pastarąsias keturias savaites rate atsirado ne mažiau kaip 40 naujų vietų kiekvieną
  savaitę — tai apatinė riba, ne gražiai suapvalintas vidurkis.“
- P2: „Vidutiniškai kas trečia nauja vieta sulaukia sąskambio per pirmą savaitę.“

### Įsipareigojimo dydis (Į)

- **H2:** „Kiek iš tavęs prašome.“
- Mini lentelė / sąrašas:
  - Žingsnių: **1**
  - Laukų: **5**
  - Trukmė: **~3 minutės**
  - Prašomi duomenys: laiškų adresas, slaptas žodis, karta, kraštas, ko ieškai.
- P: „Prašome tik to, ko reikia, kad vieta rate atsirastų — nieko daugiau, ir viską matai iš karto,
  ne žingsnis po žingsnio.“

### Dvejojančiam (D) — 5 klausimai

1. **„Ar kas nors mato mano tikrą vardą?“** — „Ne, nebent pats jį parašai vardo lauke. Rate gali
   likti visiškai be tikro vardo.“
2. **„Ar galiu išeiti, jei persigalvosiu?“** — „Gali, bet kada, vienu paspaudimu laiške — niekas
   nesiūlys likti ir nereikės nieko paaiškinti.“
3. **„Ar reikės mokėti?“** — „Ne. Įstojimas ir buvimas rate nieko nekainuoja — jei kada nors tai
   pasikeis, parašysime tai čia, iš anksto, ne po fakto.“
4. **„Kas rūpinasi, kad kita vieta rate būtų tikra?“** — „Kiekvieną naują vietą ravime rankomis,
   prieš ją pamatydami kitiems — tai ir vadiname ravėjimu.“
5. **„Ar galiu pakeisti, ką rodau, po to, kai jau įstojau?“** — „Gali bet kada — vieta rate nėra
   užšaldyta pirmą dieną, keiti ją taip dažnai, kaip nori.“

### Pinigų klausimas (€)

- **H2:** „Apie pinigus — tiesiai.“
- P: „Šilas nieko nekainuoja. Nėra paslėpto mokamo lygio, nėra kortelės, kurios prašytume be
  paaiškinimo. Jei kada nors tai pasikeis, apie tai parašysime čia, šiame puslapyje, prieš
  pasikeičiant — ne laiške po to, kai jau esi rate.“

### Forma (FORM)

- **H2:** „Tavo vieta rate prasideda čia.“
- Laukai (šia tvarka, be žingsnių):
  1. **Ko ieškai?** (select, būtinas) — Pokalbio / Draugystės / Kažko daugiau
  2. **Karta** (select, būtinas) — 30–35 / 36–40 / 41–45 / 46 ir daugiau
  3. **Kraštas** (tekstas, būtinas)
  4. **Vardas** (tekstas, nebūtinas) — pagalbinis tekstas: „Nebūtina — gali palikti tuščią.“
  5. **Laiškų adresas** (email, būtinas)
  6. **Slaptas žodis** (password, būtinas, min. 8 ženklai) su rodymo perjungimu (piktograma, ne tekstas)
  7. **Pažadas** (checkbox, būtinas): „Pažadu: man yra bent 18 metų, ir laikysiuosi Šilo taisyklių
     bei privatumo aprašo.“
- **Mygtukas:** „Įstoti į ratą“
- **Klaidų pranešimai (tekstu, ne vien spalva):**
  - „Pasirink, ko ieškai — be to negalime tau parodyti tinkamų vietų.“
  - „Pasirink kartą, kad rastume tau tinkamas vietas.“
  - „Įrašyk kraštą — bent apytikslį.“
  - „Įrašyk laiškų adresą, kad galėtume atsiliepti.“
  - „Laiškų adresas neatrodo tikras — peržvelk, ar nėra klaidos.“
  - „Slaptas žodis turi būti bent 8 ženklų.“
  - „Pažymėk, kad esi pilnametis ir laikysiesi taisyklių, kad galėtume tęsti.“
- **Sėkmės būsena:** „Įstojai į ratą. Pirmoji žinutė jau keliauja tavo laiškų adresu — pasižiūrėk
  į jį per artimiausias kelias minutes ir taip užimsi savo vietą.“

### Teisinė poraštė (L)

- Nuorodos: „Taisyklės“, „Privatumo aprašas“ (abi `href="#"`)
- Pilnametystės eilutė: „Tik pilnamečiams. 18+.“
- Grįžtančiųjų pastaba (susieta su H nuoroda): „Grįžtantiems: prisijungimo nuoroda atkeliauja
  tavo laiškų adresu — atskiro slapto žodžio priminimo nereikia.“
- Copyright: „© 2026 Šilas.“

### Slapukai (C)

- Inline (ne plūduriuojanti) juosta prieš poraštę, matoma iš karto, be uždelsimo:
  „Šis puslapis naudoja tik būtinuosius slapukus — kad forma veiktų ir prisimintų, jog jau matei
  šį pranešimą. Jokių trečiųjų šalių sekimo slapukų čia nenaudojame.“
- Mygtukas: „Supratau“

### Nuolatinė apatinė CTA juosta

- Tekstas: „Vieta rate laukia.“
- Mygtukas: „Įstoti į ratą“ (nukreipia į formą, ta pati veiksmo formuluotė per visą srautą)

---

## Žingsnis 5 — Savikritika po kodo

Peržiūrėta 360px ir 1440px pločiu (statinė CSS/HTML analizė + naršyklės peržiūros įrankiu, žr.
`logs/build-04.done.md`).

**Pašalintas perteklinis elementas:** pirminiame juodraštyje hero sekcijoje buvo papildoma smulki
SVG „rasos lašo“ dekoracija greta paantraštės — grynas dekoras, nesusijęs nei su viena iš 17
privalomų funkcijų ir konkuruojantis dėmesiu su vieninteliu leidžiamu judesiu (fono perėjimu).
Pašalinta iš `index.html` ir `assets/garden.css` prieš atiduodant darbą.

---

## Žingsnis 6 — QA patikra (atskira sesija, po nutrūkimo dėl API limito)

Ankstesnė sesija nutrūko prieš pilną patikrą. Ši sesija patikrino visus priėmimo kriterijus iš
`promptai/03-statyba.md`, matricos eilutę #4 ir terminų stulpelį #4, ir realiame naršyklės teste
(Playwright + Chromium, 360/768/1024/1440px) rado bei ištaisė vieną tikrą defektą:

- **Sekcijų tvarkos pažeidimas:** matrica reikalauja `€ → FORM → L → C` (teisinė poraštė **prieš**
  slapukų juostą). Kode slapukų blokas (`#silasConsent`) buvo DOM'e **prieš** `<footer>`, t. y. tvarka
  buvo `FORM → C → L` — atvirkščiai, nei nurodyta ašyje 8. Ištaisyta: `#silasConsent` perkeltas po
  `</footer>`.
- **Šalutinis defektas, atrastas taisant:** `.silas-consent` neturėjo jokio horizontalaus `margin`,
  todėl esant matomam (pirmo apsilankymo metu) jis rėmėsi tiesiai į naršyklės kraštus, kitaip nei visos
  kitos sekcijos su 1.25rem/2rem paraštėmis. Pridėtas atitinkamas `margin`. Kartu pašalintas
  perteklinis, dubliuotas `+5.5rem` apatinis „vietos palikimas“ virš fiksuotos juostos ant `.silas-footer`
  (kurį jau atlieka `body { padding-bottom: var(--bar-h) }`, sinchronizuojamas JS) — dabar vietos
  rezervavimas nuo fiksuotos apatinės juostos skaičiuojamas vienoje vietoje, ne dviejose.

Po pataisymo realiame naršyklės teste patvirtinta: 0 horizontalaus scroll ties 360/768/1024/1440px,
konsolė švari visose keturiose plotmėse ir po formos pateikimo, forma parodo visas 6 klaidų žinutes
tuščiam pateikimui ir sėkmės būseną (su fokusu ant jos) teisingai užpildytam pateikimui, slaptažodžio
rodymo/slėpimo mygtukas veikia, slapukų juosta rodoma pirmą kartą, dingsta paspaudus ir išlieka
paslėpta po perkrovimo (`localStorage`), `prefers-reduced-motion: reduce` sustabdo vienintelį judesį
(fono perėjimas liko statiškas, `opacity: 0.18`), o klaviatūra pasiekia visus interaktyvius elementus
be spąstų (praleidimo nuoroda → antraštė → 5 FAQ perjungikliai → visi formos laukai → mygtukai).
Visos kitos patikrintos ašys (spalvos, šriftai, hero tipas, CTA modelis, terminija stulpelis #4,
draudžiamų žodžių/spalvų/klasių sąrašai, kontrastas) atitiko be pataisymų.
