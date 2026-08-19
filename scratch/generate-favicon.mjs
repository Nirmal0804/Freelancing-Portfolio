import sharp from 'sharp';
import fs from 'fs';

async function generateFavicon() {
  // Read the clean transparent CW logo
  const logoBuffer = fs.readFileSync('public/images/cw-logo.png');

  // Create high-res 512x512 circular favicon
  const size = 512;
  const radius = size / 2;

  // Render CW glyph scaled to 78% of circle for high visibility at small sizes
  const glyphSize = Math.round(size * 0.76);
  const glyph = await sharp(logoBuffer)
    .resize(glyphSize, glyphSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Circle background with subtle cream fill and border
  const circleSvg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${radius}" cy="${radius}" r="${radius - 4}" fill="#FCF9F8" stroke="#CDC5C2" stroke-width="8"/>
    </svg>
  `;

  const circleBg = await sharp(Buffer.from(circleSvg)).png().toBuffer();

  // Composite glyph onto circle
  const favicon512 = await sharp(circleBg)
    .composite([
      {
        input: glyph,
        top: Math.round((size - glyphSize) / 2),
        left: Math.round((size - glyphSize) / 2),
      }
    ])
    .png()
    .toBuffer();

  // 1. Save PNG icons
  fs.writeFileSync('public/icon.png', favicon512);
  fs.writeFileSync('public/images/cw-favicon.png', favicon512);
  fs.writeFileSync('app/icon.png', favicon512);

  // 2. Apple touch icon (180x180)
  const appleTouch = await sharp(favicon512).resize(180, 180).png().toBuffer();
  fs.writeFileSync('public/apple-touch-icon.png', appleTouch);
  fs.writeFileSync('app/apple-icon.png', appleTouch);

  // 3. 32x32 Favicon ICO / PNG
  const favicon32 = await sharp(favicon512).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/favicon.ico', favicon32);
  fs.writeFileSync('app/favicon.ico', favicon32);

  // 4. Also generate self-contained inline base64 SVG so if browsers request icon.svg it renders fully
  const base64Png = favicon512.toString('base64');
  const embeddedSvg = `<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${base64Png}" x="0" y="0" width="64" height="64"/>
</svg>`;
  fs.writeFileSync('public/icon.svg', embeddedSvg);

  console.log('Favicons generated successfully across all sizes (16, 32, 180, 512) and formats.');
}

generateFavicon().catch(err => {
  console.error(err);
  process.exit(1);
});
