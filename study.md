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

   