<template app class="background">
  <v-app>
    <Drawer />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '~/components/Drawer.vue';
export default {
  data() {
    return {}
  },
  components: {
    Drawer
  }
}
</script>

<style scoped>
.background {
  background-image: url("~/assets/Fundos/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
