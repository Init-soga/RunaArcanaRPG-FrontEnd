<template>
    <v-app class="background">
        <div class="main-container">
            <v-card style="margin-top: 2%; margin-bottom: 2%;" width="70vw" color="#162c2aab">
                <v-card-title class="title">Adicionar infos</v-card-title>
                <v-card-text>
                    <v-container fluid>
                        <v-row>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.nome" label="Nome"></v-text-field></v-col>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.regiao"
                                    label="Região"></v-text-field></v-col>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.classe"
                                    label="Classe"></v-text-field></v-col>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.titulo"
                                    label="Titulo"></v-text-field></v-col>
                        </v-row>
                        <v-row>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.relacionado1"
                                    label="Relacionado 1"></v-text-field>
                            </v-col>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.relacionado2"
                                    label="Relacionado 2"></v-text-field>
                            </v-col>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.relacionado3"
                                    label="Relacionado 3"></v-text-field>
                            </v-col>
                            <v-col> <v-text-field color="#445452" outlined v-model="postObject.imagem"
                                    label="Link da imagem (flickr)"></v-text-field></v-col>
                            <v-col>
                                <v-select color="#445452" v-model="postObject.mesa" outlined label="Mesa"
                                    :items="['zefiros', 'fragmentos']" />
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-textarea color="#445452" outlined v-model="postObject.manifesto_titulo"
                                    label="Título do manifesto"></v-textarea>
                            </v-col>
                            <v-col>
                                <v-textarea color="#445452" outlined v-model="postObject.manifesto_corpo"
                                    label="Corpo do manifesto"></v-textarea>
                            </v-col>
                            <v-col>
                                <v-textarea color="#445452" outlined v-model="postObject.frase" label="Frase Inferior"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row class="main-container"><v-btn color="#162C2A" dark @click="send()">Salvar</v-btn></v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-data-table class="test" :headers="headers" :items="lista">
                                    <template v-slot:item.actions="{ item }">
                                        <v-btn text
                                            @click="deletePersonagem(item.id)"><v-icon>mdi-trash-can</v-icon></v-btn>
                                    </template>
                                </v-data-table>
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
import Personagem from "~/models/Personagem"

export default Vue.extend({
    data() {
        return {
            postObject: {} as Personagem,
            lista: [] as Array<any>,
            headers: [{ text: "ID", value: 'id', align: 'center', sortable: false }, { text: "Nome", value: 'nome', align: 'center', sortable: false }, { text: "Ações", value: 'actions', align: 'center', sortable: false }]
        }
    },
    methods: {
        async getData() {
            await this.$axios.get("http://127.0.0.1:3333/personagens").then((res) => {
                this.lista = res.data
            })
        },
        async send() {
            await this.$axios.post("http://127.0.0.1:3333/personagens", this.postObject).then((res) => {
                alert(res.data)
            })
        },
        async deletePersonagem(personagem: Personagem) {
            await this.$axios.delete(`http://127.0.0.1:3333/personagens/${personagem}`).then(() => {
                alert("deletado otário")
                this.getData()
            })
        }
    },
    async created() {
        this.getData()
    }
})
</script>

<style scoped>
.main-container {
    display: flex;
    justify-content: center;
}

.title {
    font-family: "BeaufortForLOL" !important;
}

.test{
    background-color: #162c2aab;
}

td:hover{
    background-color: #5eb4adab;
}

</style>