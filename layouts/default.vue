<template app>
  <v-app class="background">
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

}
</style>
