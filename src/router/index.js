import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)

import homePage from "../components/HomePage.vue"
import userCenter from "../components/UserCenter.vue"
import userSideBar from "../components/UserSideBar.vue"
import createCenter from "../components/CreateCenter.vue"
import createCenterHeaderComponent from "../components/CreateCenterHeaderComponent.vue"
import homeHeaderComponent from "../components/HomeHeaderComponent.vue"
import studySetBrowser from "../components/StudySetBrowser.vue"
import register from "../components/RegisterPage.vue"


// 配置路由
const router = new Vuerouter({
  routes:[{
    path:'/',
    redirect: '/home',
  },{
    path:'/home',
    components:{
      default:homePage,
      home: homeHeaderComponent
    }
  },{
    path:'/userCenter',
    components:{
      default:userCenter,
      sidebar:userSideBar,
      home: homeHeaderComponent
    }
  },{
    path:'/studySet',
    components:{
      default:studySetBrowser,
      home: homeHeaderComponent
    }
  },{
    path:'/createCenter',
    components:{
      default:createCenter,
      createCenter:createCenterHeaderComponent
    }
  },{
    path:'/registerCenter',
    components:{
      default:register,
      home: homeHeaderComponent
    }
  }]
})
export default router;