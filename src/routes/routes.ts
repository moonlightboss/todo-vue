import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../views/MainPage.vue"
import TodoListVue from "../views/TodoList.vue";
const routes =[
    {path: "/", component: MainPageVue},
    {path: "/todoList", component:TodoListVue },
]

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;