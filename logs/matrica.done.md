# logs/matrica.done.md — Fazė 2 (diferenciacijos matrica) baigta

**Agentas:** kūrybos vadovas (1 agentas, Opus, aukštas effort).
**Data:** 2026-09-12.
**Promptas:** `promptai/02-diferenciacija.md` + orkestratoriaus išplėstinė užduotis.

## Sukurti / papildyti failai

| Failas | Statusas |
|---|---|
| `config/diferenciacijos-matrica.md` | **naujas** — 6 dalys: funkcinis skeletas, 14 ašių × 10 variantų, detaliosios kortelės, §7 patikra, savikritika, kryžminė patikra |
| `config/terminu-zemelapis.md` | **naujas** — 15 sąvokų × 10 variantų + naujų sąvokų registras statybos agentams |
| `config/draudziamu-zodziu-sarasas.md` | **papildytas** — esamos §1–§6 nepaliestos; pridėta §7 (67 punktai iš `analize/sinteze.md`), §8 (8 šablonai iš `promptai/02-diferenciacija.md`), §9 (papildomos klišės, 5 pogrupiai), §10 (kaip tikrinama) |
| `logs/matrica.done.md` | **naujas** — šis failas |

Jokie kiti failai nekeisti. `analize/`, `promptai/`, `config/dizaino-kryptys.md` — neliesti.

## Dešimt variantų

| # | Aplankas | Prekės ženklas | Kampas | Kryptis |
|---|---|---|---|---|
| 1 | `lg1-matmuo` | Matmuo | A | matavimo / specifikacijos lapas |
| 2 | `lg2-lenta` | Lenta | C | fizinė skelbimų lenta |
| 3 | `lg3-pultas` | Pultas | C | prietaisų skydelis |
| 4 | `lg4-silas` | Šilas | B | sodo / lauko dienoraštis |
| 5 | `lg5-salyga` | Sąlyga | A | sąlygų registras |
| 6 | `lg6-talonas` | Talonas | A | rizografinė spauda, nukerpamas talonas |
| 7 | `lg7-kabinetas` | Kabinetas | B | uždaras kabinetas |
| 8 | `lg8-vakaras` | Vakaras | C | vakaro planuoklis |
| 9 | `lg9-prieiga` | Prieiga | C | komandų terminalas |
| 10 | `lg10-atvirukas` | Atvirukas | B | pastelinis atvirukų dėklas |

Kampų paskirstymas: A — 3 (lg1, lg5, lg6) · B — 3 (lg4, lg7, lg10) · C — 4 (lg2, lg3, lg8, lg9).

## Ką pakeičiau `config/dizaino-kryptys.md` atžvilgiu ir kodėl

Pradinės kryptys nesuartintos — visos dešimt liko atskiros, bet septynios pakoreguotos, nes pažeidė
draudimus arba buvo numatytosios reikšmės. Pilnas pagrindimas — matricos dalyje 5.

1. **01 → lg1:** pašalintas **Archivo** (draudžiamas — referencinė šrifto pora), pakeistas **Chivo**.
2. **03 → lg3:** pašalintas violetinis `#7B61FF`, judesys pakeistas iš skaitiklio į rodyklės reakciją
   (skaitiklis buvo per arti referencinio gyvo skaitiklio, sinteze p. 40–42).
3. **04 → lg4:** pašalintas auksinis `#E0A32E` (per arti draudžiamo `#f0a93c`), pridėtas CTA modelis
   „nuolatinė apatinė juosta“ (be jo vienos kolonos kryptis pažeistų „veiksmas be scroll“).
4. **05 → lg5:** pašalintas žalias `#0E9F6E` (per arti draudžiamo `#4bc98a`); teksto šriftas pakeistas
   į **Atkinson Hyperlegible**, nes skaitomumas yra šio varianto argumentas.
5. **06 → lg6:** **kryptis perdaryta iš esmės** — trys kolonos su tarpinėmis linijomis pažeidė §7.3
   (laikraštinis šablonas); dabar rizografija dviem rašalais, be tarpinių linijų; pašalintas `#B4471F`
   (per arti terakotos iš §7.1).
6. **07 → lg7:** pašalintas **Playfair Display** ir auksas `#B99A55`; fonas pakeltas iš beveik juodo
   į riešutmedį `#2A211B`; plaukiniai skirtukai pakeisti 3px juostomis.
7. **09 → lg9:** fonas pakeltas iš `#12100E` į atpažįstamai pilką `#2B2B28` (buvo per arti draudžiamo
   `#12101a`); spausdinimo animacija užkrovus pašalinta, judesys perdarytas į reakciją.

