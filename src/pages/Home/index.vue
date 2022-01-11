<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
    import ListContainer from '@/pages/Home/ListContainer'
    import Recommend from '@/pages/Home/Recommend';
    import Rank from '@/pages/Home/Rank';
    import Floor from '@/pages/Home/Floor';
    import Like from '@/pages/Home/Like';
    import Brand from '@/pages/Home/Brand';
    import {mapState} from 'vuex'
    export default {
        name: 'Home',
        components: {
            ListContainer,
            Recommend,
            Rank,
            Floor,
            Like,
            Brand
        },
        mounted() {
            this.$store.dispatch('getFloorList');
            // 获取用户信息 并展示信息的函数
            this.$store.dispatch('getUserInfo');
        },
        computed:{
            ...mapState({floorList:state=>state.home.floorList})
        },

    }
</script>

<style>

</style>