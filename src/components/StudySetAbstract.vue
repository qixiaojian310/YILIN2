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
            <text-area-component v-else @textareainput="getTextAreaValue" :id="'studysetcontent'+studysetid"></text-area-component>
          </div>
        </div>
      </div>
      <div
        class="col-3 col-md-1 d-flex justify-content-center align-items-center"
      >
        <a
          @click="tocreatecenter"
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
import TextAreaComponent from './TextAreaComponent.vue';

export default {
  name: "StudySetAbstract",
  components:{
    TextAreaComponent
  },
  data() {
    return {
      IconDefault: StudySetIconDefault,
      studySet: {
        studySetTitle: this.studysettitle,
        studySetContent: this.studysetcontent,
        studysetensure: this.studysetensure
      }
    };
  },
  props: ["studysettitle", "studysetcontent", "studysetensure", "studysetid"],
  methods: {
    studysetsure: function() {
      this.studySet.studysetensure = true;
      this.$emit('getindex')
      this.$emit('ready', this.studySet)
    },
    tocreatecenter: function() {
      this.$root.$children[0].showPage = 'create-center'
    },
    getTextAreaValue: function(value){
      this.studySet.studySetContent = value
    }
  }
};
</script>
