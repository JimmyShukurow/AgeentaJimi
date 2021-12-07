import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Pages from '../views/Pages.vue'
import Blog from '../views/Blog.vue'
import Consults from '../views/Consults.vue'
import Newsletters from '../views/Newsletters.vue'
import RealEstate from '../views/RealEstate.vue'
import StaticBlocks from '../views/StaticBlocks.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },{
    path: '/consults',
    name: 'Consults',
    component: Consults
  },{
    path: '/newsletters',
    name: 'Newsletters',
    component: Newsletters
  },{
    path: '/real-estates',
    name: 'RealEstate',
    component: RealEstate
  },{
    path: '/static-blocks',
    name: 'StaticBlocks',
    component: StaticBlocks
  },{
    path: '/pages',
    name: 'Pages',
    component: Pages
  },{
    path: '/pages',
    name: 'Pages',
    component: Pages
  },{
    path: '/pages',
    name: 'Pages',
    component: Pages
  },

]

const router = new VueRouter({
  routes
})

export default router
