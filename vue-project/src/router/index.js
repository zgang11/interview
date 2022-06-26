import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import DragSortable from '../components/Drag/DragSortable.vue'

const routes = [
  { path: '/', component: DragSortable },
  { path: '/about', component: HelloWorld },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router