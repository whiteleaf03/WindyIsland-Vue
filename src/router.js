import * as VueRouter from 'vue-router'
import Desktop from "./components/Desktop.vue";
import desktopProgram from "./components/desktop/Main/Content/desktopProgram";
import desktopBook from "./components/desktop/Main/Content/desktopBook";
import desktopDaily from "./components/desktop/Main/Content/desktopDaily";
import desktopMessage from "./components/desktop/Main/Content/desktopMessage";
import desktopSaySay from "./components/desktop/Main/Content/desktopSaySay";
import desktopLink from "./components/desktop/Main/Content/desktopLink";
import desktopHome from "./components/desktop/Main/Content/desktopHome";
import Mobile from "./components/Mobile";

const desktopRoutes = [
    {
        path: '/',
        redirect: "home"
    },
    {
        path: 'home',
        component: desktopHome
    },
    {
        path: 'program',
        component: desktopProgram
    },
    {
        path: 'book',
        component: desktopBook
    },
    {
        path: 'daily',
        component: desktopDaily
    },
    {
        path: 'message',
        component: desktopMessage
    },
    {
        path: 'saysay',
        component: desktopSaySay
    },
    {
        path: 'link',
        component: desktopLink
    }
]

// const mobileRoutes = [
//     {
//         path: 'home',
//     },
//     {
//         path: 'program',
//     },
//     {
//         path: 'book',
//     },
//     {
//         path: 'daily',
//     },
//     {
//         path: 'message',
//     },
//     {
//         path: 'saysay',
//     },
//     {
//         path: 'link',
//     }
// ]

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/desktop/home'
    },
    {
        path: '/desktop',
        name: 'desktop',
        redirect: '/desktop/home',
        component: Desktop,
        children: desktopRoutes
    },
    {
        path: '/mobile',
        name: 'mobile',
        component: Mobile
        // children: mobileRoutes
    }
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router
