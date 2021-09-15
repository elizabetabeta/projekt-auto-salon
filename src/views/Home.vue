<template>
  <div>
    <h1>Auto salon Q</h1>
    <br /><br />
    <p style="font-size: 30px">
      &emsp;Dobrodošli na web stranicu Auto salona Q!<br />
      &emsp;Uz našu pomoć, pronađite automobil iz vaših snova!
    </p>

    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <br /><br /><br /><br />

    <p id="text1">
      Najpouzdaniji i najkvalitetniji automobili upravo u našem salonu!
    </p>

    <br /><br /><br /><br />

    <v-parallax
      dark
      src="https://cdnb.artstation.com/p/assets/images/images/015/294/143/large/j-s-cool2.jpg?1547816190"
    >
      <v-row align="center" justify="center">
        <v-col>
          <img
            src="https://icon-library.com/images/man-men-21-512.png"
            id="slika"
          />
          <p id="tekst">Stotine zadovoljnih kupaca!</p>
        </v-col>
        <v-col>
          <img
            src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-25.png"
            id="slika"
          />
          <p id="tekst">Preko 300 vozila u ponudi!</p>
        </v-col>
        <v-col>
          <img
            src="https://www.transparentpng.com/thumb/telephone/telephone-png-icon-picture-14.png"
            id="slika"
          />
          <p id="tekst">Dostupni u svakom trenutku!</p>
        </v-col>
      </v-row>
    </v-parallax>

    <br /><br /><br /><br />

    <p id="text1">
      Tu smo da ostvarimo vaše snove!
    </p>

    <br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://i.pinimg.com/originals/d5/c5/c2/d5c5c26ccf5d9a112d34b0a77ee21553.jpg",
        },
        {
          src: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTbBvk0p2uSU/v1/-1x-1.jpg",
        },
        {
          src: "https://cdn.motor1.com/images/mgl/Bj1yv/s3/2022-mercedes-benz-eqs-interior.jpg",
        },
        {
          src: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2021/Innovation/Porsche-Engeneering-1-2021/Game-Engines/PEM_Carrera4S.jpeg/jcr:content/PEM_Carrera4S.jpeg",
        },
        {
          src: "https://cdn.motor1.com/images/mgl/gZlkg/s3/bugatti-divo-front-view.jpg",
        },
        {
          src: "https://www.alainclass.com/wp-content/uploads/2019/04/4-2019-Lamborghini-Aventador-SVJ-.jpg",
        },
        {
          src: "https://images.fineartamerica.com/images-medium-large-5/2013-red-ferrari-rachel-cohen.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 60px;
  font-weight: 900;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

#text1 {
  font-size: 50px;
  font-weight: 900;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
}

#slika {
  height: 100px;
  margin-left: 100px;
}

#tekst {
  text-align: center;
  font-size: 30px;
}
</style>