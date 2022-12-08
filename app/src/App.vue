<template>
  <v-app>
    <v-progress-linear
      :active="!loading"
      :indeterminate="loading"
      absolute
      bottom
      color="deep-purple-accent-4"
    />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    return {
      loading: () => store.dispatch("global/loading"),
    };
  },
});
</script>
