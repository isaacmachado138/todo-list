import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '../components/Pages/ToDoList.vue';

const routes = [
  {
    path: '/',
    name: '',
    component: ToDoList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router