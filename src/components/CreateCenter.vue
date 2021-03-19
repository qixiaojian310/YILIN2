<template>
  <div>
    <div class="study-set-head pb-2">
      <div class="container">
        <div class="row clearfix">
          <div class="col-12">
            <form
              class="form-horizontal row mt-1 d-flex flex-wrap align-items-stretch"
              role="form"
            >
              <div class="col-9 p-3 create-study-set-head">
                <div class="my-3">
                  <div class="form-group row">
                    <label
                      for="inputTitle"
                      class="col-sm-2 study-set-form-head control-label"
                      >Title</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control study-set-info-input"
                        placeholder="请输入您的笔记标题"
                        id="inputTitle"
                      />
                    </div>
                  </div>
                  <div class="input-border"></div>
                </div>
                <div class="my-3">
                  <div class="form-group row">
                    <label
                      for="inputdescript"
                      class="col-sm-2 control-label study-set-form-head"
                      >description</label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control study-set-info-input"
                        placeholder="请简要描述您的笔记"
                        id="inputdescript"
                      />
                    </div>
                  </div>
                  <div class="input-border"></div>
                </div>
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  class="px-2 btn"
                  style="float: right; font-size: 3vw; text-align: center; font-weight: 600; height: 100%; width:80%; border: 3px solid"
                  value="upload"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="study-set-show-area2">
      <div class="container">
        <div class="row clearfix">
          <div class="col-12 d-flex justify-content-center">
            <div
              class="col-12 mt-4 row d-flex justify-content-start flex-wrap"
            >
              <div class="col-4" v-for="(card, index) in wordCardSet" :key="index">
                <rotate-card
                  :title="card.title"
                  :content="card.content"
                  :rotateContent="card.rotateContent"
                ></rotate-card>
              </div>
              <div class="col-4">
                <add-card @cardensure="cardEnsure"></add-card>
              </div>
            </div>
            <!-- 添加单词卡片 -->
          </div>
        </div>
      </div>
    </div>
    <!-- 转换器 -->
    <a
      class="study-set-toggle1 d-flex align-items-center justify-content-center"
    >
      <i id="toggle-btn1" class="fa fa-4x fa-arrow-circle-right"></i>
      <i id="toggle-btn2" class="fa fa-4x fa-arrow-circle-left"></i>
    </a>
    <!-- 初始化部分 富文本编辑器 -->
    <div class="study-set-show-area1">
      <div class="container">
        <div class="row clearfix">
          <div class="col-12 row mb-3">
            <div class="col-xl-6 col-12 mt-5">
              <!-- 富文本编辑器位置 -->
              <div id="editor" class="col-12"></div>
              <div class="col-12 d-flex justify-content-around my-4">
                <input type="button" class="btn-homepage1" value="确认重点" @click="ensurekeynote" style="width:150px;height:50px"/>
                <input type="button" value="撤销" class="btn-homepage2" @click="withdrawkeynote" style="width:150px;height:50px"/>
              </div>
            </div>
            <div class="col-xl-5 col-12 offset-xl-1 offset-0 mt-5">
              <div class="col-12">
                <div
                  id="editor-show"
                  v-html="editorHtml"
                  class="col-12"
                  style="border: 2px dotted; height: 300px; overflow-y: scroll; z-index: 1000;"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="create-set-background"></div>
  </div>
</template>

<script>
import createInit from "../assets/js/createstudyset";
import AddCard from './AddCard.vue';
import RotateCard from "./RotateCard";

