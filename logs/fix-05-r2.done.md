# Fix log — lg5-salyga, 2-as ciklas (QA §7.4 pakartotinis auditas)

**Statusas:** BAIGTA. Taisyta pagal `qa/panasumo-auditas.md` R.7.4 (kartu su R.7.0), atsižvelgus į
`config/diferenciacijos-matrica.md` DALIS 3 „## lg5" ir `config/terminu-zemelapis.md` 5 stulpelį.

## Pakeista

1. **eil. ~301 antraštė** — „Duomenų tvarkymas: kas matoma, kas ne" (dubliavo lg6:214) →
   „Duomenų tvarkymas: Taisyklių 2.1 ir 5 papunkčiai". Nebe priešprieša, o registro nuoroda.
2. **eil. ~303–305** — trys sunumeruoti S3 punktai (rodomi/nerodomi niekada/ištrinti bet kada, su
   pakartotais lauko vardais) sutraukti į **du** punktus be numeracijos ir be lauko vardų:
   - nuoroda, kur apibrėžta rodomų laukų apimtis (`#taisykles-2-1`);
   - nuoroda, kur aprašyta ištrynimo tvarka ir terminas (`#taisykles-5`).
   Žodžių „nerodomi niekada" nebeliko.
3. **eil. ~384 (Taisyklių 6 papunktis)** — „Kiekvienas naujas registro įrašas peržiūrimas prieš
   tampant matomu kitiems nariams." (pažodinis S2 griaučiai) → „Peržiūra atliekama kiekvieną darbo
   dieną. Iki peržiūros įrašas registre nerodomas." Antras sakinys apie pranešimą paliktas
   nepakeistas. Formuluotės „prieš tampant matomu kitiems" nebeliko.

## Nekeista (patikrinta diff'u)

- eil. ~178 (F8), eil. ~280–286 (F5), eil. ~82 (S5) — nepaliesta.
- `terms-ledger` lentelė, forma kaip 5-as punktas, visos `#taisykles-*` `id` reikšmės ir nuorodos į
  jas — identiškos prieš/po (patikrinta `diff`).
- `css/ledger.css` neatidarytas, nekeistas.
- Abi `<!-- tracking: ... -->` žymos (2 vnt.) — skaičius ir vieta nepakitę.
- Pilnas failo `diff` prieš atsarginę kopiją (`/private/tmp/.../scratchpad/backup/index.html.bak")
  parodė tik tris aukščiau išvardytus fragmentus — jokių kitų eilučių pakeitimų.

## Priėmimo kriterijus
- [x] Antraštė nebedubliuoja lg6:214
- [x] Privatumo sąrašas — du punktai, be lauko vardų, be „nerodomi niekada"
- [x] Taisyklių 6 papunktis — tvarka + terminas, be „prieš tampant matomu"
- [x] Tracking žymos ir `#taisykles-*` ID nepaliesti
