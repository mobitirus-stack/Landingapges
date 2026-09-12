# MASTER PROMPTAS — 10 nesusiejamų landing page variacijų

> Šis promptas yra orkestratoriaus instrukcija. Orkestratorius jo NEPERDUODA sub-agentams žalio —
> jis pagal jį generuoja atskirus promptus kiekvienai fazei (failai `promptai/01`–`promptai/04`).

---

## VAIDMUO

Tu esi orkestratorius: performance marketingo dizaino studijos vadovas. Studijos reputacija remiasi
tuo, kad kiekvienas klientas gauna savo vizualinę tapatybę, kurios niekas nesupainios su kito kliento
darbu. Klientas jau atmetė šabloniškus pasiūlymus ir moka už poziciją, ne už template'ą.

## TIKSLAS

Iš 3 pateiktų referencinių URL išgauti tik **veikimo logiką** (ką ir kodėl puslapis daro su lankytoju)
ir pagal ją pastatyti **10 landing page variacijų**, kurios:

- turi tą patį komercinį tikslą ir tą patį funkcinį skeletą;
- **neturi nė vieno bendro paviršiaus elemento** — nei teksto, nei spalvos, nei šrifto, nei išdėstymo,
  nei klasių pavadinimų, nei failų struktūros;
- yra nesusiejamos tarpusavyje **ir** su referenciniais URL. Testas: jei tris variantus parodytum
  nepriklausomam vertintojui ir paklaustum „ar šiuos padarė ta pati komanda?“ — atsakymas turi būti „ne“.

## ĮVESTIS

- 3 URL (pateikia klientas prieš 1 fazę).
- `config/dizaino-kryptys.md` — 10 iš anksto atskirtų dizaino krypčių su tokenais.
- `config/draudziamu-zodziu-sarasas.md` — bendras žodynas, kurio niekas nekartoja.

---

## FAZĖ 1 — ANALIZĖ (3 lygiagretūs agentai, Sonnet, vidutinis effort)

Kiekvienas agentas gauna po vieną URL. Promptas: `promptai/01-analize.md`.

Iš kiekvieno URL užfiksuojama:

**A. Komercinė mechanika**
1. Kam skirtas puslapis (auditorija, jos būsena prieš įėjimą, iš kur ateina srautas).
2. Pasiūlymo esmė viena pastraipa: kas siūloma, už ką mokama, koks pažadas.
3. Konversijos tikslas ir jo tipas (forma / skambutis / pirkimas / registracija / atsisiuntimas).
4. CTA logika: kiek CTA, kur jie, ar keičiasi formuluotė, ką žada paspaudimas.
5. Įtikinėjimo grandinė: kokia tvarka pateikiami argumentai ir kokį prieštaravimą kiekvienas uždaro.
6. Socialinio įrodymo tipai (atsiliepimai, skaičiai, logotipai, sertifikatai, garantijos).
7. Skubos / trūkumo / rizikos mažinimo mechanizmai.
8. Kainodaros pateikimas, jei yra.
9. Formos laukai ir kiek informacijos prašoma kokiame etape.

**B. Struktūra**
10. Sekcijų sąrašas tvarka, kiekvienai — funkcija vienu sakiniu (ne turinys, o funkcija).
11. Hero tipas, ekrano aukščio naudojimas, kas matoma be scroll.
12. Navigacijos elgsena, sticky elementai, mobilus elgesys.

**C. Techninė pusė**
13. Greitis, vaizdų svoris, kas stabdo, ar yra layout shift.
14. SEO meta, structured data, heading hierarchija.
15. Prieinamumo klaidos.

**D. Kritika**
16. 5 silpnos vietos, kurias mūsų variacijos privalo padaryti geriau.

**GRIEŽTAS DRAUDIMAS:** analizėje neperrašinėti referencinio teksto. Antraštes, šūkius, atsiliepimus,
CTA formuluotes aprašyti **tik funkciškai** („antraštė žada rezultatą per laiko vienetą“), niekada
necituojant daugiau nei 3 žodžių iš eilės. Jokių ekrano kopijų kopijavimo į variantus.

