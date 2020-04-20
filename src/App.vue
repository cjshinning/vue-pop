<template>
  <div id="app">
    <input type="button" value="按钮" class="btn" @click="openPop" />
  </div>
</template>

<script>
import './assets/main.css';
import Popup from './components/popup/popup';
export default {
  name: 'App',
  methods: {
    openPop(){
      // console.log(this.$refs.popup);
      // this.$refs.popup.open();
      this.$popup({text:'弹窗2'});
    }
  },
  components: {
    Popup
  },
  mounted(){
    // console.log(this.$msg);
    this.$toast('啊啊啊', 'center');
  }
}
</script>

<style>
</style>
