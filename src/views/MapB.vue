<template>
  <v-app id="inspire">
    <MainTop mappage="true"/>
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3"><MapMenu /></v-col>
          <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
              <h1>B棟立体マップ</h1>
                <p>※B棟に1階はありません。兎原祭中は3階のみ使用します。</p>
                <v-img class="" src="@/assets/map/BR.png" max-width="500px"></v-img>
              <v-tabs v-model="tab" bg-color="blue-lighten-2">
                <v-tab value="three">3階</v-tab>
              </v-tabs>
              <v-window v-model="tab"><v-window-item value="three">
                  <ul><li>★　兎原祭実行委員会本部</li></ul>
                </v-window-item>
              </v-window>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <LegendFab />
    </v-main>
  </v-app>
</template>
<script setup>
  import MapMenu from '@/components/MapMenu.vue'
  import CommonStyles from '@/layouts/CommonStyles.vue'
  import MainTop from '@/layouts/MainTop.vue'
  import LegendFab from '@/components/LegendFab.vue'
</script>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>
