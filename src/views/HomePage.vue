<template>
  <v-app id="inspire">
    <MainTop />
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3">
            <MapMenu />
          </v-col>

          <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              aaa
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import MainTop from '@/layouts/MainTop.vue'
  import MapMenu from '@/components/MapMenu.vue'
</script>