import httpInstance from "@/utils/http";

export function getBannerApi() {
    return httpInstance({
        url: '/home/banner'
    })
}

export function getNewsApi() {
    return httpInstance({
        url: '/home/new'
    })
}

export const getHotAPI = () => {
    return httpInstance('home/hot')
}