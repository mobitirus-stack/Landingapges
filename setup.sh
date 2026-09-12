#!/usr/bin/env bash
# Sukuria ~/Desktop/darbai/Landing page variacijos ir perkelia ten visą runnerio rinkinį.
# Naudojimas: bash setup.sh   (paleisti iš atsisiųsto aplanko)
set -euo pipefail

SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Desktop aptikimas: EN / LT / macOS / Linux
if [ -n "${TIKSLAS:-}" ]; then
  DESK="$TIKSLAS"
elif [ -d "$HOME/Desktop" ]; then
  DESK="$HOME/Desktop"
elif [ -d "$HOME/Darbalaukis" ]; then
  DESK="$HOME/Darbalaukis"
elif [ -d "$HOME/OneDrive/Desktop" ]; then
  DESK="$HOME/OneDrive/Desktop"
else
  echo "Nerastas Desktop aplankas. Nurodyk rankiniu būdu:  TIKSLAS=/kelias bash setup.sh"; exit 1
fi

DST="$DESK/darbai/Landing page variacijos"
mkdir -p "$DST"

for d in promptai config analize variacijos qa logs; do mkdir -p "$DST/$d"; done

cp -n "$SRC/CLAUDE.md"            "$DST/" 2>/dev/null || true
cp -n "$SRC/README.md"            "$DST/" 2>/dev/null || true
cp -n "$SRC/run.sh"               "$DST/" 2>/dev/null || true
cp -n "$SRC"/promptai/*.md        "$DST/promptai/" 2>/dev/null || true
cp -n "$SRC"/config/*.md          "$DST/config/" 2>/dev/null || true

chmod +x "$DST/run.sh"

echo "Paruošta: $DST"
echo
echo "Toliau:"
echo "  cd \"$DST\""
echo "  ./run.sh analyze <URL1> <URL2> <URL3>"
