import Vue from 'vue' //引入vue
import Router from 'vue-router' // 引入 vur-router
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'

Vue.use(Router) // 注册 vue-router

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path:'/home',
//       name:'home',
//       component:Home
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

let router = new Router({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!hasLogin()) {
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router