<template>
    <v-app class="background">
        <div class="container-card">
            <v-card width="85vw" color="#00000000">
                <div>
                    <v-row>
                        <v-col cols="2">
                            <div class="coluna-esquerda">
                                <div class="container-role">
                                    <v-img :src="require('~/assets/Icones/role_icon_fighter.png')"></v-img>
                                </div>
                                <div>
                                    <span>Lutador</span>
                                </div>
                                <div class="container-region">
                                    <v-img :src="require('~/assets/Icones/noxus_crest_icon.png')"></v-img>
                                    <v-img :src="require('~/assets/Icones/ionia_crest_icon.png')"></v-img>
                                </div>
                                <div>
                                    <span>Noxus/Ionia</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="8">
                            <div class="coluna-meio">
                                <div class="container_img">
                                    <v-img :src="require('~/assets/Personagens/Khamzat/khamzat_splash.png')"></v-img>
                                    <div class="over-text"><span>KHAMZAT</span></div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="2">
                            <div class="coluna-direita"></div>
                        </v-col>
                    </v-row>
                </div>
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
            personagem: {} as Personagem
        }
    },
    methods: {
        async getData() {

            console.log(this.$route.params.id)

            await this.$axios.get(`http://127.0.0.1:3333/personagens/${this.$route.params.id}`).then((res) => {
                this.personagem = res.data
            })

        }
    },
    created() {
        this.getData()
    }
})
</script>

<style scoped>
.container-card {
    margin-top: 1%;
    display: flex;
    justify-content: center;
}

.coluna-esquerda {
    border: 3px solid #C8AA6E;
    height: 40vh;
    background-color: #0e1b1aab;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.coluna-meio {
    border: 3px solid #C8AA6E;
    height: 40vh;
    background-color: #0e1b1aab;
}

.coluna-direita {
    border: 3px solid #C8AA6E;
    height: 40vh;
    background-color: #0e1b1aab;
    color: #00000000
}

.container_img {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    text-align: center;
    color: white;
}

.over-text {
    position: absolute;
    bottom: -10%;
    right: 25%;
    left: 50%;
    margin-left: -25%;
    font-size: 6.5em;
    color: #C89B3C
}

.container-image v-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.container-region {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 30%;
}
</style>