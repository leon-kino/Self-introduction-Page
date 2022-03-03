import fs from 'fs';
import { Feed } from 'feed';

/**
 *
 *
 */
function generatedRssFeed(): void {
  const baseUrl = 'https://self-introduction-page.vercel.app/';
  const date = new Date();
  // author の情報を書き換える
  const author = {
    name: 'Reon Kino',
    email: 'muyelingyin@gmail.com',
    link: 'https://self-introduction-page.vercel.app/',
  };

  // デフォルトになる feed の情報
  const feed = new Feed({
    title: 'self-introduction-rage',
    description: '木野伶音の自己紹介ページです。',
    id: baseUrl,
    link: baseUrl,
    language: 'ts',
    image: `${baseUrl}/favicons/favicon-32x32.png`, // image には OGP 画像でなくファビコンを指定
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author: author,
  });

  // フィード情報を public/rss 配下にディレクトリを作って保存
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}

export default generatedRssFeed;
