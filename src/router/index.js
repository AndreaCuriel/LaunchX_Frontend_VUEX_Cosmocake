import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuView from "../views/MenuView.vue";
import FormularioView from "../views/FormularioView.vue";
import PerfilView from "../views/PerfilView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuView,
  },

  {
    path: "/menu/formulario",
    name: "formulario",
    component: FormularioView,
  },

  {
    path: "/perfil",
    name: "perfil",
    component: PerfilView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
