import Vue from 'vue'
import vueResource from 'vue-resource'
import About from './components/about.component'
Vue.use(vueResource)
new Vue({
    el:"#app",
    render:h=>h(About)
})
