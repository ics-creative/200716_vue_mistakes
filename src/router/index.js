import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Transition from '../views/OddTransition.vue'
import Style from '../views/UnexpectedStyle.vue'
import Props from '../views/NotChangedProps.vue'
import HeavyComp from '../views/TooHeavyComp.vue'
import Computed from '../views/NotChangedComputed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/transition',
    name: 'OddTransition',
    component: Transition
  },
  {
    path: '/style',
    name: 'Style',
    component: Style
  },
  {
    path: '/props',
    name: 'Props',
    component: Props
  },
  {
    path: '/heavy',
    name: 'HeavyComp',
    component: HeavyComp
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
