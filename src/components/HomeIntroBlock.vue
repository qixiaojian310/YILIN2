<template>
  <div :id="id">
    <div class="homepage-title" style="z-index: 2; height:90%">
      <div class="homepage-content-nopicture align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-10 offset-md-0 offset-1 content-box">
              {{ description1 }}
            </div>
            <div class="col-md-6 col-10 offset-md-0 offset-1 content-box">
              <div class="tag-box">
                <img :src="pic1" alt="homepage" height="80%" width="80%" />
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
                <img :src="pic2" alt="homepage" height="80%" width="80%" />
              </div>
            </div>
            <div class="col-md-6 col-10 offset-md-0 offset-1 content-box">
              {{ description2 }}
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
  props: ["id", "pic1", "pic2", "description1", "description2"]
};
</script>

<style>
.tag-box{
  height: 70%;
  width: 85%;
  border: 2px dashed;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-box{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  height: 100%;
}
.row{
  height: 100%;
}
</style>