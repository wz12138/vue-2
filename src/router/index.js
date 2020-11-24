import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import work from '@/components/work'
import page from '@/views/page'
import login from '@/views/login'
import zhuce from '@/views/zhuce'
import data from '@/views/data'
import fenye from '@/views/fenye'



const User = {
  template: `<div><h1>父组件</h1><router-view/></div>`
}
const oneSon = {
  template: `<div><h2>子组件</h2><router-view/></div>`
}
const NotFount = {
  template: `<div><h1><i>404访问网页不存在</i></h1></div>`
}


Vue.use(Router)

let router = new Router({
  mode: "history",
  linkExactActiveClass: "nav",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/work/:id',
      name: 'work',
      component: work
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/fenye',
      name: 'fenye',
      component: fenye
    },
    {
      path: '/user/:id',
      name: "user",
      component: User,
      children: [
        {
          path: "oneson",
          name: 'oneson',
          component: oneSon
        }
      ]
    },
    {
      path: '*',
      // component: NotFount
      redirect:(to)=>{
        if (to.path === "/a") {
          return '/home'
        }else if(to.path === "/b") {
          return '/work/123'
        }else {
          return '/'
        }
      }
    },
    
  ]
})
router.beforeEach((to,from,next)=>{
  console.log(to)
  if(to.path==='/login'){
    next()
  }else{
    let token = localStorage.getItem('userToken');
    if(token==null||token==""){
      next("/login")
    }else{
      next()
    }
  }
})

export default router