<template>
  <v-navigation-drawer app temporary v-model="drawer" color="blue accent-2" >
    <v-list>
      <v-list-subheader style="color:white">メインメニュー</v-list-subheader>
      <v-list-item rounded="xl" value="0" to="/map" active v-if="mappage">
        <template v-slot:prepend><v-icon color="white">mdi-map</v-icon></template>
        <v-list-item-title>マップ</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="1" to="/map" v-if="!toppage && !mappage">
        <template v-slot:prepend><v-icon color="white">mdi-map</v-icon></template>
        <v-list-item-title>マップ</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="2" to="/navi" v-if="!toppage">
        <template v-slot:prepend><v-icon color="white">mdi-navigation</v-icon></template>
        <v-list-item-title>道案内</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="3" href="#">
        <template v-slot:prepend><v-icon>mdi-open-in-new</v-icon></template>
        <v-list-item-title>学校ホームページへ</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="4" href="#">
        <template v-slot:prepend><v-icon>mdi-rabbit</v-icon></template>
        <v-list-item-title>公式ホームページへ</v-list-item-title>
      </v-list-item>
      <v-divider class="mx-2" v-if="!toppage"></v-divider>
      <v-list-item rounded="xl" value="5" to="/" v-if="!toppage">
        <template v-slot:prepend><v-icon>mdi-arrow-u-left-top</v-icon></template>
        <v-list-item-title>ログイン画面に戻る</v-list-item-title>
      </v-list-item>

      <v-divider class="my-3"></v-divider>
      <p class="text-center">Ver. {{ version }} ({{ commithash }})</p>
      <div class="mt-1 text-center">
        <v-dialog transition="dialog-bottom-transition" width="500px">
          <template v-slot:activator="{ props }">
            <v-btn class="justify-center text-blue-accent-3" color="white" v-bind="props">このアプリについて</v-btn>
          </template>
          <template v-slot:default="{ isActive }">
            <v-card>
              <v-toolbar color="primary" title="このアプリについて"></v-toolbar>
              <v-card-text>
                <p class="px-1">このWebアプリは校内地図をデジタル化し、気軽に使えるようにしたウェブマップです。ASTA情報班が開発しています。
                <ul class="ml-2">
                  <li>バージョン: {{ version }} ({{ commithash }}) [{{ date }}]</li>
                  <li>動作確認環境: Android/iOS/Windows</li>
                  <li>問い合わせ: 準備中</li>
                </ul>
                </p>
              </v-card-text>
              <v-card-actions class="justify-start">
                <v-btn size="large" icon="mdi-github" color="primary" href="https://github.com/asta-tech" target="_blank"></v-btn>
              </v-card-actions>
              <v-card-actions class="justify-end">
                <v-btn color="primary" variant="text" @click="isActive.value = false">閉じる</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </v-list>

  </v-navigation-drawer>
  <v-app-bar app flat style="position: fixed;">
    <v-container class="fill-height d-flex align-center">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="text-uppercase black--text ml-2 mt-1 mr-3">
        <router-link :to=" { name: 'home' } "><img src="/logo.svg" style="width:40vw; max-width:300px" alt="KUSS-WebMap" class="mt-3" v-if="!toppage"></router-link>
        <img src="/logo.svg" style="width:40vw; max-width:300px" alt="KUSS-WebMap" class="mt-3" v-if="toppage">
      </span>
      <v-spacer></v-spacer>
      <v-menu transition="slide-y-transition" v-if="!toppage">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props" prepend-icon="mdi-chevron-down" variant="outlined">モード</v-btn>
        </template>
        <v-list>
          <v-list-item active v-if="mappage" to="/map">
            <template v-slot:prepend><v-icon class="mr-n1">mdi-map</v-icon></template>
            <v-list-item-content><v-list-item-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;マップ</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item v-if="!mappage" to="/map">
            <template v-slot:prepend><v-icon class="mr-n1">mdi-map</v-icon></template>
            <v-list-item-content><v-list-item-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;マップ</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item to="/navi">
            <template v-slot:prepend><v-icon class="mr-n1">mdi-navigation</v-icon></template>
            <v-list-item-content><v-list-item-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;道案内</v-list-item-title></v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
    props: ['toppage', 'mappage'],
    data: () => ({
          drawer: false,
          aboutapp: false
        }),
}
const commithash = import.meta.env.VITE_GIT_COMMIT_HASH;
</script> 
<script setup>
import {version, date} from '../../package.json';
</script>