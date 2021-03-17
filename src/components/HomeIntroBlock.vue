<template>
  <div :id="id">
    <div class="homepage-title" style="z-index: 2; height:90%">
      <div
        class="homepage-content-nopicture align-items-center"
        :style="{background: this.backgroundimg, 'background-size': '100% 100%'}"
      >
        <div :style="{ backgroundColor: this.backgroundcolor, width: '100%', 'height': '100%' }">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-10 offset-md-0 offset-1 content-box p-5">
                <p class="description-box" data-aos="fade-right">{{ description1 }}</p>
              </div>
              <div class="col-md-6 col-10 offset-md-0 offset-1 content-box">
                <div class="tag-box">
                  <img :src="pic1" alt="homepage" width="95%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homepage-title" style="z-index: 2; height:90%">
      <div class="homepage-content-picture align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-10 offset-md-0 offset-1 content-box">
              <div class="tag-box">
                <img :src="pic2" alt="homepage" width="95%" />
              </div>
            </div>
            <div class="col-md-6 col-10 offset-md-0 offset-1 content-box p-5">
              <p class="description-box" data-aos="fade-left">{{ description2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIntroBlock",
  props: [
    "id",
    "pic1",
    "pic2",
    "description1",
    "description2",
    "backgroundimg",
    "backgroundcolor"
  ]
};
</script>

<style>
.tag-box {
  width: 80%;
  border: 2px dashed;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3% 0%;
}
.content-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  height: 100%;
}
.row {
  height: 100%;
}
.description-box {
  padding: 10% 10%;
  background: rgba(0, 0, 0, 0.15);
}
</style>
