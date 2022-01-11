import {
    reqAddressInfo,
    reqOrderInfo
} from '@/api'

const state = {
    address: [],
    orderinfo:{}
}
const mutations = {
    GETUSERADDRESS(state, data) {
        state.address = data;
    },
    GETORDERINFO(state,data){
        state.orderinfo = data;
    }

}
const actions = {
    async getUserAddress({
        commit
    }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data)
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async getOrderInfo({commit}) {
        let result = await reqOrderInfo();
        console.log(result.code);
        console.log(result.message);
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}