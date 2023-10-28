<template>
    <v-app class="background">
        <v-container fluid>
            <v-row class="container">
                <v-col cols="6">
                    <div>
                        <v-card color="#162c2aab" height="90vh">
                            <span class="title">Conheça nossas aventuras!</span>
                            <div style="margin-bottom: 2%;" @click="goTo('fragmentos-de-loucura')">
                                <v-row>
                                    <v-col class="flex-container">
                                        <v-img max-width="12vw" class="cursor-pointer"
                                            :src="require('~/assets/Elementos/place.svg')"></v-img>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col style="text-align: center;">
                                        <span class="cursor-pointer">Fragmentos De
                                            Loucura</span>
                                    </v-col>
                                </v-row>
                            </div>
                            <div @click="goTo('zefiros-do-ardor')">
                                <v-row>
                                    <v-col class="flex-container">
                                        <v-img class="cursor-pointer" max-width="12vw"
                                            :src="require('~/assets/Elementos/place.svg')"></v-img>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col style="text-align: center;">
                                        <span class="cursor-pointer">Zéfiros Do
                                            Ardor</span>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </div>
                </v-col>
                <v-col cols="6">
                    <div>
                        <v-card color="#162c2aab" height="90vh">
                            <span class="title">Conheça o mundo de Runeterra!</span>
                            <div style="margin-bottom: 2%;" @click="goTo('bestiario')">
                                <v-row>
                                    <v-col class="flex-container">
                                        <v-img max-width="15vw" class="cursor-pointer"
                                            :src="require('~/assets/Elementos/bestiary.svg')"></v-img>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col style="text-align: center;">
                                        <span class="cursor-pointer">O bestiário</span>
                                    </v-col>
                                </v-row>
                            </div>
                            <div @click="goTo('diario')">
                                <v-row>
                                    <v-col class="flex-container">
                                        <v-img max-width="15vw"
                                            :src="require('~/assets/Elementos/journal.svg')"></v-img>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col style="text-align: center;">
                                        <span class="cursor-pointer">O Diário</span>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import 'animate.css';

export default Vue.extend({
    data() {
        return {}
    },
    methods: {
        goTo(rota: string) {
            this.$router.push({
                path: `/${rota}`
            })
        }
    }
})
</script>

<style scoped>

.title {
    display: flex;
    justify-content: center;
    padding-top: 3%;
    padding-bottom: 5%;
}

.container {
    display: flex;
    justify-content: center;
}

.flex-container {
    display: flex;
    justify-content: center;
}
</style>