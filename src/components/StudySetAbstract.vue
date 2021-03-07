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
          <p v-if="study-set-ensure">{{studySetTitle}}</p>
          <input v-else type="text" v-model="studySetTitle"/>
        </div>
        <div class="study-set-content">
          <div class="study-set-content-font p-4">
            <p v-if="study-set-ensure">{{studySetTitle}}</p>
            <input v-else type="text" v-model="studySetContent" />
					</div>
        </div>
      </div>
      <div class="col-3 col-md-1 d-flex justify-content-center align-items-center">
        <a
          class="fa fa-arrow-right fa-3x study-set-detail-link"
          v-if="study-set-ensure"
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
import StudySetIconDefault from "../assets/picture/head1.jpg"

export default {
  name: "StudySetAbstract",
  data() {
    return {
				IconDefault: StudySetIconDefault,
        studySetEnsure: false
		};
  },
	props: ['studySetTitle','studySetContent'],
  methods:{
    studysetsure: function() {
      this.studySetEnsure = true;
    }
  }
};
</script>
