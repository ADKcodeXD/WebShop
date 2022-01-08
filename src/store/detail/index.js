import {
    reqGetGoodsInfo,
    reqAddToCartOrUpdateShopCart
} from '@/api'
import {
    getUUID
} from '@/utils/uuid_token'

const state = {
    goodInfo: {},
    uuid_token: getUUID()
}
const actions = {
    async getGoodsInfo({
        commit
    }, skuid) {
        let result = await reqGetGoodsInfo(skuid);
        if (result.code == 200) {
            commit('GETGOODSINFO', result.data);
        }
    },

    async addToShopCart({
        commit
    }, skuinfo) {
        // console.log(skuinfo.skuid, skuinfo.skunum);
        let result = await reqAddToCartOrUpdateShopCart(skuinfo.skuid, skuinfo.skunum);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('faile'))
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
    },
    attrList(state) {
        return state.goodInfo.skuSaleAttrValueList || []
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}