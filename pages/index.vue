<template>
  <v-app class="background-inicio">
    <div class="container">
      <div class="shadow">
        <h2 class="descubra">DESCUBRA E EXPLORE</h2>
        <span class="runeterra">RUNETERRA</span>
      </div>
      <v-btn @click="goTo()" class="btn">INICIAR</v-btn>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'empty',
  data() {
    return {}
  },
  methods: {
    goTo() {
      this.$router.push({
        path: "/inicio"
      })
    }
  }
})
</script>

<style scoped>
.background-inicio {
  background-image: url("~/assets/Fundos/inicial.jpg");
  background-size: cover;
  background-position: center;
}

.container {
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  width: 30%;
  align-self: center;
  margin-top: 8%;
  color: #F0E6D2;
  background-color: #1E282D !important;
  border: 2px solid #C89B3C;
}

.shadow {
  text-shadow: 1px 1px 30px #1E282D;
}

.runeterra {
  color: #C89B3C;
  font-size: 6vw;
}

.descubra {
  color: #fff;
  font-size: 3vw;
}

@media screen and (max-width: 600px) {
  .runeterra {
    font-size: 12vw;
  }

  .descubra {
    font-size: 5vw;
  }

  .btn {
    width: 60%;
  }
}



.btn:hover,
.btn:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}
</style>