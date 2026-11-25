import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I filed your report at 3:04 a.m. under 'Done'. The folder was the recycling bin. I have filed 289 reports there since February. They all look very done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
