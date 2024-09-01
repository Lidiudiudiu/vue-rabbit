import request from '@/utils/http'

//获取商品详情
export function getDetail(id) {
    //这个id是从路由传过来的
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}