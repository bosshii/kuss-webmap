<template>
  <v-sheet rounded="lg">
    <v-list rounded="lg">
      <template v-for="nav_list in nav_lists">
        <v-list-item color="primary" active-color="primary" :to="nav_list.link" variant="plain">
          <template v-slot:prepend>
          <v-icon :icon="nav_list.icon"></v-icon>
        </template>
          <v-list-item-content>
            
            <v-list-item-title>{{ nav_list.page }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
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
            link: "/home"
          },
          {
            page: "A棟",
            icon: "mdi-alpha-a-box-outline",
            link: "/map/a"
          },
          {
            page: "その他",
            icon: "mdi-map-search",
            link: "/map/others"
          },
          {
            page: "使い方",
            icon: "mdi-help",
            link: "/help"
          },
          {
            page: "棟",
            icon: "mdi-note-text",
            link: "/map/a"
          },
        ],
    }
  }
}
</script>