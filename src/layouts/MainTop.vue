<template>
      <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
          <span class="mr-n15"><router-link :to=" { name: 'home' } "><img src="/logo.svg" alt="KUSS-WebMap" style="width:60%" class="mt-3"></router-link></span>
          <v-btn variant="text" :to=" { name: 'navi' } ">道案内</v-btn>
          <v-btn variant="text" :to=" { name: 'home' } ">マップ</v-btn>
        </v-container>
      </v-app-bar>
</template>
<script>
</script>