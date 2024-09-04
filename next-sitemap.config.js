/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ssaitho.github.io/nextra_sample_ts', // 公開するサイトのURL
  generateIndexSitemap: false, // (オプション) インデックスサイトマップを無効にする場合
  generateRobotsTxt: true, // (オプション) robots.txtも生成する場合
  outDir: './out', // 静的エクスポートの出力ディレクトリに合わせる
}
