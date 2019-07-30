import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue';
import Home from './views/Home/Home.vue';
import About from './views/About/About.vue';
import Login from './views/Login/Login.vue';
Vue.use(Router)
const routes=[
    {path: '/', component:Index , children:[
            { path: '/', name: 'About', component: Home}
        ]
    },
    {path: '/Login', name: 'Login', component: Login}
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
