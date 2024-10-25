import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Link from 'next/link';

export function Tags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="nx-mx-4 nx-my-4">
      <ul className="nx-inline-flex nx-gap-2">
        {tags.map(tag => (
          <li className="nx-border nx-px-2 nx-py-1 nx-rounded" key={tag}>
            <Link href={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url = 'https://my-app.com' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    const keywords = frontMatter.tags ? frontMatter.tags.join(', ') : ''

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'デフォルトmetaタイトルテスト'} />
        <meta property="og:description" content={frontMatter.description || 'デフォルトmetaディスクリプションテスト'} />
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
  // footer: {
  //   text: (
  //     <div className="footer">
  //       <p className="nx-text-xs">
  //         コンフィグファイルの設定を変更することで、フッターのテキストを変更できます。
  //       </p>
  //       <p>
  //         コンフィグファイルの設定を変更することで、フッターのテキストを変更できます。
  //       </p>
  //       <a href="#">りんくですyo</a>
  //     </div>
  //   ),
  // },
  footer: {
    component: () => {
      const { frontMatter } = useConfig();
      return (
        <div>
          <Tags tags={frontMatter.tags} /> {/* タグの表示 */}
        </div>
      );
    },
  },
};
