<template>
  <div>
    <home-face ref="HomeFace" @tousercenter="test"></home-face>
    <home-intro></home-intro>
  </div>
</template>

<script>
import "../assets/css/homepage.css";
import HomeFace from "./HomeFace.vue";
import HomeIntro from "./HomeIntro.vue";
import backPic1 from "../assets/picture/background1.jpg";
import backPic2 from "../assets/picture/background2.jpg";
import backPic3 from "../assets/picture/background3.jpg";
import backPic4 from "../assets/picture/background4.jpg";

export default {
  name: "HomePage",
  data() {
    return {
      src: backPic1,
      rollTexts: [
        "content1",
        "content2",
        "content3",
        "content4",
        "content5",
        "content6"
      ]
    };
  },
  mounted: function() {
    var width;
    var height = $(window).height();
    let faceTop = 0;

    window.addEventListener("scroll", this.scrollSwitch, true);
    console.log(this.src);
    $("#htc-1").css("height", height * 0.9 + "px");
    $("#htc-2").css("height", height * 0.9 + "px");

    function autochange_base() {
      //var height = $(window).height();
      width = $(window).width();
      var half_width = width / 2 + "px";
      // var homepage_height = width*0.4+"px"
      $("#htc-1").css("height", height * 0.9 + "px");
      $("#htc-2").css("height", height * 0.9 + "px");
      //调整每个块（content）的高让其刚好覆盖页面
      $(".homepage-background").css("height", height * 1.2 + "px");
      $(".homepage-content-nopicture").css("height", height * 0.9 + "px");
      $(".homepage-content-picture").css("height", height * 0.9 + "px");
      if (width > 576) {
        $("#htc-1").css("width", half_width);
        $("#htc-2").css("width", half_width);
      } else {
        $("#htc-1").css("width", width + "px");
        $("#htc-2").css("width", width + "px");
      }
      //$("#homepage-image1").css("height",height*0.6+"px")
    }
    autochange_base();
    //轮播
    $(window).resize(autochange_base);
    var count = 0;

    var hompageVm = this;
    function show1(i) {
      $("#homepage-roll-text").html(hompageVm.rollTexts[i]);
      $("#homepage-roll-text").fadeIn(1500);
      setTimeout(function() {
        $("#homepage-roll-text").fadeOut(1500);
      }, 3000);
      return i + 1;
    }
    function autochange() {
      count = show1(count);
      if (count > hompageVm.rollTexts.length - 1) {
        count = 0;
      }
      return autochange;
    }
    // js中函数参数如果是”函数名+()“，则会先执行函数，然后将返回值作为真正的参数
    // 。相反参数没加“（）”则会被作为一个函数块指针，不先执行。
    setInterval(autochange(), 6000);
    faceTop = document.getElementById("face").getBoundingClientRect().top;
    $(".homepage-background").css(
      "bottom",
      (-height * 0.9 - faceTop) * 0.15 + "px"
    );
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.scrollSwitch, true);
  },
  methods: {
    scrollSwitch: function() {
      var width;
      var height = $(window).height();
      let faceTop = 0;
      faceTop = document.getElementById("face").getBoundingClientRect().top;
      let faceBottom = document.getElementById("face").getBoundingClientRect()
        .bottom;
      if (faceTop < height * 0.1 && faceBottom > 0) {
        $(".homepage-background").css(
          "bottom",
          (-height * 0.9 - faceTop) * 0.15 + "px"
        );
        // $(".homepage-background").css("background", "url(\"../picture/background1.jpg\") no-repeat");
        this.src = backPic1;
        $(".homepage-background").css("background-size", "120% 120%");
      }
      //获取intro相对于视窗的高
      let offsetIntro1Bottom = document
        .getElementById("intro1")
        .getBoundingClientRect().bottom;
      let offsetIntro1Top = document
        .getElementById("intro1")
        .getBoundingClientRect().top;
      if (offsetIntro1Top < height * 0.1 && offsetIntro1Bottom > 0) {
        $(".homepage-background").css(
          "bottom",
          (0 - height * 1.8 - offsetIntro1Top) * 0.15 + "px"
        );
        // $(".homepage-background").css("background", "url(\"../picture/background4.jpg\") no-repeat");
        console.log("change4");
        this.src = backPic4;
        $(".homepage-background").css("background-size", "120% 120%");
      }
      let offsetIntro2Bottom = document
        .getElementById("intro2")
        .getBoundingClientRect().bottom;
      let offsetIntro2Top = document
        .getElementById("intro2")
        .getBoundingClientRect().top;
      if (offsetIntro2Top < height * 0.1 && offsetIntro2Bottom > 0) {
        $(".homepage-background").css(
          "bottom",
          (0 - height * 1.8 - offsetIntro2Top) * 0.15 + "px"
        );
        // $(".homepage-background").css("background", "url(\"../picture/background2.jpg\") no-repeat");
        this.src = backPic2;
        $(".homepage-background").css("background-size", "120% 120%");
      }
      let offsetIntro3Bottom = document
        .getElementById("intro3")
        .getBoundingClientRect().bottom;
      let offsetIntro3Top = document
        .getElementById("intro3")
        .getBoundingClientRect().top;
      if (offsetIntro3Top < height * 0.1 && offsetIntro3Bottom > 0) {
        $(".homepage-background").css(
          "bottom",
          (0 - height * 1.8 - offsetIntro3Top) * 0.15 + "px"
        );
        // $(".homepage-background").css("background", "url(\"../picture/background3.jpg\") no-repeat");
        console.log("change3");
        this.src = backPic3;
        $(".homepage-background").css("background-size", "120% 120%");
      }
    },
    test: function() {
      this.$emit("tousercenter");
    }
  },
  components: {
    HomeFace,
    HomeIntro
  }
};
</script>
