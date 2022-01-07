import {
    reqCategoryList,
    reqBannerList,
    reqFloorList
} from '@/api'

const actions = {
    // 通过api接口调用 发请求获取三级菜单数据
    async categoryList({
        commit
    }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },

    // 通过mock假数据来进行获取首页轮播图数据
    async getBannerList({
        commit
    }) {
        let result = await reqBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },

    // 通过mock假数据来进行获取首页轮播图数据
    async getFloorList({
        commit
    }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
}

//操作数据的mutations
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    },

}

// 准备state
const state = {
    categoryList: [],
    bannerList: [],
    floorList:[]
}

const getters = {

}

export default ({
    actions,
    mutations,
    state,
    getters
})