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
        :backgroundimg="IntroBlock.backgroundimg"
        :backgroundcolor="IntroBlock.backgroundcolor"
        :title1="IntroBlock.title1"
        :title2="IntroBlock.title2"
      ></home-intro-block>
    </template>
  </div>
</template>

<script>
import HomeIntroBlock from "./HomeIntroBlock";
import tag3 from "../assets/picture/the-forgetting-curve.png"
import bootstraptag from "../assets/picture/bootstrap.png"
import tag6 from "../assets/picture/tag3.jpg";
import tag4 from "../assets/picture/tag4.jpg";
import tag5 from "../assets/picture/blockchain.png"
import tag2 from "../assets/picture/subject.png"
import backtag1 from "../assets/picture/tag1.png"
import backtag2 from "../assets/picture/background4.jpg"
import backtag3 from "../assets/picture/unlockjpg.jpg"

export default {
  name: "HomeIntro",
  data() {
    return {
      IntroBlocks: [
        {
          pic1: bootstraptag,
          pic2: tag2,
          description1:
            "YiLin基于bootstrap和jQuery开发，在不同的设备上都有很良好的使用体验，我们希望设备和使用场所不要成为学习的限制",
          description2:
            "我们支持自主创建学习本，这同之前任何一种辅助记忆软件都不相同，因为我们发现，并不是所有人都只想在YiLin上背英语",
          title1:"更灵活的设备选择",
          title2:"更自主的体验",
          backgroundcolor: "rgba(205, 164, 108, 0.35)",
          backgroundimg: 'url('+backtag1+')'+ ' no-repeat'
        },
        {
          pic1: tag3,
          pic2: tag4,
          description1:
            "YiLin可以分析用户的遗忘曲线行为，基于艾宾浩斯记忆曲线，在用户可能将要出现遗忘的时候提示他们巩固记忆，最终你会发现在不知不觉中记住了自己fork或者是创建的学习集内容",
          description2:
            "我们基于协同过滤推荐算法，可以向每个用户推荐最适合你们的学习集，你可以直接将他们的开源资料fork到自己的博客上。不仅如此，你也可以通过它们来找到和你志同道合的伙伴。",
          title1:"更科学的计划",
          title2:"更智能的推荐",
          backgroundcolor: "rgba(6, 40, 70, 0.35)",
          backgroundimg: 'url('+backtag2+')'+ ' no-repeat'
        },
        {
          pic1: tag5,
          pic2: tag6,
          description1:
            "YiLin最终的目标是去中心化，以用户本身为核心导向，每个用户都可以创建自己的学习集并且”开源“它。我们只是辅助你的记忆而已，自由是我们希望每个用户拥有的权利。",
          description2:
            "YiLin整个项目都保管在GitHub上，遵循MIT协议，任何人都可以更改他的源代码，甚至你可以客制化属于自己的YiLin，我们相信开源可以给YiLin带来充足的活力。",
          title1:"更广泛的开源",
          title2:"更开放的社区",
          backgroundcolor: "rgba(96, 140, 170, 0.35)",
          backgroundimg: 'url('+backtag3+')'+ ' no-repeat'
        }
      ]
    };
  },
  components: {
    HomeIntroBlock
  }
};
</script>
