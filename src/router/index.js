import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import PostDetail from "../views/PostDetail.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/add-post",
    component: Form,
  },
  {
    path: "/post-detail/:id",
    component: PostDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
