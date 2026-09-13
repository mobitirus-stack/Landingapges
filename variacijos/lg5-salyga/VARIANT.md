# VARIANT — lg5-salyga («Sąlyga»)

## 1. Spalvos

| Rolė | Hex | Naudojimas |
|---|---|---|
| Fonas (`--ledger-canvas`) | `#F5F7FA` | puslapio bazinis fonas |
| Tekstas (`--ledger-ink`) | `#102A43` | visas tekstas, ribos ties interaktyviais elementais |
| Akcentas (`--ledger-accent`) | `#00778A` | nuorodos, mygtonai, fokusas, skaičiai |
| Paviršius (`--ledger-surface`) | `#FFFFFF` | kortelės/eilutės paviršius ant fono |
| Riba (`--ledger-rule`) | `#BCCCDC` | lentelės linijos, dekoratyvūs skirtukai |

Tik 5 spalvos — tiek, kiek priskirta matricoje (ašis 2, eilutė 5), nė viena nekeičiama.
**Sprendimas dėl klaidų/sėkmės būsenų:** nepridedu 6-os (raudonos/žalios) spalvos, nes tai
priverstų arba viršyti 5 spalvų limitą, arba priartėti prie draudžiamų atspalvių
(`#dc3b68`, `#4bc98a`). Klaida ir sėkmė žymimos **tekstu ir simboliu** (▲ / ✓ + žodis), o ne
papildoma spalva — tai tiesiogiai sutampa su prieinamumo reikalavimu „klaidos ne tik spalva“ ir
su viso varianto teze (skaitomumas, ne spalva, yra argumentas).

## 2. Tipografija

- **Antraštės:** Source Serif 4, svoris 600. Naudojama TIK antraštėms ir lentelės skilčių
  pavadinimams — niekada ilgam tekstui.
- **Tekstas:** Atkinson Hyperlegible, svoriai 400/700. **Visas** likęs tekstas — pastraipos,
  etiketės, klaidos, poraštė, smulkiausias fine print. **Nė vienas simbolis puslapyje nėra
  mažesnis nei 16px (1rem).**
- **Tipo skalė:** santykis 1.125, bazė 16px → 18 → 20.25 → 22.78 → 25.63 → 28.83 → 32.43 → 36.49px.
  `h1` naudoja `clamp()` tarp ~34px (360px lange) ir ~44px (1440px lange).
- **Vertikalus ritmas:** 6px žingsnis (0.375rem kartotiniai): 6/12/18/24/30/36/48/60/72px.
- **Lentelės eilutės aukštis:** fiksuotas minimumas 44px (`2.75rem`) suglaustoje būsenoje.
- **Eilutės ilgis:** pastraipos ribojamos `max-width: 62ch` (<80 simbolių).
- **Line-height sąmoningas nukrypimas nuo bendros gairės:** bendra 03-statyba.md gairė sako
  „serifui duok daugiau line-height nei sans-serif“ — tai numatyta scenarijui, kai serifas neša
  ilgą tekstą. Šiame variante serifas naudojamas **tik** trumpoms antraštėms, o Atkinson neša
  **visą** skaitomą tekstą. Todėl kūno tekstui skiriu dosnų 1.6 line-height (skaitomumo
  argumentas — pati varianto esmė), o antraštėms — 1.3 (tvarkingas, bet ne išretintas display
  tipas). Tai nekeičia nė vienos matricos ašies reikšmės (šriftai, svoriai, skalė — tokie, kaip
  priskirta); keičiasi tik bendra, niekuo nesurišta gaida, kai ji prieštarauja pačiam varianto
  argumentui.

## 3. Layout

