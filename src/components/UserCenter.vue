<template>
  <div class="container">
    <div class="row">
      <user-side-bar></user-side-bar>
      <div
        class="col-lg-9 col-md-7 col-sm-12 offset-lg-1 offset-md-1 offset-xl-1 offset-sm-0 mt-5 justify-content-around"
      >
        <div class="col-12 py-5 d-flex mt-5 usercenter-info">
          <div class="col-2" style="display: inline-block">
            <img :src="IconSrc" width="100%" />
          </div>
          <div class="col-10 align-content-center">
            <p class="usercenter-info-text mb-5">快点创建属于你自己的学习集</p>
            <router-link
              class="btn-homepage1 px-5 py-3"
              style="text-decoration: none"
              to="/studySet"
              >添加学习集
            </router-link>
          </div>
        </div>
        <h3 class="mt-5 col-4">学习集预览</h3>
        <div class="usercenter-study-set p-4 my-2 col-12">
          <div v-swiper:mySwiper="swiperOptions">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(slide,index) in allCard" :key="index">
                <div class="row d-flex justify-content-center" v-for="(row,rowindex) in slide" :key="rowindex">
                  <template v-for="(item, itemindex) in row">
                    <div class="col-4" :key="itemindex">
                      <rotate-card :title="item.title" :content="item.content" :rotateContent="item.rotateContent"></rotate-card>
                    </div>
                  </template>
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
import UserCenterIcon from "../assets/picture/head1.jpg";
import UserSideBar from "./UserSideBar";
import { directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import RotateCard from './RotateCard.vue';

export default {
  name: "userCenter",
  data() {
    return {
      IconSrc: UserCenterIcon,
      swiperOptions: {
        speed: 3500,
        initialSlide: 0,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      allCard:[
        [
          [
            {
              title: '12342344',
              content: '123443245',
              rotateContent: 'lala'
            },
            {
              title: '1234',
              content: '45',
              rotateContent: '123456'
            }
          ],
          [
            {
              title: '1234',
              content: '12345',
              rotateContent: '123456'
            },
            {
              title: '1234',
              content: '12345',
              rotateContent: '992'
            }
          ]
        ],
        [
          [
            {
              title: '1234',
              content: '12345',
              rotateContent: '123456'
            },
            {
              title: '1234',
              content: '12345',
              rotateContent: 'jianjian'
            }
          ],
          [
            {
              title: '1234',
              content: '12345',
              rotateContent: '123456'
            },
            {
              title: '1234',
              content: '12345',
              rotateContent: '123456'
            }
          ]
        ],
        [
          [
            {
              title: 'jianjian',
              content: '12345',
              rotateContent: '123456'
            },
            {
              title: '1234',
              content: '12345',
              rotateContent: 'jianjian'
            }
          ],
          [
            {
              title: '1234',
              content: '12345',
              rotateContent: '123456'
            },
            {
              title: '1234',
              content: '12345',
              rotateContent: '123456'
            }
          ]
        ]
      ]
    };
  },
  directives: {
    swiper: directive
  },
  mounted: function() {
    this.mySwiper.slideTo(0, 3000, false);
  },
  components: {
    UserSideBar,
    RotateCard,
  }
};
</script>
