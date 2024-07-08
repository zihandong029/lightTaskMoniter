
import { createRouter, createWebHistory } from 'vue-router';

import MyCanv from '../components/canvas/Canvas.vue'
import TaskInfo from '../components/taskInfo/main.vue'

const routes = [
    { path: '/myTask', component: MyCanv },
    { path: '/createTask', component: TaskInfo },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router