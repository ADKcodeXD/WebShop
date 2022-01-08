import requests from './request'
import mockRequest from './mockAjax';

/*
    三级联动接口
    url:/api/product/getBaseCategoryList
    methods:GEt
    params:[]
*/

export const reqCategoryList = () =>
    requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    });

/**
 * 获取banner的接口
 * get
 * @returns 
 */

export const reqBannerList = () =>
    mockRequest({
        url: '/banner',
        method: 'get'
    });

/**
 * 获取floor数据
 * 
 */

export const reqFloorList = () =>
    mockRequest({
        url: '/floor',
        method: 'get'
    });

/**
 * 获取search的数据
 * 搜索模块的数据
 * /api/list
 * post
 * 需要参数
        * {
            "category3Id": "61",
            "categoryName": "手机",
            "keyword": "小米",
            "order": "1:desc",
            "pageNo": 1,
            "pageSize": 10,
            "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
            "trademark": "4:小米"
            }
 */

export const reqGetSearchInfo = (params) =>
    requests({
        url: '/list',
        method: 'post',
        data: params
    });

/**
 * 获取商品详情信息的接口
 * /api/item/{ skuId }
 * method:get
 * params:skuid *
 * 
 */

 export const reqGetGoodsInfo = (skuid) =>
 requests({
     url: `/item/${skuid}`,
     method: 'get'
 });

//  购物车 接口
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddToCartOrUpdateShopCart = (skuId,skuNum) =>
 requests({
     url: `/cart/addToCart/${skuId}/${skuNum}`,
     method: 'post'
 });

//  购物车内详情信息 接口
// 获取购物车列表
// /api/cart/cartList
// 不需要参数

export const reqGetCartList = () =>
 requests({
     url: `/cart/cartList`,
     method: 'get'
 });


//  删除购物车
// 接口
export const reqDeleteCratById = (skuId) =>
 requests({
     url: `/cart/deleteCart/${skuId}`,
     method: 'delete'
 });

//  修改选中状态
// /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateChecked = (skuId,isChecked) =>
 requests({
     url: `/cart/checkCart/${skuId}/${isChecked}`,
     method: 'get'
 });