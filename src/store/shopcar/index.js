import {
    reqGetCartList,
    reqDeleteCratById,
    reqUpdateChecked
} from '@/api'

const actions = {
    async getCartList({
        commit
    }) {
        let result = await reqGetCartList();
        if (result.code == 200) {
            console.log(result.data);
            commit("GETCARTLIST", result.data);
        }
    },
    async deleteCartListById({
        commit
    },skuId) {
        let result = await reqDeleteCratById(skuId);
        if(result.code==200){
            return "ok";
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    async updateCheckedById({commit},sku){
        let result=await reqUpdateChecked(sku.skuId,sku.checked)
        if(result.code==200){
            return "ok";
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    deleteAllChecked({dispatch,getters}){
        let PromiseAll=[]
        let result='';
        getters.cartInfo.forEach(item => {
            if(item.isChecked=='1'){
                result=dispatch('deleteCartListById',item.skuId);
                PromiseAll.push(result);
            }
        });
        return Promise.all(PromiseAll);
    },
    // 全选模块
    updateAllChecked({dispatch,getters},isChecked){
        let promiseall=[]
        getters.cartInfo.forEach(element => {
            let result=dispatch('updateCheckedById',{skuId:element.skuId,checked:isChecked})
            promiseall.push(result);
        });
        return Promise.all(promiseall)
    }
    
}

//操作数据的mutations
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
        state.cartInfo = cartList[0].cartInfoList;
    }
}

// 准备state
const state = {
    cartList: [],
    cartInfo: []
}

const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    },
    cartInfo(state) {
        return state.cartInfo || []
    }
}

export default ({
    actions,
    mutations,
    state,
    getters
})