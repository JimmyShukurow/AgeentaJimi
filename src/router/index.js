import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Pages from '../views/Pages.vue'
import Blog from '../views/Blog.vue'
import Consults from '../views/Consults.vue'
import Newsletters from '../views/Newsletters.vue'

import RealEstate from '../views/RealEstate/RealEstate.vue'
import Properties from '../views/RealEstate/Properties.vue'
import Features from '../views/RealEstate/Features.vue'
import Facilities from '../views/RealEstate/Facilities.vue'
import Categories from '../views/RealEstate/Categories.vue'
import Types from '../views/RealEstate/Types.vue'
import Reviews from '../views/RealEstate/Reviews.vue'
import Settings from '../views/RealEstate/Settings.vue'

import StaticBlocks from '../views/StaticBlocks.vue'
import Testimonials from '../views/Testimonials.vue'


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
  },
  {
    path: '/consults',
    name: 'Consults',
    component: Consults
  },
  {
    path: '/newsletters',
    name: 'Newsletters',
    component: Newsletters
  },
  // Real Estate Tab
  {
    path: '/real-estates',
    name: 'RealEstate',
    component: RealEstate
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties,
  },
  {
    path: '/features',
    name: 'Features',
    component: Features,
  },
  {
    path: '/facilities',
    name: 'Facilities',
    component: Facilities,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
  },
  {
    path: '/types',
    name: 'Types',
    component: Types,
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },

  // Static Block Tab
  {
    path: '/static-blocks',
    name: 'StaticBlocks',
    component: StaticBlocks
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
]

const router = new VueRouter({
  routes
})

export default router
