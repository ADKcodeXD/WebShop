import Home from '@/pages/Home'
import Search from '@/pages/Search';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'


export default [{
        path: '/home',
        component:() => import ('@/pages/Home'),
        meta: {
            show: true
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        name: 'search',
        component: Search,
        meta: {
            show: true
        }
    },
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            show: false
        }
    },
    {
        path: '/pay',
        name: 'pay',
        component: Pay,
        meta: {
            show: false
        },
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            show: false
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            show: false
        }
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {
            show: false
        }
    },
    {
        path: '/center',
        component: Center,
        meta: {
            show: false
        },
        children:[
            {
                path:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/addcartsucces',
        name: 'addcartsucces',
        component: AddCartSuccess,
        meta: {
            show: false
        }
    },
    {
        path: '*',
        redirect: '/home'
    }
]