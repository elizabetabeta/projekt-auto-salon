<template>
  <div>
    <h1>Kontakt</h1>
    <p>
      Od samih svojih početaka vodimo se filozofijom da je najvažnije
      zadovoljiti sve želje naših kupaca,tako da uvijek nastojimo što više
      obogatiti ponudu naših automobila koji će svojom posebnošću privući naše
      klijente. Posjetite nas i uvjerite se sami, da AS Q dovodi vaše snove u
      Hercegovinu, na vama je samo da izaberete model!
    </p>
    <br />
    <h2>Adresa</h2>
    <p>Auto salon Q d.o.o.</p>
    <p>Mostar 88000, BiH</p>
    <p>E-mail: <i>info@asq.com</i></p>

    <br />

    <h3>Radno vrijeme</h3>
    <p>
      Ponedjeljak - Subota, 08:00 - 19:00 sati

      <br /><br /><br />
    </p>

    <form>
      <p>Kako bi nas kontaktirali ispunite formu!</p>
      <v-text-field
        label="Unesite ime i prezime..."
        hint="Ovo polje je obavezno"
        filled
      ></v-text-field>
      <v-text-field label="Unesite email..." filled></v-text-field>
      <v-text-field label="Unesite mjesto..." filled></v-text-field>
      <v-text-field
        label="Unesite naslov..."
        hint="Ovo polje je obavezno"
        filled
      ></v-text-field>
      <v-text-field
        label="Poruka za nas..."
        hint="Ovo polje je obavezno"
        filled
      ></v-text-field>
      <p>Odaberite vrijeme posjete!</p>
      
       <datetime format="DD/MM/YYYY" width="300px" v-model="val"></datetime>
       <br>

      <v-btn @click="prikaziAlert()" color="primary">Pošalji poruku</v-btn>
    </form>

    <div v-show = "alert">

    <br><br>
    <v-alert color="green" type="success">Uspješno poslana poruka!</v-alert>

    </div>

    <br />

  
  </div>
</template>


<script>
import datetime from 'vuejs-datetimepicker';

export default {
   components: { datetime },
  name: "Contact",
  data() {
    return {
      alert: false,    
    };
  },
  methods: {
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
main {
  background-attachment: fixed;
}

#btn {
  background-color: purple;
}
</style>