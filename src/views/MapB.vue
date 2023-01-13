<template>
  <v-app id="inspire">
    <MainTop />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <MapMenu />
          </v-col>
          <v-col>
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
  import MapMenu from '@/components/MapMenu.vue'
  import MainTop from '@/layouts/MainTop.vue'
</script>