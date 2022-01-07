<template>
    <div class="pagination">

        <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
        <button v-if="startAndEndNum.start>1" @click="$emit('getPageNo',1)">1</button>
        <button v-if="startAndEndNum.start>2">···</button>

        <button v-for="(page,index) in startAndEndNum.end" :key="index" v-if="page>=startAndEndNum.start"
            @click="$emit('getPageNo',page)" :class="{active:page==pageNo}">{{page}}</button>

        <button v-if="startAndEndNum.end<totalPage-2">···</button>
        <button v-if="startAndEndNum.end<totalPage-1" @click="$emit('getPageNo',totalPage)">{{totalPage}}</button>
        <button :disabled="pageNo==totalPage" @click="$emit('getPageNo',pageNo+1)">下一页 </button>
        <p>当前第{{pageNo}}页</p>
        <div >共{{total}}条</div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: ['pageNo', 'pageSize', 'total', 'continues'],
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize);
            },
            startAndEndNum() {
                let start = 1;
                let end = 99;
                // 总页数少于连续页码数
                if (this.continues > this.totalPage) {
                    start = 1;
                    end = this.totalPage;
                } else {
                    // 总页数大于连续页码数
                    start = this.pageNo - parseInt(this.continues / 2);
                    end = this.pageNo + parseInt(this.continues / 2);
                    // 处理页码越界情况
                    if (start < 1) {
                        start = 1;
                        end = this.continues;
                    }
                    if (end > this.totalPage) {
                        start = end - this.continues;
                        end = this.totalPage;
                    }
                }
                return {
                    start,
                    end
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;

        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>