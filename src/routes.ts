import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue"),
    },
    {
        path: "/tags",
        name: "Tags",
        component: () => import(/* webpackChunkName: "Tags" */ "./views/Tags.vue"),
    },
    {
        path: "/demo/:id",
        name: "Demo",
        component: () => import(/* webpackChunkName: "Demo" */ "./views/Demo.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;