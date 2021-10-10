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
import contentpic3 from "../assets/picture/content3.jpg";

export default {
  name: "switchContent3",
  data() {
    return {
      contentPic: contentpic3,
      contentText: "YiLin为希望把自己的\"天马行空记录下来的\"人准备"
    };
  }
};
</script>