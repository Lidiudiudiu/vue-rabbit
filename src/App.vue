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

  </div>
</template>

<style scoped lang="scss"></style>
