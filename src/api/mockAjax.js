//这个文件是对于axios进行二次封装
import axios from 'axios'

//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'



//对axios进行二次封装
const requests = axios.create({
    //基础路径 发请求的时候路径上回带上api
    baseURL: "/mock",
    //指定请求超时时间
    timeout: 5000,

})

//请求拦截器  发请求之前，拦截器可以监测到

requests.interceptors.request.use((config) => {
    //config 配置对象 
    
    //进度条开始
    nprogress.start();

    return config;
})

//相应拦截器

requests.interceptors.response.use((res) => {
    //成功的回调函数

    //进度条结束
    nprogress.done();

    return res.data;
}, (error) => {
    return Promise.reject(new Error("fail"))
})

export default requests;