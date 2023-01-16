<template>
  <v-app id="inspire">
    <MainTop toppage="true"/>
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
    data: () => ({
      drawer: false,
      legend: false,
    }),
  }
</script>
<script setup>
  import MainTop from '@/layouts/MainTop.vue'
  import CommonStyles from '@/layouts/CommonStyles.vue'
</script>
