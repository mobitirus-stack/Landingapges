# Darbo taisyklės ir tęstinumas

## Kalba
Jonas rašo lietuviškai ir atsakymų tikisi **lietuviškai**.

## Darbo tęstinumas tarp sesijų

Šiame projekte veikia SessionStart hook'as (`.claude/hooks/session-resume.py`), kuris kiekvienos naujos sesijos pradžioje (įskaitant po `/clear`, `/compact` ar sesijos atsikrovimo) automatiškai įkelia `.claude/session-state.md` turinį ir nurodo tęsti neužbaigtą darbą be papildomo klausimo.

**Kiekvieną kartą, kai baigi reikšmingą darbo etapą arba sesija artėja į pabaigą**, atnaujink `.claude/session-state.md`:
- ką ką tik padarei ir kas liko neužbaigta,
- koks konkretus kitas žingsnis,
- svarbūs kontekstiniai faktai (su kuria variacija / failu dirbama, kokie ID ar keliai svarbūs),
- **kodėl** priimtas netrivialus sprendimas (kad kita sesija nekartotų to paties tyrimo).

Kai darbas visiškai baigtas, įrašyk "Nėra neužbaigto darbo.", kad failas neaugtų be reikalo.

## Kaip dirbti su užduotimis

- **Kiekvienai užduočiai pats parašyk aiškų, išsamų promptą** — kad nepridarytum klaidų.
- **Pats pasirink agentų kiekį ir juos savarankiškai kontroliuok.** Agentų nenaudok ten, kur užduotis mechaninė ir vienareikšmė — tai tik degina kreditus ir prideda klaidos rizikos. Naudok, kur reikia plačios paieškos ar lygiagretaus tyrimo.
- **Modelį ir effort parink pagal sudėtingumą:** lengvoms užduotims — pigesnius modelius, sunkioms — stipresnius. Svarbu ne greitis, o kokybė.
- **Prieš keisdamas — išsiaiškink.** Pirmiausia inventorizuok esamą būseną, tada keisk.
- **Po kiekvieno keitimo — patikrink `diff`'u**, kad pasikeitė tik tai, ką ketinai keisti, ir pasakyk tai aiškiai.
- **Darykis atsargines kopijas** į scratchpad prieš keisdamas produkcinius failus.

## Kritiškai svarbu

- **Netrikdyk tracking steko** (GTM, Meta Pixel, ChatGPT/OpenAI pixel). Jei lieti failą, kuriame jie yra — po keitimo patikrink, kad ID nepaliesti, ir tai pasakyk.
- **Jonas suka mokamas reklamas į šiuos puslapius.** Klaida kainuoja realius pinigus. Kompromisus vertink konversijų, o ne kodo grožio požiūriu.
- **Į klausimą „ar tai tikra problema?" atsakyk pirmiau, nei pradedi taisyti.** Jonas dažnai sako „atsakyk, kol kas nieko nedaryk".

---

# Šio projekto specifinės taisyklės — 10 landing page variacijų

Šis skyrius papildo (nekeičia) taisykles aukščiau. Galioja orkestratoriui (man) ir kiekvienam sub-agentui, kurį paleidžiu šiai užduočiai. Pilnas užduoties aprašymas: `promptai/00-MASTER.md`.

## Nekintamos ribos

1. **Visi pakeitimai — TIK šio projekto aplanke** (`./`). Jokio skaitymo/rašymo už jo ribų, nei `~`, nei sisteminių aplankų.
2. **Kiekvienam sub-agentui — pats parašau pilną, savarankišką promptą** (vaidmuo, kontekstas, įvestis, užduotis, ribos, output formatas, priėmimo kriterijai). Neperduodu žalio Jono teksto.
3. **Jokio darbo be patikros.** Kiekvienas fazės rezultatas praeina QA prieš priimant tolimesnę fazę.
4. Dokumentacija, promptai, komentarai — lietuviškai. Kodas (klasės, kintamieji, failų vardai) — angliškai.

