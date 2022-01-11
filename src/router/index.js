import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import routes from './routes'
Vue.use(VueRouter)



let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push方法和replace方法 解决NavigationDuplicated
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
    //通过call指定了这个对象的上下文确定为router而不是windows

}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
    //通过call指定了这个对象的上下文确定为router而不是
}

let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savePosition) {
        // 滚动行为，y为0  代表y在最上方
        return {
            y: 0
        }
    }
})
// 全局守卫
router.beforeEach(async (to, from, next) => {
    // next放行函数  
    let token = store.state.user.token
    let userName= store.state.user.userInfo.userName
    // 获取token
    if (token) {
        // 如果有token 去login页面 不给去
        if (to.path == '/login') {
            next('/home')
        } else {
            if(userName){
                next();
            }else{
                try {
                    await store.dispatch('getUserInfo') 
                    next();
                } catch (error) {
                    await store.dispatch('userLogOut')
                    next('/login')
                }
            }  
        }
    } else {
        // 未登录 不能去支付相关的地方
        let toPath=to.path;
        console.log("11111");
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 || toPath.indexOf('/center')!=-1){
            
            next('/login?redirect='+toPath)
        }else{
            console.log(313);
            next();
        }
    }
})

export default router;