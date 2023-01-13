<template>
      <v-app-bar flat>
        <v-container class="fill-height d-flex align-center">
          <span><router-link :to=" { name: 'home' } ">KUSS-WebMap</router-link></span>
          &nbsp;
          <v-btn variant="text" :to=" { name: 'navi' } ">道案内</v-btn>
          <v-btn variant="text" :to=" { name: 'home' } ">マップ</v-btn>
          <v-spacer></v-spacer>
  
          <v-responsive max-width="260">
            <v-text-field
              density="compact"
              hide-details
              variant="solo"
            ></v-text-field>
          </v-responsive>
        </v-container>
      </v-app-bar>
</template>
<script>
</script>