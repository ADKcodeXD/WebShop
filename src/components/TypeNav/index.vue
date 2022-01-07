<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveIndex" @mouseenter="enterShow">
                <h2 class="all">全部商品分类</h2>
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click.prevent="goSearch">
                            <div class="item" v-for="(item1,index) in categoryList" :key="item1.categoryId">
                                <h3 @mouseenter="changeIndex(index)" :class="{cur:currentIndex==index}">
                                    <a href="" :data-categoryName="item1.categoryName"
                                        :data-category1Id="item1.categoryId">{{item1.categoryName}}</a>
                                    <!-- <router-link to="/search">{{item1.categoryName}}</router-link> -->
                                </h3>
                                <!-- 二级分类 -->
                                <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                                    <div class="subitem" v-for="(item2) in item1.categoryChild" :key="item2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a href="" :data-categoryName="item2.categoryName"
                                                    :data-category2Id="item2.categoryId">{{item2.categoryName}}</a>
                                                <!-- <router-link to="/search">{{item2.categoryName}}</router-link> -->
                                            </dt>
                                            <dd>
                                                <!-- 三级分类 -->
                                                <em v-for="(item3) in item2.categoryChild" :key="item3.categoryName">
                                                    <a href="" :data-categoryName="item3.categoryName"
                                                        :data-category3Id="item3.categoryId">{{item3.categoryName}}</a>
                                                    <!-- <router-link to="/search">{{item3.categoryName}}</router-link> -->
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>

        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import throttle from 'lodash/throttle'
    export default {
        name: 'TypeNav',
        data() {
            return {
                currentIndex: -1,
                show: true
            }
        },
        mounted() {
            if (this.$route.path !== '/home') {
                this.show = false;
            }

        },
        computed: {
            ...mapState({
                //右侧需要的是一个函数 使用这个计算属性的时候 右侧函数会执行一次
                categoryList: state => state.home.categoryList
            })
        },
        methods: {
            // 鼠标进入导航 变色功能
            changeIndex: throttle(function (index) {
                this.currentIndex = index
            }, 80),
            leaveIndex: function (index) {
                if (this.$route.path !== '/home') {
                    this.show = false;
                }
                this.currentIndex = -1
            },
            // 点击导航跳转函数
            goSearch(event) {
                //使用事件委派机制
                // 且点击到a标签才会进行路由跳转
                let element = event.target;
                let {
                    categoryname,
                    category1id,
                    category2id,
                    category3id
                } = element.dataset;
                // 通过标签上的自定义属性去区别这个标签
                if (categoryname) {
                    // 路由跳转参数 整理
                    let location = {
                        name: 'search'
                    };
                    let query = {
                        categoryName: categoryname
                    }
                    if (category1id) {
                        query.category1Id = category1id
                    } else if (category2id) {
                        query.category2Id = category2id
                    } else {
                        query.category3Id = category3id
                    }
                    // 整理完参数
                    location.query = query;
                    // 如果有params参数 需要一起携带过去
                    if (this.$route.params) {
                        location.params = this.$route.params
                    }
                    // 最终跳转
                    this.$router.push(location)
                }
            },
            // 鼠标移入 商品分类列表展示
            enterShow() {
                this.show = true
            },

        },
    }
</script>

<style scoped lang="less">
    .sort-enter,
    .sort-leave-to {
        opacity: 0;
        height: 0px;
    }

    .sort-enter-active,
    .sort-leave-active {
        transition: all 0.5s ease;
    }

    .sort-enter-to,
    .sort-leave {
        opacity: 1;
        height: 461px;
    }

    .cur {
        background-color: skyblue;
    }

    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        // &:hover {
                        //     .item-list {
                        //         display: block;
                        //     }
                        // }
                    }
                }
            }
        }
    }
</style>