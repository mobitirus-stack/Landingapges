# fix-08-r2 — lg8-vakaras, antras taisymo ciklas (R.7.6)

## Kontekstas
Pakartotinis auditas (`qa/panasumo-auditas.md` R.7.6) rado, kad F9 „Kas mato tavo planą" sekcija
vis dar dalinasi beveik pažodiniu S3 sakinio judesiu su lg9 — visi trys privatumo elementai
(matoma/niekada nerodoma/ištrinama bet kada) viename bloke, plius pažodinis trijų laukų
(miestas, paštas, kombinacija) sąrašas pakartotas antrą kartą DUK atsakyme.

## Kas pakeista

**`variacijos/lg8-vakaras/index.html`**

1. **eil. 241** (sekcija „Kas mato tavo planą"):
   - Buvo: „Tvarkaraštyje matosi tik pseudonimas ir amžiaus juosta. Miestas, paštas ir
     kombinacija ten nepasirodo niekada, o planą ištrini nustatymuose, kai tik nori."
   - Tapo: „Tvarkaraštyje kiti kompanionai mato tavo pseudonimą ir amžiaus juostą. Daugiau ten
     paprasčiausiai nėra kur sudėti, o planą ištrini nustatymuose, kai tik nori."
   - Pritaikyta lg8 savita priemonė — **faktas + savaiminis nuvertinimas** (ta pati, kuri jau
     veikia eil. 216 „Ketvirtadienis čia gyviausias, ir tai ne mūsų nuopelnas" ir eil. 235
     „...ir tai užtrunka ilgiau, nei norėtume"). Pirmas sakinys pasako, ką kompanionas realiai
     mato (be žodžio „tik"); antras — nuvertina trūkumą kaip vietos, ne taisyklės, klausimą.
     Formulės „matosi tik", „nepasirodo niekada" ir laukų sąrašas per kablelius pašalinti.

2. **eil. 258** (DUK „Kas mato mano pseudonimą?"):
   - Buvo: „Kiti tvarkaraščio kompanionai. Miestas, paštas ir kombinacija lieka tik tau."
   - Tapo: „Kiti tvarkaraščio kompanionai — tiek, kiek pseudonimas ir amžiaus juosta atskleidžia."
   - Suderinta su nauju eil. 241 tekstu: tas pats trijų laukų sąrašas antrą kartą pašalintas,
     atsakymas dabar remiasi tais pačiais dviem laukais (pseudonimas, amžiaus juosta), kuriuos
     mini eil. 241, nekartojant konstrukcijos pažodžiui.

## Patikra po keitimo
- `grep` patvirtino: „matosi tik", „nepasirodo niekada", „lieka tik tau" ir sąrašas
  „Miestas, paštas..." faile daugiau nebeliko.
- `tracking:` žymų faile liko 6 — nepaliestos.
- Nepaliesta: eil. 224–227 (F8), eil. 233–235 (F5), eil. 246 antraštė, eil. 50 nuoroda,
  bento pertvarkymas (`--span-col`/`--span-row`, `role="region"` + `aria-labelledby`),
  keturi `radio` blokai, `ui/board.css`, `ui/board.js` — visi patikrinti `sed`/`grep` po
  keitimo, sutampa su prieš tai buvusia būsena.

## Neužbaigta
Nėra — užduotis pilnai baigta.
