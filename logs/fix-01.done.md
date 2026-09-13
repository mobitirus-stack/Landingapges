# fix-01.done — lg1-matmuo tikslinis taisymas (QA §7.1)

**Failas:** `variacijos/lg1-matmuo/index.html`
**Pagrindas:** `qa/panasumo-auditas.md` §7.0 + §7.1, `config/diferenciacijos-matrica.md` DALIS 3 (lg1 kortelė),
`config/terminu-zemelapis.md` stulpelis 1, `config/draudziamu-zodziu-sarasas.md`.

## Pakeista — 9 vietos, tiksliai tos, kurios nurodytos §7.1

| Eil. (prieš) | Konstrukcija | Buvo | Tapo |
|---|---|---|---|
| 57 (JSON-LD) | S1 | „Šiuo metu — ne. Jei tai pasikeistų, informacija pirmiausia atsirastų skyriuje „Kaina šiandien“.“ | „Kainos matmenys: kaina — be mokesčio, mokamo lygio būsena — nėra, paskutinis pakeitimas — 2026-09-13. Pasikeitus bet kuriam iš šių skaičių, pasikeičia ta pati eilutė šiame puslapyje.“ |
| 65 (JSON-LD) | S2 | „Kiekvienas duomenų lapas pereina rankinį auditą prieš paskelbimą, vidutiniškai per 4 valandas.“ | „Audito matmenys: vidutinis laikas — 4 val., atmetama per mėnesį — 12%. Tai atskiras skaičius nuo bendro sistemos aktyvumo rodiklio.“ |
| 49 (JSON-LD) | S3 | „Numatytieji matomumo nustatymai rodo tik žymę ir amžiaus intervalą. Pašto adresas, kodas ir tiksli vietovė niekada nerodomi viešai.“ | „Vieša tik žymė ir amžiaus intervalas. Pilna matomumo specifikacija — laukas po lauko su reikšme „vieša“ arba „nerodoma“ — pateikta prie pilno duomenų lapo šiame puslapyje.“ |
| 163 (€ sekcija) | S1 | pastraipa su „Jei jis kada nors atsirastų, ši eilutė pasikeistų pirmiau...“ | pašalinta; vietoje jos — `spec spec--audit` blokas (Kaina / Mokamo lygio būsena / Paskutinis pakeitimas) + likęs lg1 sakinys „Jei kuris nors skaičius pasikeis, jis pasikeis ir čia.“ |
| 190 (A sekcija) | S2 | „Kiekvienas naujas duomenų lapas pereina rankinį auditą, kol tampa matomas sistemoje.“ | sakinys pašalintas visai; auditą dabar įrodo tik jau buvęs `spec--audit` blokas (4 val. / 12%), be jokio jį aprašančio sakinio ir be „žmogus, ne robotas“ priešpriešos |
| 297 (entry sekcija) | S3 | — (naujas turinys) | pridėtas naujas blokas „Matomumo specifikacija“ (`h3#visibility-spec` + `spec spec--audit`): Žymė — vieša, Amžiaus intervalas — vieša, Pašto adresas — nerodoma, Kodas — nerodoma, Tiksli vietovė — nerodoma |
| 303 (DUK) | S3 | „Numatytieji matomumo nustatymai rodo tik žymę ir amžiaus intervalą. Pašto adresas, kodas ir tiksli vietovė niekada nerodomi viešai — juos matai tik tu.“ | „Vieša tik žymė ir amžiaus intervalas. Pilna matomumo specifikacija yra prie pilno duomenų lapo — laukas po lauko, su reikšme „vieša“ arba „nerodoma“.“ (su nuoroda `#visibility-spec`) |
| 307 (DUK) | S1 | „Šiuo metu — ne. Jei tai pasikeistų, informacija pirmiausia atsirastų skyriuje „Kaina šiandien“ aukščiau, ne po registracijos.“ | „Kainos matmenys yra aukščiau, skyriuje „Kaina šiandien“: kaina — be mokesčio, mokamo lygio būsena — nėra, paskutinis pakeitimas — 2026-09-13. Pasikeitus bet kuriam iš šių skaičių, pasikeičia ta pati eilutė.“ |
| 311 (DUK) | S2 | „Kiekvienas duomenų lapas pereina rankinį auditą prieš paskelbimą (vidutiniškai 4 val.). Tai atskiras žingsnis nuo bendro sistemos aktyvumo skaičiaus.“ | „Audito matmenys yra aukščiau: vidutinis laikas — 4 val., atmetama per mėnesį — 12%. Tai atskiras skaičius nuo bendro sistemos aktyvumo skaičiaus žemiau.“ |

