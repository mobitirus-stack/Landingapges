# fix-04-r2.done — lg4-silas antras taisymo ciklas (QA §R.7.3)

**Failas:** `variacijos/lg4-silas/index.html` (vienintelis liestas failas).
**Pagrindas:** `qa/panasumo-auditas.md` R.7.0 + R.7.3, `config/diferenciacijos-matrica.md` DALIS 3 „## lg4",
`config/terminu-zemelapis.md` stulpelis 4 (ravėjimas = lg4 sąvoka Nr. 8, laiškų adresas = sąvoka Nr. 10).

## Problema

Pakartotinis auditas rado, kad F5 sekcijos ravėjimo sakinys vis dar dalinasi bendru griaučiu
„kiekvieną naują X … patys, ranka" su lg9 („Naują paskyrą … rankiniu būdu") — tai S2b priemonė,
kurią leidžiama palikti tik lg7. Reikėjo perrašyti abi vietas (eil. 129 pagrindinė pastraipa ir
eil. 179 DUK atsakymas), palikti žodį „ravėjimas" (jis lg4 savas pagal terminų žemėlapį), bet
išmesti kiekybės žodį „kiekvieną", laiko konstrukciją „prieš" ir įrankio įvardijimą „ranka"/
„rankomis"/„rankiniu būdu".

## Pakeista

1. **eil. 128 antraštė.** Buvo: „Ravėjimas prieš kiekvieną naują vietą." Tapo: „Ravėjimas, kuris
   saugo rato tikrumą." — nebeliko nei „prieš", nei „kiekvieną naują".

2. **eil. 129 pastraipa.** Buvo: „Ravėjimas reiškia, kad kiekvieną naują vietą apžiūrime patys,
   ranka — patikriname, ar laiškų adresas tikras ir ar aprašymas neprimena kito, jau esančio rate.
   Taip rate lieka tik tos vietos, kurios yra tikros." Tapo: „Ravėjimas reiškia, kad rato sodas
   neauga savaime — pastebime, kai laiškų adresas neatrodo tikras arba aprašymas pernelyg primena
   jau esantį rate, ir tokia vietelė neprigyja. Lieka tik tai, kas išaugo tikra." Registrą pakeičiau
   iš operatoriaus („apžiūrime patys, ranka, patikriname") į sodininko (sodas, neauga savaime,
   vietelė, neprigyja, išaugo) — tai tiesiogiai atitinka lg4 prekės ženklo „Šilas" ir hero SVG
   žiedo (užuovėja) motyvą. Faktinis turinys išlaikytas: kas pastebima (netikras laiškų adresas,
   pasikartojantis/panašus aprašymas) ir kas su tuo daroma (tokia vieta nelieka rate).

3. **eil. 179 DUK atsakymas** (klausimas „Kas rūpinasi, kad kita vieta rate būtų tikra?" —
   pats klausimas NEKEISTAS). Buvo: „Ravime rankomis — patikriname, ar laiškų adresas tikras ir ar
   aprašymas neprimena kito, jau esančio rate." Tapo: „Rato sodą prižiūrime nuolat — vieta su
   netikru laiškų adresu ar aprašymu, kuris sutampa su jau esančiu rate, paprasčiausiai
   nepasilieka." Sąmoningai kitokia leksika ir sakinio struktūra nei eil. 129 (skirtingi veiksmažodžiai
   „sutampa"/„nepasilieka" vs „primena"/„neprigyja"), kad puslapyje nesikartotų tas pats sakinys.

## Kas NEPALIESTA (patikrinta `diff`)

`diff` prieš scratchpad atsarginę kopiją patvirtino: pakeisti lygiai du blokai (7 eilučių diff'as) —
eil. 128–129 (antraštė + pastraipa) ir eil. 179 (DUK atsakymas). Viskas kita byte-for-byte tas pats:
eil. 87–109 (F9 `silas-split__box`), eil. 192–194 (F8 pinigų sekcija), eil. 151 antraštė, eil. 73
grįžtančio nario nuoroda, hero SVG žiedas, DUK klausimas eil. 176, forma, apatinė juosta.

Trys `<!-- tracking: ... -->` žymos (`form_submitted`, `cookie_ack`, `bar_cta_click`) patikrintos
`grep` po keitimo — tose pačiose eilutėse (274, 293, 300), nepakitusios. `garden.css` ir `garden.js`
šio ciklo metu neliesti (jokia priežastis juos liesti — problema buvo tik teksto mazguose).
