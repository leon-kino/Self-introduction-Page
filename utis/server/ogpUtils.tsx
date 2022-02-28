import { createCanvas, loadImage, registerFont } from 'canvas';
import path from 'path';
import fs from 'fs';

const createOgp = async (): Promise<void> => {
  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  const backgroundImage = await loadImage(path.resolve('./public/ogp/ogp.png'));
  ctx.drawImage(backgroundImage, DX, DY, WIDTH, HEIGHT);

  registerFont(path.resolve('./fonts/Kosugi-Regular.ttf'), {
    family: 'regular',
  });

  ctx.font = '60px Kosugi-Regular';
  ctx.fillStyle = '#333333';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('木野伶音の自己紹介ページ', 600, 300);

  const buffer = canvas.toBuffer();
  fs.writeFileSync(path.resolve(`./public/ogp/ogp.png`), buffer);
};
export default createOgp;
