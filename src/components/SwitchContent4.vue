<template>
  <div class="switch-content">
    <div
      class="switch-content-pic"
      :style="{ backgroundImage: 'url(' + contentPic + ')' }"
    ></div>
    <div class="switch-content-text">
      <p>{{this.contentText}}</p>
    </div>
  </div>
</template>

<script>
import contentpic4 from "../assets/picture/content4.jpg";

export default {
  name: "switchContent4",
  data() {
    return {
      contentPic: contentpic4,
      contentText: "YiLin为那些说\"只要我现在好好学习，周末就可以出去玩\"的学生准备"
    };
  }
};
</script>