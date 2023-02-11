<template>
  <form @submit.prevent="searchPokemon" class="search">
    <input type="text" placeholder="Pesquisar por Pokemon" v-model="name" />
    <button>Pesquisar</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";
export default defineComponent({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(usePokemonStore, ["searchPokemonByName"]),
    searchPokemon() {
      this.searchPokemonByName(this.name);
      this.$emit("getPokemonbyName", this.name);
    },
  },
});
</script>
<style scoped>
.search {
  display: flex;
  align-items: stretch;
  column-gap: 1rem;
}
input {
  border-radius: 0.5rem;
  padding: 0.75rem;
}

button {
  background: #2176ae;
  border-radius: 0.5rem;
  border: none;
  color: white;
  padding: 0.75rem;
}
</style>
