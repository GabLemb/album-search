// src/router/index.ts
import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import AddAlbum from "../views/AddAlbum.vue";
import SearchAlbum from "../views/SearchAlbum.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: SearchAlbum },
  { path: "/add-album", name: "add-album", component: AddAlbum },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
