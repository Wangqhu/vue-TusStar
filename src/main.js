import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/js/bootstrap.min.js"
import axios from "axios"
import VueAxios from 'vue-axios'
import {UrlSearch} from "./assets/js/utils"

import "@/assets/css/animate.css"
import "@/assets/css/bootstrap.min.css"
import "@/assets/css/magnific-popup.css"
import "@/assets/css/nice-select.css"
import "@/assets/css/owl.theme.default.min.css"
import "@/assets/css/responsive.css"
import "@/assets/css/style.css"
import "@/assets/css/meanmenu.css"

//组件引用
import head from './components/Head.vue'
Vue.component("Head",head)
import foot from './components/foot.vue'
Vue.component("Foot",foot)
import yanzhengma from './components/yanzhengma.vue'
Vue.component("yanzhengma",yanzhengma)
import search from './components/search'
Vue.component("search",search)
import  jobInfo from './components/jobInfo'
Vue.component("jobInfo",jobInfo)
import  jobRecommend from './components/jobRecommend'
Vue.component("jobRecommend",jobRecommend)
import appliedJobs from "./components/appliedJobs";
Vue.component('appliedJobs',appliedJobs)
import uploadImg from "./components/uploadImg";
Vue.component('uploadImg',uploadImg)

let Request = new UrlSearch();
Vue.prototype.$Request = Request
Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.withCredentials=true

Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
