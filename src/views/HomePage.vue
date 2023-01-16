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
            <v-img class="mb-y15" max-width="450px" src="@/assets/map/school_all_text.png"></v-img>
              <v-container>
                <v-row>
                  <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
                    <v-card class="bg-green-lighten-4" v-ripple>
                      <v-responsive :aspect-ratio="3/2">
                        <v-card-text>
                          3:2
                        </v-card-text>
                      </v-responsive>
                    </v-card>
                  </v-col>
                  <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
                    <v-card class="bg-blue-lighten-4" v-ripple>
                      <v-responsive :aspect-ratio="3/2">
                        <v-card-text>
                          3:2
                        </v-card-text>
                      </v-responsive>
                    </v-card>
                  </v-col>
                  <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
                    <v-card class="bg-pink-lighten-4" v-ripple>
                      <v-responsive :aspect-ratio="3/2">
                        <v-card-text>
                          3:2
                        </v-card-text>
                      </v-responsive>
                    </v-card>
                  </v-col>
                  <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
                    <v-card class="bg-deep-orange-lighten-2" v-ripple>
                      <v-responsive :aspect-ratio="3/2">
                        <v-card-text>
                          3:2
                        </v-card-text>
                      </v-responsive>
                    </v-card>
                  </v-col>
                  <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
                    <v-card class="bg-yellow-lighten-3" v-ripple>
                      <v-responsive :aspect-ratio="3/2">
                        <v-card-text>
                          3:2
                        </v-card-text>
                      </v-responsive>
                    </v-card>
                  </v-col>
                  <v-col cols="6" xs="6" sm="4" md="3" lg="3" xl="3">
                    <v-card class="bg-deep-purple-lighten-3" v-ripple>
                      <v-responsive :aspect-ratio="3/2">
                        <v-card-text>
                          3:2
                        </v-card-text>
                      </v-responsive>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import MainTop from '@/layouts/MainTop.vue'
  import CommonStyles from '@/layouts/CommonStyles.vue'
  import MapMenu from '@/components/MapMenu.vue'
</script>