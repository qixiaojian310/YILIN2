<template>
  <div id="app">
    <Header />
    <login-mask />
    <Login />
    <SignUp />
    <home-page v-if="showPage === 'home-page'" @tousercenter="test"/>
    <user-center v-else-if="showPage === 'user-center'" />
    <study-set-browser v-else-if="showPage === 'study-set-browser'"/>
  </div>
</template>

<script>
import all from './assets/js/all'
import Header from './components/Header'
import HomePage from './components/HomePage'
import LoginMask from './components/LoginMask'
import Login from './components/Login'
import SignUp from './components/SignUp'
import UserCenter from './components/UserCenter'
import StudySetBrowser from './components/StudySetBrowser'

export default {
  name: 'App',
  data() {
    return{
      showPage: 'home-page',
    }
  },
  mounted: function(){
    all()
  },
  methods:{
    test: function() {
      this.showPage = 'user-center'
    }
  },
  components: {
    Header,
    HomePage,
    LoginMask,
    Login,
    SignUp,
    UserCenter,
    StudySetBrowser
  }
}
</script>

<style>
@import './assets/css/main.css';
</style>
