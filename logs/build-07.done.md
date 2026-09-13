# build-07.done.md — `lg7-kabinetas`

**Statusas:** Užbaigta. Statyba + realaus naršyklės QA + pataisymai vienoje sesijoje.

## Ką padariau

1. Perskaičiau pilnai: `CLAUDE.md`, `promptai/03-statyba.md`, `analize/sinteze.md` (F1–F17 + FORMA —
   NEKARTOTI), `config/diferenciacijos-matrica.md` (eilutė #7 visose 14 ašyse + DALIS 1, 4, 5),
   `config/terminu-zemelapis.md` (stulpelis #7), `config/draudziamu-zodziu-sarasas.md`.
2. Parašiau `VARIANT.md`: spalvos/tipografija/layout/principai/drąsa (Žingsnis 1), savikritika prieš
   kodą (Žingsnis 2), pilnas turinys (Žingsnis 3).
3. Parašiau kodą: `index.html`, `assets/study.css`, `assets/app.js` (Žingsnis 4).
4. Realus naršyklės testas (Playwright + Chromium, `file://`, be tinklo): 360/768/1024/1440px,
   konsolė, forma (klaidos + sėkmė + fokusas), slapukų juosta + `localStorage`, klaviatūros `Tab`
   tvarka, `prefers-reduced-motion: reduce`, WCAG kontrastas.
5. Rastos ir ištaisytos 3 realios klaidos (žr. žemiau), vienas perteklinis elementas pašalintas,
   viskas užrašyta `VARIANT.md` Žingsnis 5.

## Rasti ir ištaisyti defektai (prieš priimant darbą atliktu)

1. **Stambus skaičius apskritai nesimatė.** `@keyframes` naudojo `translateY(-900%)` manant, kad tai
   -9 skaitmenų aukščiai; iš tikrųjų CSS transform procentai skaičiuojami nuo **paties elemento** (10
   skaitmenų juostos) dydžio, todėl skaičius nuslinkdavo toli už matomos srities. Pataisyta į
   `translateY(-9em)`. Patikrinta Playwright'u (bounding rect + `getComputedStyle`) prieš ir po.
2. **WCAG kontrastas.** `--patina` (#5F8C72) ant `--ink` (#2A211B) duoda ~4.12:1 — žemiau 4.5:1
   reikalavimo. Buvo naudota CTA mygtuko tekstui, klaidoms, nuorodoms. Pataisyta: CTA mygtukas dabar
   `--bone`/`--ink` pora (12.75:1), klaidos `--bone` (12.75:1), nuorodos `--bone-dim` (6.65:1),
   `--bone-faint` skaidrumas pakeltas `.42`→`.55` (3.44:1 → ~4.85:1). Patina liko akcentu ten, kur
   kontrasto riba jam netaikoma arba jis ją atitinka (didelis tekstas, focus žiedas, ribos).
3. **„Sakinys pirmame ekrane" (ašis 9).** Pradinis tarpų derinys reiškė, kad „Prašymas" prasidėdavo
   ~1090px gylyje. Suspaudžiau tarpus tik kritiniame take (Nav→Mark→Privacy→Form) iki 0, palikdamas
   pilną 96/192px ritmą tolimesnėms sekcijoms — „Prašymas" dabar tiksliai ties 900px riba.

## Vienas pašalintas perteklinis elementas

Matomos mažos etiketės po kiekvienu formos lauku („kreipinys", „amžius" ir t. t.) dubliavo tai, ką jau
sako patys sakinio žodžiai. Paverstos `sr-only` (liko prieinamumo medyje, dingo vizualiai); varnelės
etiketė („.") liko matoma, nes tai sakinio taškas, ne dublis. Detaliai — `VARIANT.md` Žingsnis 5.

## Patikra prieš priėmimo kriterijus (`promptai/03-statyba.md`)

- [x] Planas ir savikritika prieš kodą — `VARIANT.md` Žingsniai 1–2
- [x] Spalvos/šriftai/hero/CTA/sekcijų tvarka atitinka matricos eilutę #7 — `#2A211B/#372C24/#EFE6D8/
      #5F8C72/#574A3F`, Gloock+Jost, hero=stambus skaičius, CTA=įrašomos eilutės sakinyje, seka
      H→P(skaičius)→K→FORM→€→M→A→Į→Q→D→R→L→C
- [x] Visas tekstas tikras, terminija tik iš stulpelio #7 (patikrinta `grep`, žr. žemiau)
- [x] Nėra nė vieno žodžio/hex/šrifto iš draudžiamų sąrašų (patikrinta `grep` prieš §1–§9 ir §7 hex/šriftus)
- [x] Klasės CSS-modulių stiliumi (`Panel_root`/`Figure_value` tipo — `Mark_title`, `Figure_value`,
      `Form_sentence`, `Field_root`, `Faq_item` ir t. t.), jokių draudžiamų bendrinių vardų
- [x] 360px be horizontalaus scroll (patikrinta visoms 4 plotmėms), klaviatūra pereinamas visas puslapis
- [x] Konsolė švari (0 `console`/`pageerror`), nuorodos veikia, forma validuoja + rodo sėkmę
- [x] `<title>` 36 simb., `meta description` 129 simb. (≤60/≤155)
- [x] Vienas judesio momentas — reelinis „00" susiformavimas užkrovus, `prefers-reduced-motion` išjungia
- [x] Pašalintas vienas perteklinis elementas, užrašyta kas ir kodėl

## Terminijos ir draudimų `grep` patikra (rezultatai tušti = gerai)

- Draudžiami hex (`#12101a` ir kt. iš `analize/sinteze.md` §2.1): 0 atitikmenų.
- Draudžiami šriftai (Bricolage Grotesque, Archivo, Playfair Display): 0 atitikmenų.
- Draudžiamos CSS klasės (`hero`, `container`, `wrapper`, `btn*`, `card`, `section*`, `cta` ir kt.): 0.
- Bendrinės klišės (§1, §9): 0 atitikmenų.
- Kitų 9 variantų prekės ženklų vardai/šaknys: 0 atitikmenų.
- Kitiems variantams priskirti terminai tai pačiai sąvokai (`narys`, `privatumas`, `nemokamai`,
  „amžiaus grupė", `rėžis`, `patvirtinu/patvirtinimas`, `sistema`, `platforma`, `sprendim*`,
  `vartotoj*`): 0 atitikmenų.
- Mūsų stulpelio #7 terminai (`prašymas`, `byla`, `lankytojas`, `kabinetas`, `sutarimas`, `pašnekesys`,
  `įsipareigojimas`, `peržiūra`, `kreipinys`, `susisiekimo adresas`, `įėjimo žodis`, `sritis`, `amžius`,
  `be įmokos`, `neviešumas`) — visi naudojami, patikrinta paskirtis atitinka savo sąvoką.
- Vienintelė sąmoninga išimtis: poraštės nuoroda „Privatumo politika" — standartinis teisinio dokumento
  pavadinimas (F11), naudojamas visų 10 variantų vienodai; turinyje sąvokai #15 naudojamas tik
  „neviešumas". Paaiškinta `VARIANT.md` Žingsnis 5, p. 5.

## Failų dydžiai

`assets/study.css` ~12.2KB, `index.html` ~11.2KB, `assets/app.js` ~2.8KB — gerokai po 60KB/1.5MB
biudžetų. Šriftai (Gloock 400, Jost 300/500 — 3 svoriai iš 2 šeimų) kraunami iš Google Fonts CDN.

## Ribos, kurių laikiausi

- Rašiau tik į `variacijos/lg7-kabinetas/` ir `logs/`.
- Neskaičiau ir nežiūrėjau jokio kito `variacijos/lgN*` aplanko turinio (tik `ls` sąrašą, kad
  patikrinčiau, ar `lg7-kabinetas` jau egzistuoja).
- Nieko nesiunčiau iš referencinių URL.
- Matrica nebuvo prieštaringa savo esme — vienintelė įtampa (ašis 5 „tik 32/96/192" vs. ašis 9 „be
  scroll") išspręsta dokumentuotu inžineriniu sprendimu (0 tarpas kritiniame take), ne matricos
  ignoravimu — žr. `VARIANT.md` Žingsnis 5, p. 3. `logs/build-07-BLOCKED.md` nereikėjo.

## Kas liko nepaliesta

Naujas statinis puslapis be backend'o — jokio esamo GTM/Meta/OpenAI pixel kodo šiame aplanke nėra ir
nebuvo liesta jokia produkcinė failų sistema už `variacijos/lg7-kabinetas/` ribų. `tracking:` komentarai
(`form_submit_attempt`, `form_submitted`, `cookie_choice`) yra vietos rezervavimo placeholder'iai pagal
`promptai/03-statyba.md` reikalavimą, ne realūs analitikos iškvietimai.
