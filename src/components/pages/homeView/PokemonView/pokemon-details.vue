<template>
  <div class="container">
    <div class="pictures">
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
        <img src="pokemon?.sprites?.back_shiny" alt="" />
      </div>
    </div>
    <div class="info">
      <div>
        <h2>
          <strong>Nome:</strong>
          teste
        </h2>
      </div>
      <div>
        <h4>
          <strong>Altura:</strong>
          teste
        </h4>
        <h4>
          <strong>Experiência:</strong>
          teste
        </h4>
        <h4>
          <strong>Peso:</strong>
         teste
        </h4>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
