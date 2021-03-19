<template>
  <div id="app">
    <Header :pagename.sync="this.showPage" />
    <login-mask />
    <Login />
    <SignUp />
    <home-page v-if="showPage === 'home-page'" @tousercenter="test" />
    <user-center v-else-if="showPage === 'user-center'" />
    <study-set-browser v-else-if="showPage === 'study-set-browser'" />
    <create-center v-else-if="showPage === 'create-center'" />
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
import { WOW } from "wowjs/dist/wow"
import AOS from "aos"
import "aos/dist/aos.css"


export default {
  name: "App",
  data() {
    return {
      showPage: "home-page"
    };
  },
  created: function() {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  },
  mounted: function() {
    all();
    AOS.init()
  },
  methods: {
    test: function() {
      this.showPage = "user-center";
    }
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
