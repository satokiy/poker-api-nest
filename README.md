<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Description
ポーカーの役判定をするAPIです。  
Nestjs, OpenAPI, Serverless Frameworkの学習用に作成。

## API仕様書
https://satokiy.github.io/poker-api-nest

Github ActionsによりGithub Pagesとして公開されます。  
Nestjsのデコレーターをもとに、OpenAPI -> ReDocを生成します。  
[フロントエンドのリポジトリ](https://github.com/satokiy/poker-app-vue)　では、本リポジトリで作成したopenapi.yamlをもとにAPIクライアントを生成します。  

### API仕様書関連コマンド
```
# OpenAPI仕様書の更新（現状、サーバーの起動をトリガーにしています）
yarn start
```
```
# OpenAPI仕様書をもとにRedocを更新
yarn redoc-build
```
## 開発
- 環境
  - (推奨)VScodeのdev containerを利用します
  - ローカルでDockerを起動して開発することも可能です
    - ホストのポートが4000番であることに注意してください
  - Dockerを使わないでの開発も可能です。yarn run startしてください
- Nodeのバージョン
  - 16.x
- package manager
  - yarn
- linter
  - prettier
- デプロイ
  - Serverless Frameworkを利用します
  - Lambda layerを使います。S3のバケット名はserverless.ymlを参照してください
- test
  - 未整備です...
### 開発関連コマンド
```
# build
yarn build
```
```
# boot server
yarn start
```

```
# deploy(AWS)
sls deploy
```

## APIの使い方
### ヘルスチェック
```
curl https://xxxxxxxx.yyy/health-check
```
### 手札を引く
```
curl https://xxxxxxxx.yyy/poker/draw
```
### 役判定
```
curl -X POST -H "Content-Type: application/json" -d '{"hand":"H1 H2 H3 H4 H5"}' https://xxxxxxxx.yyy/poker/judge
```
