<template>
  <main ref="main">
    <search-bar @getPokemonbyName="getPokemonByName" />
    <RouterView />
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import SearchBar from "@/components/pages/homeView/search-bar.vue";

export default defineComponent({
  components: {
    SearchBar,
    RouterView,
  },
  methods: {
    getPokemonByName(name: string): void {
      let text = name.toLowerCase().replace(" ", "-");
      this.$router.push(`/${text}`);
    },
  },
});
</script>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
}

.start-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}
</style>
