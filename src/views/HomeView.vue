<template>
  <main>
    <search-bar />
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
  }
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
