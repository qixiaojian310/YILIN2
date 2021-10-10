<template>
  <div id="sign-up-page">
    <div class="container">
      <div class="row">
        <div
          class="col-12 d-flex align-items-center"
          style="height: 100px; width: 100%; background: rgb(50, 57, 146)"
        >
          <p class="col-12 p-4 text-left mask-title">Sign up</p>
        </div>
        <form action="#" method="POST" class="col-12">
          <p
            class="col-12"
            style="font-size: large; font-weight: 500; color: rgb(92, 92, 92)"
          >
            生日：
            <input type="text" id="datepicker" size="30" />
          </p>
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
            <p
              class="col-12 checkbox-text"
              style="font-size: large; font-weight: 500; color: rgb(92, 92, 92)"
            >
              <input
                type="checkbox"
                id="legancy-signup"
                value="agree"
                class="checkbox"
              />
              <label for="legancy-signup" style="width: 100%">
                Are you agree the legancy of KillWord
              </label>
            </p>
            <div class="d-flex justify-content-center">
              <input
                type="submit"
                value="submit"
                class="btn-homepage2 btn-block pb-2 pt-2"
              />
            </div>
            <div class="d-flex justify-content-center pt-4">
              <input
                type="button"
                value="login"
                @click="toLoginPage"
                class="login btn-homepage3 btn-block pb-2 pt-2"
              />
            </div>
            <div class="d-flex justify-content-center pt-4 pb-4">
              <input
                type="button"
                value="close"
                class="btn-homepage1 btn-block pb-2 pt-2"
                id="signup-close"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  mounted: function() {
    $("#datepicker").datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      changeMonth: true,
      changeYear: true
    });
    $(".checkbox").checkboxradio();
  },
  methods:{
    toLoginPage:function(){
      this.$parent.$data.registerStatus = "login"
    }
  }
};
</script>
