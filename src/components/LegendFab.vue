<template>
  <v-dialog v-model="legend" width="500px">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" prepend-icon="mdi-information-outline" rounded="pill" size="large" id="legendfab_lg" class="legendfab hidden-md-and-down bg-primary">凡例</v-btn>
      <v-btn v-bind="props" prepend-icon="mdi-information-outline" rounded="pill" size="large" id="legendfab_md" class="legendfab d-none d-md-flex d-lg-none bg-primary">凡例</v-btn>
      <v-btn v-bind="props" prepend-icon="mdi-information-outline" rounded="pill" size="large" id="legendfab_sm" class="legendfab hidden-md-and-up bg-primary">凡例</v-btn>
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
</template>
<style>
.legendfab {
position: fixed;
bottom: 16px;
margin: auto;
}
#legendfab_lg {
right: calc(calc(calc(100% - 1200px) / 2) + 16px);
}
#legendfab_md {
right: calc(calc(calc(100% - 900px) / 2) + 16px);
}
#legendfab_sm {
right: 16px;
}
</style>
<script>
export default {
  data(){
    return{
      legend: false,
    }
  }
}
</script>