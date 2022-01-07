import {
    reqGetSearchInfo
} from "@/api"

const actions = {
    async getSearchList({
        commit
    }, params) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit("GETSEARCHLIST", result.data)
        }
    }
}

//操作数据的mutations
const mutations = {
    GETSEARCHLIST(state, searchInfo) {
        state.searchInfo = searchInfo
    }
}

// 准备state
const state = {
    searchInfo: {}
}
// 可以将数组将来用到的数据 简化一下
const getters = {
    goodsList(state) {
        // 如果这块是空对象  数据就无法返回会报错
        return state.searchInfo.goodsList||[]
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList||[]
    },
    attrsList(state) {
        return state.searchInfo.attrsList||[]
    }

}

export default ({
    actions,
    mutations,
    state,
    getters
})