## Modelio ir agentų kiekio pasirinkimas šiai užduočiai

| Fazė | Modelis | Agentų | Kodėl |
|---|---|---|---|
| Analizė (3 URL) | Sonnet, vidutinis effort | 3 lygiagrečiai | daug teksto, aiškus formatas, be kūrybos |
| Sintezė | Opus, aukštas | 1 | vientisas sprendimas |
| Diferenciacijos matrica | Opus, aukštas | 1 | čia sprendžiasi unikalumas — nedalinti kelioms agentams, gausis vidurkis |
| Statyba (10 puslapių) | Sonnet, aukštas | 10, po ≤3 lygiagrečiai | kryptis jau nustatyta, reikia daug kodo |
| Mechaninė patikra | Haiku, žemas | 1 | deterministinis checklistas |
| Panašumo auditas | Opus, aukštas | 1 (atskiras nuo kūrėjo) | reikia sprendimo, ne checklisto |
| Perdarymo ciklas | Sonnet, aukštas | pagal poreikį | tikslinis pataisymas |

Užduotis, kuri reikalauja vientiso kūrybinio sprendimo (matrica, art direction, galutinis verdiktas), visada — **1 agentas**, niekada kelių vidurkis. Kiekvienas lygiagretus statybos agentas rašo tik į savo izoliuotą `variacijos/NN-.../` aplanką ir neskaito kitų variantų aplankų.

## Bendravimo protokolas su sub-agentu

```
# VAIDMUO
# KONTEKSTAS (kas jau padaryta, kur failai)
# ĮVESTIS (tikslūs failų keliai)
# UŽDUOTIS (numeruoti žingsniai)
# RIBOS IR DRAUDIMAI
# OUTPUT (tikslus failo kelias ir struktūra)
# PRIĖMIMO KRITERIJAI (checklistas, kurį agentas pats užpildo pabaigoje)
```

Agentas baigia darbą įrašydamas `logs/<agentas>.done.md` su užpildytu checklistu — be šio failo darbas nelaikomas atliktu.

## Aplanko struktūra

```
Landing Page Variacijos/
├─ CLAUDE.md              ← šis failas
├─ README.md, run.sh, setup.sh   ← originalus bash runneris (žr. pastabą žemiau)
├─ promptai/              ← 00-MASTER, 01-analize, 02-diferenciacija, 03-statyba, 04-qa
├─ config/                ← dizaino-kryptys.md, draudziamu-zodziu-sarasas.md
│                            (vėliau čia atsiras diferenciacijos-matrica.md, terminu-zemelapis.md)
├─ analize/               ← 3 URL analizės + sinteze.md
├─ variacijos/            ← 10 galutinių variantų aplankų
├─ qa/                    ← auditų ataskaitos
└─ logs/                  ← agentų darbo žurnalai (*.done.md)
```

**Pastaba dėl `run.sh`/`setup.sh`:** šie skriptai buvo parašyti darant prielaidą, kad orkestratorius yra atskiras `claude -p` subprocesas, paleistas iš terminalo be interaktyvios sesijos. Šioje sesijoje orkestratorius esu aš pats (jau veikianti Claude Code sesija) — fazes vykdau tiesiogiai per savo Agent įrankį pagal `promptai/*.md`, o ne per `run.sh` subprocesus. `run.sh`/`setup.sh` paliekami repo tik jei Jonas norės paleisti šį pipeline'ą savarankiškai per terminalą be manęs.

## Galutinis deployment kelias

Referenciniai URL (analizei): `https://daddywonderland.love/landing-a`, `/landing-b`, `/landing-c`.
Galutinė vieta: pagrindinis puslapis `vyrukambarys.lt`, o 10 variantų — `vyrukambarys.lt/lg1` ... `/lg10`. Variantų aplankų pavadinimai (`variacijos/`) turi atspindėti šią schemą, kad perkėlimas į serverį būtų tiesioginis.
