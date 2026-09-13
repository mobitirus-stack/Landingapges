# Fix log — lg8-vakaras (QA §7.8)

**Statusas:** BAIGTA. Tikslinis taisymas — tekstas (S1–S5) + sekcijų perkėlimas į bento, kaip
nurodyta užduotyje. Prieš keičiant padaryta atsarginė kopija į scratchpad
(`index.html.bak`), po keitimo patikrinta `diff`'u prieš originalą — pakeista tik tai, kas
nurodyta žemiau, nieko daugiau.

## 1. Tekstas (`variacijos/lg8-vakaras/index.html`)

- **S1 (eil. ~225, € sekcija „Kiek tai kainuoja“):** išmesta sąlyginio būsimojo pažado schema
  „Jei kada nors atsirastų mokamas lygis, apie tai pasakysime čia... prieš tai, o ne po to, kai jau
  būsi įsirašęs.“ Pakeista lg8 savo „skaičiuok, kiek liko“ konstrukcija: „Vakaras — nemokamai.
  Skaičiuok kaip nori: šiandien nulis eurų, kitą savaitę irgi nulis.“
- **S1 (DUK „Ar tikrai nereikia mokėti?“):** atitinkamai atnaujintas atsakymas į „Ne. Nulis eurų —
  kaip parašyta aukščiau.“ (buvo tik nuoroda „ir tai pasakyta aukščiau, ne tik čia“, be schemos, bet
  neatitiko naujo teksto tono).
- **S2 (eil. ~231, A sekcija „Kas patenka į tvarkaraštį“):** išmesta „Kiekvienas naujas planas
  pereina filtravimą, prieš pasirodydamas tvarkaraštyje“ + priešprieša „ne tik ar jis parašė
  tekstą“. Perrašyta faktu + savaiminiu nuvertinimu (ta pati formulė, kuri jau veikia eil. 213):
  „Naujas planas filtravimą praeina per naktį — į tvarkaraštį jis pridedamas tik kitą rytą, ir tai
  užtrunka ilgiau, nei norėtume.“ Terminas „filtravimas“ paliktas — tai varianto priskirtas žodis
  (`config/terminu-zemelapis.md` 8 stulpelis).
- **S2 (DUK „Kas tikrina, ar kitoje pusėje yra tikras žmogus?“):** atsakymas perrašytas be
  „kiekvieną naują X pereina Y“ atgarsio: „Taip. Žr. filtravimo aprašymą aukščiau.“
- **S3 (eil. ~237, K sekcija „Kas mato tavo planą“):** išmestas dvipusis „matoma / nerodoma“ sąrašas
  ir lg7 parašas „be papildomo prašymo mums“. Pasakyta per tvarkaraščio metaforą, dviem trumpais
  sakiniais: „Tvarkaraštyje matosi tik pseudonimas ir amžiaus juosta. Miestas, paštas ir kombinacija
  ten nepasirodo niekada, o planą ištrini nustatymuose, kai tik nori.“
- **S4 (eil. ~242, D sekcijos antraštė):** „Jei dar dvejoji“ pakeista į „Klausimai, kol renkiesi
  vakarą“ — lg8 leidžiama išimtis (lg7) čia netaikoma, todėl antraštė privalėjo keistis.
- **S5 (eil. ~50, grįžtančio nario nuoroda):** „Jau turi planą? Prisijungti“ (klausimo forma)
  pakeista į „Grįžk prie savo plano“ (teiginio forma, be klausimo).

## 2. Struktūra — 3 sekcijos perkeltos į bento (`index.html` eil. ~210–226)

Perdėtos **trys** iš penkių identiško `h2`+pastraipa sekcijų — **Q** („Tvarkaraštis šią savaitę“),
**N** („Kodėl šiandien“) ir **€** („Kiek tai kainuoja“) — į vieną `l-board__grid` konteinerį, kur
kiekvienos turinys apvilktas jau egzistuojančiu `.c-block` (bazinis, be naujų modifikatorių) su
`--span-col`/`--span-row` custom properties, lygiai taip pat, kaip hero zonoje:
- Q blokas: `--span-col:2; --span-row:1`
- N blokas: `--span-col:2; --span-row:1`
- € blokas: `--span-col:4; --span-row:1` (per visą plotį, nes pinigų klausimas nusipelno akcento)

Kadangi CSS grid stiliai (`ui/board.css:202–221`) veikia tiesioginiams `.c-block` vaikams, o ne
`<section>` elementams, kiekvienas buvęs `<section aria-labelledby="...">` pakeistas į
`<div class="c-block" role="region" aria-labelledby="...">` — semantiškai lygiavertis landmark'as
(`role="region"` + `aria-labelledby`), tik apvalkalo žymė kita. **Susiejimas su `h2` `id` nepakeistas
nė viename** (`tvarkarastis-heading`, `kodel-heading`, `kaina-heading` — tos pačios reikšmės).

**A** („Kas patenka į tvarkaraštį“) ir **K** („Kas mato tavo planą“) sekcijos struktūriškai
**nepaliestos** — liko `<section class="l-shell l-stack">`, keitėsi tik jų tekstas (žr. §1).
Sekcijų **tvarka** nepakeista visame puslapyje: Q → N → € → A → K → D, lygiai kaip buvo.

Jokių naujų CSS klasių, jokių `ui/board.css` ar `ui/board.js` pakeitimų — patikrinta: šie du failai
tekstiniu `Edit`/`Write` įrankiu apskritai neatidaryti šioje sesijoje.

## Nekeista (patvirtinta diff'u ir grep'u)

`h1` klausimas „Kokį vakarą renkiesi šiandien?“, keturi pasirinkimo blokai su realiais `radio`
(`vakaro_tipas`), lentos persitvarkymo FLIP mechanika (`ui/board.js` nepaliestas), paletė
(`#3B2EDB`/`#C3F53C`/`#FF6B57`/`#F2F1FE`/`#1B1A33`), Fredoka + Plus Jakarta Sans, 28/6px kampai
(`ui/board.css` nepaliestas), forma ir jos laukai/`id`/`name`/validacija/`aria-*`. Visos šešios
`<!-- tracking: ... -->` žymos (`vakaro_tipas_pasirinktas`, `zingsnis_2_baigtas`,
`zingsnis_3_baigtas`, `isirasymo_forma_pateikta`, `isirasyta_sekme`, `slapukai_patvirtinti`)
patikrintos `grep`'u — visos šešios išliko, ID nepakeisti.

## Priėmimo kriterijus

- [x] S1 abi vietos (€ sekcija, DUK) nebeturi sąlyginio būsimojo pažado
- [x] S2 abi vietos nebeturi „kiekvienas naujas X pereina Y“ schemos nei „ne tik“ priešpriešos
- [x] S3 nebeturi dvipusio sąrašo nei lg7 frazės „be papildomo prašymo mums“
- [x] S4 antraštė pakeista (lg8 nėra tarp išimčių)
- [x] S5 pakeista į ne klausimo formą
- [x] Bent 3 iš 5 D-priešakinių sekcijų (Q, N, €) perkeltos į bento su `l-board__grid`/`.c-block`
      ir `--span-col`/`--span-row`, be naujų klasių, be CSS pakeitimų
- [x] Sekcijų tvarka ir `aria-labelledby` ryšiai nepakeisti
- [x] `ui/board.css`, `ui/board.js`, forma, radio blokai, paletė, šriftai — nepaliesti (diff/grep
      patikrinta)
