# fix-04.done — lg4-silas tikslinis taisymas (QA §7.4)

**Failai:** `variacijos/lg4-silas/index.html`, `variacijos/lg4-silas/assets/garden.css` (tik hero `.silas-scene*`).
**Pagrindas:** `qa/panasumo-auditas.md` §7.0 + §7.4 + §8, `config/diferenciacijos-matrica.md` DALIS 3 (lg4 kortelė),
`config/terminu-zemelapis.md` stulpelis 4.

## Jau buvo padaryta ankstesnės sesijos (nekartota)

CSS `border-radius` taisymas — visos 3 vietos (`garden.css` eil. 191 `.silas-mark__tag`, eil. 432
`.silas-consent button`, eil. 481 `.silas-bar a`) jau naudojo `var(--radius-organic)` prieš pradedant šį
darbą — patikrinta `grep`, patvirtinta, nieko papildomai nekeista.

## 1. Hero — vaizdinio motyvo pakeitimas

`index.html` eil. 46–54 + `garden.css` `.silas-scene__horizon` → `.silas-scene__ring`.

**Buvo:** viena banguota daugiakupra SVG `path` (bendrinis „kalvos siluetas“), fill vientisa `#22301F`,
`opacity: 0.5`.

**Tapo:** viena uždara kupolo formos `path` (`M0,220 C0,70 480,24 720,24 C960,24 1440,70 1440,220 Z`),
užpildyta `radialGradient` (`#F1F4EA` centre → `#C9D3C0` → `#22301F` pakraštyje) — vidus šviesesnis,
pakraštys tamsesnis, atitinka „ratas / užuovėja, į kurią iš lauko nesimato“. Klasė pervadinta į
`silas-scene__ring` (senas pavadinimas `silas-scene__horizon` niekur daugiau nenaudotas — patikrinta
`grep` per `index.html`, `garden.css`, `garden.js`, dangling nuorodų neliko).

**Išlaikyta nepakeista:** SVG/CSS metodas (jokios rastrinės nuotraukos), `--scroll-progress` mechanika
(`.silas-scene__evening` sluoksnis ir `garden.js` scroll listener'is liko visiškai nepaliesti — jie yra
atskiras `div`, nesusijęs su pakeista SVG), `min-height: 88vh`, tekstas apačioje, `.silas-scene-frame::after`
uždanga, kompozicijos plotis (100%, `height: 22vh`, `min-height: 120px`). Naudoti tik 3 iš 5 esamų tokenų
(popierius, salavijas, samana) — jokių naujų spalvų.

**Patikra realioje naršyklėje (headless Chrome, 1440×900 ir 390×844):** senasis ir naujasis variantas turi
tą pačią architektūrinę savybę — `.silas-page` stulpelis (`max-width: 62rem`) turi nepermatomą foną, todėl
fiksuota `.silas-scene` scena (taigi ir naujasis žiedas) matoma tik šoniniuose tarpuose virš `col-max` pločio
(desktop), o mobiliuose plotyse (< 992px) scena visai nesimato — patikrinau, kad tai identiškas elgesys BUVO
jau prieš mano keitimą (palyginau ekrano nuotraukas prieš/po), tad tai nėra regresija, o esama šablono
savybė, kurios keisti nebuvo nurodyta (paliesti tik `.silas-scene*` leidžiama, o matomumo architektūra yra
`.silas-page`/`.silas-scene-frame`, už leidžiamos srities ribų). **Tai pažymėtina kaip galimas atskiras
klausimas ateičiai** (šoninė hero animacija realiai matoma tik plačiuose ekranuose), bet šio fix'o apimtyje
netaisyta pagal griežtą apribojimą.

Pirmas SVG arc bandymas (`A 1288,1288 0 0 1 ...`) realiai nerenderino matomo lanko (arc kreipėsi netinkama
kryptimi) — pakeista į aiškų kubinį Bezier kupolą, patikrinta ekrano nuotraukoje, kad forma dabar matoma
tiksliai ten, kur anksčiau buvo banguota linija.

## 2. Tekstas — S1 (pinigai), eil. 189 ir DUK eil. 167

Pašalinta schema „Jei kada nors tai pasikeis, apie tai parašysime čia... ne laiške po to, kai jau esi rate“
iš abiejų vietų (pagrindinės pastraipos IR DUK atsakymo — DUK turėjo tą pačią schemą, nors §7.4 tiesiogiai
cituoja tik pagrindinę pastraipą; pataisiau abi, kad nebeliktų dubliuoto pažeidimo tame pačiame puslapyje).
Uždaryta **paneigimo** konstrukcija, naudojant matricos lg4 3-ią priskirtą frazę „čia niekas nedega“:

