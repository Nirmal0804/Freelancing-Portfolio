import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processLogo() {
  const inputPath = 'C:/Users/Nirmal/.gemini/antigravity-ide/brain/b0fe5e83-b90d-4256-91a2-05b740e73800/.user_uploaded/media_1787161233280.png';
  
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const bgR = 251, bgG = 247, bgB = 243;
  const { width, height, channels } = info;
  const outputData = Buffer.alloc(width * height * 4);

  // Background removal with smooth alpha blending
  for (let i = 0; i < width * height; i++) {
    const srcIdx = i * channels;
    const dstIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

    if (dist < 12) {
      // Completely transparent background
      outputData[dstIdx] = 0;
      outputData[dstIdx + 1] = 0;
      outputData[dstIdx + 2] = 0;
      outputData[dstIdx + 3] = 0;
    } else if (dist < 48) {
      // Smooth anti-aliased edge
      const factor = (dist - 12) / (48 - 12);
      const alpha = Math.min(255, Math.max(0, Math.round(factor * 255)));

      // Recover true foreground color by removing background component
      const unmixedR = Math.min(255, Math.max(0, Math.round((r - bgR * (1 - factor)) / factor)));
      const unmixedG = Math.min(255, Math.max(0, Math.round((g - bgG * (1 - factor)) / factor)));
      const unmixedB = Math.min(255, Math.max(0, Math.round((b - bgB * (1 - factor)) / factor)));

      outputData[dstIdx] = unmixedR;
      outputData[dstIdx + 1] = unmixedG;
      outputData[dstIdx + 2] = unmixedB;
      outputData[dstIdx + 3] = alpha;
    } else {
      // Solid foreground
      outputData[dstIdx] = r;
      outputData[dstIdx + 1] = g;
      outputData[dstIdx + 2] = b;
      outputData[dstIdx + 3] = 255;
    }
  }

  // 1. Save full transparent logo trimmed tightly around CW
  // Bounding box: minX: 234, maxX: 825, minY: 254, maxY: 717
  // Center is X: (234+825)/2 = 529.5, Y: (254+717)/2 = 485.5
  // Width: 591, Height: 463
  // Let's crop a square centered on the glyph with 40px padding: size = max(591, 463) + 80 = 671
  const cropSize = 670;
  const left = Math.max(0, Math.round(529.5 - cropSize / 2));
  const top = Math.max(0, Math.round(485.5 - cropSize / 2));

  const trimmedLogo = await sharp(outputData, {
    raw: { width, height, channels: 4 }
  })
    .extract({ left, top, width: cropSize, height: cropSize })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync('public/images/cw-logo.png', trimmedLogo);
  console.log('Saved transparent public/images/cw-logo.png (cropped square size:', cropSize, ')');

  // 2. Create Circular Favicon
  // Circular mask on a 512x512 canvas with the CW logo centered
  const faviconSize = 512;
  const circleRadius = faviconSize / 2;

  // Render CW glyph scaled to fit nicely inside the circle
  const glyphSize = Math.round(faviconSize * 0.78);
  const resizedGlyph = await sharp(trimmedLogo)
    .resize(glyphSize, glyphSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Create SVG circle background with soft border
  const circleSvg = `
    <svg width="${faviconSize}" height="${faviconSize}" viewBox="0 0 ${faviconSize} ${faviconSize}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${circleRadius}" cy="${circleRadius}" r="${circleRadius - 4}" fill="#FCF9F8" stroke="#CDC5C2" stroke-width="8"/>
    </svg>
  `;

  const circleBg = await sharp(Buffer.from(circleSvg)).png().toBuffer();

  // Composite glyph onto circle
  const faviconBuffer = await sharp(circleBg)
    .composite([
      {
        input: resizedGlyph,
        top: Math.round((faviconSize - glyphSize) / 2),
        left: Math.round((faviconSize - glyphSize) / 2),
      }
    ])
    .png()
    .toBuffer();

  fs.writeFileSync('public/images/cw-favicon.png', faviconBuffer);
  fs.writeFileSync('public/icon.png', faviconBuffer);
  fs.writeFileSync('public/apple-touch-icon.png', faviconBuffer);

  // Generate 32x32 ico/png
  const favicon32 = await sharp(faviconBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();
  fs.writeFileSync('public/favicon.ico', favicon32);

  // Also create vector-compatible SVG favicon
  const svgFavicon = `
    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="#FCF9F8" stroke="#CDC5C2" stroke-width="2"/>
      <image href="/images/cw-logo.png" x="8" y="8" width="48" height="48"/>
    </svg>
  `;
  fs.writeFileSync('public/icon.svg', svgFavicon.trim());

  console.log('Saved circular favicons (png, ico, svg)');
}

processLogo().catch(err => {
  console.error(err);
  process.exit(1);
});
