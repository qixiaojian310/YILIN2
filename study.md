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

   6. （3/8）这两天一直在整合studySet简述的部分，难点主要是在父组件里面我想创建一个对象，里面是所有子组件的json，子组件可以在input里面修改自己的json对象点击提交之后就锁定不可以更改。
   
      *一开始我是用props，**先在子组件定义好prop然后在父组件里面把json绑定到props上但是后面我发现这样写首先这个过程是单向的，如果父组件html中的子组件的props发生改变会影响子组件但是子组件的props的数值改变不会影响父组件。这是第一个bug，第二个是我没有熟悉props的定义，后面发现实际上props可以通过this.propsName的方式在data里面和数值对应，然后我再用v-model把它和input的值对应**，这样就解决了子组件内的props和data的对应问题*
   
      
   
      今天发现之前想的完全错了我总结成一下几个点
   
      1. props可以通过this读取，在组件内他和data是一样的，都可以在各个位置获取到
      
      2. 可以把data的值传递给props，也可以把props的值传递给data，在子组件的vue文件内，这两个是等价访问的
      
      3. .sync必须要在子组件里面写上一个this.$emit('update:data', value) update:是必须加的
      
      4. 所以与其这样还不如自己写，我们也可以用emit，先提交事件，然后再在父组件中监听，提交事件的监听可以监听一个值，这个值**可以是对象**。
      
         如：子组件
      
         ```vue
         <template>
           <textarea
             class="form-control study-set-info-input"
             :placeholder="placeholdertext"
             :id="id"
             :value="value"
             @input="autoheight"
           />
         </template>
         
         <script>
         export default {
           name: "TextAreaCompontent",
           props: ['placeholdertext','value','id'],
           data () {
             return {
               
             }
           },
           methods: {
             autoheight: function() {
               var inputdescript = document.getElementById(this.id);
               inputdescript.style.overflow = "hidden";
               inputdescript.style.height = inputdescript.scrollHeight + "px";
               // 直接在组件外监听事件就可以拿到value
               this.$emit('textareainput',inputdescript.value)
             }
           }
         };
         </script>
         
         ```
      
         它的使用
      
         ```vue
         <text-area-component :placeholdertext="'输入背面内容'" @textareainput="wordCard.rotateContent = $event" :value="wordCard.rotateContent" :id="'rotatecontent'" :style="{width: '90%'}">
         </text-area-component>
         
         ...
         <script>
         import TextAreaComponent from './TextAreaComponent'
         export default {
           name: 'AddCard',
           components: {
             TextAreaComponent
           },
           data(){
             return{
               wordCard:{
                 title:"",
                 content:"",
                 rotateContent:""
               }
             }
           },
           methods:{
             cardEnsure: function(){
               this.$emit('cardensure', this.wordCard);
               this.wordCard = {
                 title: "",
                 content: "",
                 rotateContent: ""
               }
             }
           }
         }
         </script>
         
         ```
      
      5. 监听有两种方法
      
      - 可以用方法来监听，方法的第一个参数就是emit带来的值
         - 可以用$event直接监听，$event就是emit带来的值
   
      
      
      然后我发现.sync关键字可以实现子组件props改变向父组对应数据的绑定，也就是双向绑定。
      
      具体这部分的代码示范:
      
      ```vue
      <template>
        <div class="container">
          <div class="row">
            <user-side-bar></user-side-bar>
            <div
              class="col-lg-9 col-md-8 col-sm-12 offset-lg-1 offset-xl-1 offset-sm-0 mt-5 justify-content-around"
            >
              <div class="set-study-set-title text-center">title</div>
              <!-- 学习集描述栏 -->
              <div
                v-for="(studySetAbstract, index) in studySetAbstracts"
                :key="index"
              >
                <study-set-abstract
                  :study-set-title.sync="studySetAbstract.studySetAbstractTitle"
                  :study-set-content.sync="studySetAbstract.studySetAbstractContent"
                  :study-set-ensure.sync="studySetAbstract.studySetEnsure"
                  @studysetensure="studySetAbstract.studySetEnsure = true"
                ></study-set-abstract>
              </div>
              <a
                class="col-12 col-md-11 ml-md-5 ml-0 my-5 text-center add-study-set justify-content-center align-items-center d-flex add-rows"
                @click="addabstract"
              >
                add abstracts
              </a>
            </div>
          </div>
        </div>
      </template>
      
      <script>
      import StudySetAbstract from "./StudySetAbstract";
      import UserSideBar from "./UserSideBar";
      export default {
        components: {
          UserSideBar,
          StudySetAbstract
        },
        name: "StudySetBrowser",
        data() {
          return {
            studySetAbstracts: [
              {
                studySetAbstractTitle: "123",
                studySetAbstractContent: "345",
                studySetAbstractsIcon: "",
                studySetEnsure: true
              },
              {
                studySetAbstractTitle: "143",
                studySetAbstractContent: "345",
                studySetAbstractsIcon: "",
                studySetEnsure: true
              },
              {
                studySetAbstractTitle: "153",
                studySetAbstractContent: "345",
                studySetAbstractsIcon: "",
                studySetEnsure: true
              }
            ]
          };
       },
        methods: {
          addabstract: function() {
            this.studySetAbstracts.push({
              studySetAbstractTitle: "",
              studySetAbstractContent: "",
              studySetAbstractsIcon: "",
              studySetEnsure: false
            })
          },
          autoheight: function(){
            var inputdescript = document.getElementById('inputdescript');
            inputdescript.style.overflow = 'hidden';
            inputdescript.style.height = inputdescript.scrollHeight +  'px';
          }
        }
      };
      </script>
      
      ```
      
      单个子组件的vue文件
      
      ```vue
      <template>
        <div
          class="col-12 col-md-11 ml-md-5 ml-0 mt-5 study-set-card justify-content-center align-items-center d-flex"
        >
          <div class="row" style="width: 100%; height: 100%;">
            <div class="col-3 d-flex align-items-center justify-content-center">
              <slot>
                <img
                  :src="IconDefault"
                  style="width:100%; height:auto; border-radius: 50%;"
                />
              </slot>
            </div>
            <div
              class="col-md-8 col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <div class="study-set-title">
                <p v-if="studySet.studysetensure">{{ studySet.studySetTitle }}</p>
                <input v-else type="text" v-model="studySet.studySetTitle" />
              </div>
              <div class="study-set-content">
                <div class="study-set-content-font p-4">
                  <p v-if="studySet.studysetensure">{{ studySet.studySetContent }}</p>
                  <input v-else type="text" v-model="studySet.studySetContent" />
                </div>
              </div>
            </div>
            <div
              class="col-3 col-md-1 d-flex justify-content-center align-items-center"
            >
              <a
                class="fa fa-arrow-right fa-3x study-set-detail-link"
                v-if="studySet.studysetensure"
              ></a>
              <a
                @click="studysetsure"
                class="fa fa-check-circle fa-3x study-set-detail-link"
                v-else
              ></a>
            </div>
          </div>
        </div>
      </template>
      
      <script>
      import StudySetIconDefault from "../assets/picture/head1.jpg";
      
      export default {
        name: "StudySetAbstract",
        data() {
          return {
            IconDefault: StudySetIconDefault,
            studySet: {
              studySetTitle: this.studySetTitle,
              studySetContent: this.studySetContent,
              studysetensure: this.studySetEnsure
            }
          };
        },
        props: ["studySetTitle", "studySetContent", "studySetEnsure"],
        methods: {
          studysetsure: function() {
            this.studySet.studysetensure = true;
          }
        }
      };
      </script>
      
      ```
      

## 路由

1. 3/19 最近打算写后端才发现，原来的页面很难做到跳转，url完全不变（也可能可以但是我不会），所以想要用vue-router重构项目。
2. 路由第一个问题是AOS，我发现这个库他必须在create前加载，否则会出现文字存在但是看不见的问题，然后是路由配置，和我之前理解的不太一样，我以为是每个组件都要写在router的配置文件里面，但是后来我发现，实际上只需要把大的跳转写好就行，他会自动加载里面小的组件
3. components和component，我感觉这个东西主要用在并行的情况，比如我们跳转有两个并行并不是父子关系的组件，这时候就要用这个同时加载他们
4. scoped，跟在style后面可以阻止样式加载到别的地方

