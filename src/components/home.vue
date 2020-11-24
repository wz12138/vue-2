<template>
  <div id="app">
    <h1>我是h1</h1>
    <h2>name:{{ a }}</h2>
    <h2>age:{{ b }}</h2>
  </div>
</template>

<script>
    export default {
        data(){
            return{
                a:"",
                b:""
            }
        },
        mounted() {
            // console.log(this.$route);
            // this.a = this.$route.query.name;
            // this.b = this.$route.query.age;
            this.a = this.$route.params.name;
            this.b = this.$route.params.age;
        },
    }
</script>

<style>
</style>