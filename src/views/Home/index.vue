<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <HomePanel title="新鲜好物" subtitle="新鲜好物 好多商品">
        插槽1
    </HomePanel>
    <HomePanel title="热门推荐" subtitle="热门推荐 好多商品">
        插槽2
    </HomePanel>
</template>