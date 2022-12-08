<template lang="html">
    <v-main>
        <v-btn @click="count++">{{count}}</v-btn>
        <Confirm></Confirm>
    </v-main>
</template>
<script setup>
import { ref } from "vue";
import Confirm from "@/components/dialog/Confirm.vue";

const count = ref(0);
</script>
<style lang="">
</style>