## Patvirtinimas — S1/S2/S3 nurodymai įvykdyti

- **S1 (pinigai).** Sąlyginis būsimasis „jei kada nors atsirastų / parašysime čia / ne po to, kai...“ pašalintas
  iš visų trijų vietų (€ sekcija, DUK, JSON-LD). Vietoje pažado — konkreti `spec__row` eilutė su kaina,
  mokamo lygio būsena ir paskutinio pakeitimo data. lg1 savas parašas „Jei kuris nors skaičius pasikeis, jis
  pasikeis ir čia.“ paliktas — jis nebuvo bendros schemos dalis, o lg1 pačios logikos tąsa.
- **S2 (moderavimas).** Sakinys „Kiekvienas naujas X pereina rankinį Y, prieš tampant matomu kitiems“ pašalintas
  iš visų trijų vietų (A sekcija, DUK, JSON-LD). Auditą dabar įrodo tik skaičiai (`spec--audit`: 4 val. / 12%),
  be jokio aprašomojo sakinio. Priešpriešos „žmogus, ne robotas/algoritmas“ šiame variante nebuvo ir nebuvo
  sukurta.
- **S3 (privatumas).** Dvipusis „rodoma / niekada nerodoma“ sąrašas pašalintas iš DUK ir JSON-LD. Vietoje jo —
  naujas matmenų blokas prie pilno duomenų lapo formos (5 laukai, kiekvienas su reikšme „vieša“ arba
  „nerodoma“), į kurį DUK atsakymas dabar tik nurodo. DUK nebeliko vienintele privatumo vieta.

## Kas NEPALIESTA (patikrinta)

- `assets/style.css`, `assets/app.js` — neatidaryti rašymui, 0 pakeitimų (tik perskaityti, kad sužinočiau,
  kurias esamas klases galima saugiai pakartotinai naudoti).
- Jokios naujos CSS klasės, spalvos ar šrifto nepridėta — naudotos tik jau egzistuojančios `spec`,
  `spec--audit`, `spec__row`, `spec__label`, `spec__value` (jau naudojamos hero ir Q sekcijose).
- `h1`, hero matmenų eilutė, `plate__entry` forma, išnašų (`callout`) mechanika — nepakeista.
- Antraštė „Dažniausi klausimai“ ir grįžtančio nario nuoroda „Jau turi duomenų lapą? Prisijungti“ — nepakeistos
  (kaip nurodyta „Nekeisti“ sąraše).
- Formos laukai, jų `id`/`name`/`aria-*`/`required`/`minlength`/`autocomplete` — nepakeisti nė viename lauke.
- Sekcijų tvarka nepakeista: H → P → Į → FORM(1 laukas) → € → M → A → Q → FORM(pilna)+sėkmė → D → L → C.
  Naujas privatumo blokas įdėtas **į** jau esančią FORM(pilna) sekciją, ne kaip nauja sekcija.
- `<!-- tracking: ... -->` žymų šiame faile iš viso nėra (patikrinta `grep`) — nieko nebuvo liesti ir nieko
  nepridėta.

## Patikra po keitimo

`diff` tarp atsarginės kopijos (scratchpad) ir pataisyto failo parodė lygiai 9 pakeistus blokus — visi
sutampa su §7.1 sąrašu. Žymių balansas (`section`/`div`/`form`/`h1`/`h2`/`h3`) po keitimo — lygus (7/7, 64/64,
2/2, 1/1, 6/6, 6/6), HTML struktūra nesugadinta.

**Patvirtinimas:** S1/S2/S3 bendros schemos šiame variante nebeliko.
