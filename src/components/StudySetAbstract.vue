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
        class="col-8 d-flex flex-column justify-content-center align-items-center"
      >
        <p class="study-set-title">
          {{studySetTitle}}
        </p>
        <div class="study-set-content">
          <p class="study-set-content-font p-4">
						{{studySetContent}}
					</p>
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <a
          href="createstudyset.html"
          class="fa fa-arrow-right fa-3x study-set-detail-link"
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
				IconDefault: StudySetIconDefault
		};
  },
	props: ['studySetTitle','studySetContent']
};
</script>
