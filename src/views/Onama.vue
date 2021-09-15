<template>
  <div class="about">
    <h1 style="font-size:45px">Saznajte nešto više o Auto Salonu Q</h1>
    
    <br><br>

    <img src= "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/2021/07_07/gate_family_og.jpg"
    align = "right" id = "desno">

    <b>Povijest tvrtke</b>
    <br><br>
    <p>
      Tvrtka je osnovana 2001. godine.
      U ponudi Auto salona Q je oko 300 vozila, a svaki tjedan nam dolazi pedesetak novih vozila.
      Na našoj stranici također možete pogledati sva vozila koja su trenutno u ponudi kao i sve podatke o njima. 
    </p>

    <br><br><br>

    <img src= "https://thenewswheel.com/wp-content/uploads/2017/03/10-Famous-New-Yorkers-with-Incredibly-Cool-Cars-Feature.jpg"
    align = "left" id = "lijevo">


    <b>Profil tvrtke</b>
    <br><br>
    <p>
      Auto Salon Q d.o.o. bavi se prodajom novih vozila.
      Sva vozila posjeduju certifikat o proizvođaču i servisnu evidenciju. 
      Pri kupovini vozila u Auto salonu Q dobivate pismenu garanciju 12 mjeseci na motor i mjenjač.
    </p>

    <br><br><br><br>

    <b>Ponuda vozila</b>
    <br><br>
    <p>
      Auto salon Q omogućava Vam raznu ponudu vozila, kao što su: Audi, BMW, Mercedes-Benz, Porsche, Bugatti, Lamborgini, Ferrari, Jeep, Ford Mustang.
    </p>

    <br><br>

    <b id = "kont">
      <a href = '../Kontakt' > Kontaktirajte </a> nas za više informacija!
    </b>


    <img src="https://media1.giphy.com/media/o4mQP8U1W8TGU65CGj/giphy.gif?cid=ecf05e47mxxhyg9fpcb2hrdliargvlj70qnyj6fuksp6gbrz&rid=giphy.gif&ct=s" 
    alt="auto gif" id = "gif"/>
    
  </div>
</template>

<style scoped>

b {
  font-size: 30px;
}

p {
  font-size: 20px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}

#gif {
  padding-left: 200px;
}

#kont {
  padding-left: 200px;
}

#desno{
  width: 70%;
  padding-left: 30px; 
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
}

#lijevo{
  width: 55%;
  padding-right: 30px; 
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
}


@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
}
}


</style>