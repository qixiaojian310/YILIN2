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
import contentpic1 from "../assets/picture/content1.jpg";

export default {
  name: "switchContent1",
  data() {
    return {
      contentPic: contentpic1,
      contentText: "YiLin为希望更自由学习方式的人准备"
    };
  }
};
</script>