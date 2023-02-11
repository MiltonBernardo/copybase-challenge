<template>
  <div class="container">
    <div class="pictures">
      <div>
        <img :src="pokemon?.sprites?.front_default" alt="" />
        <img :src="pokemon?.sprites?.front_shiny" alt="" />
      </div>
      <div>
        <img :src="pokemon?.sprites?.back_default" alt="" />
        <img :src="pokemon?.sprites?.back_shiny" alt="" />
      </div>
    </div>
    <div class="info">
      <div>
        <h2>
          <strong>Nome:</strong>
          {{ pokemon?.name }}
        </h2>
      </div>
      <div>
        <h4>
          <strong>Altura:</strong>
          {{ pokemon?.height }}
        </h4>
        <h4>
          <strong>Experiência:</strong>
          {{ pokemon?.base_experience }}
        </h4>
        <h4>
          <strong>Peso:</strong>
          {{ pokemon?.weight }}
        </h4>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    pokemon: {
      type: Object,
    },
  },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

strong {
  font-weight: bold;
}
.info {
  color: #101010;
}

@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
    align-items: center;
  }
}
</style>
