<template>
    <div class="popup-wrapper" v-show="visible" @click="hide">
        <div class="popup-text">{{text}}</div>
    </div>
</template>
<script>
export default {
    name: 'popup',
    props: ['text'],
    data(){
        return {
            visible: false
        }
    },
    methods: {
        hide(){
            this.visible = false;
        },
        open(){
            this.visible = true;
        }
    }
}
</script>
<style>
.popup-wrapper{
    position: fixed;
    width: 100%;
    height: 100%;
}
.popup-text{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 60%;
    height: 40px;
    line-height: 40px;
    background: rgba(0,0,0,0.8);
    border-radius:5px; 
    color: #fff;
    text-align: center;
}
</style>
