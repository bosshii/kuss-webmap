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
      <!--v-list-item rounded="xl" value="2" to="/navi" v-if="!toppage">
        <template v-slot:prepend><v-icon color="white">mdi-navigation</v-icon></template>
        <v-list-item-title>道案内</v-list-item-title>
      </v-list-item-->
      <v-list-item rounded="xl" value="3" href="https://www.edu.kobe-u.ac.jp/kuss-top/">
        <template v-slot:prepend><v-icon>mdi-open-in-new</v-icon></template>
        <v-list-item-title>学校ホームページ</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="4" href="https://togensai.jp">
        <template v-slot:prepend><v-icon>mdi-rabbit</v-icon></template>
        <v-list-item-title>兎原祭ホームページ</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="5" href="https://asta.group">
        <template v-slot:prepend><v-icon>mdi-rabbit</v-icon></template>
        <v-list-item-title>情報班ウェブサイト</v-list-item-title>
      </v-list-item>
      <v-divider class="mx-2" v-if="!toppage"></v-divider>
      <v-list-item rounded="xl" value="6" to="/" v-if="!toppage">
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
              <v-card-text><p>このWebアプリは校内地図をデジタル化し、手軽に使えるようにしたウェブアプリです。ASTA情報班が開発しています。
                <ul class="ml-2">
                  <li>クレジット: <ul class="pl-5">
            <li>Hiro(ASTA情報班前班長) - 発案・全体指揮</li> 
            <li>H.Y. - 地図イラスト</li>
            <li>bosshii - 技術支援・サイト制作・サーバー管理</li>
            <li>また、この他にもたくさんの方にご協力いただきました。<br>
          この場を借りて感謝申し上げます。</li>
          </ul></li>
                  <li>バージョン: {{ version }} ({{ commithash }})<!--span v-if="version == latest"><br><v-icon color="success">mdi-check-circle</v-icon>最新バージョンです</span--></li>
                  <li>動作確認環境: Android/iOS/Windows</li>
                </ul>
                <!--div v-if="version != latest" class="mt-3">
                  <v-icon color="primary">mdi-wrench</v-icon>最新バージョン [ {{ latest }} ] を利用可能です。再読み込みして更新してください
                  <v-btn rounded="lg" color="blue-accent-2" flat prepend-icon="mdi-reload" @click="buttonClicked" :loading="loading" :disabled="loading">再読み込み</v-btn>
                </div-->
                </p>
          
                <v-img src="@/assets/img/ASTAlogo.png"></v-img>
              </v-card-text>
              <v-card-actions class="justify-start">
                <v-btn size="large" icon="mdi-github" color="primary" href="https://github.com/asta-tech" target="_blank"></v-btn>
                <v-btn size="large" icon="mdi-link-box-variant" color="primary" href="https://asta.group" target="_blank"></v-btn>
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
    <v-container class="d-flex align-center">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="text-uppercase black--text ml-2 mt-1 mr-3">
        <router-link :to=" { name: 'home' } "><img src="/logo.svg" style="width:40vw; max-width:300px" alt="KUSS-WebMap" class="mt-3" v-if="!toppage"></router-link>
        <img src="/logo.svg" style="width:40vw; max-width:300px" alt="KUSS-WebMap" class="mt-3" v-if="toppage">
      </span>
      <v-spacer></v-spacer>
      <!--v-menu transition="slide-y-transition" v-if="!toppage">
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
      </v-menu-->
    </v-container>
  </v-app-bar>
</template>
<script>
const commithash = import.meta.env.VITE_GIT_COMMIT_HASH;
export default {
    props: ['toppage', 'mappage'],
    data: () => ({
          drawer: false,
          loading: false,
          latest: ""
        }),
    mounted(){
      axios
        .get('https://api.github.com/gists/fae77cb33c81403548f9f380d7aae1e8')
        .then(response => { this.latest = response.data.files["kuss-webmap-latestversion"].content })
    },
    methods: {
        async buttonClicked(){
          this.loading = true
          setTimeout(() => (this.loading = false), 3000)
          await new Promise(resolve => setTimeout(resolve, 3200))
          alert('新バージョンを起動します')
          window.navigator.serviceWorker.getRegistrations()
          .then(registrations => {
            for(let registration of registrations) {
              registration.unregister();
            }
          });
          window.location.reload(true);
        },
    }
}
</script> 
<script setup>
import {version, date} from '../../package.json';
import axios from 'axios'
</script>