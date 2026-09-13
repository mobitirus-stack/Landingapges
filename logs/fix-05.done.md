# Fix log — lg5-salyga (QA §7.5)

**Statusas:** BAIGTA. Agentas, kuris tai vykdė, nutrūko dėl session usage limito prieš parašydamas
šį done.md, bet visi faktiniai pakeitimai `index.html` buvo jau atlikti. Orkestratorius (aš)
patikrino likusį turinį eilutė po eilutės prieš įvykius ir patvirtino atitikimą audito §7.5.

## Patikrinta ir patvirtinta

- **S1 (pinigai, eil. ~178):** „Mokamo lygio registre nėra. Registro punktų numeracija niekada
  neperrašoma, tik pridedama...“ — grynai registro kalba, be „jei kada nors atsirastų“ schemos.
  Kryžminė nuoroda į `#taisykles-4-2` išlaikyta.
- **S2 (moderavimas, eil. ~284–293):** „Kaip tikriname, kad kitoje pusėje yra žmogus“ dabar remiasi
  nuoroda į `#taisykles-6` (du kartus), be „žmogus, ne robotas“ priešpriešos.
- **S3 (privatumas, eil. ~303–305):** dvipusis „viešai/niekada“ sąrašas pakeistas trimis numeruotais
  registro punktais su kryžminėmis nuorodomis (`#taisykles-2-1`, `#taisykles-5`) — atitinka varianto
  savo taisyklę „visada nurodyk, kur tai parašyta“.
- **S5 (eil. ~82):** „Turite registro įrašą — prisijunkite čia.“ — nebe klausimo forma, kreipinys
  „jūs“ išlaikytas.

## Nekeista (patvirtinta)
`css/ledger.css` neliestas, `terms-ledger` lentelė, forma kaip 5-as punktas, išsiskleidimo judesys,
visos `#taisykles-*` nuorodos, Atkinson Hyperlegible, 16px minimumas — visi identiški prieš/po.

## Priėmimo kriterijus
- [x] S1 nebeturi „jei kada nors atsirastų“ schemos
- [x] S2 nebeturi „žmogus, ne robotas“ priešpriešos
- [x] S3 nebeturi dvipusio „viešai/niekada“ sąrašo bendra forma
- [x] S5 nebe klausimo forma
- [x] CSS/JS/forma/tvarka nepaliesta
