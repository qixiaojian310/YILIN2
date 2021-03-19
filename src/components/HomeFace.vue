<template>
  <div>
    <div class="homepage-background" id="background1" :style="{'zIndex':'2', 'background': 'url('+src1+') no-repeat', 'backgroundSize': '100% 120%', opacity: opacity1}"></div>
    <div class="homepage-background" id="background2" :style="{'zIndex':'1', 'background': 'url('+src2+') no-repeat', 'backgroundSize': '100% 120%', opacity: opacity2}"></div>
    <div class="homepage-title d-block d-sm-flex" style="z-index: 3; position: relative;" id="face">
      <div class="homepage-title-content1 d-flex" id="htc-1">
        <div class="container d-flex">
          <div class="row align-content-center">
            <div class="col-12">
              <div
                class="col-8 offset-2 d-flex flex-column justify-content-center"
              >
                <h1 class="homepage-h1 pb-5">
                  成为你最不可阻挡的自我
                </h1>
                <h5 class="homepage-h1 pb-5">
                  精通任何学科，一次成功
                </h5>
                <router-link
                  class="mb-5 col-8 text-center btn-lg btn-homepage1 btn-block pb-3 pt-3"
                  to="/userCenter"
                >
                  开始学习
                </router-link>
              </div>
              <div class="col-7 offset-2">
                <a href="#" class="col-6 homepage-entrance">
                  我是老师
                </a>
                <a href="#" class="offset-1 homepage-entrance">
                  我是学生
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=" homepage-title-content2" id="htc-2">
        <div class="container">
          <div class="row">
            <p
              id="homepage-roll-text"
              class="col-12 text-center"
              style="font-size: 120%; color: black; font-weight: 700; display: none;"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFace",
  computed: {
    src1: function(){
      return this.$parent.src1
    },
    src2: function(){
      return this.$parent.src2
    },
    opacity1: function(){
      return this.$parent.opacity1
    },
    opacity2: function(){
      return this.$parent.opacity2
    }
  },
  methods: {
    test: function(){
      this.$emit('tousercenter')
    }
  }
  // mounted: function () {
  //   console.log(this);
  // }
}
</script>
