import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue';
import Home from './views/Home/Home.vue';
import Login from './views/Login/Login.vue';
import VideoPage from './views/Video/VideoPage.vue';
Vue.use(Router)
const routes=[
    {path: '/login', name: 'login', component: Login},
    {path: '/', component:Index , children:[
            { path: '/', name: 'home', component: Home},
            { path:'/video', name:'video', component: VideoPage}
        ]
    }
]
export default new Router({
  mode: 'history',
  routes
})
