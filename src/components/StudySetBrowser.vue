<template>
  <div class="container">
    <div class="row">
      <user-side-bar></user-side-bar>
      <div
        class="col-lg-9 col-md-8 col-sm-12 offset-lg-1 offset-xl-1 offset-sm-0 mt-5 justify-content-around"
      >
        <div class="set-study-set-title text-center">title</div>
        <form class="form-horizontal" role="form">
          <div class="col-12 col-md-11 mt-5 ml-0 ml-md-5">
            <div class="my-1">
              <div class="form-group row">
                <label
                  for="inputTitle"
                  class="col-lg-4 col-md-6 col-sm-6 study-set-form-head control-label"
                  >Title</label
                >
                <div class="col-lg-8 col-md-6 col-sm-6">
                  <input
                    type="text"
                    class="form-control study-set-info-input"
                    placeholder="请输入您的学习集标题"
                    id="inputTitle"
                  />
                </div>
              </div>
              <div class="input-border"></div>
            </div>
            <div class="my-1">
              <div class="form-group row">
                <label
                  for="inputdescript"
                  class="col-lg-4 col-md-6 col-sm-6 control-label study-set-form-head"
                  >description</label
                >
                <div class="col-lg-8 col-md-6 col-sm-6">
                  <text-area-component :placeholdertext="'输入您的学习集内容'" :id="'studysetallcontent'"></text-area-component>
                </div>
              </div>
              <div class="input-border"></div>
            </div>
          </div>
          <div class="col-4 offset-4 mt-3">
            <input
              type="submit"
              class="btn btn-info"
              style="width: 100%"
              value="Sign in"
            />
          </div>
        </form>
        <!-- 学习集描述栏 -->
        <div
          v-for="(studySetAbstract, index) in studySetAbstracts"
          :key="index"
        >
          <study-set-abstract
            :studysettitle.sync="studySetAbstract.studySetAbstractTitle"
            :studysetcontent.sync="studySetAbstract.studySetAbstractContent"
            :studysetensure.sync="studySetAbstract.studySetEnsure"
            :studysetid.sync="studySetAbstract.studySetId"
            @getindex="changeIndex(index)"            
            @ready="syncReady"
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
import TextAreaComponent from './TextAreaComponent.vue';
import UserSideBar from "./UserSideBar";
export default {
  components: {
    UserSideBar,
    StudySetAbstract,
    TextAreaComponent    
  },
  name: "StudySetBrowser",
  data() {
    return {
      index: 0,
      studySetAbstracts: [
        {
          studySetId: 0,
          studySetAbstractTitle: "123",
          studySetAbstractContent: "345",
          studySetAbstractsIcon: "",
          studySetEnsure: true
        }
      ]
    };
  },
  methods: {
    syncReady: function(studyset) {
      console.log(this)
      this.studySetAbstracts[this.index].studySetEnsure = true
      this.studySetAbstracts[this.index].studySetAbstractContent = studyset.studySetContent
      this.studySetAbstracts[this.index].studySetAbstractTitle = studyset.studySetTitle
      console.log(studyset);
    },
    changeIndex: function(index) {
      console.log(index)
      this.index = index
    },
    addabstract: function() {
      this.index = this.index+1
      this.studySetAbstracts.push({
        studySetId: this.index,
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
