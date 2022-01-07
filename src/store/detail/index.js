import {
    reqGetGoodsInfo
} from '@/api'

const state = {
    goodInfo: {}
}
const actions = {
    async getGoodsInfo({
        commit
    }, skuid) {
        let result = await reqGetGoodsInfo(skuid);
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data);
        }
    }
}
const mutations = {
    GETGOODSINFO(state, data) {
        state.goodInfo = data
    }
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}