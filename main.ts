// Two Lines to Your Past Self — entry program.
//
// Line 1 warns the past self about one specific moment (the umbrella
// left by the door before the 4 p.m. Jakarta flood); line 2 says why
// that moment mattered (the café, the napkin, the stranger who became
// the writer's wife). Writes exactly those two lines to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINES = [
  "Grab the umbrella by the door, because Jakarta floods at 4 p.m.",
  "You left it, ducked into a café to escape the rain, and the stranger who handed you a napkin is now your wife.",
] as const;

const entry = LINES.join("\n");

// Gate: 1–280 chars of UTF-8 text, not only whitespace, no trailing newline.
if (entry.length < 1 || entry.length > 280 || entry.trim().length === 0) {
  throw new Error(`entry length ${entry.length} is outside the 1–280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
