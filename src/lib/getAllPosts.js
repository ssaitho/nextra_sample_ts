import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 再帰的にファイルを探索する関数
function getFilesRecursively(directory) {
  let files = [];

  const items = fs.readdirSync(directory, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(directory, item.name);

    if (item.isDirectory()) {
      // サブディレクトリの場合、再帰的に処理
      files = files.concat(getFilesRecursively(fullPath));
    } else if (item.isFile() && fullPath.endsWith('.mdx')) {
      // .mdxファイルのみを対象
      files.push(fullPath);
    }
  }

  return files;
}

const postsDirectory = path.join(process.cwd(), 'src/pages');

export function getAllPosts() {
  const filePaths = getFilesRecursively(postsDirectory); // サブディレクトリを含めて取得
  console.log('File paths:', filePaths); // デバッグ: 取得したファイルパスを確認

  const allPostsData = filePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents); // フロントマターをパース

    // スラッグを生成（パスからファイル名部分を抽出）
    let slug = filePath
      .replace(postsDirectory, '') // ベースディレクトリを除去
      .replace(/\.mdx$/, '') // 拡張子を除去
      .replace(/\\/g, '/'); // Windows向けにパス区切りを修正

    // スラッシュの重複を防ぐため、最初のスラッシュを削除
    if (slug.startsWith('/')) {
      slug = slug.substring(1);
    }

    // tags が存在しない場合、空の配列をデフォルト値に設定
    const tags = data.tags || [];

    return {
      slug,
      ...data,
      tags, // tags を追加
    };
  });

  return allPostsData;
}
