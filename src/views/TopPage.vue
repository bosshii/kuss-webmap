<template>
  <v-app id="inspire">
    <MainTop toppage="true"/>
    <v-main class="mb-4" style="background-color:#f1f3f5">
      <v-container class="my-3">
      <v-alert class="mb-2" border="start" color="deep-purple-accent-4" icon="mdi-bullhorn" title="現在メンテナンス中" variant="tonal">
        データの移行中です。しばらくお待ちください。
      </v-alert>
      <v-card class="mx-auto pa-4" max-width="400">
        <v-card-title class="d-flex justify-center pa-0 mb-2">ログイン</v-card-title>
        <v-alert class="my-1" density="compact" type="info" variant="outlined">本サイトは現在準備中です。</v-alert>
        <v-form @submit.prevent ref="form">
          <v-text-field
            placeholder="パスワード"
            label="パスワード"
            hint="半角英数字のパスワードを入力"
            :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
            :type="show ? 'password' : 'text'"
            counter="10"
            @click:append="show = !show"
          ></v-text-field>
          <div class="text-center">
            <v-btn @click="submit" class="primary" to="/map">移動</v-btn>
          </div>
        </v-form>
      </v-card>
</v-container>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      legend: false,
      show: "text"
    }),
  }
</script>
<script setup>
  import MainTop from '@/layouts/MainTop.vue'
  import CommonStyles from '@/layouts/CommonStyles.vue'
</script>
