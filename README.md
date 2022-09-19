<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Description
ポーカーの役判定を行うAPIです

## APIドキュメント
https://satokiy.github.io/poker-api-nest

developブランチにマージするとGithub ActionsによりGithub Pagesとして公開されます。  
Nestjsのデコレーターをもとに、OpenAPI -> ReDocを生成します。  
更新する際には下記コマンドを実行してください。  
```
yarn run start
```
このコマンドにより、OpenAPIの定義書が更新されます。
```
yarn run redoc-build
```
このコマンドにより、redocが更新されます。

## APIの使い方

### ヘルスチェック
```
curl https://xxxxxxxx.yyy:4000/health-check
```
### 役判定
```
curl -X POST -H "Content-Type: application/json" -d '{"hand":"H1 H2 H3 H4 H5"}' https://xxxxxxxx.yyy:4000/v1/poker/judge
```

## 開発環境
- Nodeのバージョンは16
- package managerはyarn
- VScodeのdevcontainerを利用します。



