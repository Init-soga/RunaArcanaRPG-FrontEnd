<template>
    <div>
        <v-navigation-drawer app  permanent mini-variant class="drawer" >
            <v-list nav height="100vh">
                <DrawerItem description="Início" route="inicio" icon="mdi-home" />
                <DrawerItem description="Edição de personagens" route="config" icon="mdi-cog" />
                <DrawerItem description="Bestiário" route="bestiario" icon="mdi-script" />
                <DrawerItem description="Diário" route="diario" icon="mdi-book" />
                <DrawerItem description="Campeões" route="campeoes" icon="mdi-shield-sword" />
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DrawerItem from './DrawerItem.vue';

export default Vue.extend({
    data() {
        return {}
    },
    components: {
        DrawerItem
    }
})
</script>

<style scoped>
.drawer{
    background-color: #162C2A;
    background-image: url('~/assets/Fundos/texture.png');
    background-repeat: repeat-y;
    background-size: contain;
}
</style>