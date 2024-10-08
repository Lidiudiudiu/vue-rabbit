import { ref, onMounted } from 'vue'
import { getBannerApi } from '@/apis/home';


export function useBanner() {
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerApi({
            distribution: '2'
        })
        bannerList.value = res.result
    }

    onMounted(() => {
        getBanner()
    })
    return {
        bannerList
    }
}