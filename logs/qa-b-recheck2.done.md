# qa-b-recheck2.done — TREČIAS nepriklausomas panašumo auditas po antro taisymo ciklo

**Data:** 2026-09-13 · **Vertintojas:** tas pats nepriklausomas vertintojas, 3 iteracija
**Rezultatas:** ✅ **6 PRIIMTA** (lg1, lg2, lg4, lg5, lg6, lg7) · ❌ **4 PERDARYTI** (lg3, lg8, lg9, lg10)
**Buvo po 2 audito:** 3 PRIIMTA / 7 PERDARYTI.
**Išvada įrašyta:** `qa/panasumo-auditas.md`, naujas skyrius **viršuje** — `# TREČIAS AUDITAS PO
ANTRO TAISYMO CIKLO (2026-09-13)`, poskyriai T.0–T.7.5.

---

## Checklistas

### 1. Įvesties medžiaga perskaityta
- [x] `qa/panasumo-auditas.md` skyriai **R.0–R.7.8** (antro audito kontekstas, S2b/S3 apibrėžimai, ribos)
- [x] `logs/fix-02-r2.done.md` (lg2)
- [x] `logs/fix-03-r2.done.md` (lg3)
- [x] `logs/fix-04-r2.done.md` (lg4)
- [x] `logs/fix-05-r2.done.md` (lg5)
- [x] `logs/fix-06-r2.done.md` (lg6)
- [x] `logs/fix-08-r2.done.md` (lg8)
- [x] `logs/fix-09-r2.done.md` (lg9)
- [x] Visų **10** variantų dabartinis `index.html` (F5/F8/F9 sekcijos + DUK + antraštės + poraštės)

