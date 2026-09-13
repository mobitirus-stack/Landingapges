# Fix log — lg6-talonas (QA §7.6)

**Statusas:** BAIGTA. Ankstesnis agentas nutrūko dėl API limito prieš atlikdamas bet kokius
pakeitimus (patikrinta grep'u prieš pradedant — visi seni sakiniai buvo dar ten). Šis agentas
pradėjo taisymą nuo nulio, atsargines kopijas išsaugojo į scratchpad ir kiekvieną keitimą
patikrino `diff`'u prieš `index.html.bak` / `style.css.bak`.

## Atlikti pakeitimai (`variacijos/lg6-talonas/index.html`)

- **S1 (eil. 72, money-note):** išmesta uodega „Jei kada nors atsirastų mokamas lygis, jis būtų
  parašytas čia, ne po to, kai jau būsi užpildęs taloną.“ Palyginimas su praeitimi („Anksčiau už tai
  imdavo 3 litus. Dabar neima nieko“) liko nepaliestas.
- **S1 (eil. 189, DUK):** ta pati uodega išmesta iš atsakymo „Ar tikrai už tai nereikės mokėti?“ —
  liko tik „Nereikės. Anksčiau imdavo 3 litus, dabar neima nieko.“
- **S2 (eil. 172–173, moderation-block):** antraštė „Korektūra — ne skaičius, o žmogus“ pakeista į
  „Korektūra tikrina kiekvieną skelbimą“; iš pastraipos išmesta „— žmogus, ne filtras“ priešprieša
  (ji atitiko tą pačią draudžiamą S2 schemą kaip ir antraštė bei p. 148 eilutė, nors §7.6 tekste
  cituojama tik kaip viena vieta „eil. 173“). Korektoriaus vaidmuo („grąžinamas atgal su pastaba,
  ką pataisyti, o ne tiesiog ištrinamas“) paliktas nepaliestas.
- **S2 (eil. 148, mechanics-list):** „— tai žmogus, ne robotas“ išmesta; „ne akimirksniu“ (laiko,
  ne žmogus/robotas kontrastas) paliktas, nes jis nepatenka į draudžiamą schemą.
- **S3 (eil. 214, privacy-block):** dvipusis sąrašas „Viešai rubrikoje matosi tik... niekada pašto
  dėžutė ir niekada tikras vardas“ perrašytas talono blanko logika: „Ant talono yra penki laukeliai,
  bet į rubriką iš jų keliauja tik du: slapyvardis ir dešimtmetis. Pašto dėžutė, šifras ir antspaudas
  lieka spaustuvėje...“ Sakinys apie panaikinimą („tai užtrunka vieną laišką mums...“) nekeistas.
- **S3 (eil. 201, DUK „Kas matys mano skelbimą?“):** ta pati blanko logika glausta forma: „Į rubriką
  iš talono keliauja tik du laukeliai... Likusieji trys (pašto dėžutė, šifras, antspaudas) lieka
  spaustuvėje, ne skelbime.“
- **S4 (eil. 185):** antraštė „Jei dar dvejoji“ pakeista į „Klausimai apie taloną“ (nebendrinis
  „DUK“, naudoja varianto prekės ženklo terminą).
- **S5 (eil. 41):** „Jau pildei? Prisijunk prie savo skelbimo“ pakeista į ne klausimo formą —
  „Jau užpildei taloną — prisijunk prie savo skelbimo“.

## Mechaninis taisymas (šriftų krovimas)

- `assets/style.css:5` — pašalinta `@import url('...fonts.googleapis.com/css2?family=Bitter...')`.
- `index.html` — pridėta `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Work+Sans:wght@400;600&display=swap">` iškart po dviejų esamų `preconnect` eilučių (15–16), prieš `<link rel="stylesheet" href="assets/style.css">`.
- `style.css` viršuje palikta komentaro nuoroda, kur dabar šriftai kraunami, kad kitas agentas
  nepradėtų ieškoti `@import` iš naujo.
- Failo kelio `assets/style.css` vs. matricos `press/style.css` neatitikimo **neliečiau** — audito
  tekste tai pažymėta kaip abu variantai priimtini („arba perkelk failą, arba užfiksuok
  nukrypimą“), o užduoties santrauka šio punkto nereikalavo; fiksuoju čia kaip žinomą nukrypimą.

## Nekeista (patvirtinta diff'u)

Marquee juosta (`ink-strip`), rašalo misregistracija (SVG `translate(2,2)` sluoksniai), talono
perforacija/dvi pusės (`coupon-side-1`/`coupon-side-2` logika ir JS), slapukų/spaustuvės žyma
(`press-mark`), halftone SVG šablonas — visi identiški prieš/po. `<!-- tracking: coupon_submitted
-->` (HTML komentaras, eil. 140) ir `/* tracking: coupon_submitted */` (JS komentaras, eil. 314)
patikrinti grep'u — abu nepaliesti. Jokia nauja spalva, šriftas ar klasė nepridėta.

## Priėmimo kriterijus

- [x] S1 nebeturi „jei kada nors atsirastų mokamas lygis“ schemos (2 vietos)
- [x] S2 nebeturi „žmogus, ne robotas/filtras“ priešpriešos (3 vietos ištaisytos)
- [x] S3 nebeturi dvipusio „viešai matoma / niekada nerodoma“ sąrašo bendra forma — pakeista talono
      blanko (spausdinama rubrikoje / lieka spaustuvėje) logika
- [x] S4 antraštė „Jei dar dvejoji“ pakeista
- [x] S5 nebe klausimo forma
- [x] Šriftai kraunami per `<link rel="stylesheet">` `index.html`, ne per CSS `@import`
- [x] CSS (išskyrus šriftų eilutę), JS, forma, tvarka, tracking žymos, marquee, misregistracija,
      perforacija, halftone SVG — nepaliesti
