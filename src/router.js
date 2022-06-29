import * as VueRouter from 'vue-router'
import Desktop from "./components/Desktop.vue";
import Program from "./components/desktop/Main/Content/Program";
import Book from "./components/desktop/Main/Content/Book";
import Daily from "./components/desktop/Main/Content/Daily";
import Message from "./components/desktop/Main/Content/Message";
import SaySay from "./components/desktop/Main/Content/SaySay";
import Link from "./components/desktop/Main/Content/Link";
import Home from "./components/desktop/Main/Content/Home";

const pcRoutes = [
    {
        path: '/',
        redirect: "home"
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'program',
        component: Program
    },
    {
        path: 'book',
        component: Book
    },
    {
        path: 'daily',
        component: Daily
    },
    {
        path: 'message',
        component: Message
    },
    {
        path: 'saysay',
        component: SaySay
    },
    {
        path: 'link',
        component: Link
    }
]

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/pc/home'
    },
    {
        path: '/pc',
        name: 'pc',
        redirect: '/pc/home',
        component: Desktop,
        children: pcRoutes
    },
    // {
    //     path: '/mobile',
    //     name: 'mobile',
    // }
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router
