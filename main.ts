// World news, Monday 23 November 2026, in one image (v3).
// The finished front page lives in this repo as entry.png. This program
// copies it to the output directory as entry.png, byte for byte.
// No network, no randomness: every run writes identical bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const flag = args.indexOf("--output");
const outFile =
  flag !== -1 && args[flag + 1]
    ? resolve(args[flag + 1])
    : join("/output", "entry.png");
mkdirSync(dirname(outFile), { recursive: true });
copyFileSync(join(here, "entry.png"), outFile);
