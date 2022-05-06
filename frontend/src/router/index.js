import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonView from '../views/PersonView.vue'
import Meetup from '../views/Meetup.vue'
import Person from '../views/Person.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/meetup/:id',
    name:'meetup',
    component:Meetup
  },
  {
    path:'/person/:id',
    name:'person',
    component:Person
  },
  {
    path: '/people',
    name: 'people',
    component: PersonView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/PersonView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
