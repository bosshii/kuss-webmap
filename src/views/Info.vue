<template>
  <v-app id="inspire">
    <MainTop />
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-sheet min-height="70vh" rounded="lg" class="pa-4">
          <h1>このサイトについて</h1>
            本サイトに関する説明です。
          <h2>説明</h2>
            KUSSの校内地図を見やすくウェブアプリ化しました。・・・
          <h2>クレジット</h2>
          このサイト作成にあたり、ご協力いただいた方々です。
          <ul class="pl-5">
            <li>Hiro(ASTA情報班班長) - 発案・全体指揮</li> 
            <li>H.Y. - 地図イラスト</li>
            <li>bsi - 技術支援・サイト制作・サーバー管理</li>
          </ul>
          また、この他にもたくさんの方にご協力いただきました。<br>
          この場を借りて感謝申し上げます。
          <br>
          <br>
          <br>
          この活動はASTA情報班によって企画発案され、作成されました。
          <v-img src="@/assets/img/ASTAlogo.png"></v-img>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
  import MainTop from '@/layouts/MainTop.vue'
  import CommonStyles from '@/layouts/CommonStyles.vue'
</script>