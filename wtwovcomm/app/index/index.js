import Vue from 'vue'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './components/index.component'
import infotions from '../components/infotion.components'
Vue.use(vueRouter)
const routes=[
    {
        path:'/:userid',
        name:'select',
        component:infotions
    }
]
const router=new vueRouter({
    routes
})
new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")
