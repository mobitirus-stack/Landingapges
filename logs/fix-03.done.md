# fix-03.done — lg3-pultas tikslinis taisymas (QA §7.3)

**Failas:** `variacijos/lg3-pultas/index.html`
**Pagrindas:** `qa/panasumo-auditas.md` §7.0 + §7.3, `config/diferenciacijos-matrica.md` DALIS 3 (lg3 kortelė),
`config/terminu-zemelapis.md` stulpelis 3, `config/draudziamu-zodziu-sarasas.md`.

## Pakeista — 8 vietos, tiksliai tos, kurios nurodytos §7.3

| Eil. (prieš) | Konstrukcija | Buvo | Tapo |
|---|---|---|---|
| 191 | S3 | „Viešai matoma tik: šaukinys ir zona. Niekam nerodoma: grįžtamasis adresas, raktas, tiksli vietovė.“ | Rodymo lygio skalė (`pultas-timeline` dt/dd, jau naudojama sekcijoje M): „Rodymo lygis: vieša — Šaukinys, zona“ / „Rodymo lygis: tik prietaise — Grįžtamasis adresas, raktas, tiksli vietovė“, likusi eilutė apie keitimą/išjungimą palikta. |
| 197 | S2 | „Kiekvienas naujas kanalas pereina du patikrinimus: ... Abu turi įvykti, kol šaukinys tampa matomas kitiems.“ | Ta pati informacija be schemos įžangos, `pultas-timeline` dt/dd pora: „Grįžtamasis adresas — patvirtinamas prieš šaukinį pasirodant eteryje“ / „Rankinis stebėjimas — vyksta per pirmąsias valandas po įjungimo“. |
| 202 | S1 | „Kanalas įjungiamas be abonento mokesčio. Jei kada nors atsirastų papildomas mokamas lygis, jis bus pažymėtas čia, prietaise — dar prieš įjungiant, ne po.“ | Rodmuo vietoj pažado: `pultas-timeline` dt/dd „Kaina — Be abonento mokesčio“ / „Mokamas lygis — Šiuo metu nėra“. Sąlyginio būsimojo neliko. |
| 226 (DUK) | S1 | „...Jei tai kada nors pasikeis, pamatysi tai prietaise dar prieš mokėjimą, o ne po jo...“ | „Ne. Rodmuo „Mokamas lygis“ aukščiau rodo „nėra“ — jei tai pasikeis, pasikeis ir jis. Gali įjungti kanalą matydamas šį rodmenį jau dabar.“ — nuoroda į rodmenį, ne pažadas. |
| 231 (DUK) | S2 | „Kiekvienas kanalas pereina grįžtamojo adreso patvirtinimą ir rankinį stebėjimą — abu prieš tampant matomam kitiems...“ | „Stebėjimo rodmenys aukščiau — ... — vyksta kiekvienam šaukiniui atskirai nuo aktyvumo skalės, ir be jų šaukinys eteryje nepasirodo.“ — nuoroda į sekciją, ne schemos pakartojimas. |
| — | S5 | „Jau abonentas? Prisijunk“ (eil. 49) | **Nekeista** — viena iš trijų leidžiamų (7.0 sąlyga), lg1 ir lg5 savąsias jau pakeitę atskiruose fix'uose. |

## Papildomai — žodyno kalibravimas (`pultas-hint`, 4 nauji elementai)

Pridėtas jau egzistuojantis `<p class="pultas-hint">` (klasė `static/panel.css:292`, jau naudojama prie „Zona“) prie
likusių keturių formos laukų — jokių naujų klasių:

| Laukas | Naujas `pultas-hint` tekstas |
|---|---|
| Šaukinys | „Taip tave matys kiti eteryje — gali būti bet koks.“ |
| Diapazonas | „Rink pagal amžių — tiksli gimimo data nereikalinga.“ |
| Grįžtamasis adresas | „Tai tavo el. paštas — čia atkeliaus patvirtinimas.“ |
| Raktas | „Naudosi jį kitą kartą prisijungdamas — bent 8 ženklai.“ |

**Terminijos patikra:** hint'uose sąmoningai vengta kitų variantų sąvokų-sinonimų iš `terminu-zemelapis.md`
(pvz. „vardas“/„slapyvardis“/„pravardė“ priklauso lg4/lg6/lg2 tai pačiai sąvokai „rodomas vardas“) —
vietoje jų aprašomasis sakinys be konkuruojančio daiktavardžio. Vienintelė išimtis — „el. paštas“ prie
„Grįžtamasis adresas“ — naudota tiksliai taip, kaip nurodyta pačioje QA užduotyje (7.3 pavyzdys).

**`aria-describedby` NEKEISTAS** nė viename iš keturių laukų (griežtas draudimas keisti `aria-*`) — naujieji
hint'ai neturi `id` ir nėra programiškai susieti su lauku, tik vizualiai/tekstiškai matomi po lauku, kaip ir
esama „Zona“ hint'o vieta struktūroje.

## Kas NEPALIESTA (patikrinta)

- `static/panel.css`, `static/panel.js` — abu failai neatidaryti redagavimui; failų modifikavimo laikas
  (`panel.css` 17:26, `panel.js` 17:21) senesnis nei šio taisymo laikas — patvirtina, kad jie nepaliesti.
- Formos laukų `id`/`name`/`required`/`minlength`/`autocomplete`/`aria-describedby` — identiški prieš ir po
  (patikrinta `grep`).
- SVG skalės mechanika (`data-gauge`, `data-gauge-needle`, padalos, `aria-live` rodmuo) — nepaliesta.
- `data-activity` reikšmės pasirinkimuose (Vilnius 89, Kaunas 76 ir t. t.) — nepaliestos.
- Sekcijų tvarka — nepakeista.
- `<!-- tracking: channel_activated -->` (eil. 157) ir `<!-- tracking: cookie_choice -->` (eil. 293 srityje) —
  abi žymos liko tose pačiose vietose, tuo pačiu pavadinimu.
- `h1`, `pultas-split` išdėstymas, meta description / OG / JSON-LD — nekeista (JSON-LD šiame variante yra
  paprastas `WebPage`, be `acceptedAnswer`, tad S1/S2/S3 sakinių ten nekartoja — keitimo pagrindo nebuvo).
- Jokios naujos CSS klasės, spalvos ar šrifto nepridėta — panaudotos tik esamos `pultas-timeline` ir
  `pultas-hint` klasės.

## Patikra po keitimo

`diff` prieš scratchpad atsarginę kopiją patvirtino: pakito **tik** aukščiau išvardytos 8 vietos (4 nauji
`pultas-hint` + 3 pastraipos paverstos `pultas-timeline` sąrašais + 2 DUK atsakymai perrašyti). Visa kita —
baitas į baitą tas pats.
