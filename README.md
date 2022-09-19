<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Description
ポーカーの役判定をするAPIです。
Nestjsやserverless frameworkの学習用に作成。

## APIドキュメント
https://satokiy.github.io/poker-api-nest

Github ActionsによりGithub Pagesとして公開されます。  
Nestjsのデコレーターをもとに、OpenAPI -> ReDocを生成します。  
```
# OpenAPI定義書の更新（現状、サーバーの起動をトリガーにしています）
yarn run start
```
```
# OpenAPI定義書をもとにRedocを更新
yarn run redoc-build
```
## 開発
```
# build
yarn run build
```
```
# boot server
yarn run start
```

```
# deploy(AWS)
sls deploy
```
## APIの使い方
### ヘルスチェック
```
curl https://xxxxxxxx.yyy:4000/health-check
```
### 役判定
```
curl -X POST -H "Content-Type: application/json" -d '{"hand":"H1 H2 H3 H4 H5"}' https://xxxxxxxx.yyy:4000/v1/poker/judge
```

## 環境
- Nodeのバージョンは16
- package managerはyarn
- デプロイはserverless framework
- VScodeのdev containerを利用します
