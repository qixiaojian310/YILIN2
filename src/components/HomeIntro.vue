<template>
  <div>
    <template v-for="(IntroBlock, index) in IntroBlocks">
      <home-intro-block
        :key="index"
        :id="'intro' + (index + 1)"
        :pic1="IntroBlock.pic1"
        :pic2="IntroBlock.pic2"
        :description1="IntroBlock.description1"
        :description2="IntroBlock.description2"
      ></home-intro-block>
    </template>
  </div>
</template>

<script>
import HomeIntroBlock from "./HomeIntroBlock"
import tag1 from "../assets/picture/head1.jpg"

export default {
  name: "HomeIntro",
  data() {
    return {
      IntroBlocks: [
        {
          pic1: tag1,
          pic2: tag1,
          description1: "../assets/picture/head1.jpg",
          description2: "../assets/picture/head1.jpg"
        },
        {
          pic1: tag1,
          pic2: tag1,
          description1: "../assets/picture/head1.jpg",
          description2: "../assets/picture/head1.jpg"
        },
        {
          pic1: tag1,
          pic2: tag1,
          description1: "../assets/picture/head1.jpg",
          description2: "../assets/picture/head1.jpg"
        }
      ]
    };
  },
  components: {
    HomeIntroBlock
  }
};
</script>
