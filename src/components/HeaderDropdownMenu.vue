<template>
  <div id="dropdown-container">
    <div class="d-flex justify-content-center align-content-center">
      <a
        class="menu-block d-flex flex-column justify-content-center align-items-center"
      >
        <i class="fa fa-2x fa-superpowers"></i>
        <p>快速创建学习集</p>
      </a>
      <a
        class="menu-block d-flex flex-column justify-content-center align-items-center"
      >
        <i class="fa fa-2x fa-search"></i>
        <p>查看创作中心</p>
      </a>
    </div>
    <div class="d-flex justify-content-center align-content-center">
      <a
        class="menu-block d-flex flex-column justify-content-center align-items-center"
      >
        <i class="fa fa-2x fa-book"></i>
        <p>创建学习集</p>
      </a>
      <a
        class="menu-block d-flex flex-column justify-content-center align-items-center"
      >
        <i class="fa fa-2x fa-github"></i>
        <p>Github查看源码</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  mounted: function() {
    var width = $(window).width();
    var headicon_width = width * 0.05 + "px";
    console.log("lala");
    if (width > 992) {
      $(".login-head").css("width", headicon_width);
    } else {
      $(".login-head").css("width", "50px");
    }
  }
};
</script>

<style>
p {
  margin: 0;
}

#dropdown-container {
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3000;
}
.menu-block {
  width: 110px;
  height: 110px;
  border-radius: 10px;
  border: 2px dashed rgb(150, 150, 150);
  margin: 10px 10px;
  text-align: center;
}
.menu-block:hover {
  text-decoration: none;
}
</style>
