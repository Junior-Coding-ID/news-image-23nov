// Entry program: world news of 23 November 2026 in one image (Node 22).
//
// The entry is the image file entry.png held beside this program. Running
// the program copies it byte for byte to the output directory as entry.png,
// so both runs of the grader write identical bytes.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

// The grader mounts a writable output directory. The --output <dir> flag
// wins when given; otherwise prefer the env var the kit documents, then
// fall back to /output when it exists, else ./output.
function resolveOutputDir() {
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  if (existsSync("/output")) return "/output";
  return join(here, "output");
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });

const image = readFileSync(join(here, "entry.png"));
writeFileSync(join(outDir, "entry.png"), image);
console.log(`wrote entry.png (${image.length} bytes) to ${outDir}`);
