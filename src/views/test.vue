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
              class="pa-3"
            >

  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-row
      align="center"
      class="pa-6"
    >
      <span class="mr-4">To</span>

      <v-menu
        v-model="menu"
        location="top start"
        origin="top start"
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-chip
            pill
            v-bind="props"
            link
          >
            <v-avatar start>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>

            John Leider
          </v-chip>
        </template>

        <v-card width="300">
          <v-list bg-color="black">
            <v-list-item>
              <template v-slot:prepend>
                <v-avatar image="https://cdn.vuetifyjs.com/images/john.png"></v-avatar>
              </template>

              <v-list-item-title>John Leider</v-list-item-title>

              <v-list-item-subtitle>john@google.com</v-list-item-subtitle>

              <template v-slot:append>
                <v-list-item-action>
                  <v-btn
                    icon
                    variant="text"
                    @click="menu = false"
                  >
                    <v-icon>mdi-close-circle</v-icon>
                  </v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list>

          <v-list>
            <v-list-item link prepend-icon="mdi-briefcase">
              <v-list-item-subtitle>john@gmail.com</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
 
      </v-menu>
    </v-row>
  </v-card>

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
<script>
  export default {
    data: () => ({
      menu: false,
      legend: false,
    }),
  }
</script>