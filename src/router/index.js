import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import City from '@/components/City/City'
import Home from '@/components/Home'
import Detail from '@/components/Detail/Detail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/detail/:id',
      name:Detail,
      component:Detail
    }
  ]
})  
