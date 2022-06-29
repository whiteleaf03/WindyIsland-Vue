import * as VueRouter from 'vue-router'
import Desktop from "./components/Desktop.vue";
import Program from "./components/desktop/Main/Content/Program";
import Book from "./components/desktop/Main/Content/Book";
import Daily from "./components/desktop/Main/Content/Daily";
import Message from "./components/desktop/Main/Content/Message";
import SaySay from "./components/desktop/Main/Content/SaySay";
import Link from "./components/desktop/Main/Content/Link";
import Home from "./components/desktop/Main/Content/Home";

const routes = [
    {
        path: '/',
        redirect: "/pc/home"
    },
    {
        path: '/pc/home',
        component: Home
    },
    {
        path: '/pc/program',
        component: Program
    },
    {
        path: '/pc/book',
        component: Book
    },
    {
        path: '/pc/daily',
        component: Daily
    },
    {
        path: '/pc/message',
        component: Message
    },
    {
        path: '/pc/saysay',
        component: SaySay
    },
    {
        path: '/pc/link',
        component: Link
    }
]

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes // `routes: routes` 的缩写
})

export default router