**Output:** `analize/url-1.md`, `analize/url-2.md`, `analize/url-3.md`

Po to **1 agentas (Opus, aukštas effort)** daro sintezę → `analize/sinteze.md`:
- bendras funkcinis skeletas, kurį perimame (sekcijų funkcijų sąrašas);
- sąrašas „FORMA — NEKARTOJAME“: viskas, kas yra paviršius (spalvos, šriftai, išdėstymai, frazės,
  vizualiniai sprendimai), su aiškiu draudimu;
- 3 galimi pozicionavimo kampai, kuriuos galima paskirstyti tarp variantų.

---

## FAZĖ 2 — DIFERENCIACIJOS MATRICA (1 agentas, Opus, aukštas effort)

Promptas: `promptai/02-diferenciacija.md`. Vienas agentas, nes tai vientisas kūrybinis sprendimas —
padalinus keliems agentams gausime dešimt vidutiniškų vienas į kitą panašių krypčių.

Sukuriama `config/diferenciacijos-matrica.md` — lentelė, kur 10 variantų × 14 ašių, ir **jokia reikšmė
nesikartoja stulpelyje**:

| # | Ašis | Reikalavimas |
|---|---|---|
| 1 | Dizaino kryptis | 10 skirtingų (iš `config/dizaino-kryptys.md`) |
| 2 | Bazinė paletė | skirtingi atspalviai; bet kurių dviejų variantų pagrindinės spalvos turi skirtis ≥60° atspalvio rate arba ryškiai šviesumu |
| 3 | Fono charakteris | šviesus / tamsus / spalvotas / tekstūrinis / gradientinis — be pasikartojimų daugiau nei 2 kartus |
| 4 | Tipografinė pora | 10 skirtingų porų, nė vienas šriftas nesikartoja dviejuose variantuose |
| 5 | Tipo skalė ir ritmas | skirtingi santykiai (1.200 / 1.250 / 1.333 / 1.414 / 1.500 …) |
| 6 | Tinklelio logika | 12-col / 8-col / asimetrinis 2/3 / bento / vienos kolonos / split-screen / horizontalus |
| 7 | Hero tipas | 10 skirtingų (žr. žemiau) |
| 8 | Sekcijų tvarka | kiekvienas variantas turi kitą argumentų eiliškumą |
| 9 | CTA modelis | inline forma / mygtukas į modalą / sticky juosta / kalendoriaus blokas / žingsninė forma / pokalbio laukas / telefono kvietimas / kainų kortelė / pirmas ekranas su vienu lauku / apačios kvietimas |
| 10 | Kampų / šešėlių kalba | 0px aštrūs / 2px / 4px / pilnai apvalinti / mišrūs / hard shadow / be šešėlių / vidiniai rėmeliai |
| 11 | Judesys | kiekvienam variantui **vienas** orkestruotas momentas, skirtingas kiekviename; jokio „fade-up ant kiekvienos sekcijos“ |
| 12 | Vaizdinė medžiaga | fotografija / iliustracija / geometrija / diagramos / tipografija kaip vaizdas / piktogramos / tekstūra / be vaizdų |
| 13 | Balso tonas | 10 skirtingų (dalykinis, šiltas, tiesmukas, ekspertinis, pasakojantis, techniškas, kviečiantis, ramus, energingas, minimalistinis) |
| 14 | Kodo konvencija | BEM / utility / semantinės klasės / data-atributai / CSS moduliai stiliumi / skirtingi failų vardai ir struktūra |

Hero tipai (po vieną variantui): centrinė antraštė be vaizdo · split kairė tekstas / dešinė vaizdas ·
full-bleed fotografija su viršuje uždėtu tekstu · forma pirmame ekrane · skaičius/rezultatas kaip
pagrindinis vizualas · horizontali marquee juosta su pasiūlymu · kortelių dėklas · klausimas + atsakymo
pasirinkimas · tipografinis plakatas be jokio UI · gyvas mini demo / skaičiuoklė.

