# kuss-webmap
電子地図。

## Project setup
- コマンドの都合上Linux(もしくはWindowsではGit Bash)でのみ動きます
1. `git clone`して、
2. `cd kuss-webmap`して↓のようにインストールし、
```
# yarn
yarn

# npm
npm install
```
3. 適当なパスワードを用意して`.apppassword`を作成し、
4. `bash makeenv.sh`すると`.env`が作成されます
- bashを使えない場合は2.の次に`cp .env.example .env`し、パスワードと適当な値を入れておくと良い

## Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev
```

## Compiles and minifies for production

### Linux等bashコマンドを使える
1. `package.json`のバージョン番号を更新し、
2. `git commit`した後
3. ↓すれば
```
# yarn
yarn build

# npm
npm run build
```
4. バージョン番号などが埋め込まれた状態でビルドされるよ

### 使えない場合
1. `package.json`のバージョン番号を更新し、
2. `git commit`し、
3. `git rev-parse --short HEAD`で出てきた値を`.env`に反映させて、
4. ↓すれば
```
# yarn
yarn manual-build

# npm
npm run manual-build
```
5. バージョン番号などが埋め込まれた状態でビルドされるよ


## Check before publish

```
# yarn
yarn preview

# npm
npm run preview
```

## Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint
```
