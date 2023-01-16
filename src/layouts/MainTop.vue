<template>
  <v-navigation-drawer app v-model="drawer" color="blue accent-2" >
    <v-list>
      <v-list-subheader style="color:white">メインメニュー</v-list-subheader>
      <v-list-item rounded="xl" value="1" to="/home" v-if="!toppage">
        <template v-slot:prepend><v-icon color="white">mdi-home</v-icon></template>
        <v-list-item-title>ホーム画面</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="2" to="/about">
        <template v-slot:prepend><v-icon>mdi-information-outline</v-icon></template>
        <v-list-item-title>このサイトについて</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="3" to="/docs">
        <template v-slot:prepend><v-icon>mdi-note-text</v-icon></template>
        <v-list-item-title>資料</v-list-item-title>
      </v-list-item>  
      <v-list-item rounded="xl" value="4" href="#">
        <template v-slot:prepend><v-icon>mdi-open-in-new</v-icon></template>
        <v-list-item-title>学校ホームページへ</v-list-item-title>
      </v-list-item>
      <v-list-item rounded="xl" value="5" href="#">
        <template v-slot:prepend><v-icon>mdi-rabbit</v-icon></template>
        <v-list-item-title>公式ホームページへ</v-list-item-title>
      </v-list-item>
      <v-divider v-if="!toppage"></v-divider>
      <v-list-item rounded="xl" value="6" to="/" v-if="!toppage">
        <template v-slot:prepend><v-icon>mdi-arrow-u-left-top</v-icon></template>
        <v-list-item-title>ログイン画面に戻る</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="text-uppercase black--text ml-2 mt-1 mr-3">
        <router-link :to=" { name: 'home' } "><img src="/logo.svg" style="width:35vw; max-width:300px" alt="KUSS-WebMap" class="mt-3"></router-link>
      </span>
      <v-menu transition="slide-y-transition" v-if="!toppage">
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props" prepend-icon="mdi-chevron-down" variant="outlined">モード</v-btn>
        </template>
        <v-list>
          <v-list-item to="/home">
            <template v-slot:prepend><v-icon>mdi-map</v-icon></template>
            <v-list-item-content><v-list-item-title>マップ</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item to="/navi">
            <template v-slot:prepend><v-icon>mdi-navigation</v-icon></template>
            <v-list-item-content><v-list-item-title>道案内</v-list-item-title></v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-dialog v-model="legend" width="500px" v-if="!toppage">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" prepend-icon="mdi-help" rounded="pill" class="legendbtn bg-primary">凡例</v-btn>
        </template>
        <v-card>
          <v-card-title class="d-flex justify-center mt-2 mb-n5 font-weight-bold">凡例</v-card-title>
          <v-card-text>
            <v-img src="@/assets/map/legend.png"></v-img>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="legend = false">閉じる</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
    props: ['toppage'],
    data: () => ({
          drawer: false,
          legend: false,
        }),
}
</script>
<style>
.legendbtn {
  justify-content: right;
}
</style>