### 2. S2b patikra („kiekvieną / naują X prieš … tikriname [rankomis]")
- [x] Apibrėžti 4 skeleto komponentai (a kiekybė / b „prieš"+pasirodymas / c tikrinimo veiksmažodis / d rankinis įrankis)
- [x] Kiekvienas iš 10 variantų įvertintas komponentais — lentelė **T.1**
- [x] **Rezultatas: 3 variantai (lg3, lg7, lg10) prieš ribą 1. ❌ RIBA NELAIKO — 2 per daug**
- [x] Užfiksuota, kad **leistas lg7 turi 2/4**, o blokuojami lg3 ir lg10 — **3/4** (todėl leisti silpnesnį ir blokuoti stipresnius būtų nenuoseklu)
- [x] ✅ Uždaryta sėkmingai: **lg2** (žodžio „prieš" faile nebėra visai), **lg4**, **lg6**

### 3. S3 patikra („matoma tik A, B" / „niekada C, D, E" / „ištrinti bet kada")
- [x] Kiekvienas variantas įvertintas pagal 3 elementus — lentelė **T.2**
- [x] **Rezultatas: 4 variantai (lg4, lg6, lg7, lg9) prieš ribą 2. ❌ RIBA NELAIKO — 2 per daug**
- [x] **lg9 — tikras pažeidimas:** eil. 179–181 turi visus tris elementus, pakeistos tik etiketės („viešai matoma" → „prieiga:", „niekada nerodoma" → „lieka tik tavo paskyroje"). R.7.7 reikalavo **vienos** eilutės
- [x] **lg6:215 — toleruojamas precedentas** (talono blanko fizinė logika; abu ankstesni auditai laikė švaria, teksto niekas nelietė — sprendimo nekeičiu)
- [x] ✅ Uždaryta sėkmingai: **lg5** (visas sąrašas → dvi kryžminės nuorodos, geriausias ciklo taisymas), **lg3** (dvi stovyklos → trys pakopos)

### 4. Naujų bendrų frazių paieška (ar r2 pakartojo r1 klaidą)
- [x] **TAIP — rastos 6 naujos bendros frazės** (po r1 buvo 3). Lentelė **T.3**:
  - **NN1** lg8:241 ↔ lg9:179 — „[kiti naudotojai] **mato** [A] **ir** [B]" — **abu r2**; buvo pasyvūs dvyniai, tapo aktyvūs dvyniai
  - **NN2** lg3:206 ↔ lg9:204 — „**Likusi informacija** … **tik tau**" — **abu r2**, skiriasi vienas veiksmažodis (stipriausias pažeidimas)
  - **NN3** lg2:127 ↔ lg8:241 — „**daugiau ten … nėra**" — lg8 atsiskyrė nuo lg9 ir prilipo prie lg2
  - **NN4** lg6:215 ↔ lg9:180 — „[trys laukai per kablelius] **lieka** [kur]"
  - **NN5** lg8:235 ↔ lg9:162 — „**Naujas/nauja** X **[pra/pe]reina** [filtravimą/validaciją]"
  - **NN6** lg1:177 ↔ lg3:238–239 — **N1 recidyvas**: R.7.2 liepė sąlyginį sakinį apie rodmens ateitį **išmesti**, o jis buvo tik **perkeltas** iš DUK į `dl` eilutę
- [x] **lg2 ↔ lg6 (F5 „spaustuvės / valymo" tema)** — specialiai palygintas: ✅ **ŠVARU**. lg2 kalba iš rezultato („neprikimba", „iškrenta savaime"), lg6 — iš grąžinimo su pastaba. Bendro judesio nėra
- [x] **lg3 ↔ lg5 ↔ lg9 (rodmenų / eilučių / nuorodų metaforos)** — specialiai palygintas: lg5 iš trejeto **iškrito galutinai**, bet **lg3 ↔ lg9 susiliejo** (NN2) — trejetas virto pora
- [x] Bendra priežastis įvardyta: taisymo agentai keitė **žodžius, o ne sakinio judesį**, ir nepriklausomai vienas nuo kito rinkosi tą patį pakaitalą iš to paties semantinio lauko

### 5. CSS / klasių / spalvų / šriftų regresijos (T.5)
- [x] **Nė vienas CSS ar JS failas antrame cikle nepaliestas** — patikrinta modifikavimo laikais: vėliausi `lg6/assets/style.css` 09-13 **06:40** ir `lg4/assets/garden.css` 09-13 **06:41**, abu **prieš** r2 pradžią (07:17); visi kiti 09-12
- [x] **Naujų CSS klasių nepridėta** — automatinė patikra per visus 10 variantų: lg2, lg4, lg5, lg6, lg9 turi **0** klasių be CSS taisyklės; lg3 keturios „našlaitės" yra senos, ne iš r2 (naujos eilutės naudoja esamas `pultas-timeline` / `pultas-timeline__row`)
- [x] **Naujų spalvų / šriftų nepridėta** (CSS neliestas, HTML'e naujų `style=` nėra)
- [x] **Klasių kolizijos tarp variantų: 1, ta pati — `.masthead` (lg1 + lg6).** Naujų nėra

### 6. Tracking patikra (T.5)
- [x] `<!-- tracking: … -->` žymų skaičiai **sutampa su R.5 lentele vienas į vieną**:
      lg1 **4** · lg2 **8** · lg3 **8** · lg4 **5** · lg5 **2** · lg6 **2** · lg7 **6** · lg8 **10** · lg9 **2** · lg10 **9**
- [x] Nė viena žyma nepašalinta, nepervadinta, ID nepakeisti
- [x] Gyvų GTM / Meta Pixel / OpenAI pikselių **nėra nė viename** (`grep`: `gtm-`, `googletagmanager`, `fbq`, `connect.facebook`, `dataLayer`, `openai`, `chatgpt` — **0 rezultatų**)
- [x] **Tracking rizikos antras ciklas nesukėlė**
- [x] Formos, `aria-*`, `id` reikšmės nekeistos; lg5 visi `#taisykles-*` ID ir nuorodos į juos vietoje

### 7. Ne F5/F8/F9 stebėjimai (T.4, į verdiktus neįtraukti)
- [x] „**tampa matomas/matoma**" F6 sekcijoje — lg1:190, lg5:294, lg7:153 (3 variantai). Neįtraukta: §7.0 kriterijus apibrėžtas tik F5/F8/F9, ir nė vienas mazgas nebuvo liestas
- [x] **S3c uodega** („be papildomų klausimų / paaiškinimų / prašymo") — lg9 išvalė ✔, liko lg1:352, lg4:82/90/165, lg5:328/379 prieš lg7:70 = **4/10** vietoje ribos 1. Laikausi antro audito sprendimo — **ne perdarymo pagrindas**
- [x] „**įtartinas**" lg9:163/199 ↔ lg10:240 — bendras žodis, ne judesys
- [x] **Dublikatų kriterijus** (lg1, lg2, lg4, lg7, lg10) — bendras **faktas**, ne sakinio judesys

### 8. Output
- [x] `qa/panasumo-auditas.md` — pridėtas skyrius **viršuje**, virš antro audito. `diff` prieš atsarginę kopiją: **+339 eilutės, –0 eilučių**. Abu ankstesni auditai (R.* ir §1–8 archyvas) **nepaliesti nė vienu simboliu**
- [x] Atsarginė kopija: `scratchpad/backup/panasumo-auditas.md.bak`
- [x] **T.0** trumpa suvestinė · **T.1/T.2** S2b/S3 patikros lentelės su ribų verdiktais · **T.3** naujų bendrų frazių lentelė (kaip R.3) · **T.6** galutinių verdiktų lentelė visiems 10 · **T.7.1–T.7.4** tikslios užduotys (failas, eilutė, kas keičiama) R.7.1–R.7.7 detalumu · **T.7.5** kosmetika
- [x] `logs/qa-b-recheck2.done.md` — šis failas

---

## Kas liko PERDARYTI ir kodėl (santrauka)

| Variantas | Eilutės | Priežastis | Apimtis |
|---|---|---|---|
| **lg9-prieiga** | 162, 179–181, 199, 204 | **Epicentras** — 4 iš 6 naujų bendrų frazių (NN1, NN2, NN4, NN5) + visi trys S3 elementai išliko, pakeistos tik etiketės. Vienintelis variantas, kurio taisymas padėtį **pablogino** | ~5 sakiniai |
| **lg3-pultas** | 206, 217, 220, 238–239, 270 | N1 recidyvas (NN6 — sakinys ne išmestas, o perkeltas), NN2 su lg9, S2b 3/4 komponentai F5 | ~4 mazgai |
| **lg8-vakaras** | 241, 258 | NN1 (su lg9) + NN3 (su lg2) viename sakinyje | **1 sakinys** |
| **lg10-atvirukas** | 207, 239–241 | S2b 3/4 komponentai — **stipresnis skeletas nei leistame lg7 (2/4)**. Dviejų ankstesnių priėmimų atšaukimas; abu ankstesni auditai perskaitė tik pirmą sakinio dalį ir nepastebėjo „tikriname … prieš jį paskelbdami" | **1 pastraipa** |

**Taisymo eiliškumas: lg9 → lg8 → lg3 → lg10.** lg9 yra keturių iš šešių naujų frazių šaltinis; kol
jis nepataisytas, lg3 ir lg8 taisyti beprasmiška.

## Svarbiausia rekomendacija kitam ciklui (T.7.0)

Du ciklai žlugo **tuo pačiu būdu**: agentas keitė **žodžius**, judesys liko, o naujas žodis
atsitiktinai sutapo su kito varianto žodžiu. Todėl į T.7.0 įrašyta **privaloma procedūra**:

1. **Prieš rašant** — perskaityti įvardytą „poros" varianto eilutę (ji nurodyta kiekvienoje užduotyje).
2. **Po parašymo** — `grep`'u patikrinti naują frazę **visuose kituose 9 variantuose**; jei randa — rašyti iš naujo.
3. **Nesirinkti pakaitalo iš to paties semantinio lauko.** „matosi tik" → „mato" **nėra** taisymas;
   „niekada nerodoma" → „lieka tik tavo paskyroje" **nėra** taisymas.

Be 2 punkto NN-ciklas kartosis ir trečią kartą.

## Neužbaigto darbo nėra

Auditas baigtas. Kitas žingsnis — trečias taisymo ciklas pagal `qa/panasumo-auditas.md` §T.7.
