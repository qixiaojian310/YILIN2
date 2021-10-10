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
import contentpic2 from "../assets/picture/content2.jpg";

export default {
  name: "switchContent2",
  data() {
    return {
      contentPic: contentpic2,
      contentText: "YiLin为希望不仅仅是背英语单词的人准备"
    };
  }
};
</script>