<template>
  <v-app id="inspire">
    <MainTop mappage="true"/>
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3"><MapMenu /></v-col>
          <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
              <h1>中庭＋C・D・E棟</h1>
                <v-img class="mb-y15" src="@/assets/map/3rd.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/2nd.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/1st.png"></v-img>
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