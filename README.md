# Landing page variacijos — runneris

Paruošta aplinka, kurioje Claude Code orkestruoja agentus ir pastato 10 tarpusavyje nesusiejamų
landing page variacijų pagal 3 referencinius URL.

## 1. Paleidimas (vieną kartą)

```bash
bash setup.sh                  # sukurs ~/Desktop/darbai/Landing page variacijos
cd ~/Desktop/darbai/"Landing page variacijos"
```

Jei Desktop vadinasi kitaip arba nori kitos vietos:

```bash
TIKSLAS="/kelias/iki/Desktop" bash setup.sh
```

**Windows:** paleisk per Git Bash arba WSL. Tas pats `setup.sh` veikia, jei Desktop yra
`C:\Users\<vardas>\Desktop` arba OneDrive Desktop.

Reikalavimai: Claude Code CLI (`claude`) ir `python3` (tik peržiūrai).

## 2. Darbo eiga

```bash
./run.sh analyze https://a.lt https://b.lt https://c.lt   # 1 fazė: 3 agentai + sintezė
./run.sh matrix                                           # 2 fazė: diferenciacijos matrica
./run.sh build all                                        # 3 fazė: 10 puslapių, po 3 lygiagrečiai
./run.sh qa                                               # 4 fazė: patikra + panašumo auditas
./run.sh fix 03 07                                        # perdarymo ciklas pagal verdiktą
./run.sh serve                                            # peržiūra http://localhost:8080
./run.sh status                                           # ką jau turime
```

Ciklas `qa → fix → qa` kartojamas, kol visi 10 variantų gauna PRIIMTA.

## 3. Kur kas yra

| Failas | Ką daro |
|---|---|
| `CLAUDE.md` | nekintamos taisyklės: aplanko ribos, modelių ir effort lentelė, agentų kiekio logika |
| `promptai/00-MASTER.md` | pilnas užduoties promptas — visos 4 fazės, techniniai ir turinio reikalavimai |
| `promptai/01-analize.md` | promptas 3 analizės agentams |
| `promptai/02-diferenciacija.md` | promptas art direction agentui (čia sprendžiasi unikalumas) |
| `promptai/03-statyba.md` | promptas vieno puslapio statybai |
| `promptai/04-qa.md` | mechaninė patikra (Haiku) + sprendiminis auditas (Opus) |
| `config/dizaino-kryptys.md` | 10 krypčių su paletėmis, šriftais, hero tipais, judesiu, kodo konvencijomis |
| `config/draudziamu-zodziu-sarasas.md` | klišės, bendriniai klasių vardai, vizualiniai šablonai |

## 4. Resursų logika

| Fazė | Modelis | Agentų |
|---|---|---|
| Analizė | Sonnet | 3 lygiagrečiai |
| Sintezė | Opus | 1 |
| Diferenciacijos matrica | Opus | 1 |
| Statyba | Sonnet | 10, po 3 vienu metu |
| Mechaninė patikra | Haiku | 1 |
| Panašumo auditas | Opus | 1 |
| Perdarymas | Sonnet | pagal poreikį |

Keisti galima aplinkos kintamaisiais: `MAX_PARALLEL`, `M_LIGHT`, `M_MID`, `M_HEAVY`, `PORT`.

## 5. Kada sustoti

Projektas baigtas, kai `qa/panasumo-auditas.md` rodo, kad visos 45 variantų poros gavo verdiktą
„ne ta pati komanda“, nė vienas variantas nesiejamas su referenciniais URL, ir `logs/` turi visų
agentų `.done.md` failus.
