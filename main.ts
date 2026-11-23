// News image entry for Monday 23 November 2026 (Node 22, standard library only).
// The image is entry.png beside this file: a one-image summary of the day's
// world news (COP31 closing with no deal, Ukraine sinking a Russian warship
// off Libya, the US-Iran escalation, and the day's other big stories).
// The program copies it byte for byte to the grader's output directory as
// entry.png, so both runs write exactly the same bytes. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
// The grader sets MAKEFUN_OUTPUT_DIR; a --output <dir> flag overrides it,
// handy when testing the entry locally without touching the environment.
const flagAt = process.argv.indexOf('--output');
const outDir =
  (flagAt !== -1 && process.argv[flagAt + 1]) || process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), bytes);
