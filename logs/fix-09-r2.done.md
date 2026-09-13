# Fix log — lg9-prieiga, antras ciklas (QA §R.7.7)

**Statusas:** BAIGTA. Atsarginė kopija prieš keičiant: `scratchpad/lg9-backup/index.html.orig`
(šios sesijos scratchpad kataloge).

## Atlikti pakeitimai (`variacijos/lg9-prieiga/index.html`)

- **F5, eil. ~162 („kas tikrina naudotojus“):** prozos sakinys „Naują paskyrą prieš aktyvavimą
  validuojame rankiniu būdu…“ (dvynys su lg4:129) pakeistas dviem `tm-out` būsenos eilutėmis,
  kaip kainos/teisių sekcijose:
  `etapas: nauja paskyra pereina validaciją.` / `terminas: įtartina paskyra įvertinama per parą;
  pasitvirtinus — pašalinama.` Frazių „rankiniu būdu“ ir „prieš aktyvavimą“ nebeliko. Terminas
  „validacija“ paliktas (lg9 savas žodis, priskirtas `terminu-zemelapis.md`).
- **F5 DUK, eil. ~198 („kaip patikrinami naudotojai?“):** suderinta su nauju eil. 162 tekstu —
  „Etapas: validacija. Terminas: įtartiną paskyrą įvertiname per parą ir pašaliname, jei
  pasitvirtina.“
- **F9, eil. ~178–180 („teisės ir matomumas“):** `tm-out` forma palikta (trys eilutės), bet
  turinio judesys pakeistas iš matoma/nematoma priešpriešos į prieigos lygius:
  `prieiga: kitas naudotojas mato prisijungimo vardą ir platų regioną.` /
  `prieiga: e-adresas, tiksli vietovė ir prieigos frazė lieka tik tavo paskyroje.` /
  `valdymas: paskyrą gali sustabdyti arba ištrinti tiesiai mazge.` Žodžių „viešai matoma“ ir
  „niekada nerodoma“ nebeliko; taip pat išmesta uodega „bet kada“ prie ištrynimo, kad neliktų
  paskutinio S3 elemento pėdsako.
- **F9 DUK, eil. ~203 („kas matys mano duomenis?“):** suderinta su nauju eil. 178–180 tekstu —
  „Prieigą prie prisijungimo vardo ir plataus regiono turi kiti mazgo naudotojai. Likusi
  informacija pasiekiama tik tau.“ Frazė „matosi tik“ (beveik pažodinis lg8:241 dvynys) pašalinta.
- **F9 DUK, eil. ~208 („ar galiu vėliau pasitraukti?“):** uodega „, be jokių papildomų klausimų“
  (lg7 parašas) išmesta. Liko: „Taip. Paskyrą sustabdai arba ištrini pačiame mazge.“ + nuoroda
  „paleisti dabar“.

## Nekeista (patvirtinta diff'u ir grep'u)

- Hero komentaras eil. 49 (`# validacija: rankinė, ne automatinė.`) — vienintelis leistas
  priešpriešos likutis, nepaliestas.
- F8 („kaina“, eil. ~165–167) — švarus, nepaliestas.
- Eil. ~41 nuoroda „turintiems paskyrą: prisijungti“, eil. ~184 antraštė „pagalba“, eil. ~235
  „jau turi paskyrą?“ footeryje — nekeista (paskutinioji tik pastaba, ne užduotis, ir šio bloko
  tiesiogiai neliečiau).
- `bin/term.css`, `bin/term.js` — failų modifikavimo laikai (Sep 12) senesni už šios sesijos
  darbą, nepaliesti.
- `<!-- tracking: registration_completed -->` (eil. 156) ir `<!-- tracking: cookies_acknowledged
  -->` (eil. 250) — grep'u patikrinta, abu vietoje, ID/reikšmės nepakitę.
- Prompt'ų seka, seanso istorija, „taisyti“ mygtukai, formos laukai (`id`/`name`/`required`/
  `pattern`/`aria-*`) — visi HTML mazgai identiški originalui.
- Jokia nauja CSS klasė, spalva ar šriftas nepridėta — naudotos tik jau egzistuojančios `tm-out`
  ir `tm-prose` klasės.

## Priėmimo kriterijus (pagal R.7.7)

- [x] Eil. 162 — nebe prozos sakinys, dvi `tm-out` eilutės (etapas + terminas), be „rankiniu
  būdu“/„prieš aktyvavimą“.
- [x] Eil. 198 — suderinta su nauju eil. 162.
- [x] Eil. 178–180 — `tm-out` forma liko, turinys pasakytas kaip prieigos lygiai, be „viešai
  matoma“/„niekada nerodoma“.
- [x] Eil. 203 — suderinta su nauju eil. 178–180, be „matosi tik“.
- [x] Eil. 208 — „be jokių papildomų klausimų“ išmesta.
- [x] CSS, JS, forma, tvarka, tracking žymos, `bin/term.*` — nepaliesti (patikrinta diff'u/grep'u).
