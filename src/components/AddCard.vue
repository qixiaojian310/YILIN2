<template>
  <div class="col-12 m-3 d-flex flex-column justify-content-center align-items-center add-card">
    <p>title</p>
    <input type="text" placeholder="输入标题" v-model="wordCard.title" :style="{width: '90%'}">
    <p>content</p>
    <text-area-component :placeholdertext="'输入内容'" @textareainput="wordCard.content = $event" :value="wordCard.content" :id="'content'" :style="{width: '90%'}"></text-area-component>
    <p>back content</p>
    <text-area-component :placeholdertext="'输入背面内容'" @textareainput="wordCard.rotateContent = $event" :value="wordCard.rotateContent" :id="'rotatecontent'" :style="{width: '90%'}"></text-area-component>
    <input type="button" @click="cardEnsure" class="brn btn-homepage2 my-3" value="Ensure Card"/>
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

<style>
.add-card{
  border: 2px dashed;
  border-radius: 10px;
}
</style>