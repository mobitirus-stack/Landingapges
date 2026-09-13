# Fix log — lg7-kabinetas (QA §7.7)

**Statusas:** BAIGTA. Tikslinis taisymas — tik S1 ir S2, kaip nurodyta užduotyje. Prieš keičiant
padaryta atsarginė kopija į scratchpad (`lg7-index.html.bak`), po keitimo patikrinta `diff`'u prieš
originalą (3 pakeistos eilutės, nieko daugiau).

## Atlikti pakeitimai (`variacijos/lg7-kabinetas/index.html`)

- **S1 (eil. 144, Money_text):** išmesta sąlyginio būsimojo konstrukcija „Jei kada nors atsirastų
  mokamas sluoksnis, apie tai būtų parašyta čia, iš anksto — ne po to, kai jau būtum viduje.“
  Pakeista vienu uždarančiu sakiniu be sąlygos: „Kabinetas veikia be įmokos. Kitos kainos nebus.“
- **S1 (eil. 203, Faq_answer „Ar vėliau atsiras mokestis...“):** ta pati schema („Jei kas nors
  keistųsi, tai būtų parašyta čia, iš anksto“) pakeista uždarančiu sakiniu: „Ne. Kaina nesikeis.“
- **S2 (eil. 163, Review_text):** išmesta schema „Kiekviena byla, prieš pasirodydama kabinete,
  pereina rankinę peržiūrą.“ Perrašyta lg7 savu dviejų dalių sakiniu su dvitaškiu, be būdvardžių
  (nėra „rankinę“, nėra „kiekviena“): „Prieš pasirodydama: tikriname kreipinį, sritį ir
  pasikartojimą.“ Informacija (tikrinamas kreipinys, sritis ir ar byla nepakartotina) išlaikyta.

## S3 / S4 / S5 — sąmoningai NEPALIESTA

- **S3 (eil. 69–71, Privacy_root):** auditas aiškiai nurodo lg7 kaip **originalą** dvipusiam
  matomumo sąrašui ir sakiniui „Ištrynimas — vienas veiksmas, be paaiškinimų mums“ — šią išimtį
  (kartu su lg4) variantas pasilieka; kiti variantai (lg8, lg9, lg10) šio sakinio atsisako, ne lg7.
  Nieko čia nekeičiau.
- **S4 (eil. 183, „Jei dar dvejoji“):** audite pažymėta kaip leidžiama išimtis būtent lg7. Kadangi
  užduotis aiškiai nurodė „NEKEISK“ šiam variantui, palikau nepaliestą.
- **S5 (eil. 41, „Turi bylą? Įeiti.“):** jau skiriasi nuo kitų variantų (be žodžio „Jau“), audito ir
  užduoties nurodymu — nekeičiama.

## Nekeista (patvirtinta diff'u ir grep'u)

`Form_sentence` forma ir visi jos laukai/`id`/`name`/`aria-*`, `Figure` skaičiaus susisukimo
mechanika į „00“ ir `Figure_caption`, 3px juostos, 46rem juosta, 192px tarpai, `assets/study.css`,
`assets/app.js`, sekcijų tvarka. `<!-- tracking: form_submit_attempt -->`,
`<!-- tracking: form_submitted -->`, `<!-- tracking: cookie_choice -->` — visos trys žymos
patikrintos grep'u, nepaliestos, ID nepakeisti.

## Priėmimo kriterijus

- [x] S1 abi vietos (Money_text, DUK) nebeturi sąlyginio būsimojo pažado
- [x] S2 nebeturi „kiekviena byla... pereina rankinę peržiūrą“ schemos, pakeista dviejų dalių
      sakiniu su dvitaškiu
- [x] S3, S4, S5 nepaliesti — pagrįsta audito nurodymais aukščiau
- [x] CSS, JS, forma, sekcijų tvarka, tracking žymos — nepaliesti (diff/grep patikrinta)
