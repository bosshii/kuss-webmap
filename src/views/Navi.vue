<template>
  <v-app id="inspire">
    <MainTop />
    <v-main class="bg-blue-lighten-5">
      <v-container>
        <v-sheet min-height="70vh" rounded="lg" class="pa-4">
          <h1>道案内</h1>
          <h2><v-icon>mdi-camera</v-icon>&nbsp;カメラ起動</h2>
          <div><video id="video"></video></div>
        </v-sheet>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
  import CommonStyles from '@/layouts/CommonStyles.vue'
  import MainTop from '@/layouts/MainTop.vue'
</script>
<script>
const video = document.getElementById("video")
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
}).then(stream => {
    video.srcObject = stream;
    video.play()
}).catch(e => {
  console.log(e)
})
</script> 