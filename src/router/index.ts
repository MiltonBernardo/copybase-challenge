import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PokemonView from "../views/PokemonView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "/:id",
          name: "Pokemon",
          component: PokemonView,
        },
      ],
    },
  ],
});

export default router;
