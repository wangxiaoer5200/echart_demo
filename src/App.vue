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
          例子4
        </li>
        <li>
          例子5
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
