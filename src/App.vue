<template>
  <div id="app">
    <Header :pagename="showPage" />
    <login-mask />
    <Login />
    <SignUp />
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
import Login from "./components/Login";
import SignUp from "./components/SignUp";
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
    Login,
    SignUp,
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
