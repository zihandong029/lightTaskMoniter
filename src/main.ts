// This code snippet is incorrect in the context of Vue 3 and VueKonva integration.
// The correct way to use VueKonva in Vue 3 is to create an app instance first and then use VueKonva with that instance.
// The corrected code is shown below:

// Corrected Code:
// const app = createApp(App);
// app.use(VueKonva);
// app.mount('#app');

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App);
import VueKonva from 'vue-konva';

app.use(VueKonva);

//pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 
import router from './router';
app.use(router);

app.use(ElementPlus)

app.mount('#app');
