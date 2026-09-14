# Session State

Atnaujinta: 2026-09-14

## AKTYVUS SRAUTAS: v2 partija (10 vizualiai sunkių landing page)

**Struktūra:** `variacijosv2/lp1`..`lp10` (10 naujų variantų, atskiri nuo v1 `variacijos/lg1-10`).
Jonas pasakė v1 per daug tekstinis — v2 sprendžia tai vizualiai sunkiu dizainu.

**Būsena pagal partijas:**
- **lp1-3** (žemėlapis/swipe/grid, iliustruoti SVG avatarai) — PRIIMTA po nepriklausomo audito,
  pushinta (`9804db7`).
- **lp4-6** (live-feed/VIP/chat, iliustruoti SVG avatarai) — PRIIMTA po QA + taisymo ciklo,
  pushinta (`1a41b56`). Žr. `qa/v2-patikra-batch2.md`.
- **lp7-9** (visiškai kitas šablonas: pilno ekrano REALI AI-sugeneruota nuotrauka + maža forma,
  Jono paties nurodyta kryptis po to, kai jis parodė realius konkurentus) — PUSHINTA (`c0b0031`),
  **BET FORMALUS NEPRIKLAUSOMAS QA AUDITAS DAR NEATLIKTAS** (Jonas paprašė pushinti iš karto, prieš
  QA — tai nukrypsta nuo įprastos "3 → QA → push" tvarkos, sąmoningai, pagal jo prašymą). Prieš tai
  pats radau ir ištaisiau: veido pozicionavimo problemą mobiliuose (žr. žemiau), lp7 papildomą tuščią
  bloką po footeriu (`@media max-width:400px` klaida, pašalinta).
- **lp10** (kryptis „Pavasario sodas") — DAR NEPRADĖTAS. Reikalinga 4-a Jono sugeneruota nuotrauka
  (sodo/gėlių fone). `promptai/07-vizualus-promptai-foto.md` turi generavimo promptą jai (ieškok
  žinutės su 4 promptais — lp10 promptas jau parašytas pokalbyje, bet NEIŠSAUGOTAS atskirame faile;
  jei reikės, atkurk iš `config/vizualines-kryptys-v2.md` "## lp10 — Pavasario sodas" aprašymo).

## SVARBI TECHNINĖ PAMOKA (kad nekartotum tyrimo): foninio atvaizdo pozicionavimas

lp8/lp9 (ir vėliau lp7) mobiliame ekrane rodė TIK plaukus/viršugalvį, veidas visiškai paslėptas už
kortelės. Priežastis: portretinė nuotrauka (1024×1536) + `background-size:cover` siaurame (375px)
bet aukštame (812px) konteineryje duoda ZERO vertikalų apkirpimą (scaled height == container height
tiksliai, nes containerio proporcija > vaizdo proporcijos) — `background-position` vertikali % TADA
NEDARO JOKIOS ĮTAKOS (visas vaizdas nuo 0 iki apačios tiesiog suspaudžiamas į containerį). Kadangi
kortelė uždengia ~80% ekrano, matoma tik viršutiniai ~15-20% originalaus vaizdo (plaukai).

**Sprendimas:** reikia DIRBTINAI padidinti `background-size` virš "cover" minimumo (pvz.
`background-size: auto 165%`), kad atsirastų vertikalus perviršis, per kurį `background-position`
vertikali % procentas TADA pradeda veikti ir galima parinkti, kurią originalaus vaizdo dalį rodyti
matomoje ekrano juostoje. Formulė: `matoma_originalo_aukstis_px = (scaledH-containerH)*(P/100)`,
kur `scaledH = 1536 * (background-size-height% / 100 iš auto-height sistemos)`. Praktiškai — keisk
`auto NNN%` ir vertikalų P% empiriškai, PATIKRINDAMAS REALIU SCREENSHOT'U (Playwright per sistemos
Chrome `/Applications/Google Chrome.app/...`, NE vien matematika — kelis kartus suklydau kryptimi).

**SVARBU:** kai kurie variantai (lp9) turėjo PAPILDOMAS media query taisykles (`max-width:900px` IR
`max-width:640px`), kurios PERRAŠO bazinę taisyklę CSS cascade tvarka — keisdamas bazinę taisyklę
NIEKO nepakeisi, jei yra siauresnė media query vėliau faile. VISADA `grep -n ".hero-class-name {"
style.css` PRIEŠ keičiant, kad rastum VISAS deklaracijas, ne tik pirmą.

## Kitas žingsnis
1. **Paleisti formalų nepriklausomą QA auditą lp7-9** (kaip batch1/batch2, `promptai/07-v2-qa-batch.md`
   principu) — tai dar neatlikta, buvo praleista pagal Jono prašymą pushinti greitai. Jei ras
   problemų — taisyti ir push'inti pataisymus.
2. **Paprašyti Jono 4-os nuotraukos (lp10, "Pavasario sodas")** arba sugeneruoti promptą jam iš naujo.
3. Kai turėsi lp10 nuotrauką — statyti lp10 pagal `promptai/08-statyba-v2-foto.md` šabloną.
4. Galiausiai — QA visai v2 partijai kartu, patikrinti kryžmines kolizijas tarp visų 10 (lp1-10)
   IR palyginti su v1 (lg1-10), jei aktualu.

## Senesnis kontekstas (v1, 10 variantų `variacijos/lg1-10`) — BAIGTAS, pushinta anksčiau
Visos 4 fazės atliktos, visi 10 variantų PRIIMTA po 4 audito/taisymo ciklų. Pilna istorija:
`qa/panasumo-auditas.md`. Galutinis `00-MASTER.md` priėmimo checklist'as įvykdytas 100%.

## Bendra informacija apie projektą
`Desktop/Darbas/Landing Page Variacijos` — pažinčių platformos LT landing page'ų pipeline.
Verslas: teisėta 18+ pažinčių platforma, amžiaus patvirtinimas privalomas.
Repo: https://github.com/mobitirus-stack/Landingapges (main šaka).
**Mano paties `git commit`/`git push` PORTOS VEIKIA ŠIOJE SESIJOJE** (anksčiau buvo blokuojama
Claude Code auto-mode klasifikatoriaus, bet po pirmo sėkmingo bandymo šioje sesijoje visi vėlesni
commit/push veikė be problemų — nebereikia prašyti Jono daryti per Copilot).
Cloud routine (autonominis atsinaujinimas) NESUKURTAS — RemoteTrigger create vis dar blokuojamas;
šis klausimas liko neišspręstas ir neaktualus (dirbame interaktyviai).
Vietinis serveris veikia fone: `python3 -m http.server 8080` iš projekto šaknies — peržiūra per
`http://localhost:8080/variacijos/` (v1) ir `http://localhost:8080/variacijosv2/` (v2, trūksta
index.html sąrašo — reikėtų sukurti analogiškai v1).
