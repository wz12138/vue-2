<template>
  <div id="app">
    <!-- <img src="./assets/log.jpg" class="tu"> -->
    <!-- <router-link to="/" exact>首页</router-link>
    <router-link to="/home" active-class="gohome">home</router-link>
    <router-link to="/work/123">work</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 10px; */
}
/* .router-link-active {
  font-size: 18px;
} */
/* .gohome {
  color: blue;
  font-size: 18px;
} */
/* .nav {
  background-color: rgb(37, 199, 228);
  color: #fff;
  font-size: 18px;
}
.tu {
  width: 285px;
  height: 400px;
} */
</style>
