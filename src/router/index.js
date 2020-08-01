import Vue from 'vue'
import VueRouter from 'vue-router'
import signUp from '../components/sign-up.vue'
import company from '../components/company'
import companyDetail from '../components/company-detail'
import jobList from '../components/jobList'
import jobDetail from '../components/job-detail'
import compSignUp from '../components/SignupCompany'
import userSignUp from '../components/SignupOrdinary'
import index from '../components/zhuye'
import search from '../components/search'
import compCenter from '../components/companyCenter'
import createResume from '../components/Createresume'
import resumeStyle from '../components/resume-style'
import postJob from "../components/postJob";
import userCenter from "../components/userCenter";

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    redirect:'/index'
  },
    {
      path: '/index',
      component:index
    },
    {
      path:'/company',
      component:company
    },
    {
      path: '/company-detail',
      component: companyDetail
    },
    {
      path:'/jobList',
      component: jobList
    },
    {
      path:'/jobDetail',
      component: jobDetail
    },
    {
      path: '/compSignUp',
      component: compSignUp
    },
    {
      path: '/userSignUp',
      component: userSignUp
    },
    {
      path: '/denglu',
      component: signUp
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/compCenter',
      component: compCenter
    },
    {
      path: '/createResume',
      component: createResume
    },
    {
      path: '/resume-style',
      component: resumeStyle
    },
    {
      path: '/postJob',
      component: postJob
    },
    {
      path: '/userCenter',
      component: userCenter
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
