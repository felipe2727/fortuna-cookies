import sharp from 'sharp';
import fs from 'fs';

const combo = '/Users/felipeecheverri/.gemini/antigravity/brain/c7cc5e80-ae27-4a6b-bb08-d73c802cd737/media__1772203034529.jpg';
const cookie = '/Users/felipeecheverri/.gemini/antigravity/brain/c7cc5e80-ae27-4a6b-bb08-d73c802cd737/media__1772203051363.jpg';

fs.copyFileSync(cookie, './public/cookie.jpg');

console.log("Copied cookie.jpg");

async function splitImages() {
    await sharp(combo)
        .extract({ left: 0, top: 0, width: 512, height: 590 })
        .toFile('./public/box.jpg');

    console.log("Created box.jpg");

    await sharp(combo)
        .extract({ left: 512, top: 0, width: 512, height: 590 })
        .toFile('./public/bundle.jpg');

    console.log("Created bundle.jpg");
}

splitImages().catch(console.error);
