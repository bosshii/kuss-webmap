<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <span class="mr-n8"><router-link :to=" { name: 'home' } "><img src="/logo.svg" alt="KUSS-WebMap" style="width:80%" class="mt-3"></router-link></span>
      <v-btn variant="text" to="/home">ホーム</v-btn>
      <v-btn variant="text" to="/navi">道案内</v-btn>
      <v-spacer></v-spacer>
      <v-dialog v-model="legend" width="500px">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" prepend-icon="mdi-help" rounded="pill" class="legendbtn bg-primary">凡例</v-btn>
        </template>
        <v-card>
          <v-card-title class="d-flex justify-center mt-2 mb-n5 font-weight-bold">凡例</v-card-title>
          <v-card-text>
            <v-img src="@/assets/map/legend.png"></v-img>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="legend = false">閉じる</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app-bar>
</template>
<script>
  export default {
    data: () => ({
      menu: false,
      legend: false,
    }),
  }
</script>
<style>
.legendbtn {
  justify-content: right;
}
</style>