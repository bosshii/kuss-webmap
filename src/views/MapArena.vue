<template>
  <v-app id="inspire">
    <MainTop mappage="true"/>
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3"><MapMenu /></v-col>
          <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
              <h1>アリーナ立体マップ</h1>
                <v-img class="" src="@/assets/map/arena_ver1R.png" max-width="500px"></v-img>
              <v-tabs v-model="tab" bg-color="blue-lighten-2">
                <v-tab value="one">1階</v-tab>
                <v-tab value="two">2階</v-tab>
              </v-tabs>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <ul><li>★　第二アリーナ</li><li>②　適性検査</li></ul>
                </v-window-item>

                <v-window-item value="two">
                  <ul><li>★　第一アリーナ</li><li>②　HATリゾート</li></ul>
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
