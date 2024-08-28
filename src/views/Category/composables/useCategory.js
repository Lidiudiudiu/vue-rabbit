import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { getCategoryAPI } from '@/apis/category.js';
import { ref, onMounted } from 'vue'

export function useCategory() {
    const categoryData = ref({});
    const route = useRoute();


    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    }
    onMounted(() => {
        getCategory()
    })

    onBeforeRouteUpdate(async (to) => {
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}