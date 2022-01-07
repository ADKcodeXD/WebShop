import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
Vue.use(VueRouter)



let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;

// 重写push方法和replace方法 解决NavigationDuplicated
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&& reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
    //通过call指定了这个对象的上下文确定为router而不是windows

}

VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&& reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
    //通过call指定了这个对象的上下文确定为router而不是
}

export default new VueRouter({
    routes,
    scrollBehavior(to,from,savePosition){
        // 滚动行为，y为0  代表y在最上方
        return {y:0}
    }
})