- Buvo (eil. 189): „...Jei kada nors tai pasikeis, apie tai parašysime čia, šiame puslapyje, prieš
  pasikeičiant — ne laiške po to, kai jau esi rate.“
- Tapo: „...ir nėra jokios priežasties dėl to skubėti, nes čia niekas nedega.“
- DUK (buvo): „...jei kada nors tai pasikeis, parašysime tai čia, iš anksto, ne po fakto.“
- DUK (tapo): „...ir tai nepriklauso nuo to, kiek laiko esi rate — nėra paslėpto sluoksnio, kurio lauktum
  vėliau.“ (sąmoningai kitokia formuluotė nei pagrindinėje pastraipoje, kad DUK neliktų to paties sakinio
  kartojimas.)

## 3. Tekstas — S2 (ravėjimas), eil. 124 ir DUK eil. 174

Žodis „ravėjimas“ paliktas. Pašalinta schema „Kiekviena nauja vieta rate pereina rankinį ravėjimą, prieš
tai, kai ją pamato kiti“ + sakinys „Tai atskiras darbas nuo skaičių žemiau“. Perrašyta ramiu pasakojamuoju
sakiniu be priešpriešos su robotu/algoritmu:

- Tapo (eil. 124): „Ravėjimas reiškia, kad kiekvieną naują vietą apžiūrime patys, ranka — patikriname, ar
  laiškų adresas tikras ir ar aprašymas neprimena kito, jau esančio rate. Taip rate lieka tik tos vietos,
  kurios yra tikros.“
- DUK atsakymas (eil. 174) turėjo tą pačią „prieš ją pamatydami kitiems“ schemą — irgi perrašytas, nors
  §7.4 tiesiogiai necituoja šios eilutės (proaktyvus taisymas dėl vidinio nuoseklumo, analogiškai S1 DUK
  patikrai): „Ravime rankomis — patikriname, ar laiškų adresas tikras ir ar aprašymas neprimena kito, jau
  esančio rate.“

## 4. S3 — nepakeista

`silas-split__box` dvipusis „Matoma kitiems / Nematoma niekam“ sąrašas (eil. 87–104) paliktas be pakeitimų —
lg4 yra viena iš dviejų leidžiamų išimčių (lg4 + lg7).

## 5. S4 — antraštė, eil. 146

„Jei dar dvejoji.“ → „Kelios smulkmenos prieš įstojant.“

## 6. S5 — grįžtančio nario nuoroda, eil. 68

„Jau esi rate? Įeiti.“ → „Jau esi rate — įeik čia.“ (nebe klausimo forma.)

## Kas NEPALIESTA (patikrinta)

- Sekcijų tvarka, forma (laukai, `id`/`name`/`required`/`minlength`/`autocomplete`), `garden.js`
  (`--scroll-progress`, slapto žodžio perjungimas, slapukų juosta, validacija) — nė vienas baitas.
- `<!-- tracking: form_submitted -->`, `<!-- tracking: cookie_ack -->`, `<!-- tracking: bar_cta_click -->` —
  visos trys žymos patikrintos `grep`, tose pačiose vietose, tuo pačiu pavadinimu.
- Paletė, Fraunces + Karla, `--space-*`, viena plati kolona, apatinė juosta — nepaliesta.
- CSS faile pakeista **tik** `.silas-scene__horizon` → `.silas-scene__ring` blokas (pavadinimas + opacity
  0.5→0.85 dėl naujo gradiento matomumo); jokia kita CSS eilutė nepaliesta.
- Jokių naujų spalvų, šriftų ar klasių vardų (išskyrus vieną pervadinimą hero viduje).

## Patikra po keitimo

`diff` prieš scratchpad atsarginę kopiją patvirtino: `index.html` pakito tik 6 vietose (hero SVG blokas,
S5 nuoroda, S2 pastraipa, S4 antraštė, 2 DUK atsakymai, S1 pastraipa — iš viso 7 diff hunk'ai), `garden.css`
pakito tik viename bloke (`.silas-scene__ring` pervadinimas + opacity). Visa kita — baitas į baitą tas pats.
Patikrinta ir realioje naršyklėje (headless Chrome screenshot'ai 1440×900 ir 390×844, prieš/po palyginimas).