export default {
  name: "CreateCenter",
  components: {
    RotateCard,
    AddCard
  },
  data() {
    return {
      editor: null,
      editorHtml: "",
      wordCardSet: [
        {
          title: "123",
          content: "456",
          rotateContent: "12345"
        },
        {
          title: "123",
          content: "456",
          rotateContent: "12345"
        },
        {
          title: "123",
          content: "456",
          rotateContent: "12345"
        }
      ]
    };
  },
  mounted: function() {
    createInit();
    //初始化编辑器
    var E = require("wangeditor");
    const editor = new E("#editor");
    var that = this;
    editor.customConfig.menus = ["head", "bold", "italic", "underline"];
    editor.customConfig.zIndex = 1000

    // 确保show和editor的完全滚动同步和输入同步
    editor.customConfig.onchange = function(html) {
      that.editorHtml = html;
      // 获取编辑器的滚动条高度
      var editorScrollTop = editor.$textElem[0].scrollTop
      // 设置显示部分的scrollTop
      document.getElementById("editor-show").scrollTop = editorScrollTop
    };
    editor.create();
    editor.$textElem[0].addEventListener('scroll',function(){
      // 获取编辑器的滚动条高度
      var editorScrollTop = editor.$textElem[0].scrollTop
      // 设置显示部分的scrollTop
      document.getElementById("editor-show").scrollTop = editorScrollTop
    },true)
    document.getElementById("editor-show").addEventListener('scroll',function(){
      var showScrollTop = document.getElementById("editor-show").scrollTop
      editor.$textElem[0].scrollTop = showScrollTop
    },true)



    this.editor = editor;
    // 获取选择的文字
    var txtRange;
    var allChildren;
    var parentNode;
    $("#editor").mouseup(function() {
      if (window.getSelection().isCollapsed == false) {
        var txtFistOffset = window.getSelection().anchorOffset;
        var txtLastOffset = window.getSelection().focusOffset;

        var txtSelection = window.getSelection();
        txtRange = txtSelection.getRangeAt(0);
        //获取所有的选中的节点，df相当于一个document对象
        var documentFragment = txtRange.cloneContents();
        // 获取df下游多少个子节点，也就是选取的范围
        var count = documentFragment.childNodes.length;
        //获取父亲节点，编辑区域的dom节点
        parentNode = editor.$textElem[0];
        //返回父亲节点下的所有子节点
        allChildren = parentNode.childNodes;
        //遍历整个字节点集合返回选择的首节点的相对位置
        var indexOfFirstSelectNode;
        for (let i = 0; i < allChildren.length; i++) {
          if (allChildren[i] == window.getSelection().anchorNode.parentNode) {
            indexOfFirstSelectNode = i;
            break;
          }
        }
        // 终点所在位置
        var indexOfLastSelectNode;
        console.log(window.getSelection().focusNode);
        for (let i = 0; i < allChildren.length; i++) {
          if (allChildren[i] == window.getSelection().focusNode.parentNode) {
            indexOfLastSelectNode = i;
            break;
          }
        }
        console.log(
          "起点位置" +
            txtFistOffset +
            "," +
            "终点位置" +
            txtLastOffset +
            "\n选区起点相对整个文档的位置" +
            indexOfFirstSelectNode +
            "\n选区终点相对于整个文档的位置" +
            indexOfLastSelectNode +
            "\n选区的总体范围大小" +
            count
        );
        // for (count = 0; count < documentFragment.childNodes.length; count++) {
        //     var childNode = documentFragment.childNodes[count];
        // }
      }
    });
  },
  methods:{
    cardEnsure: function(value) {
      this.wordCardSet.push(value)
    },
    ensurekeynote: function(){
      this.editor.cmd.do('backColor','#FFD770')
    },
    withdrawkeynote: function(){
      this.editor.cmd.do('backColor',"#FFFFFF")
    }
  }
};
</script>

<style scoped>
@media (max-width: 1400px) {
  .container {
    min-width: 960px;
  }
}
@media (max-width: 992px) {
  .container {
    min-width: 740px !important;
  }
}
@media (max-width: 768px) {
  .container {
    min-width: 576px !important;
  }
}
@media (max-width: 576px) {
  .container {
    min-width: 540px !important;
  }
}
#editor-show p{
  margin: 10px 0px;
  line-height: 1.5;
}
</style>
