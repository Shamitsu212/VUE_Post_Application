import {createRouter, createWebHistory} from 'vue-router'

import Main_Page from '../components/Pages/Main_Page.vue'
import Post_Page from '../components/Pages/Post_Page.vue'

const routes = [
    {path: '/', name: 'mainPage', component: Main_Page},
    {path: '/post/:id', name: 'postPage', component: Post_Page, props: true},

]

const router = createRouter ({
    history: createWebHistory(),
    routes,
})

export default router