<template>
    <v-app class="background">
        <div class="container-card">
            <v-card width="80vw" color="#162c2aab">
                <div class="titulo">
                    <span>CAMPEÕES DA MESA "FRAGMENTOS DE LOUCURA"</span>
                </div>
                <v-card-text>
                    <v-container fluid>
                        <v-row class="container-row">
                            <v-col cols="3" class="container-personagem" v-for="(personagem, index) in char"
                                :key="index">
                                <div @click="goTo(personagem)">
                                    <div class="container-image">
                                        <div>
                                            <v-img aspect-ratio="1" :src="personagem.url_select"></v-img>
                                        </div>
                                    </div>
                                    <div class="nome-personagens">
                                        <span>{{ personagem.name }}</span>
                                    </div>
                                    <div class="titulo-personagens">
                                        <span>{{ personagem.title }}</span>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Personagem from '~/models/Personagem';

export default Vue.extend({
    data() {
        return {
            char: [] as Array<Personagem>
        }
    },
    methods: {
        async getData() {
            await this.$axios.get("http://127.0.0.1:3333/char").then((res) => {
                this.char = res.data
                this.char.forEach((e: Personagem) => {
                    e.name = e.name.toUpperCase()
                })
            })
        },
        goTo(route: Personagem) {
            this.$router.push({
                path: `/campeoes/${route.id}`
            })
        }
    },
    created() {
        this.getData()
    }
})
</script>

<style scoped>
.container-row {
    display: flex;
    justify-content: flex-start;
}

.container-card {
    margin-top: 1%;
    display: flex;
    justify-content: center;
}

.container-personagem {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.container-image {
    border: 3px solid #C8AA6E;
    border-radius: 100%;
    overflow: hidden;
    height: 20vh;
    width: 10vw;
}

.container-image v-img {
    height: 100%;
    width: 100%;
    object-fit: cover;

}

.nome-personagens {
    padding-top: 3%;
    text-align: center;
    font-size: 2.3em;
    font-family: "Beaufort for LOL Bold" !important;
    color: #F0E6D2;
}

.titulo-personagens {
    font-family: "Beaufort for LOL Bold" !important;
    padding-top: 2%;
    text-align: center;
    color: #C8AA6E;
}

.titulo {
    font-family: "Beaufort for LOL Bold" !important;
    font-size: 2.2em;
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    justify-content: center;
    color: #C8AA6E;
}
</style>