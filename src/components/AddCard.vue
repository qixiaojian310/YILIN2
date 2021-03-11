<template>
  <div class="col-3 p-0 m-3 d-flex flex-column justify-content-center align-items-center">
    <p>title</p>
    <input type="text" placeholder="输入标题" v-model="wordCard.title">
    <p>content</p>
    <text-area-component :placeholderText="'输入内容'" :output.sync="wordCard.content" :id="'content'"></text-area-component>
    <p>back content</p>
    <text-area-component :placeholderText="'输入背面内容'" :output.sync="wordCard.rotateContent" :id="'rotatecontent'"></text-area-component>
  </div>
</template>

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
  }
}
</script>