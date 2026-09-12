#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Landing page variacijos — runneris
# Visos operacijos vyksta TIK šiame aplanke.
# Reikalavimas: Claude Code CLI (`claude`) ir python3 (peržiūrai).
# ---------------------------------------------------------------------------
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

MAX_PARALLEL="${MAX_PARALLEL:-3}"
PORT="${PORT:-8080}"

# Modelių aliasai — keisk čia, jei nori kitų
M_LIGHT="${M_LIGHT:-haiku}"
M_MID="${M_MID:-sonnet}"
M_HEAVY="${M_HEAVY:-opus}"

mkdir -p analize variacijos qa logs config promptai

c_run() { # c_run <modelis> <log-vardas> <promptas>
  local model="$1" name="$2" prompt="$3"
  echo ">>> [$name] modelis=$model"
  claude -p "$prompt" \
    --model "$model" \
    --permission-mode acceptEdits \
    --add-dir "$ROOT" \
    2>&1 | tee "logs/$name.log"
}

need_claude() {
  command -v claude >/dev/null 2>&1 || {
    echo "KLAIDA: nerastas 'claude' CLI. Įdiek Claude Code ir pakartok."; exit 1; }
}

load() { cat "$1"; }

# --- fazė 1 ---------------------------------------------------------------
cmd_analyze() {
  need_claude
  [ $# -eq 3 ] || { echo "Naudojimas: ./run.sh analyze <URL1> <URL2> <URL3>"; exit 1; }
  local i=1
  for url in "$@"; do
    local p
    p="$(load promptai/01-analize.md | sed "s|{{URL}}|$url|g; s|{{N}}|$i|g")"
    c_run "$M_MID" "analize-$i" "$p" &
    i=$((i+1))
    while [ "$(jobs -rp | wc -l)" -ge "$MAX_PARALLEL" ]; do wait -n; done
  done
  wait
  echo ">>> Sintezė (modelis=$M_HEAVY)"
  c_run "$M_HEAVY" "sinteze" \
"Perskaityk analize/url-1.md, analize/url-2.md, analize/url-3.md ir CLAUDE.md.
Parašyk analize/sinteze.md: (1) bendras funkcinis sekcijų skeletas, aprašytas tik funkcijomis;
(2) sąrašas FORMA — NEKARTOJAME su visais paviršiaus elementais iš trijų puslapių;
(3) trys galimi pozicionavimo kampai. Necituok daugiau nei 3 žodžių iš eilės iš šaltinių.
Pabaigoje įrašyk logs/sinteze.done.md su priėmimo kriterijų checklistu."
}

# --- fazė 2 ---------------------------------------------------------------
cmd_matrix() {
  need_claude
  c_run "$M_HEAVY" "matrica" "$(load promptai/02-diferenciacija.md)"
}

# --- fazė 3 ---------------------------------------------------------------
cmd_build() {
  need_claude
  local targets
  if [ "${1:-all}" = "all" ]; then targets=$(seq -w 1 10); else targets="$*"; fi
  for n in $targets; do
    local nn; nn=$(printf "%02d" "$((10#$n))")
    local p
    p="$(load promptai/03-statyba.md | sed "s|{{NN}}|$nn|g")
---
SVARBU: savo varianto eilutę, kodinį vardą ir visus tokenus paimk iš config/diferenciacijos-matrica.md,
eilutė numeris $nn. Jokių kitų variantų aplankų neskaityk."
    c_run "$M_MID" "build-$nn" "$p" &
    while [ "$(jobs -rp | wc -l)" -ge "$MAX_PARALLEL" ]; do wait -n; done
  done
  wait
}

# --- fazė 4 ---------------------------------------------------------------
cmd_qa() {
  need_claude
  c_run "$M_LIGHT" "qa-a" \
"Vykdyk TIK DALĮ A iš promptai/04-qa.md. Štai pilnas promptas:
$(load promptai/04-qa.md)"
  c_run "$M_HEAVY" "qa-b" \
"Vykdyk TIK DALĮ B iš promptai/04-qa.md. Štai pilnas promptas:
$(load promptai/04-qa.md)"
}

cmd_fix() {
  need_claude
  [ $# -ge 1 ] || { echo "Naudojimas: ./run.sh fix <NN> [NN ...]"; exit 1; }
  for n in "$@"; do
    local nn; nn=$(printf "%02d" "$((10#$n))")
    c_run "$M_MID" "fix-$nn" \
"Perskaityk qa/panasumo-auditas.md ir qa/mechanine-patikra.md, sekciją apie variantą $nn.
Ištaisyk TIK tai, kas ten nurodyta kaip PERDARYTI arba PRIVALOMA TAISYTI.
Nekeisk nieko, kas nepaminėta. Laikykis promptai/03-statyba.md reikalavimų ir savo eilutės
config/diferenciacijos-matrica.md. Pabaigoje atnaujink VARIANT.md ir įrašyk logs/fix-$nn.done.md."
  done
}

# --- pagalbinės -----------------------------------------------------------
cmd_serve() {
  echo "Peržiūra: http://localhost:$PORT/variacijos/"
  python3 -m http.server "$PORT"
}

cmd_status() {
  echo "== Analizės =="; ls -1 analize 2>/dev/null || echo "(tuščia)"
  echo "== Variantai =="
  for d in variacijos/*/; do
    [ -d "$d" ] || continue
    printf "%-28s html:%s css:%s VARIANT.md:%s\n" "$(basename "$d")" \
      "$([ -f "$d/index.html" ] && echo + || echo -)" \
      "$([ -f "$d/assets/style.css" ] && echo + || echo -)" \
      "$([ -f "$d/VARIANT.md" ] && echo + || echo -)"
  done
  echo "== QA =="; ls -1 qa 2>/dev/null || echo "(tuščia)"
  echo "== Baigti agentai =="; ls -1 logs/*.done.md 2>/dev/null | wc -l
}

cmd_clean() {
  read -r -p "Ištrinti variacijos/, qa/, logs/ turinį? (taip/ne) " a
  [ "$a" = "taip" ] || { echo "Atšaukta."; exit 0; }
  rm -rf variacijos/* qa/* logs/*; echo "Išvalyta."
}

usage() {
cat <<'EOF'
Naudojimas: ./run.sh <komanda>

  analyze <URL1> <URL2> <URL3>   1 fazė: 3 lygiagretūs agentai + sintezė
  matrix                         2 fazė: diferenciacijos matrica (1 agentas, opus)
  build [all|NN ...]             3 fazė: puslapių statyba (po MAX_PARALLEL lygiagrečiai)
  qa                             4 fazė: mechaninė patikra + panašumo auditas
  fix <NN ...>                   perdarymo ciklas pagal QA verdiktą
  serve [PORT=8080]              vietinė peržiūra naršyklėje
  status                         ką jau turime
  clean                          išvalyti rezultatus

Aplinkos kintamieji: MAX_PARALLEL (3), PORT (8080), M_LIGHT/M_MID/M_HEAVY
EOF
}

case "${1:-}" in
  analyze) shift; cmd_analyze "$@" ;;
  matrix)  cmd_matrix ;;
  build)   shift; cmd_build "$@" ;;
  qa)      cmd_qa ;;
  fix)     shift; cmd_fix "$@" ;;
  serve)   cmd_serve ;;
  status)  cmd_status ;;
  clean)   cmd_clean ;;
  *)       usage ;;
esac
