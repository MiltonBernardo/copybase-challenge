import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

export const usePokemonStore = defineStore("pokemon", {
  state() {
    return {
      pokemon: {} as any,
    };
  },
  actions: {
    async searchPokemonByName(name: string) {
      try {
        const data = await axios.get(`pokemon/${name}`);
        this.pokemon = data.data;
        this.getEvolution(this.pokemon.id);
      } catch (er) {
        this.pokemon = null;
      }
    },
    async getEvolution(id: number) {
      try {
        const data = await axios.get(`pokemon/${id}`);
        this.pokemon = {
          ...this.pokemon,
          ...data.data,
        };
      } catch (er) {
        console.log("erro^: ", er);
      }
    },
  },
});
