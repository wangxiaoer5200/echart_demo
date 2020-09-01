/*
 * @Description: 文件说明
 * @Author: wangbin
 * @Date: 2020-03-24 16:08:32
 * @LastEditTime: 2020-07-31 17:50:46
 * @LastEditors: wangbin
 * @FilePath: \echarts_study\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import lodash from 'lodash'
import 'echarts-gl'
Vue.prototype.$echarts = echarts
Vue.prototype.$_ = lodash;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
