<template>
  <div>
    <div class="ponuda_vozila">
      <br>
      <h1>Novo u ponudi!</h1>
    </div>

    <br /><br />

    <v-responsive>
    <tr>
      <th>
        <v-card class="mx-auto" width="410">
          <v-carousel hide-delimiters height="270">
            <v-carousel-item
              v-for="(slike1, i) in slike1"
              :key="i"
              :src="slike1.src"
            ></v-carousel-item>
          </v-carousel>

          <v-card-text>
            <h2 class="text-h6 primary--text">
              Lamborghini Aventador LP700-4 Roadster
            </h2>
            <hr />
            <br />
            Ovaj predivan automobil koristi novi Lamborgihnijev motor 691 KS
            (515 kW) 6.5 litreni 60° V12 motor. <br />Performanse se procenjuju
            na 2,9 sekundi do 100km/h. Mijenjač je 7-stupanjski poluatomatski...
          </v-card-text>

          <v-card-title>
            <v-rating
              :value="5"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            ></v-rating>
            <span class="primary--text text-subtitle-2">
              &ensp; 120 glasova</span
            >
          </v-card-title>
        </v-card>
      </th>

      &emsp;&emsp;&emsp;

      <th>
        <v-card class="mx-auto" width="410">
          <v-carousel hide-delimiters height="270">
            <v-carousel-item
              v-for="(slike2, i) in slike2"
              :key="i"
              :src="slike2.src"
            ></v-carousel-item>
          </v-carousel>

          <v-card-text>
            <h2 class="text-h6 primary--text">2019 BMW X7</h2>
            <hr />
            <br />
            Snaga motora ovog automobila je 195/265 (kW/KS).<br />
            Mjenjač je automatski a materijal enterijera je prirodna koža...
          </v-card-text>
          <br /><br />
          <v-card-title>
            <v-rating
              :value="5"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            ></v-rating>
            <span class="primary--text text-subtitle-2">
              &ensp; 230 glasova</span
            >
          </v-card-title>
        </v-card>
      </th>
    </tr>

    <br /><br /><br />

    <tr>
      <th>
        <v-card class="mx-auto" width="410">
          <v-carousel hide-delimiters height="270">
            <v-carousel-item
              v-for="(slike3, i) in slike3"
              :key="i"
              :src="slike3.src"
            ></v-carousel-item>
          </v-carousel>

          <v-card-text>
            <h2 class="text-h6 primary--text">
              Porsche Cayman 981
            </h2>
            <hr><br>
            Snaga motora ovog prekrasnog Porschea iznosi 202/271 kW/KS.<br>
            Mjenjač mu je automatski (PDK). 
          </v-card-text>
          <br><br>
          <v-card-title>
            <v-rating
              :value="5"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            ></v-rating>
            <span class="primary--text text-subtitle-2">
              &ensp; 82 glasova</span
            >
          </v-card-title>
        </v-card>
      </th>

      &emsp;&emsp;&emsp;

      <th>
        <v-card class="mx-auto" width="410">
          <v-carousel hide-delimiters height="270">
            <v-carousel-item
              v-for="(slike4, i) in slike4"
              :key="i"
              :src="slike4.src"
            ></v-carousel-item>
          </v-carousel>

          <v-card-text>
            <h2 class="text-h6 primary--text">
              Mercedes-Benz S-Klasa (W222)
            </h2>
            <hr><br>
            Ovi automobili mogu postići brzinu od 250 km/sat.<br>
            Jačina motora je između 286 i 612 KS u ovisnosti od modela.
            <br><br><br><br>
          </v-card-text>

          <v-card-title>
            <v-rating
              :value="5"
              dense
              color="orange"
              background-color="orange"
              hover
              class="mr-2"
            ></v-rating>
            <span class="primary--text text-subtitle-2">
              &ensp; 205 glasova</span
            >
          </v-card-title>
        </v-card>
      </th>
    </tr>
    </v-responsive>

    <br><br><br>

    <my-button
    color="white"
    background="darkslateblue"
    disabled="true"
    onclick="window.open('https://www.youtube.com/watch?v=M4Ax2qtewsQ&ab_channel=AutoMarket.hr', '_blank');"
    />

    <br><br>

    <v-progress-linear value="100"></v-progress-linear>
    <br><br>

    <tr>
      <th>
        <v-text-field
          cols="3"
          rounded
          filled
          color="black"
          background-color="#6666ff"
          v-model="pretraga"
          @keyup.enter="
            dohvatiAute();
            ide();
          "
          placeholder="Pretražite modele..."
        >
        </v-text-field>
      </th>
      <th>
        &ensp;
        <v-btn
          rounded
          color="primary"
          @click="
            dohvatiAute();
            ide();
          "
          >Pretraži</v-btn
        >
      </th>
      &ensp;
      <th>
        <v-progress-circular
          indeterminate
          color="purple"
          v-show="loading"
        ></v-progress-circular>
      </th>
    </tr>

    <v-row>
      <v-col
        v-for="auto in auti"
        :key="auto.id"
        cols="12"
        md="4"
      >
        <v-card class="mx-auto" outlined id="auti">
          <v-list-item>
            <v-list-item-content>
              <div class="overline mb-4"><br>Model Name</div>
              <v-list-item-title class="headline mb-1">
                {{ auto.MakeName }}
              </v-list-item-title>
              <v-list-item-subtitle
                > <br>Vehicle type: <br> <br>{{ auto.VehicleTypeName }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <br><br>
         <img
            height="100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoD6DY2NwTfDveysY1Q_W9askUA17WAmJXg&usqp=CAU"/>
        </v-card>
      </v-col>
    </v-row>
    <br /><br />

        <v-row>
            <v-col cols="12">
                <v-pagination total-visible="5"
                  v-model="page"
                 :length="totalpages/page"></v-pagination>
            </v-col>
        </v-row>
  </div>
</template>

<script>
import MyButton from '../components/MyButton.vue'

export default {
  components: { MyButton },
  data() {
    return {
      pretraga: "bmw",
      auti: [],
      loading: false,
      page: 1,
      totalpages: 0,
      slike1: [
        {
          src: "https://images.hgmsites.net/hug/lamborghini-aventador-lp-700-4-roadster_100409119_h.jpg",
        },
        {
          src: "https://cdn.motor1.com/images/mgl/9gvqy/s1/aventador-lp-700-4-roadster-submodel.jpg",
        },
        {
          src: "https://robbreport.com/wp-content/uploads/2013/07/untitled-8-1.jpg?w=1000",
        },
        {
          src: "https://www.supercars.net/blog/wp-content/uploads/2016/04/2012_Lamborghini_AventadorLP7004Roadster-8-1536.jpg",
        },
      ],
      slike2: [
        {
          src: "https://www.autopista.es/uploads/s1/95/24/06/1/p90428343-highres.jpeg",
        },
        {
          src: "https://carwow-uk-wp-3.imgix.net/BMW-X7-interior.jpg?ixlib=rb-1.1.0&fit=crop&w=1600&h=&q=60&cs=tinysrgb&auto=format",
        },
        {
          src: "https://www.bilia.no/globalassets/personbilar/bmw/x7/2018/bmw-x7-kupe_bak_2480x1240-bilgalleri-x-3.jpg?width=600",
        },
        {
          src: "https://mediapool.bmwgroup.com/cache/P9/201810/P90326038/P90326038-the-first-ever-bmw-x7-with-design-pure-excellence-in-arctic-grey-light-alloy-wheels-styling-757-10-2-2248px.jpg",
        },
      ],
      slike3: [
        {
          src: "https://www.autocar.co.uk/sites/autocar.co.uk/files/porsche-cayman-gt4-0000.jpg",
        },
        {
          src: "https://photos.stuttcars.info/upload/2015/02/03/cayman-981-gt4-24-copyright-porsche-downloaded-from-stuttcars_com.jpg",
        },
        {
          src: "https://photos.stuttcars.info/upload/2015/02/08/cayman-981-gt4-32-copyright-porsche-downloaded-from-stuttcars_com.jpg",
        },
        {
          src: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/porsche_newsroom/Produkte/Boxster-und-Cayman/Cayman-GT4/Aufmacher/P15_0072_a4_rgb_mittig/jcr:content/P15_0072_a4_rgb_mittig.jpg",
        },
      ],
      slike4: [
        {
          src: "https://www.kindpng.com/picc/m/26-264958_mercedes-benz-s-class-w222-hd-png-download.png",
        },
        {
          src: "https://i.pinimg.com/originals/25/d4/e2/25d4e242927f5ae727e513cd905a67e3.jpg",
        },
        {
          src: "https://gdansklimo.com/images/overview/mercedes-benz-s-class-new-d3.png",
        },
        {
          src: "https://www.carscoops.com/wp-content/uploads/2013/05/006cbcc0-w222-mercedes-c6.jpg",
        },
      ],
    };
  },
  created() {
    console.log("created");
    this.dohvatiAute();
  },
  methods: {
    dohvatiAute() {
      let api =
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/" + this.pretraga + "?format=json";
      this.axios.get(api, {
              params: {
                  'page': this.page,
                   'limit': 5,
                    }
                 }).then((response) => {
        console.log(response.data.Results);
        this.auti = response.data.Results;
        this.totalpages = response.data.count;
      });
    },
    ide() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2500);
    },
    prikaziAlert() {
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 2500);
    },
  },
};
</script>

<style scoped>
.v-carousel {
  width: 410px;
}

.v-card {
  min-height: 500px;
}

h1{
  font-size: 60px;
  font-weight: 900;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: red;
  text-shadow: 2px 2px 8px black;
}

#auti {
  background-color: #6666ff;
}


</style>
