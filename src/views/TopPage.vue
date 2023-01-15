<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer" color="blue accent-2" >
      <v-list>
        <v-list-subheader style="color:white">メニュー</v-list-subheader>
        <v-list-item style="color:white" rounded="xl" value="1" to="/about">
          <template v-slot:prepend><v-icon color="white">mdi-information-outline</v-icon></template>
          <v-list-item-title>このサイトについて</v-list-item-title>
        </v-list-item>
        <v-list-item style="color:white" rounded="xl" value="1" to="/credits">
          <template v-slot:prepend><v-icon color="white">mdi-wrench</v-icon></template>
          <v-list-item-title>クレジット</v-list-item-title>
        </v-list-item>
        <v-list-item style="color:white" rounded="xl" value="1" href="#">
          <template v-slot:prepend><v-icon color="white">mdi-open-in-new</v-icon></template>
          <v-list-item-title>学校ホームページへ</v-list-item-title>
        </v-list-item>
        <v-list-item style="color:white" rounded="xl" value="1" href="#">
          <template v-slot:prepend><v-icon color="white">mdi-rabbit</v-icon></template>
          <v-list-item-title>公式ホームページへ</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="gray lighten-5" app dense elevate-on-scroll>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase black--text mt-1">
        <span><img src="/logo.svg" alt="KUSS-WebMap" class="mt-3"></span>
      </v-toolbar-title>
    </v-app-bar>
    <v-main class="mb-4" style="background-color:#f1f3f5">
      <v-container class="my-3">
      <v-alert type="info" variant="outlined">現在準備中です。</v-alert>
      <v-card class="mx-auto pa-4" max-width="400">
        <v-card-title class="d-flex justify-center pa-0 mb-2">ログイン</v-card-title>
        <v-form class="mx-3" @submit.prevent ref="form">
          <v-text-field
            placeholder="パスワード"
            label="パスワード"
            hint="半角英数字のパスワードを入力"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            counter="10"
            @click:append="show = !show"
          ></v-text-field>
          <div class="text-center">
            <v-btn @click="submit" class="primary" to="/home">移動</v-btn>
          </div>
        </v-form>
      </v-card>
</v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "top",
  data(){
    return{
          drawer: false,
    }
  }
}
</script>

<style>
a {
  text-decoration:none;
}
.text-h3 {
  border-bottom: solid 3px #E91E63;
}
.text-h4 {
  padding: 0rem 0rem 0rem 2rem;
  border-left: 4px solid #EC407A;
}
.v-toolbar__extension {
  display: grid;
  justify-content: center;
  width: 100%;
}
</style>
