<!--
 * @Description: 文件说明
 * @Author: wangbin
 * @Date: 2020-03-24 16:08:32
 * @LastEditTime: 2020-07-31 18:22:42
 * @LastEditors: wangbin
 * @FilePath: \echarts_study\src\App.vue
-->
<template>
  <div id="app">
    <p>
      <router-link to='/'>首页</router-link>
      <ul>
        <li>
          <router-link to='/test'>例子1</router-link>
        </li>
        <li>
          <router-link to='/test2'>例子2</router-link>
        </li>
        <li>
          <router-link to='/test3'>例子3</router-link>
        </li>
        <li>
          <router-link to='/test4'>例子4</router-link>
        </li>
        <li>
          <router-link to='/test5'>例子5</router-link>
        </li>
        <li>
          <router-link to='/test6'>例子6</router-link>
        </li>
        <li>
          <router-link to='/test7'>例子7</router-link>
        </li>
        <li>
          <router-link to='/test8'>例子8</router-link>
        </li>
        <li>
          <router-link to='/test9'>例子9</router-link>
        </li>
        <li>
          <router-link to='/test10'>例子10</router-link>
        </li>
        <li>
          <router-link to='/test11'>例子11</router-link>
        </li>
        <li>
          <router-link to='/test12'>例子12</router-link>
        </li>
        <li>
          <router-link to='/test13'>例子13</router-link>
        </li>
           <li>
          <router-link to='/test14'>例子14</router-link>
        </li>
 <li>
          <router-link to='/test15'>例子15</router-link>
        </li>
      </ul>
    </p>
    <router-view style="display:flex;justify-content: center;;" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
