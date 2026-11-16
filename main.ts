// Pinocchio Chases His Maker — entry program for ai-excited-01.
//
// The artwork ships in this repo as entry.png. All this program does is
// place a copy of it where the judge expects to find it.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
console.log("entry.png written to", join(outDir, "entry.png"));
