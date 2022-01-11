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
export const reqAddToCartOrUpdateShopCart = (skuId, skuNum) =>
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
export const reqUpdateChecked = (skuId, isChecked) =>
    requests({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    });

//  获取验证码接口
// /api/user/passport/sendCode/{phone}
export const reqGetSendCode = (phone) =>
    requests({
        url: `/user/passport/sendCode/${phone}`,
        method: 'get'
    });

//  用户注册信息
///api/user/passport/register
export const reqUserRegister = (user) =>
    requests({
        url: '/user/passport/register',
        data: user,
        method: 'post'
    });

//  登录接口
//  /api/user/passport/login
export const reqUserLogin = (data) =>
    requests({
        url: '/user/passport/login',
        data: data,
        method: 'post'
    });

//  获取用户信息 
//  api/user/passport/auth/getUserInfo
export const reqUserInfo = () =>
    requests({
        url: '/user/passport/auth/getUserInfo',
        method: 'get'
    });

// 退出登录
// /user/passport/logout
export const reqClearUserInfo = () =>
    requests({
        url: '/user/passport/logout',
        method: 'get'
    });

// 获取用户地址信息
// /user/passport/logout
export const reqAddressInfo = () =>
    requests({
        url: '/user/userAddress/auth/findUserAddressList',
        method: 'get'
    });

// /order/auth/trade
export const reqOrderInfo = () =>
    requests({
        url: '/order/auth/trade',
        method: 'get'
    });

// 提交订单请求
// /api/order/auth/submitOrder?tradeNo={tradeNo}
export const reqOrderSubmit = (tradeno, data) =>
    requests({
        url: `/order/auth/submitOrder?tradeNo=${tradeno}`,
        data: data,
        method: 'post'
    });

// 获取支付信息
// /api/payment/weixin/createNative/{orderId}
export const reqGetPayInfo = (orderId) =>
    requests({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get'
    });

// 获取支付订单状态
// /api/payment/weixin/queryPayStatus/{orderId}
export const reqGetPayState = (orderId) =>
    requests({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get'
    });

// 获取个人中心信息
// /api/order/auth/{page}/{limit}
export const reqGetPageList = (page,limit) =>
    requests({
        url: `/order/auth/${page}/${limit}`,
        method: 'get'
    });