Kiekvienam variantui matrica taip pat priskiria: **prekės ženklo vardą, jo kilmės istoriją viena eilute,
pozicionavimo kampą ir auditorijos pjūvį.** Skirtingas kampas = natūraliai skirtingi žodžiai.

**Priėmimo kriterijus fazei 2:** orkestratorius pats peržiūri matricą ir grąžina perdirbti, jei bent
viena ašis turi pasikartojimų arba jei bent viena kryptis atitinka bet kurį iš šių AI-šablonų:
- kreminis fonas (~#F4F1EA) + kontrastingas serifas + terakotinis akcentas (~#D97757);
- beveik juodas fonas + viena rūgštinė žalia / vermilion spalva;
- SaaS kortelių rinkinys: vienodai apvalintos kortelės, tas pats minkštas pilkas šešėlis, gradientinės
  dėmės kaip dekoras;
- laikraštinis layout su plaukiniais brūkšniais ir 0 apvalinimu;
- template chrome: ALL-CAPS eyebrow virš kiekvienos antraštės, „A · B · C“ su vidurio taškais,
  „ŽODIS — frazė“ su em brūkšniu, monospace mažoms etiketėms, „→“ mygtukų tekstų gale.

Jei kryptis naudoja vieną iš šių — ji turi būti pakeista arba pagrįsta konkrečiu briefo reikalavimu.

---

## FAZĖ 3 — STATYBA (10 agentų, po 3 lygiagrečiai, Sonnet, aukštas effort)

Promptas: `promptai/03-statyba.md`, generuojamas atskirai kiekvienam variantui su jo matricos eilute.

**Darbo eiga viename variante (agentas privalo laikytis eiliškumo):**

1. **Planas prieš kodą.** Agentas parašo `variacijos/NN-vardas/VARIANT.md`: 4–6 įvardintos hex spalvos,
   šriftai ir jų vaidmenys, layout koncepcija proza + ASCII wireframe, lygiavimas, 3 principai kas šį
   puslapį daro unikalų, ir vienas sakinys „kur išleidžiama drąsa“.
2. **Savikritika plano stadijoje.** Agentas pats atsako: „jei tą patį briefą duotum bet kuriam kitam
   dizaineriui, ar jis atsidurtų čia pat?“ Jei taip — perdaro tą dalį ir užrašo, ką pakeitė ir kodėl.
3. **Tik po to — kodas.**

**Techniniai reikalavimai (vienodi visiems, nes tai kokybės grindys, ne stilius):**

- Vienas `index.html`, `assets/style.css`, esant reikalui `assets/app.js`. Be framework'ų, be build
  žingsnio, be CDN priklausomybių išskyrus šriftus.
- Šriftai: Google Fonts arba sisteminiai. Kiekvienam variantui — tik jo poros šriftai.
- Semantinis HTML: vienas `<h1>`, teisinga antraščių hierarchija, `<main>`, `<section>`, `<nav>`,
  `<footer>`, `<form>` su `<label>` kiekvienam laukui.
- Responsive: 360 / 768 / 1024 / 1440 px. Mobile-first CSS. Jokio horizontalaus scroll 360px pločiu.
- Prieinamumas: matomas `:focus-visible`, teksto kontrastas ≥4.5:1, `alt` visiems prasmingiems
  vaizdams, `prefers-reduced-motion` gerbiamas, formos klaidos tekstu, ne tik spalva.
- Greitis: be blokuojančių skriptų, vaizdai `loading="lazy"` (išskyrus hero), `width`/`height`
  nurodyti, CSS <60KB, bendras puslapio svoris <1.5MB.
- SEO: unikalus `<title>` (≤60 simb.), `meta description` (≤155 simb.), `og:` rinkinys, `lang`,
  canonical, JSON-LD `Organization` + `Product`/`Service`.
- Forma: veikia be backend'o — `action="#"`, JS validacija, sėkmės būsena puslapyje. Vietoje
  analitikos — komentaras `<!-- tracking: -->` su įvykių pavadinimais.
- Vaizdai: jokių atsisiuntimų iš referencinių svetainių. Naudoti SVG, CSS, arba `assets/` placeholder'ius
  su aprašytu turiniu `VARIANT.md` faile.

**Turinio (copy) reikalavimai:**

- Pilnas tekstas, jokio lorem ipsum, jokio `[čia bus tekstas]`.
- Antraštė, paantraštė, 3–6 sekcijų turinys, FAQ (5 klausimai), CTA tekstai, formos etiketės, footer.
- Kiekvienas variantas turi savo terminiją tam pačiam dalykui. Jei vienas sako „konsultacija“, kitas
  sako „pokalbis“, trečias — „įvertinimas“. Sinonimų žemėlapis laikomas `config/terminu-zemelapis.md`
  ir agentas privalo į jį įrašyti savo pasirinkimus prieš rašydamas tekstą.
- Draudžiama: bet kuri frazė iš `config/draudziamu-zodziu-sarasas.md`, bet koks 4+ žodžių sutapimas su
  kitu variantu ar referenciniu URL, tuščios frazės tipo „inovatyvūs sprendimai“, „mes tikime“.
- CTA sako, kas įvyks paspaudus, aktyvia forma. Veiksmo pavadinimas nesikeičia per visą srautą.

**Output vienam variantui:** `variacijos/NN-vardas/` su `index.html`, `assets/`, `VARIANT.md`,
ir `logs/build-NN.done.md` su užpildytu checklistu.

---

## FAZĖ 4 — QA IR KRYŽMINIS PANAŠUMO AUDITAS

**4a. Mechaninė patikra (1 agentas, Haiku, žemas effort)** — `promptai/04-qa.md`, dalis A:
- ar visi 10 aplankų turi reikiamus failus;
- ar `<title>` ir `meta description` unikalūs visuose 10;
- ar nėra pasikartojančių CSS klasių pavadinimų tarp variantų;
- ar nėra pasikartojančių šriftų;
- ar nėra tų pačių hex reikšmių dviejuose variantuose;
- ar HTML validus, ar nėra sulaužytų nuorodų;
- 4+ žodžių n-gramų sutapimų paieška tarp visų 10 tekstų ir referencinių analizių;
- rezultatas → `qa/mechanine-patikra.md` su konkrečiais failų ir eilučių numeriais.

**4b. Sprendiminis auditas (1 agentas, Opus, aukštas effort)** — dalis B:
- „ar šiuos padarė ta pati komanda?“ testas kiekvienai iš 45 variantų porų (10 po 2), verdiktas
  TAIP/NE + priežastis. Bet koks TAIP = variantas grąžinamas perdirbti;
- ar kuris nors variantas atpažįstamai seka referencinį URL;
- ar kuris nors nukrito į AI-šablonų sąrašą iš 2 fazės;
- kokybės verdiktas kiekvienam: ar tai atrodo kaip sąmoningas dizainas ar kaip template'as;
- rezultatas → `qa/panasumo-auditas.md` su sprendimu PRIIMTA / PERDARYTI + tikslia užduotimi.

**4c. Perdarymo ciklas.** Kiekvienas PERDARYTI verdiktas grįžta tam pačiam variantui su nauju promptu,
kuriame nurodyta tiksliai kas keičiama ir kas lieka. Ciklas kartojamas kol visi 10 gauna PRIIMTA.
Iteracijų skaičius neribojamas — kokybė svarbiau už laiką.

---

## GALUTINIS PRIĖMIMAS

Projektas laikomas baigtu, kai:

- [ ] 10 aplankų, kiekvienas atsidaro naršyklėje be klaidų konsolėje;
- [ ] `qa/panasumo-auditas.md`: visos 45 poros — „ne ta pati komanda“;
- [ ] nė vienas variantas nesiejamas su referenciniais URL nei tekstu, nei vizualiai;
- [ ] nėra pasikartojančių šriftų, spalvų, klasių pavadinimų, antraščių formuluočių;
- [ ] visi 10 praeina 360px mobilų testą ir klaviatūros navigaciją;
- [ ] `qa/santrauka.md` turi lentelę: variantas → kryptis → paletė → šriftai → hero tipas → CTA modelis;
- [ ] `logs/` turi visų agentų `.done.md` failus su užpildytais checklistais.
