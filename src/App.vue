<template>
  <div id="app">
    <Header :pagename="showPage" />
    <login-mask />
    <!-- <user-center />
    <study-set-browser />
    <create-center /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import all from "./assets/js/all";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoginMask from "./components/LoginMask";
import UserCenter from "./components/UserCenter";
import StudySetBrowser from "./components/StudySetBrowser";
import CreateCenter from "./components/CreateCenter";
import AOS from "aos"
import "aos/dist/aos.css"


export default {
  name: "App",
  computed:{
    showPage:function(){
      return this.$route.path
    }
  },
  beforeMounted: function() {
    all();
  },
  beforeCreate:function(){
    AOS.init()
  },
  components: {
    Header,
    HomePage,
    LoginMask,
    UserCenter,
    StudySetBrowser,
    CreateCenter
  }
};
</script>

<style>
@import "./assets/css/main.css";
#app {
  overflow: visible;
}
</style>
