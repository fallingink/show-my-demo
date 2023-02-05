import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import HomeVue from "./views/Home.vue";
import TagsVue from "./views/Tags.vue";
import DemoVue from "./views/Demo.vue";
const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: HomeVue,
    },
    {
        path: "/tags",
        name: "Tags",
        component: TagsVue,
    },
    {
        path: "/demo/:id",
        name: "Demo",
        component: DemoVue,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;