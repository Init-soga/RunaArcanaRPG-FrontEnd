<template>
    <v-app class="main-background">
        <div class="titulo">
            <span>ESCOLHA SUA AVENTURA!</span>
        </div>
        <v-container fluid>
            <v-row style="margin-top: 5%;">
                <v-col sm="1"></v-col>
                <v-col sm="4" cols="12">
                    <img @click="goToFragmentos()" class="img" :src="require('~/assets/log.png')">
                </v-col>
                <v-col sm="2"></v-col>
                <v-col sm="4" cols="12">
                    <img @click="goToZefiros()" class="img" style="max-width: 100%; min-width: 100%;"
                        :src="require('~/assets/log.png')">
                </v-col>
                <v-col sm="1"></v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {}
    },
    methods: {
        goToFragmentos() {
            this.$router.push({
                path: "/fragmentos"
            })
        },
        goToZefiros() {
            this.$router.push({
                path: "/zefiros"
            })
        }
    }
})
</script>

<style scoped>
.main-background {
    background-image: url("~/assets/Fundos/selecao.png");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

.titulo {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    font-size: 4vw;
    color: #F0E6D2
}

.img {
    max-width: 100%;
    min-width: 100%;
}

.img:hover {
    cursor: pointer;
}

@media screen and (max-width: 600px) {
    .titulo {
        font-size: 1.8em;
    }

    .img {
        padding: 0 7%;
    }

}
</style>