//把components下的所有组件都全局化注册  以便在其他地方使用
//以插件的方式
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
    //插件的install方法
    //app.component('组件名字',组件)
    install(app) {
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}