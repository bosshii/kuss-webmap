<template>
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
    <v-expansion-panels class="hidden-md-and-up elevation-0">
      <v-expansion-panel rounded="lg" elevation="0">
        <v-expansion-panel-title>マップメニュー</v-expansion-panel-title>
        <v-expansion-panel-text class="px-4 mx-n8 mb-n3">
          <v-list rounded="lg" density="compact">
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
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-sheet>
</template>
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
            link: "/map"
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
            page: "体育館",
            icon: "mdi-town-hall",
            link: "/map/arena"
          },
          {
            page: "中庭周辺",
            icon: "mdi-widgets-outline",
            link: "/map/others"
          },
        ],
    }
  }
}
</script>