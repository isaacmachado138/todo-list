import { createRouter, createWebHistory } from 'vue-router'
import ToDoList from '../components/Pages/ToDoList.vue';
import TaskView from '../components/Pages/TaskView.vue';

const routes = [
  {
    path: '/', 
    name: '',
    component: ToDoList
  },
  {
    path: '/task/:taskId?',
    name: 'task',
    component: TaskView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router