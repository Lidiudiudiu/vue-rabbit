<script setup>
import { getCategoryAPI } from '@/apis/testapi'
import { onMounted } from 'vue';

onMounted(async () => {
  const res = await getCategoryAPI()
  console.log(res)
})


</script>

<template>
  <router-view>
  </router-view>

  <div class="test">
    我是李丢丢
  </div>
</template>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
