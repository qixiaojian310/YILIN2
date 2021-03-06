# 学习笔记

## 项目搭建

1. jquery的引用

   - 修改webpack.base.config.js文件增加配置项

   ```js
   const webpack = require('webpack')
   ....
    resolve: {
       extensions: ['.js', '.vue', '.json'],
       alias: {
         'vue$': 'vue/dist/vue.esm.js',
         '@': resolve('src'),
         'jquery': 'jquery' 
       }
     },
     ... 
     
     plugins: [
       new webpack.optimize.CommonsChunkPlugin('common.js'),
       new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         jquery: "jquery",
         "window.jQuery": "jquery"
       })
     ]
   ```

   在main.js下引用jquery模块

2. bootstrap

   和jquery不一样，他需要完整的css和js

3. 其他js需要ES6的支持，导出函数

4. css不需要支持直接导出即可，需要注意一下链接的位置

## vue代码部分

1. jquery和vue融合确实有一定困难，特别是一些函数需要重写，主要是因为vue的加载问题，要熟悉vue的生命周期

2. 3/6主要的一个难点是如何监听scroll，我在想是不是也可以在div上加入overflow的属性来确保有滚动事件，不过一般是监听window的事件所以需要window.addEventListener(),这个函数有三个属性具体的设置是

   ```js
   window.addEventListener('scroll', this.scrollSwitch, true);
   ```

   我测试发现它可以挂在mounted和created的下面

   - 3/6(2), 在规定了视窗高度以及overflow属性下也可以做到监听滚动效果

     ```vue
     <template>
       <div :style="{'height': '100vh', 'overflow': 'auto'}" @scroll="scrollSwitch">
         <home-face ref="HomeFace" @tousercenter="test"></home-face>
         <home-intro></home-intro>
       </div>
     </template>
     ```

     和之前的效果一样

3. 另外一个问题是父组件给子组件传值的问题，由于普通的data不满足动态绑定的特点所以使用了计算属性computed，由此看来计算属性非常适合组件之间的数据传递，因为他是封装好的动态传值选择。

   ```js
   export default {
     name: "HomeFace",
     computed: {
       src: function(){
         return this.$parent.src
       }
     }
   }
   ```

4. **今天不知道为什么this获取不到了，但是我发现如果先用console.log打印this再获取他就可以，非常奇怪**

5. swiper的导入

   原来的项目里面有swiper的组件今天导进去了，不过我发现最好用vueawesomeswiper插件，在需要的vue文件里面导入指令就行（我是用的指令，看到也可以用组件，导入指令之后里面的部分就是官方API要求的一些绑定啥的还是比较简单的

   ```vue
   <template>
     <div class="container">
       <div class="row">
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
   ```

   