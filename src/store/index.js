import Vue from 'vue';
import Vuex from 'vuex';

import home from './home'
import search from './search';
import detail from './detail';
import shopcar from './shopcar';
import user from './User';
import address from './address'
Vue.use(Vuex)

const actions={
    
}

//操作数据的mutations
const mutations={

}

// 准备state
const state={
    count:1
}

const getters={

}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
    modules:{
        home,
        search,
        detail,
        shopcar,
        user,
        address
    }
})