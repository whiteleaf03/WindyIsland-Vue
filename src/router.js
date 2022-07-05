import * as VueRouter from 'vue-router'

import Desktop from "./components/Desktop";
import desktopHome from "./components/desktop/Main/Content/desktopHome";
import desktopProgram from "./components/desktop/Main/Content/desktopProgram";
import desktopBook from "./components/desktop/Main/Content/desktopBook";
import desktopDaily from "./components/desktop/Main/Content/desktopDaily";
import desktopComment from "./components/desktop/Main/Content/desktopComment";
import desktopSaySay from "./components/desktop/Main/Content/desktopSaySay";
import desktopLink from "./components/desktop/Main/Content/desktopLink";

import desktopAdmin from "./components/Admin";
import desktopAdminManage from "./components/admin/adminManage";
import desktopAdminLogin from "./components/admin/adminLogin";

import Mobile from "./components/Mobile";
import mobileHome from "./components/mobile/Main/mobileHome";
import mobileMenu from "./components/mobile/Main/mobileMenu";
import mobileProgram from "./components/mobile/Main/mobileProgram";
import mobileBook from "./components/mobile/Main/mobileBook";
import mobileDaily from "./components/mobile/Main/mobileDaily";
import mobileComment from "./components/mobile/Main/mobileComment";
import mobileSaysay from "./components/mobile/Main/mobileSaysay";
import mobileLink from "./components/mobile/Main/mobileLink";
import adminProgram from "./components/admin/main/adminProgram";
import adminDaily from "./components/admin/main/adminDaily";
import adminSaysay from "./components/admin/main/adminSaysay";
import adminComment from "./components/admin/main/adminComment";

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
        path: 'comment',
        component: desktopComment
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

const mobileRoutes = [
    {
        path: 'home',
        component: mobileHome
    },
    {
        path: 'menu',
        component: mobileMenu
    },
    {
        path: 'program',
        component: mobileProgram
    },
    {
        path: 'book',
        component: mobileBook
    },
    {
        path: 'daily',
        component: mobileDaily
    },
    {
        path: 'comment',
        component: mobileComment
    },
    {
        path: 'saysay',
        component: mobileSaysay
    },
    {
        path: 'link',
        component: mobileLink
    }
]

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
        redirect: '/mobile/home',
        component: Mobile,
        children: mobileRoutes
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/login',
        component: desktopAdmin,
        children: [
            {
                path: 'login',
                name: 'login',
                component: desktopAdminLogin
            },
            {
                path: 'manage',
                name: 'manage',
                component: desktopAdminManage,
                children: [
                    {
                        path: 'program',
                        component: adminProgram
                    },
                    {
                        path: 'daily',
                        component: adminDaily
                    },
                    {
                        path: 'saysay',
                        component: adminSaysay
                    },
                    {
                        path: 'comment',
                        component: adminComment
                    }
                ]
            }
        ]
    }
]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router