Papildomai: hero tipas „split kairė tekstas / dešinė vaizdas“ **sąmoningai nenaudojamas** nė viename
variante — jis per arti `analize/sinteze.md` §2.3 p. 24 draudimo.

---

# PRIĖMIMO KRITERIJAI

- [x] **10 variantų × 14 ašių, jokių pasikartojimų stulpeliuose** — visos 14 ašių pateiktos atskiromis
      lentelėmis (`DALIS 2`), kiekviena su 10 skirtingų reikšmių.
- [x] **Nė vienas šriftas nenaudojamas dviejuose variantuose** — 20 šeimų, patikrinta programiškai:
      20 unikalių. Bricolage Grotesque ir Archivo nenaudojami niekur.
- [x] **Nė viena hex reikšmė nenaudojama dviejuose variantuose** — 52 hex, patikrinta programiškai:
      52 unikalios, 0 pasikartojimų, 0 sutapimų su 11 draudžiamų reikšmių ir su §7.1 / §8 atitikmenimis.
- [x] **Kiekvieno varianto sekcijų tvarka skiriasi nuo visų kitų** — 10 sekų, patikrinta programiškai:
      10 unikalių; nė viena nesutampa su referenciniais modeliais A (p. 38) ir B (p. 39).
- [x] **Nė vienas variantas neatitinka §7 šablonų** — punktas po punkto `DALIS 4`. Vienintelė išimtis
      (monospace `lg9-prieiga`) pagrįsta turinio reikalavimu: visas variantas yra komandų seansas,
      o ne „mažos etiketės monospace'u“ kaip dekoras.
- [x] **Terminų žemėlapis: 15 sąvokų × 10 skirtingų žodžių** — patikrinta programiškai: visos 15 eilučių
      turi po 10 reikšmių, kiekvienoje eilutėje 10 unikalių.
- [x] **Savikritikos atsakymai užrašyti visoms 10 krypčių** — `DALIS 5`. Visų dešimties pirmas atsakymas
      buvo **TAIP**; kiekvienai užrašyta, kas konkrečiai pakeista ir kodėl, ir antras atsakymas — **NE**.
- [x] **Visi kodiniai vardai formatu `lgN-<vardas>`** — `lg1-matmuo` … `lg10-atvirukas`, atitinka
      deployment schemą `vyrukambarys.lt/lg1` … `/lg10`.

## Papildomos savikontrolės, kurių prašyta nebuvo, bet kurios atliktos

- [x] 10 skirtingų CTA modelių ir 10 skirtingų **formos pradžios laukų** (draudimas p. 28).
- [x] Nė vienas variantas neskaido formos į 3 žingsnius ir neturi „N iš 3“ juostos (p. 26–27).
- [x] Fono charakteris: tiksliai 2 šviesūs / 2 tamsūs / 2 spalvoti / 2 tekstūriniai / 2 gradientiniai.
- [x] 10 skirtingų judesio momentų, 6 iš jų — reakcija į vartotojo veiksmą; `prefers-reduced-motion`
      išjungia visus.
- [x] 10 skirtingų kodo konvencijų **ir** 10 skirtingų failų struktūrų (ne tik klasių stilių).
- [x] Draudžiami bendriniai klasių vardai perkelti į matricą kaip privaloma statybos sąlyga.

## Ką turi žinoti fazės 3 orkestratorius

1. Kiekvienam statybos agentui reikia perduoti **tik jo varianto eilutę** iš `DALIS 2` + jo kortelę iš
   `DALIS 3` + **visą** `DALIS 1` (skeletas) + `config/terminu-zemelapis.md` + `config/draudziamu-zodziu-sarasas.md`.
   Kitų variantų kortelių agentui rodyti nereikia ir nereikėtų — kitaip atsiras vidurkinimas.
2. Kelios funkcijos (F8 pinigų klausimas, F9 privatumas, F13 sėkmės būsena, F16 dvejojančių kelias)
   referenciniuose puslapiuose **neegzistuoja** — tai mūsų pranašumo taškai ir jų negalima praleisti
   „dėl trumpumo“.
3. `config/terminu-zemelapis.md` turi **naujų sąvokų registrą** — agentas, kuriam prireikia naujos sąvokos,
   privalo ją įrašyti **prieš** rašydamas tekstą, kad kiti agentai nepasiimtų to paties žodžio.
4. lg6 slapukų juosta yra **puslapio viršuje** — tai sąmoningas sprendimas, ne klaida; jis kartu duoda
   unikalią sekcijų seką ir atsisako referencinio uždelsto apatinio langelio.
5. lg9 yra vienintelis variantas, kuriam leidžiamas monospace. Jokiam kitam — net mažoms etiketėms.
