<template>
  <div id="app">
    <input type="button" value="按钮" class="btn" @click="openPop" />
    <popup text="弹窗内容" ref="popup"></popup>
  </div>
</template>

<script>
import './assets/main.css';
import Popup from './components/popup/popup';
export default {
  name: 'App',
  methods: {
    openPop(){
      console.log(this.$refs.popup);
      this.$refs.popup.open();
    }
  },
  components: {
    Popup
  }
}
</script>

<style>
</style>
