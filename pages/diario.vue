<template>
    <v-app>
        <div class="main-container">
            <v-card>
                <v-card-title>Adicionar infos</v-card-title>
                <v-card-text>
                    <v-container fluid>
                        <v-row><v-text-field></v-text-field></v-row>
                        <v-row></v-row>
                        <v-row></v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Personagem from "~/models/Personagem"

export default Vue.extend({
    data() {
        return {
            postObject: {} as Personagem
        }
    }
})
</script>

<style scoped>
.main-container {
    display: flex;
    justify-content: center;
}
</style>