**Koncepcija:** puslapis yra vienas viešas registras. Nėra atskiro „pasakojimo“ prieš duomenis —
h1 ir poantraštė iš karto atveria sunumeruotą sąlygų sąrašą (`<ol>`), kurio kiekvienas punktas
turi tą pačią struktūrą: Nr. → sąlyga → kur parašyta → „Ką tai reiškia“. Paskutinis (5-as) punktas
nesiskiria forma — jis IR YRA forma: prasideda kontaktinio adreso lauku, o paspaudus „Tęsti
pasirašymą“ ta pati eilutė išsiskleidžia likusiems laukams. Tai pats CTA modelis (ašis 9, #5):
„sąlygų kortelė su forma jos viduje“.

Tinklelis: tankus 8 stulpelių CSS grid (ašis 6). Kiekvienos sąlygos eilutė realiai naudoja tą patį
8 stulpelių tinklelį savo viduje: Nr. (1 stulpelis, lygiuojamas į dešinę) → sąlygos tekstas
(stulpeliai 2–6, lygiuojamas į kairę) → nuoroda „kur parašyta“ (stulpelis 7) → mygtukas (stulpelis 8).

ASCII (desktop, ≥1024px):
```
┌─ nav: Sąlyga · 18+ registras ──────────────── Jau turite įrašą? Prisijunkite ─┐
│                                                                              │
│  H1: Kiekviena sąlyga čia parašyta ir sunumeruota — nieko nereikia spėlioti. │
│  poantraštė (62ch) · greita nuoroda „Pradėti pasirašymą (5 punktas)“         │
│                                                                              │
│  Nr.│ Sąlyga tekstas ......................... │ kur parašyta │ [Ką reiškia] │
│  1  │ Trukmė: vienas žingsnis, ~1,5 min.        │ Taisyklių 3.1│ [▾]         │
│  2  │ Duomenys: 4 laukai, be tikro vardo         │ Taisyklių 2.2│ [▾]         │
│  3  │ Kaina dabar: 0 € įėjimas                   │ Taisyklių 4.1│ [▾]         │
│  4  │ Kaina vėliau: mokamo lygio nėra            │ Taisyklių 4.2│ [▾]         │
│  5  │ REGISTRO ĮRAŠO PRADŽIA: [kontaktinis adresas____] [Tęsti pasirašymą]   │
│      (išsiskleidus: identifikatorius, apsaugos derinys, amžiaus grupė,       │
│       gyvenamoji vieta, patvirtinimas ☐, [Pasirašyti])                       │
└──────────────────────────────────────────────────────────────────────────────┘
  Patikrinimas (A) → Kas vyksta po pasirašymo (M) → Duomenų tvarkymas (K) →
  Kiek įrašų registre (Q) → Atsakymai prieš pasirašant, 5 kl. (D) →
  Grįžti prie pasirašymo (R) → Taisyklės, sunumeruotos (L) → Slapukai (C)
```

ASCII (mobile, 360px): viena kolona, viskas po vieną po kitą; kiekvienos ledger eilutės vidinis
tinklelis suskyla į 2 „mini-eilutes“ (Nr.+antraštė viena eilutė, tekstas — kita, nuoroda ir
mygtukas — trečia), bet ta pati elementų tvarka ir tos pačios klasės.

**Lygiavimas:** skaičiai — į dešinę (tabuliariniai skaitmenys, `font-variant-numeric:
tabular-nums`), tekstas — į kairę. Puslapio turinio juosta — kairė riba fiksuota, jokio
centravimo simetrija (tai registras, ne plakatas).

## 4. Principai (3)

1. **Kiekvienas teiginys turi adresą.** Nė viena sąlyga nepasakoma „tiesiog taip“ — prie kiekvienos
   yra nuoroda, kurioje Taisyklių papunktyje ji parašyta pilnai, ir ta nuoroda realiai nuveda ten
   (ne dekoratyvi žymė).
2. **Viena sąveika visame puslapyje.** Eilutė (bet kuri — paaiškinimo ar formos) išsiskleidžia
   žemyn tuo pačiu mechanizmu. Jokių kitų animuotų efektų.
3. **Smulkus šriftas yra pats argumentas, ne rizika.** 16px minimumas ir Atkinson Hyperlegible
   visur reiškia, kad „smulkus šriftas“ šiame puslapyje niekada nereiškia „paslėpta“.

**Kur išleidžiama drąsa:** visas puslapis atsisako bet kokio vizualinio pagražinimo (jokių šešėlių,
jokių iliustracijų, jokio antro akcento) tam, kad vienintelė pastebima detalė būtų pats
skaitomumas — 16px Atkinson Hyperlegible tekstas ten, kur kiti variantai ar konkurentai deda 12px
pilką fine print.

---

## 5. Savikritika prieš kodą

**Klausimas: jei šį briefą duotum kitam dizaineriui, ar jis atsidurtų čia pat?**

Pirmas atsakymas: **taip, iš dalies.** „Korporatyvinis pasitikėjimas / fintech registras“ su šviesiu
fonu, tamsiai mėlynu tekstu ir vienu ramiu akcentu yra gana nuspėjama numatytoji reikšmė
teisinei/finansinei temai. Diferenciacijos matrica tai jau iš dalies pataisė (žr. matricos dalį 5),
bet peržiūrėjęs savo pirmą planą pakeičiau dar tris dalykus prieš rašydamas kodą:

1. **Pakeičiau pirminę idėją** „forma po lentele kaip atskira sekcija“ į **formą kaip PAČIOS
   lentelės paskutinę eilutę** — ne dvi vizualiai atskiras dalis (lentelė + po ja forma), o viena
   nenutrūkstama seka, kur 5-as punktas skiriasi nuo 1–4 tik tuo, kad jo „Ką tai reiškia“ atidaro
   ne paaiškinimą, o laukus. Tai stipriau realizuoja ašies 9 modelį „forma yra paskutinės eilutės“
   nei atskira forma po lentele būtų realizavusi.
2. **Atsisakiau** minties dėti realaus laiko skaičių Q sekcijoje (buvo pagunda parodyti „dabar
   registre yra N narių“) — tai būtų per arti draudžiamo „tikralaikio skaičiaus kaip vienintelio
   įrodymo“ modelio (ir konfliktuotų su F4 reikalavimu „negali sugriūti“). Pakeičiau į praėjusio
   mėnesio intervalą (nuo–iki), atnaujinamą periodiškai, su paaiškinimu, kodėl tai ne gyvas
   skaitiklis — tai sutampa su paties varianto skaidrumo argumentu.
3. **Perrašiau** grąžinimo nuorodą antraštėje — pirminis variantas buvo mygtukas „Prisijungti“
   (per stiprus, konkuruotų su pagrindiniu CTA). Pakeičiau į žemo prioriteto tekstinę nuorodą,
   kaip reikalauja F2, ir susiejau ją su realiu paaiškinimu puslapio apačioje, o ne tuščia `#`.

Antras atsakymas po šių pataisymų: **ne** — kitas dizaineris, gavęs tą patį briefą, tikriausiai
padarytų tvarkingą, bet statišką „sąlygų sąrašą su forma apačioje“, ne vieną pasikartojantį
mechanizmą, kuris paverčia paskutinį punktą registracija.

---

## 6. Turinys

### Antraštė (nav)
- Tapatybė: „Sąlyga“ + „Registras suaugusiems nuo 18 metų“
- Grįžtančio nario nuoroda (žemo prioriteto tekstas): „Jau turite registro įrašą? Prisijunkite.“
  (nuveda į paaiškinimą poraštėje, ne į tuščią mygtuką)

### H1 + poantraštė
„Kiekviena sąlyga čia parašyta ir sunumeruota — nieko nereikia spėlioti.“

„Jei anksčiau kitur mokėjai už tai, ko nebuvo pasakyta iš anksto — čia kiekviena sąlyga surašyta
punktais, kol dar nieko nepasirašei.“

Greita nuoroda (be scroll garantija): „Punktai 1–4 paaiškina sąlygas. Jei jau žinai — pradėk nuo
registro įrašo.“ → mygtukas „Pradėti pasirašymą“ (nuveda į 5 punktą).

### Sąlygų registras (5 sunumeruoti punktai)

1. **Trukmė** — „Pasirašymas užtrunka vieną žingsnį — apytiksliai pusantros minutės.“
   Kur parašyta: Taisyklių 3.1 papunktis. Ką tai reiškia: „Nėra kelių atskirų žingsnių ar
   laukiančių ekranų. Užpildai laukus žemiau, ir tai viskas, ko iš tavęs prašoma dabar.“
2. **Duomenys** — „Prašoma keturių laukų: kontaktinio adreso, identifikatoriaus, apsaugos derinio
   ir amžiaus grupės.“ Kur parašyta: Taisyklių 2.2 papunktis. Ką tai reiškia: „Daugiau nieko šiame
   etape neprašome — nei tikro vardo, nei tikslios gyvenamosios vietos, nei mokėjimo duomenų.“
3. **Kaina dabar** — „0 € įėjimas. Už registro įrašo sukūrimą ir jo laikymą registre mokėti
   nereikia.“ Kur parašyta: Taisyklių 4.1 papunktis. Ką tai reiškia: „Nieko nemokėsi, ir niekas
   neprašys mokėjimo kortelės duomenų, kad sukurtum registro įrašą.“
4. **Kaina vėliau** — „Mokamo lygio registre nėra. Jei jis kada nors atsirastų, jis būtų įrašytas
   kaip naujas, atskirai sunumeruotas punktas — o ne paslėptas šio punkto pakeitime.“ Kur parašyta:
   Taisyklių 4.2 papunktis. Ką tai reiškia: „Jei kaina pasikeis, tai bus matoma čia, tuo pačiu būdu
   kaip ir viskas kita registre — ne atskiru pranešimu jau po pasirašymo.“
5. **Registro įrašo pradžia** — „Čia prasideda tavo registro įrašas. Pradedama nuo kontaktinio
   adreso.“ Laukas: Kontaktinis adresas → mygtukas „Tęsti pasirašymą“ → išsiskleidžia:
   Identifikatorius, Apsaugos derinys, Amžiaus grupė, Gyvenamoji vieta, žymė „Patvirtinu, kad esu
   vyresnis (-ė) nei 18 metų ir sutinku su Taisyklėmis“ → mygtukas „Pasirašyti“.

### Patikrinimas (A)
„Kaip tikriname, kad kitoje pusėje yra žmogus“ — du atskiri mechanizmai:
1. „Kiekvienas naujas registro įrašas peržiūrimas prieš jam tampant matomam kitiems nariams.“
2. „Bet kurį įrašą galima pranešti tiesiai iš jo puslapio; pranešimas peržiūrimas atskirai nuo
   pirminio patikrinimo.“

### Kas vyksta po pasirašymo (M)
1. „Patvirtinimo laiškas išsiunčiamas į nurodytą kontaktinį adresą.“
2. „Registro įrašas patenka į patikrinimo eilę — tai atlieka žmogus, ne vien automatinis procesas.“
3. „Patikrinus, įrašas tampa matomas kitiems nariams registre.“
4. „Radus abipusiškumą, atsidaro susirašinėjimas su tuo nariu.“
5. (F17, sąžiningas „kodėl dabar“) „Patikrinimai atliekami kiekvieną darbo dieną, ne kartą per
   savaitę — todėl laukimas paprastai trumpas.“

### Duomenų tvarkymas (K)
- „Viešai kitiems nariams matoma: identifikatorius, amžiaus grupė, gyvenamoji vieta (rajono
  tikslumu).“
- „Niekada viešai nerodoma: kontaktinis adresas, apsaugos derinys.“
- „Registro įrašą galima ištrinti bet kada nustatymuose; duomenys pašalinami per Taisyklių 5
  papunktyje nurodytą terminą.“

### Kiek įrašų registre (Q)
„Praėjusį mėnesį registre patvirtinta nuo 410 iki 470 naujų registro įrašų.“ + „Skaičius
atnaujinamas kas mėnesį, ne gyvai — kad nerodytume nei nulio, nei apytikslio spėjimo.“

### Atsakymai prieš pasirašant (D, 5 klausimai)
1. „Ar galiu pradėti nuo kontaktinio adreso ir likusius laukus užpildyti vėliau?“ — „Taip. 5
   punkte gali įrašyti tik kontaktinį adresą ir grįžti vėliau — registro įrašas nebus sukurtas,
   kol nepaspausi „Pasirašyti“.“
2. „Ar registro įrašą galima ištrinti?“ — „Taip, bet kada, be papildomo paaiškinimo. Žr. Taisyklių
   5 papunktį.“
3. „Kodėl prašoma amžiaus grupės, o ne tikslios gimimo datos?“ — „Nes tikslus amžius kitiems
   nariams nereikalingas — pakanka intervalo, kad matomumas liktų minimalus (2 punktas).“
4. „Kas mato mano duomenis prieš patikrinimą?“ — „Iki patikrinimo įrašas nematomas niekam, išskyrus
   jį peržiūrintį žmogų (Taisyklių 6 papunktis).“
5. „Kur rasti pilną Taisyklių tekstą, o ne tik santrauką iš registro?“ — „Visos numeruotos
   Taisyklės, su tais pačiais numeriais, kuriuos matai prie kiekvieno punkto, surašytos puslapio
   apačioje.“

### Grįžti prie pasirašymo (R)
„Jei apsisprendei — 5 punktas laukia ten, kur jį palikai.“ → nuoroda „Grįžti prie pasirašymo“.

### Taisyklės (L, poraštė)
1. Amžiaus patvirtinimas
2. Registro įrašo duomenys (2.1 kas renkama, 2.2 kiek laukų)
3. Trukmė ir žingsniai (3.1)
4. Kaina (4.1 dabartinė, 4.2 galimas būsimas mokamas lygis)
5. Duomenų ištrynimas ir pasitraukimas
6. Patikrinimas ir pranešimai
+ „© 2026 Sąlyga.“ + nuoroda „Jau turite registro įrašą?“ paaiškinimas: „Esami nariai prisijungia
tuo pačiu kontaktiniu adresu, kuriuo sukūrė registro įrašą — nuoroda atsiunčiama į tą adresą.“

### Slapukai (C)
„Sutikimas dėl slapukų“ — „Naudojame tik puslapio veikimui būtinus slapukus, nebent pasirinksi
kitaip.“ → „Tik būtini“ / „Sutinku su visais“, pasirinkimas įsimenamas.

### Klaidų / sėkmės tekstai
- Klaida (kontaktinis adresas): „Įrašyk kontaktinį adresą su @ ženklu — dabar jo trūksta arba jis
  neteisingas.“
- Klaida (identifikatorius): „Identifikatorius turi būti bent 3 simbolių.“
- Klaida (apsaugos derinys): „Apsaugos derinys turi būti bent 8 simbolių.“
- Klaida (amžiaus grupė / gyvenamoji vieta): „Pasirink vieną iš sąrašo.“
- Klaida (patvirtinimas): „Reikia pažymėti, kad esi vyresnis (-ė) nei 18 metų ir sutinki su
  Taisyklėmis, kitaip registro įrašo sukurti negalime.“
- Sėkmė: „Pasirašyta. Patvirtinimas išsiųstas į nurodytą kontaktinį adresą. Registro įrašas dabar
  laukiamas patikrinimo eilėje (žr. 2 punktą aukščiau).“

---

## 7. Savikritika po kodo (žingsnis 5)

Peržiūrėjau 360px ir 1440px pločiu. Pašalinau vieną perteklinį elementą: pirminiame plane prie
kiekvieno ledger punkto numerio buvo papildomas dekoratyvus taškas-žymeklis (maža apskrita
plytelė aplink skaičių, vien vizualinei pusiausvyrai). 1440px ji atrodė kaip nereikalingas
pagražinimas, o 360px plotyje atėmė vietos iš paties skaičiaus ir sumažino jo kontrastą su
tekstu. Pašalinau — liko tik tabuliarinis skaičius tiesiai savo stulpelyje, be jokio apvado. Tai
sustiprino, ne susilpnino pagrindinę tezę (skaitomumas, ne dekoras).
