<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-2 col-md-4 d-none d-md-block m-0 p-0 usercenter-sidebar"
      >
        <nav class="navbar p-0">
          <ul class="nav flex-column" style="width: 100%" id="side-bar">
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 mt-5 usercenter-sidebar-link"
                style="background-color: rgb(125, 226, 230)"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link"
                href="#"
                >Home</a
              >
            </li>
            <li class="dropdown-divider"></li>
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 usercenter-sidebar-sub-link"
                href="#"
                >subhome</a
              >
            </li>
            <li class="dropdown-divider"></li>
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link"
                href="#"
                >Home</a
              >
            </li>
            <li class="dropdown-divider"></li>
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link"
                href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 usercenter-sidebar-sub-link"
                href="#"
                >subHome</a
              >
            </li>
            <li class="dropdown-divider"></li>
            <li class="nav-item">
              <a
                class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link"
                href="#"
                >Home</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="col-lg-9 col-md-7 col-sm-12 offset-lg-1 offset-md-1 offset-xl-1 offset-sm-0 mt-5 justify-content-around"
      >
        <div class="col-12 py-5 d-flex mt-5 usercenter-info">
          <div class="col-2" style="display: inline-block">
            <img :src="IconSrc" width="100%" />
          </div>
          <div class="col-10 align-content-center">
            <p class="usercenter-info-text mb-5">快点创建属于你自己的学习集</p>
            <a class="btn-homepage1 px-5 py-3" style="text-decoration: none"
              >添加学习集</a
            >
          </div>
        </div>
        <h3 class="mt-5 col-4">学习集预览</h3>
        <div class="usercenter-study-set p-4 my-2 col-12">
          <div v-swiper:mySwiper="swiperOptions">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="row d-flex justify-content-center">
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                </div>
                <div class="row d-flex justify-content-center">
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="row d-flex justify-content-center">
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                </div>
                <div class="row d-flex justify-content-center">
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                  <div class="col-4 p-0 m-3 set-rotate-trigger">
                    <div
                      class="usercenter-study-set-alone text-center justify-content-center align-items-center"
                    >
                      <p class="usercenter-study-set-alone-title">abc</p>
                      <p class="usercenter-study-set-alone-content">abcdefg</p>
                    </div>
                    <div
                      class="usercenter-study-set-alone-translate text-center"
                    >
                      dcg
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userCenter from "../assets/js/usercenter";
import UserCenterIcon from "../assets/picture/head1.jpg";
import { directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "userCenter",
  data() {
    return {
      IconSrc: UserCenterIcon,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  directives: {
    swiper: directive,
  },
  mounted: function () {
    userCenter();
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  },
};
</script>