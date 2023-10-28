<template>
    <div>
        <v-tooltip right>
            <template v-slot:activator="{ on, attrs }">
                <v-list-item
                    style="display: flex; justify-content: center;" link
                    v-bind="attrs" v-on="on" @click="goTo(route)">
                    <v-list-item-content>
                        <v-list-item-icon>
                            <v-icon>{{ icon }}</v-icon>
                        </v-list-item-icon>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <span>{{ description }}</span>
        </v-tooltip>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {}
    },
    props: {
        icon: String,
        route: String,
        description: String
    },
    methods: {
        goTo(route: string) {
            this.$router.push({
                path: `/${route}`
            })
        }
    }
})
</script>

<style scoped></style>