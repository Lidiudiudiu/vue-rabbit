import httpInstance from "@/utils/http";

export function getBannerApi(data = {}) {
    const { distributionSite = '1' } = data
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite
        }
    })
}

export function getNewsApi() {
    return httpInstance({
        url: '/home/new'
    })
}

export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

export const getProductApi = () => {
    return httpInstance({
        url: '/home/goods'
    })
}