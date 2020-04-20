// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Popup from './components/popup/popup';
import Toast from './components/toast/toast';

Vue.config.productionTip = false;

Vue.use(Popup);
Vue.use(Toast);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
