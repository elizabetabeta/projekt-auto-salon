<template>
  <v-responsive>
    <v-app id="inspire">
      <v-app-bar app color="rgba(102,102,255,0.95)" height="100px">
        <v-tabs class="ml-n9" color="#00008B">
          <v-spacer></v-spacer>
          <v-tab v-for="link in links" :key="link.route" :to="link.route">
            {{ link.text }}
          </v-tab>

          <v-spacer></v-spacer>

          <img src="https://www.pngall.com/wp-content/uploads/2017/05/Concept-Car-Free-Download-PNG.png" id="logo" />
          &emsp;
        </v-tabs>
      </v-app-bar>

      <v-main class="grey lighten-3" id="container">
        <v-container>
          <v-row>
            <v-col cols="12" sm="12">
              <v-sheet min-height="70vh" rounded="lg" class="pa-5" id="sheet">
                <transition name="fade" mode="out-in">
                  <router-view></router-view>
                </transition>
              </v-sheet>
            </v-col>
          </v-row>
          <br /><br /><br /><br />
          <v-footer dark padless>
            <v-card class="flex" flat tile>
              <v-card-title id="ispod">
                <strong class="subheading"
                  >Pronađite nas na svim društvenim mrežama!</strong
                >

                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: "Naslovnica",
        route: "/",
      },
      {
        text: "Ponuda vozila",
        route: "/ponuda_vozila",
      },
      {
        text: "O nama",
        route: "/o_nama",
      },
      {
        text: "Kontakt",
        route: "/kontakt",
      },
    ],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-whatsapp", "mdi-instagram"],
  }),
};
</script>
<style scoped>
main {
  background-image: url("./assets/V8KTfgd.jpg");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  width: 70%;
}
#sheet {
  background: linear-gradient(to bottom, #6666ff 0%, #cc66ff 100%);
}
#logo {
  padding-top: 30px;
  height: 70px;
}
#ispod {
  background-color: #cc66ff;
}
</style> 
