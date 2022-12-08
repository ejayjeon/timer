<template lang="html">
    <div>
        <!-- <v-dialog
            :value="true"
            persistent
            max-width="290"
        > -->
        <v-btn @click="dialog = false">dd</v-btn>
        <!-- </v-dialog> -->
    </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup(props) {
    const dialog = ref(true);
    return {
      dialog,
    };
  },
};
</script>