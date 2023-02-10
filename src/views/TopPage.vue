<template>
  <v-app id="inspire">
    <MainTop toppage="true"/>
    <v-main class="mb-4" style="background-color:#f1f3f5">
      <v-container class="my-3">
        <v-alert class="mb-2 bg-white" border="start" color="light-blue-accent-4" icon="mdi-bullhorn" title="メンテナンス中" variant="tonal">
          現在データの移行中です。しばらくお待ちください。
        </v-alert>
        <v-alert class="my-1 mx-auto font-weight-bold bg-white" max-width="400" density="compact" type="info" variant="outlined">本サイトは現在準備中です。</v-alert>  
        <v-card class="mx-auto pa-4" max-width="400">
          <v-card-title class="d-flex font-weight-bold justify-center pa-0 mb-2">ログイン</v-card-title>
          <v-form validate-on="submit" @submit.prevent="report">
            <v-text-field
              v-model="inputPass"
              :rules="rules"
              placeholder="半角英数字"
              label="パスワード"
              hint="半角英数字のパスワードを入力"
              :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
              :type="show ? 'password' : 'text'"
              @click:append="show = !show"
            ></v-text-field>
            <v-alert class="mb-5" icon="mdi-lock" density="compact" color="grey-lighten-3">ログイン後、ブラウザにパスワードを保存することをおすすめします</v-alert>
            <v-btn type="submit" color="info" block class="mt-2 font-weight-bold">ログイン</v-btn>
          </v-form>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
  const password = import.meta.env.local.VITE_APP_PASSWORD;
  export default {
    data: (vm) => ({
      drawer: false,
      legend: false,
      show: "text",
      inputPass: '',
      rules: [
        value => vm.checkApi(value),
      ],
    }),
    methods: {
      async report (event) {
        const result = await event
        if (result.valid == true) return alert('正しいパスワードが入力されました。アプリに移動します');
        if (result.valid == false) return alert("パスワードが違う、または入力されていません");
        if (!result.valid) return alert('予期せぬエラーが発生しました。やり直してください');
      },
      async checkApi (inputPass) {
            if (inputPass === password) return [location.href = '/map'];
            if (!inputPass) return 'パスワードを入力してください';
            if (inputPass != password) return 'パスワードが違います';
      },
    },
  }
</script>
<script setup>
  import MainTop from '@/layouts/MainTop.vue'
  import CommonStyles from '@/layouts/CommonStyles.vue'
</script>
