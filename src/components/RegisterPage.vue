<template>
  <transition name="registertoggle">
    <login v-if="registerStatus === 'login'" key="login"></login>
    <sign-up v-else key="signup"></sign-up>
  </transition>
</template>

<script>
import Login from './Login.vue';
import SignUp from './SignUp.vue';

export default {
  name: "register",
  components:{
    SignUp,
    Login
  },
  data(){
    return{
      registerStatus: "login"
    }
  },
  mounted:function(){
    // $(".login").click(function() {
    //   $(".mask").show();
    //   $("#sign-up-page").hide();
    //   $("#login-page").show();
    // });
    // $("#login-close").click(function() {
    //   $(".mask").hide();
    //   $("#login-page").hide();
    // });
    // $("#sign-up").click(function() {
    //   $("#login-page").hide();
    //   $("#sign-up-page").show();
    // });
    // $("#signup-close").click(function() {
    //   $(".mask").hide();
    //   $("#sign-up-page").hide();
    // });
    // $(".login-uesr-input").focusin(function() {
    //   $(this)
    //     .siblings(".input-border")
    //     .css("background", "rgb(194, 178, 36)");
    // });
    // $(".login-uesr-input").focusout(function() {
    //   $(this)
    //     .siblings(".input-border")
    //     .css("background", "rgb(92, 92, 92)");
    // });
    // $(".study-set-info-input").focusin(function() {
    //   $(this)
    //     .parent()
    //     .parent()
    //     .siblings(".input-border")
    //     .css("background", "rgb(194, 178, 36)");
    //   $(this)
    //     .parent()
    //     .siblings(".study-set-form-head")
    //     .css("color", "rgb(194, 178, 36)");
    // });
    // $(".study-set-info-input").focusout(function() {
    //   $(this)
    //     .parent()
    //     .parent()
    //     .siblings(".input-border")
    //     .css("background", "rgb(92, 92, 92)");
    //   $(this)
    //     .parent()
    //     .siblings(".study-set-form-head")
    //     .css("color", "rgb(0, 0, 0)");
    // });
    // $("div.login-link").mouseenter(function() {
    //   $(this).css("background", "rgb(107,107,107)");
    //   $(this).css("box-shadow", "0px 0px 10px #333333");
    //   $(this)
    //     .children()
    //     .children()
    //     .css("color", "white");
    // });
    // $("div.login-link").mouseleave(function() {
    //   $(this).css("background", "white");
    //   $(this).css("box-shadow", "none");
    //   $(this)
    //     .children()
    //     .children()
    //     .css("color", "rgb(107,107,107)");
    // });
  }
}
</script>

<style>
.registertoggle-enter-active, .registertoggle-leave-active{
  transition: all 1s ease;
}
.registertoggle-enter{
  opacity: 0;
  transform: translateX(100%);
}
.registertoggle-leave-active{
  opacity: 0;
  transform: translateX(-100%);
}
</style>