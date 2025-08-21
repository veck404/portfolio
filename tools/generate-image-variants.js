const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const assetsDir = path.join(__dirname, "..", "public", "assets");
const sizes = [800, 400];
const formats = [
  { ext: "avif", opts: { quality: 60 } },
  { ext: "webp", opts: { quality: 75 } },
];

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  const name = path.basename(file, ext);
  const src = path.join(assetsDir, file);

  // skip SVG and non-raster
  if (ext === ".svg" || ext === ".css" || ext === ".pdf") return;

  for (const size of sizes) {
    for (const fmt of formats) {
      const outName = `${name}-${size}.${fmt.ext}`;
      const outPath = path.join(assetsDir, outName);
      try {
        await sharp(src)
          .resize({ width: size })
          [fmt.ext](fmt.opts)
          .toFile(outPath);
        console.log("Wrote", outName);
      } catch (err) {
        console.error("Failed to process", file, err.message);
      }
    }
  }
}

(async () => {
  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    await processImage(file);
  }
  console.log("Done.");
})();
