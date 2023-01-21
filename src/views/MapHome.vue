<template>
  <v-app id="inspire">
    <MainTop />
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="3" lg="3" xl="3"><MapMenu /></v-col>
          <v-col cols="12" xs="12" sm="12" md="9" lg="9" xl="9">
            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
            <h1>KUSSマップ</h1>
            <v-img class="mb-n15" max-width="450px" src="@/assets/map/school_all_text.png"></v-img>
              <v-row>
                <v-col v-for="map in maps" cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
                  <v-card :class="map.class"  :to="map.link" v-ripple>
                    <v-responsive :aspect-ratio="3/2">
                      <v-icon size="large">{{ map.icon }}</v-icon>
                      <v-card-text>{{ map.text }}</v-card-text>
                    </v-responsive>
                  </v-card>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <LegendFab />
    </v-main>
  </v-app>
</template>
<script setup>
  import MainTop from '@/layouts/MainTop.vue'
  import CommonStyles from '@/layouts/CommonStyles.vue'
  import MapMenu from '@/components/MapMenu.vue'
  import LegendFab from '@/components/LegendFab.vue'
</script>
<script>
export default {
  name: "top",
  data(){
    return{
      maps: [
          {
            class: "bg-green-accent-2",
            icon: "mdi-alpha-a-box-outline",
            text: "A棟",
            link: "/map/a"
          },
          {
            class: "bg-blue-lighten-4",
            icon: "mdi-alpha-b-box-outline",
            text: "B棟",
            link: "/map/b"
          },
          {
            class: "bg-pink-lighten-4",
            icon: "mdi-alpha-c-box-outline",
            text: "C棟",
            link: "/map/c"
          },
          {
            class: "bg-deep-orange-lighten-3",
            icon: "mdi-alpha-d-box-outline",
            text: "D棟",
            link: "/map/d"
          },
          {
            class: "bg-yellow-lighten-3",
            icon: "mdi-alpha-e-box-outline",
            text: "E棟",
            link: "/map/e"
          },
          {
            class: "bg-deep-purple-lighten-4",
            icon: "mdi-town-hall",
            text: "アリーナ",
            link: "/map/arena"
          },
          {
            class: "bg-grey-lighten-4",
            icon: "mdi-widgets-outline",
            text: "中庭＋C・D・E棟",
            link: "/map/others"
          },
        ],
    }
  }
}
</script>