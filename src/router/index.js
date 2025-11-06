import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AccomplishmentsView from "../views/AccomplishmentsView.vue"
import ContactsView from "../views/ContactsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/accomplishments",
      name: "accomplishments",
      component: AccomplishmentsView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    }
  ],
});

export default router;
