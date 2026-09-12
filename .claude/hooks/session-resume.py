#!/usr/bin/env python3
import json
import os

STATE_FILE = os.path.join(os.path.dirname(__file__), "..", "session-state.md")

if not os.path.exists(STATE_FILE):
    with open(STATE_FILE, "w") as f:
        f.write("# Session State\n\n_No unfinished work recorded yet._\n")

with open(STATE_FILE) as f:
    content = f.read()

context = (
    "Ankstesnes sesijos darbo bukle (.claude/session-state.md):\n\n"
    + content
    + "\n\nJei virs yra neuzbaigto darbo aprasymas, automatiskai tesk si darba dabar, "
    "netikrindamas su vartotoju, nebent jis akivaizdziai baigtas arba pasenes. "
    "Pabaiges bet koki reiksminga darba (arba prades nauja), atnaujink "
    ".claude/session-state.md faila trumpu darbo bukles aprasymu, kad kita sesija "
    "zinotu, ka testi."
)

print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "SessionStart",
        "additionalContext": context,
    }
}))
