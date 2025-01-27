
import { createRouter, createWebHistory } from 'vue-router';

import MyCanv from '../components/canvas/Canvas.vue'
import TaskInfo from '../components/taskInfo/main.vue'
import Login from '../components/loginAndRegist/Login.vue';
import Register from '../components/loginAndRegist/Register.vue'
import myInfo from '../components/userInfo/userInfo.vue'
import allUser from '../components/secondary/Alluser.vue'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {  
        path: '/myTask', 
        component: MyCanv 
    },
    { 
        path: '/createTask', 
        component: TaskInfo 
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register', // 添加注册路由
        name: 'Register',
        component: Register
    },
    {
        path: '/myInfo', 
        name: 'myInfo',
        component: myInfo
    },
    {
        path: '/allUser', 
        name: 'allUser',
        component: allUser
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router