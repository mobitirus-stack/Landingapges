# build-03 — pastaba orkestratoriui: vidinis `config/terminu-zemelapis.md` prieštaravimas

**Statusas:** NE pilnas darbo sustabdymas. `lg3-pultas` yra pilnai pastatytas ir atitinka
priėmimo kriterijus (žr. `logs/build-03.done.md`). Šis failas — punktualus pranešimas apie
vieną rastą ir lokaliai išspręstą terminijos konfliktą, kaip reikalauja
`promptai/03-statyba.md` RIBOS („jei matrica atrodo klaidinga — sustok ir pranešk
orkestratoriui, nekeisk pats").

## Kas rasta

`config/terminu-zemelapis.md`, sąvoka **15 (Privatumas / matomumas)**, stulpelis **3**
(`lg3-pultas`), priskiria terminą **„prieigos lygis"**.

Tame pačiame faile, skyriuje „Papildomos taisyklės, kylančios iš `analize/sinteze.md`",
yra ši eilutė:

> „Draudžiama naudoti kito varianto prekės ženklo vardą ar jo šaknį: Matmuo, Lenta, Pultas,
> Šilas, Sąlyga, Talonas, Kabinetas, Vakaras, **Prieiga**, Atvirukas."

„Prieiga" yra `lg9-prieiga` prekės ženklas. „Prieigos lygis" yra tiksliai ta pati šaknis
(„prieig-"). T. y. failas man priskiria terminą, kurio naudojimą draudžia to paties failo
kita taisyklė. Tai vidinis dokumento prieštaravimas, ne mano interpretacijos klausimas.

## Ką padariau (neturėdamas teisės rašyti į `config/`)

Neturiu teisės keisti `config/` failų (RIBOS: rašau tik į `variacijos/lg3-pultas/` ir
`logs/`), todėl **nekeičiau `terminu-zemelapis.md` pats**. Savo puslapio tekste vietoj
„prieigos lygis" panaudojau **„rodymo lygis"** — patikrinau, kad šis žodis:

- nesikartoja nė viename iš 10 stulpelių sąvokai 15 (matomumo nustatymai / kas mato /
  prieigos lygis / užuovėja / duomenų tvarkymas / diskretiškumas / neviešumas / privatumas
  / teisės / ribos);
- nesutampa su jokiu iš 10 prekės ženklų ar jų šaknimis;
- natūraliai dera su likusiu `lg3-pultas` žodynu (rodmuo, rodyklė, rodo — visi ta pačia
  šaknimi „rod-").

Taip pat pakeičiau vieną antraštės nuorodos `aria-label` iš „Abonento prieiga" į
„Grįžtančio abonento nuoroda" — vien žodis „prieiga" (be „lygis") taip pat tiksliai
sutapo su `lg9` prekės ženklu.

## Ką rekomenduoju orkestratoriui

Atnaujinti `config/terminu-zemelapis.md`, sąvoka 15, stulpelis 3: pakeisti
„prieigos lygis" į **„rodymo lygis"** (arba kitą jūsų pasirinktą žodį, patikrinus prieš
visus 10 stulpelių), kad ateityje šis failas nebeprieštarautų pats sau ir kad fazės 4A
mechaninė patikra turėtų vieną autoritetingą, neprieštaringą šaltinį.

## Poveikis kitiems variantams

Jokio — keičiau tik savo (`lg3-pultas`) turinį, jokio kito `variacijos/*` aplanko
neliečiau ir neskaičiau.
