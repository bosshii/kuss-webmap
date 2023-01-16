<template>
  <v-app id="inspire">
    <MainTop />
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3"><MapMenu /></v-col>
          <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
              <h1>A棟立体マップ</h1>
                <v-img class="mb-y15" src="@/assets/map/A4.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/A3.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/A2.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/A1.png"></v-img>
              <h1>A棟平面マップ</h1>
                <v-img class="mb-y15" src="@/assets/map/A4_flat.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/A3_flat.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/A2_flat.png"></v-img>
                <v-img class="mb-y15" src="@/assets/map/A1_flat.png"></v-img>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
  import MapMenu from '@/components/MapMenu.vue'
  import MainTop from '@/layouts/MainTop.vue'
</script>