<template>
  <section>
    <pokemon-details v-if="pokemon" :pokemon="pokemon" />
    <h3 v-else>Pokemon não encontrado</h3>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PokemonDetails from "@/components/pages/homeView/PokemonView/pokemon-details.vue";
import { mapState, mapActions } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";

export default defineComponent({
  components: {
    PokemonDetails,
  },
  created() {
    const param: string = this.$route.params.id.toString();
    this.searchPokemonByName(param);
  },
  computed: {
    ...mapState(usePokemonStore, ["pokemon"]),
    test() {
      console.log(this.pokemon);
      return this.pokemon;
    },
  },
  methods: {
    ...mapActions(usePokemonStore, ["searchPokemonByName"]),
  },
});
</script>
<style scoped>
section {
  padding: 2rem;
}
</style>
