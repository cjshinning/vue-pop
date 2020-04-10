// 引入Vue
import Vue from 'vue';
// 引入弹窗组件
import popupComponent from './popup.vue';
// 返回一个扩展实例的构造器
const popupConstructor = Vue.extend(popupComponent);

class Popup{
    constructor(obj){
        const popupParams = {
            text: '我是弹窗'
        }
        const paramObj = Object.assign(popupParams,obj);
        this.popup = new popupConstructor({
            el: document.createElement('div'),
            data(){
                return paramObj
            }
        })
    }
    show(){
        document.body.appendChild(this.popup.$el);
        return this;
    }
}

function $popup(obj={}){
    return new Popup(obj).show();
}

export default {
    // 插件注册
    install(){
        Vue.prototype.$popup = $popup;
    }
}