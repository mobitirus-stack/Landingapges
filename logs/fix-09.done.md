# Fix log — lg9-prieiga (QA §7.9)

**Statusas:** BAIGTA. Atsarginė kopija prieš keičiant: `scratchpad/lg9-backup/index.html.orig`
(šios sesijos scratchpad kataloge). Kiekvienas keitimas patikrintas `diff`'u prieš originalą —
pakito tik toliau išvardyti mazgai.

## Atlikti pakeitimai (`variacijos/lg9-prieiga/index.html`)

- **S1 (eil. ~167, „kaina“ sekcija):** pastraipa su sąlyginiu būsimuoju („Jei tai kada nors
  pasikeis, apie tai pranešime iš anksto, prieš įsigaliojant, ne po fakto“) pakeista viena `tm-out`
  išvesties eilute: `kaina: be kainos. apmokamo lygio šiuo metu nėra.` — kaina dabar būsenos
  reikšmė, ne pažadas.
- **S1 (eil. ~191, DUK „ar reikės mokėti?“):** ta pati schema pakeista `tm-out` eilute
  `kaina: be kainos, tiek paleidimui, tiek pagrindinėms funkcijoms.` Nuoroda „paleisti dabar“ šiame
  atsakyme pašalinta (žr. „Papildomai“ žemiau).
- **S2 (eil. ~162, „kas tikrina naudotojus“):** priešprieša „žmogus, ne vien algoritmas“ pašalinta.
  Palikau vieną iš dviejų priešpriešų — hero komentaro eilutę eil. 49 `# validacija: rankinė, ne
  automatinė.` (rekomenduotą variantą, nekeista). Sekcijos pastraipa perrašyta kaip imperatyvus
  dviejų sakinių procedūros aprašymas be „X, ne Y“: „Naują paskyrą prieš aktyvavimą validuojame
  rankiniu būdu. Pranešimą apie įtartiną paskyrą įvertiname per parą ir, pasitvirtinus, paskyrą
  pašaliname.“ Sąmoningai vartojau lg9 priskirtą terminą „validacija“ (ne „peržiūra“ — tai lg7
  terminas pagal `terminu-zemelapis.md` 8 skiltį — ir ne „patikrinimas“ — lg5 terminas), kad
  nesukurčiau naujo terminų sutapimo tarp variantų.
- **S2 (eil. ~196, DUK „kaip patikrinami naudotojai?“):** ta pati schema perrašyta glausčiau:
  „Rankiniu būdu, prieš aktyvavimą. Pranešimą apie įtartiną paskyrą įvertiname per parą ir
  pašaliname, jei pasitvirtina.“ Nuoroda „paleisti dabar“ pašalinta.
- **S3 (eil. ~178, „teisės ir matomumas“):** dvipusis sakinys „Viešai matomas tik... niekada
  nerodomi... be papildomų klausimų mums“ perrašytas kaip teisių sąrašas `tm-out` eilutėmis (po
  vieną eilutę), tuo pačiu būdu kaip sekcijoje „aktyvumas dabar“:
  - `viešai matoma: prisijungimo vardas, platus regionas.`
  - `niekada nerodoma kitiems naudotojams: e-adresas, tiksli vietovė, prieigos frazė.`
  - `paskyra: gali sustabdyti arba ištrinti bet kada.`
  Frazė „be papildomų klausimų mums“ išmesta visai — ji pasikartojo kaip lg7 signatūra
  („be paaiškinimų mums“) taip pat lg8 ir lg10.
- **S4 (eil. ~182):** DUK antraštė „jei dar dvejoji“ pakeista į komandos formos antraštę
  „pagalba“ — trumpas, terminalo stiliaus žodis (kaip CLI komanda `help`), be klausimo/mandagumo
  formos.
- **S5 (eil. ~41):** antraštės nuoroda „jau esi naudotojas? prisijungti“ pakeista į ne klausimo
  formą: „turintiems paskyrą: prisijungti“.

## Papildomai — DUK nuorodų dubliavimas (eil. ~186, 191, 196, 201, 206)

Penki identiški „paleisti dabar“ baigimo teiginiai sumažinti iki dviejų:
- **Palikta:** „kiek trunka paleidimas?“ (eil. ~186) ir „ar galiu vėliau pasitraukti?“ (eil. ~206)
  — pirmasis atsako į pradinę abejonę (trukmę) ir natūraliai veda į veiksmą, paskutinis pašalina
  paskutinę kliūtį prieš registraciją.
- **Išmesta:** „ar reikės mokėti?“, „kaip patikrinami naudotojai?“, „kas matys mano duomenis?“ —
  jų turinys/nuoroda pakeisti aukščiau (S1/S2) arba nuoroda tiesiog pašalinta be kito teksto
  keitimo („kas matys mano duomenis?“).

## Nekeista (patvirtinta diff'u ir grep'u)

- `bin/term.css`, `bin/term.js` — nepaliesti (Edit tool jų neliejo).
- `<!-- tracking: registration_completed -->` (eil. 156) ir `<!-- tracking: cookies_acknowledged
  -->` (eil. 249) — patikrinta grep'u, abu nepaliesti, ID/reikšmės tos pačios.
- Prompt'ų seka, seanso istorija ir „taisyti“ mygtukai, `$`/`>` prefiksai, mirksintis kursorius —
  visi HTML mazgai (`tm-history`, `tm-step`, `tm-glyph`, `tm-cursor`) identiški.
- Sekcijų tvarka, formos laukai (`id`/`name`/`required`/`pattern`/`aria-*`), h1 ir hero išvesties
  tekstas — nepaliesti.
- Jokia nauja klasė, spalva ar šriftas nepridėta — naudotos tik jau egzistuojančios `tm-out` ir
  `tm-prose` klasės.

## Priėmimo kriterijus

- [x] S1 nebeturi sąlyginio būsimojo pažado dviejose vietose — abi tapo `tm-out` būsenos eilutėmis.
- [x] S2 liko tik viena priešprieša (hero komentaras); sekcija ir DUK perrašyti be „X, ne Y“.
- [x] S3 tapo teisių sąrašu `tm-out` eilutėmis; „be papildomų klausimų mums“ išmesta.
- [x] S4 antraštė nebe „jei dar dvejoji“, dabar komandos formos „pagalba“.
- [x] S5 nebe klausimo forma.
- [x] DUK „paleisti dabar“ nuoroda liko tik dviejuose iš penkių atsakymų.
- [x] CSS, JS, forma, tvarka, tracking žymos — nepaliesti (patikrinta diff'u/grep'u).
