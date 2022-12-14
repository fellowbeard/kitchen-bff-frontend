import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexView from "../views/IndexView.vue";
import CreateView from "../views/CreateView.vue";
import ShowView from "../views/ShowView.vue";
import UpdateView from "../views/UpdateView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipes",
    name: "index",
    component: IndexView,
  },
  {
    path: "/recipes/new",
    name: "create",
    component: CreateView,
  },
  {
    path: "/recipes/:id",
    name: "show",
    component: ShowView,
  },
  {
    path: "/recipes/:id/edit",
    name: "edit",
    component: UpdateView,
  },
  {
    path: "/recipes/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/recipes/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/recipes/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
