<template>
    <v-app class="background">
        <div class="container-card">
            <v-card width="85vw" color="#00000000">
                <div>
                    <v-row>
                        <v-col cols="2">
                            <div class="coluna-esquerda">
                                <div class="container-role">
                                    <v-img :src="char.role?.url_icon"></v-img>
                                    <span>{{ char.role?.name }}</span>
                                </div>
                                <div class="container-role">
                                    <v-img :src="char.region?.url_icon"></v-img>
                                    <span>{{ char.region?.name }}</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="8">
                            <div class="coluna-meio">
                                <div class="container_img">
                                    <v-img :src="char.url_splash"></v-img>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="2">
                            <div class="coluna-direita"></div>
                        </v-col>
                    </v-row>
                </div>
                <v-card width="85vw" class="container-down">
                    <v-container fluid>
                        <v-row class="name-span">
                            <span>{{ char.name }}</span>
                        </v-row>
                        <v-row class="title-span">
                            <span>{{ char.title }}</span>
                        </v-row>
                        <v-row class="title-manifest-span">
                            "{{ char.manifest_title }}"
                        </v-row>
                        <v-row class="body-span">
                            {{ char.manifest_body }}
                        </v-row>
                        <v-row class="speak-span">
                            "{{ char.speak }}"
                        </v-row>
                    </v-container>
                </v-card>
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
            char: {} as Personagem
        }
    },
    methods: {
        async getData() {
            await this.$axios.get(`http://127.0.0.1:3333/char/${this.$route.params.id}`).then((res) => {
                this.char = res.data
                console.log(this.char)
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
    justify-content: center;
}

.container-role {
    width: 8vw;
    height: auto;
    overflow: auto;
    text-align: center;
}

.container-down {
    margin-top: 2%;
    background-color: #0e1b1aab;
    border: 3px solid #C8AA6E;
}

.name-span {
    display: flex;
    justify-content: center;
    font-size: 2.6em;
    color: #C89B3C;
    font-size: 2.2em;
}

.title-manifest-span {
    display: flex;
    justify-content: center;
    font-size: 1.4em;
    margin-bottom: 2%;
    margin-top: 4%;
    padding-left: 2%;
    padding-right: 2%;
    text-align: center;
}

.body-span {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0 2%;
}

.speak-span {
    display: flex;
    justify-content: center;
    padding-top: 2%;
    font-style: italic;
    color: #C8AA6E;
    text-align: center;
    padding: 2% 2% 2% 0;
}

.title-span {
    display: flex;
    justify-content: center;
    font-size: 1.3em;
}

</style>