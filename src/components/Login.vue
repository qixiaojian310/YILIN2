<template>
  <div id="login-page">
    <div class="container">
      <div class="row">
        <div
          class="col-12 d-flex align-items-center"
          style="height: 100px; width: 100%; background: rgb(50, 57, 146)"
        >
          <p class="col-12 p-4 text-left mask-title">Login</p>
        </div>
        <div class="col-10 offset-1">
          <div class="login-link mt-3 d-flex align-items-center">
            <a href="#" class="col-12" style="text-decoration: none">
              <p class="login-link text-right">用GOOGLE账户登录</p>
            </a>
          </div>
          <div class="login-link mt-3 d-flex align-items-center">
            <a href="#" class="col-12" style="text-decoration: none">
              <p class="login-link text-right">用GOOGLE账户登录</p>
            </a>
          </div>
          <div class="login-link mt-3 mb-4 d-flex align-items-center">
            <a href="#" class="col-12" style="text-decoration: none">
              <p class="login-link text-right">用GOOGLE账户登录</p>
            </a>
          </div>
        </div>
        <form action="#" method="POST" class="col-12">
          <div
            class="d-flex flex-column align-items-stretch justify-content-around"
          >
            <div class="col-12 p-3" id="login-username">
              <input
                type="text"
                class="login-uesr-input"
                placeholder="username"
                name="username"
                width="100%"
                height="20%"
                v-model="loginMessage.userName"
              />
              <div class="input-border"></div>
              <p
                style="
                  font-size: large;
                  font-weight: 500;
                  color: rgb(92, 92, 92);
                "
              >
                Username
              </p>
            </div>
            <div class="col-12 p-3" id="login-password">
              <input
                type="password"
                class="login-uesr-input"
                placeholder="password"
                name="password"
                height="20px"
                v-model="loginMessage.password"
              />
              <div class="input-border"></div>
              <p
                style="
                  font-size: large;
                  font-weight: 500;
                  color: rgb(92, 92, 92);
                "
              >
                password
              </p>
            </div>
            <div class="d-flex justify-content-center">
              <input
                type="button"
                value="submit"
                class="btn-homepage2 btn-block pb-2 pt-2"
                @click="userSubmit"
              />
            </div>
            <div class="d-flex justify-content-center pt-4">
              <input
                type="button"
                value="Sign up"
                class="btn-homepage3 btn-block pb-2 pt-2"
                id="sign-up"
              />
            </div>
            <div class="d-flex justify-content-center pt-4 pb-4">
              <input
                type="button"
                value="close"
                class="btn-homepage1 btn-block pb-2 pt-2"
                id="login-close"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'

export default {
	name: "Login",
  data(){
    return{
      loginMessage:{
        userName: "",
        password: ""
      }
    }
  },
  methods:{
    userSubmit:function(){
      let loginVm = this
      let content = {
        username: loginVm.loginMessage.userName,
        password: loginVm.loginMessage.password
      }
      this.axios.post('/api/test',qs.stringify(content)).then(function(response){
        console.log(response)
      }).catch(function(error){
        console.log(error);
      })
    }
  }
}
</script>