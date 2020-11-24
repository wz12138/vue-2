<template>
  <div id="app">
    <h1>我是work</h1>
    <h2>参数是：{{road}}</h2>
    <button @click="go()">去home</button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                road: '',
                name: 'zhang',
                age: '18'
            }
        },
        mounted() {
            // console.log(this.$route);
            this.road = this.$route.params.id
        },
        methods: {
            go() {
                // this.$router.push('/home?name='+this.name+'&age='+this.age);
                // this.$router.push({
                //     path:'/home',
                //     query: {
                //         name: "zhang",
                //         age: 19
                //     }
                // });
                this.$router.push({
                    name:"home",
                    params:{
                        name: "wang",
                        age: 19
                    }
                })
            }
        }
    }
</script>

<style>
</style> 