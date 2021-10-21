## raindrop-to-notion

Raindrop.io からエクスポートした html ファイルから Notion のデータベースにインポートするツールです．

Notion Web Clip で作成されたデータベースに対して使うことを想定しています．

しかし，ページタイトルと URL のみしか対応していません．

## 使い方

1. `.env`ファイルを作成し，`NOTION_KEY` , `NOTION_DATABASE_ID`を指定してください．
2. 予めエクスポートした`Raindrop.io.html`ファイルを`.env`と同じ階層であるルートディレクトリに配置します．
3. ターミナルから`npm start`を実行してください．
