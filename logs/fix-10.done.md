# Fix log — lg10-atvirukas (QA §7.10)

**Statusas:** BAIGTA. Atsarginė kopija prieš keičiant: šios sesijos scratchpad kataloge,
`backup/index.html.bak`. Kiekvienas keitimas patikrintas `diff`'u prieš originalą — pakito tik
toliau išvardyti mazgai (patvirtinta: diff turi lygiai 6 pakeistus bloką, nieko daugiau).

## Atlikti pakeitimai (`variacijos/lg10-atvirukas/index.html`)

- **S1 (eil. ~246, „Ar reikės mokėti“):** sąlyginio būsimojo pažadas („Jei kada nors atsirastų
  papildomas, mokamas sluoksnis, jis bus aiškiai pažymėtas...“) pašalintas visai. Perrašyta
  pirmuoju asmeniu, tik esamuoju laiku: „Aš šitą dalį laikau dovanai — atviruko išsiuntimą,
  simpatijas, korespondenciją. Jokio paslėpto apmokėjimo čia nėra, ir dovanai likęs kelias yra tas
  pats, kuriuo eini dabar.“
- **S1 (eil. ~203, DUK „Ar tikrai už tai nereikės mokėti?“):** ta pati mintis perrašyta pirmuoju
  asmeniu trumpai: „Ne — siuntimą į dėžutę aš laikau dovanai.“ Nuoroda į pinigų sekciją nekeista.
- **S2 (eil. ~239, „Kas prižiūri dėžutę“):** priešprieša „prižiūri žmogus, ne vien algoritmas“
  pašalinta. Perrašyta pasyvios grėsmės paneigimo judesiu (tuo pačiu, kuriuo variantas jau uždaro
  pinigų/persigalvojimo klausimus): „Naujas atvirukas dėžutėje nepasirodo, kol jo neperžiūrime —
  tikriname, ar aprašymas neapgaulingas ir ar jis nėra pakartotas iš kito profilio. Įtartiną
  sulaikome ir paklausiame papildomai, prieš jį paskelbdami.“
- **S2 (eil. ~207, DUK „Ar ten iš viso kas nors yra?“):** priešprieša „ne vien skaičiai“ pašalinta,
  perrašyta ta pačia „nesimato, kol neperžiūrime“ konstrukcija: „Taip. Tavo atvirukas dėžutėje
  niekam nesimato, kol jo neperžiūrime.“
- **S3 (eil. ~231, „Ribos, kurias nustatai tu“):** dvipusis „niekada nerodoma / be papildomų
  klausimų“ sąrašas pašalintas. Perrašyta leidimo-nebaigti konstrukcija („Gali...“), ta pati, kuria
  variantas jau kalba hero ir D sekcijoje: „Gali rodyti tiek, kiek nori: vardelis matomas visiems
  dėžutėje, o tarpsnį ir kampelį gali palikti apytikslius. Atsakymo adresu naudojamės tik mes, kad
  galėtume su tavimi susisiekti. Ir gali bet kada pasitraukti — tereikia parašyti mums, o tavo
  atvirukas iš dėžutės dingsta tą pačią dieną.“ Ta pati faktinė informacija (kas matoma, kas ne, kaip
  pasitraukti), bet pasakyta kaip lankytojo teisės, ne kaip sistemos draudimų sąrašas.
- **S4 (eil. ~190):** antraštė „Jeigu dar dvejoji“ pakeista į „Kas dažniausiai neaišku iš pirmo
  karto“ — sieja su varianto pasakojimu apie nemalonų pirmą kartą (`story-panel` citata), nekartoja
  „Jei dar dvejoji“ konstrukcijos.

## Nekeista (S5, sąmoningai)

- **S5 (eil. 44):** „Jau turi atviruką? Prisijunk.“ — **nepaliesta**. Tai viena iš trijų leidžiamų
  „Jau ...? Prisijunk“ konstrukcijų visame rinkinyje (QA §7.0), o lg10 užduotyje (§7.10) tiesiogiai
  parašyta „gali likti — nekeisk“. Keisti ją būtų klaida, ne tikslinimas.

## Nekeista (patvirtinta diff'u ir grep'u)

- Visos 7 `<!-- tracking: ... -->` žymos (`return_member_click`, `deck_card_flip`,
  `form_submit_attempt`, `form_submitted`, `repeat_cta_click` ×2, `cookie_ack`) — patikrinta grep'u,
  liko tos pačios, tose pačiose vietose.
- Dėklo/kortelių sluoksniai, `deck-stack`, apvertimo judesys (`deck-flip`/`deck-card-inner`),
  `assets/pastel.js`, `assets/pastel.css` — failai nepaliesti (keista tik `index.html`).
- Šoninė `story-panel` su trimis citatomis — nepaliesta, jau pirmuoju asmeniu ir yra varianto
  parašas.
- Sekcijų tvarka, formos laukai (`id`/`name`/`required`/`autocomplete`), `aria-*` — nepaliesti.
- Jokia nauja spalva, šriftas ar CSS klasė nepridėta.
- `meta description`, `og:description`, JSON-LD `description` — patikrinta, nekartoja S1/S2/S3
  schemų pažodžiui, tad nekeista.

## Priėmimo kriterijus

- [x] S1 abiejose vietose — pirmuoju asmeniu, be sąlyginio būsimojo.
- [x] S2 abiejose vietose — be „žmogus/skaičiai, ne...“ priešpriešos, aprašyta pasyvios grėsmės
      paneigimo judesiu.
- [x] S3 — leidimo-nebaigti/„Gali...“ konstrukcija, ne draudimų sąrašas.
- [x] S4 — nauja antraštė, nebe „Jeigu dar dvejoji“.
- [x] S5 — nepaliesta, kaip nurodyta.
- [x] CSS, JS, dėklo mechanika, forma, tvarka, tracking žymos — nepaliesti (patikrinta diff'u/grep'u).
