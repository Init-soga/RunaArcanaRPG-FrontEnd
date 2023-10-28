<template>
  <v-app class="background">
    <v-navigation-drawer permanent>
      <v-list nav>

      </v-list>
    </v-navigation-drawer>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.background {
  background-image: url("~/assets/Fundos/selecao.png");
  background-size: cover;

}
</style>
