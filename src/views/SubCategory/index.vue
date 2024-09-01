<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue';
const route = useRoute();
// 获取面包屑导航数据
const filterData = ref({})

const getFilterData = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    filterData.value = res.result
}
onMounted(() => {
    getFilterData()
})


// 获取基础列表数据渲染
const goodList = ref([])
const reqData = ref({
    //参数含义：categoryId：分类id，page：页码，pageSize：每页条数，sortField：排序字段
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})

const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.result.items
}

const disabled = ref(false)
//无限加载实现
const load = async () => {
    reqData.value.page++
    const res = await getSubCategoryAPI(reqData.value)
    //将新数据拼接到原数据上
    //concat方法是将新数据拼接到原数据上
    //用展开运算符也可以实现拼接数据
    // goodList.value = [...goodList.value, ...res.result.items]
    goodList.value = goodList.value.concat(res.result.items)
    //判断是否还有数据，没有数据则取消无限加载
    if (res.result.items.length === 0) {
        disabled.value = true
    }
}



//tab切换回调
const tabChange = () => {
    // 切换tab时重置page
    //为什么充值page，因为每次切换tab都是重新请求数据，所以page也要重置
    reqData.value.page = 1
    getGoodList()
}

onMounted(() => getGoodList())
</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">{{ filterData.parentName }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ filterData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
                <!-- 商品列表-->
                <!-- 通过for循环渲染商品列表 -->
                <GoodsItem v-for="good in goodList" :good="good" :key="good.id" />
            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>