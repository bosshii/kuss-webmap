<template>
  <v-app id="inspire">
    <MainTop />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-sheet rounded="lg">
              <v-list rounded="lg" class="hidden-sm-and-down">
                <template v-for="nav_list in nav_lists">
                  <v-list-item color="primary" active-color="primary" :to="nav_list.link">
                    <template v-slot:prepend><v-icon :icon="nav_list.icon"></v-icon></template>
                    <v-list-item-content>
                      <v-list-item-title>{{ nav_list.page }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <v-divider></v-divider>
                <v-list-item color="primary" active-color="primary"  to="/help">
                  <template v-slot:prepend><v-icon>mdi-help</v-icon></template>
                  <v-list-item-content>
                    <v-list-item-title>使い方</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-list rounded="lg" class="fill-height aaa align-center hidden-md-and-up">
                <template v-for="nav_list in nav_lists">
                  <v-list-item color="primary" active-color="primary" :to="nav_list.link">
                    <v-icon :icon="nav_list.icon"></v-icon>
                  </v-list-item>
                </template>
                <v-divider></v-divider>
                <v-list-item color="primary" active-color="primary"  to="/help">
                  <v-list-item-title><v-icon>mdi-help</v-icon></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-img src="@/assets/map/C.png"></v-img>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
  import MainTop from '@/layouts/MainTop.vue'
</script>

<script>
export default {
  name: "top",
  data(){
    return{
      drawer: false,
      nav_lists: [
          {
            page: "マップ ホーム",
            icon: "mdi-home",
            link: "/home"
          },
          {
            page: "A棟",
            icon: "mdi-alpha-a-box-outline",
            link: "/map/a"
          },
          {
            page: "B棟",
            icon: "mdi-alpha-b-box-outline",
            link: "/map/b"
          },
          {
            page: "C棟",
            icon: "mdi-alpha-c-box-outline",
            link: "/map/c"
          },
          {
            page: "D棟",
            icon: "mdi-alpha-d-box-outline",
            link: "/map/d"
          },
          {
            page: "E棟",
            icon: "mdi-alpha-e-box-outline",
            link: "/map/e"
          },
          {
            page: "体育館・中庭など",
            icon: "mdi-map-search",
            link: "/map/others"
          },
        ],
    }
  }
}
</script>
<style>
.v-list-item__content {
  justify-content: center !important;
  margin: 3px !important;
}
</style>