<template>
  <v-app id="inspire">
    <MainTop mappage="true"/>
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3"><MapMenu /></v-col>
          <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
              <h1>C棟立体マップ</h1>
                <!--v-img class="mb-y15" src="@/assets/map/C.png"></v-img-->
                <v-img class="" src="@/assets/map/CR.png"></v-img>

                <v-tabs color="pink accent-2">
                  <v-tabs-slider color="blue" />
                  <v-tab>1階</v-tab> 
                  <v-tab>2階</v-tab>
                  <v-tab>3階</v-tab>
                  <v-tab-item><ul><li>a</li></ul>
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
