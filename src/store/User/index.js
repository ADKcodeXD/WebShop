import {reqGetSendCode,reqUserRegister,reqUserLogin,reqUserInfo,reqClearUserInfo} from '@/api'
import {setToken,getToken,removeToken} from '@/utils/token'

// 登录注册模块
const state={
    code:'',
    token:getToken(),
    userInfo:{}
}
const actions={
    async getCode({commit},phone){
        let result=await reqGetSendCode(phone);
        if(result.code==200){       
            commit("GETCODE",result.data)
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async userRegister({commit},user){
        let result=await reqUserRegister(user);
        if(result.code==200){       
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async userLogin({commit},user){
        let result=await reqUserLogin(user);
        if(result.code==200){       
            commit("USERLOGIN",result.data.token);
            setToken(result.data.token);
            return "ok";
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async getUserInfo({commit}){
        let result=await reqUserInfo();
        console.log(result.code);
        console.log(result.data);
        if(result.code==200){       
            commit("USERINFO",result.data)
            return "ok"
        }
        else{
            return Promise.reject(new Error("faile"))
        }
    },
    async userLogOut({commit}){
        let result=await reqClearUserInfo();
        if(result.code==200){       
            commit("CLEARUSERINFO")
            return "ok"
        }
    }
}
const mutations={
    GETCODE(state,code){
        state.code=code;
    },
    USERLOGIN(state,token){
        state.token=token;
    },
    USERINFO(state,user){
        state.userInfo=user;
    },
    CLEARUSERINFO(state){
        state.token='';
        state.userInfo='';
        removeToken();
    }
}

const getters={}

export default{
    state,
    mutations,
    actions,
    getters
}