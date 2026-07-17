// Optimize app screenshots for the phone mockups.
//
// Drop full-resolution captures into public/shots/incoming/ named after the
// slot they fill (home.png, comparing.png, verdict.png, verdict-full.png),
// then run:  npm run optimize:shots
//
// Each is resized to a retina-appropriate width and written as a compact WebP
// to public/shots/<name>.webp — which the site references. Originals in
// incoming/ are gitignored.

import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IN = "public/shots/incoming";
const OUT = "public/shots";
const WIDTH = 640; // ~2x the largest on-screen phone width (~294px)
const QUALITY = 80;

if (!existsSync(IN)) {
  console.error(`No ${IN}/ folder. Create it and drop your screenshots in.`);
  process.exit(1);
}

const files = (await readdir(IN)).filter((f) => /\.(png|jpe?g)$/i.test(f));
if (files.length === 0) {
  console.log(
    `No images in ${IN}/. Add e.g. home.png, comparing.png, verdict.png, verdict-full.png`
  );
  process.exit(0);
}

for (const f of files) {
  const name = path.parse(f).name.toLowerCase();
  const out = path.join(OUT, `${name}.webp`);
  const info = await sharp(path.join(IN, f))
    .resize({ width: WIDTH })
    .webp({ quality: QUALITY })
    .toFile(out);
  console.log(`✓ ${f} → ${out}  (${WIDTH}px, ${Math.round(info.size / 1024)}KB)`);
}

console.log("\nDone. Commit the updated .webp files and push.");
