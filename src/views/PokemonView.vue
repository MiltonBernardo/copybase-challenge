<template>
  <section>
    <pokemon-details />
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PokemonDetails from "@/components/pages/HomeView/PokemonView/pokemon-details.vue";

export default defineComponent({
  components: {
    PokemonDetails,
  },
});
</script>
<style scoped>
section {
  padding: 2rem;
}
</style>
