// import { useRouter } from 'next/router'
import { useConfig } from '@ssaitho/nextra-theme-docs'

export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  head: () => {
    // const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    // const url =
    //   'https://my-app.com' +
    //   (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    const keywords = frontMatter.tags ? frontMatter.tags.join(', ') : ''

    return (
      <>
        {/* <meta property="og:url" content={url} /> */}
        {/* <meta property="og:title" content={frontMatter.title || 'デフォルトタイトルテスト！！！'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'デフォルトディスクリプションテスト！！！'}
        /> */}
        <meta name="keywords" content={keywords} />
      </>
    )
  },
  logo: (
    <div className="header">
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        My Cool Project
      </span>
    </div>
  ),
  footer: {
    text: (
      <div className="footer">
        <p className="nx-text-xs">
          コンフィグファイルの設定を変更することで、フッターのテキストを変更できます。
        </p>
        <p>
          コンフィグファイルの設定を変更することで、フッターのテキストを変更できます。
        </p>
        <a href="#">りんくですyo</a>
      </div>
    ),
  },
};
