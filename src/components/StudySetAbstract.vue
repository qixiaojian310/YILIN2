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
    },
    tocreatecenter: function() {
      this.$root.$children[0].showPage = 'create-center'
    }
  }
};
</script>
