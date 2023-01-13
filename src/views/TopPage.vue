<template>
  <v-app id="inspire">
    <v-navigation-drawer app v-model="drawer" color="pink accent-2" >
      <v-list>
      <v-list-subheader>MENU</v-list-subheader>

      <v-list-item
      style="color:white"
        rounded="xl"
        value="1"
        :to="{name: 'home'}"
      >
        
      <template v-slot:prepend><v-icon color="white">mdi-account</v-icon></template>
        
        <v-list-item-title>あ</v-list-item-title>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar class="gray lighten-5" app dense elevate-on-scroll>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase black--text mt-1">
        <span><router-link :to=" { name: 'home' } ">KUSS-WebMap</router-link></span>
      </v-toolbar-title>
      <template v-slot:extension>
        <v-tabs align-with-title fixed-tabs>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab><v-icon>mdi-home</v-icon></v-tab>
          <v-tab><v-icon>mdi-magnify</v-icon></v-tab>
          <v-tab><v-icon>mdi-account</v-icon></v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main class="mx-4 mb-4 gray lighten-5">
      <h2>aaa</h2>

      <v-card
    class="mx-auto pa-2"
    max-width="300"
  >
    <v-list nav>
      <v-list-subheader>REPORTS</v-list-subheader>

      <v-list-item
        active-color="primary"
        rounded="xl"
        value="1"
      >
      <template v-slot:prepend><v-icon>mdi-account</v-icon></template>

        <v-list-item-title>あ</v-list-item-title>
      </v-list-item>

      <v-list-item
        active-color="primary"
        rounded="xl"
        value="1"
      >
      <template v-slot:prepend><v-icon>mdi-lock</v-icon></template>

        <v-list-item-title>ｓｊｂあ</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>

    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "top",
  data(){
    return{
          drawer: false,
    items: [
        {
          text: 'Item #1',
          icon: "mdi-home",
        },
        {
          text: 'Item #2',
          icon: "mdi-home",
        },
      ],
    }
  }
}
</script>
<style>
a {
  text-decoration:none;
}
.text-h3 {
  border-bottom: solid 3px #E91E63;
}
.text-h4 {
  padding: 0rem 0rem 0rem 2rem;
  border-left: 4px solid #EC407A;
}
.v-toolbar__extension {
  display: grid;
  justify-content: center;
  width: 100%;
}
</style>
