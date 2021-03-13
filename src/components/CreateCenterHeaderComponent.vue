<template>
  <ul
    class="nav navbar-nav d-flex align-items-lg-center align-items-start justify-content-around"
    style="width:100%"
  >
    <li>
      <ul class="d-flex p-0 flex-column flex-lg-row">
        <li>
          <a class="btn btn-toolbar ml-0 ml-lg-2 my-2" type="button"
            >Upload study set</a
          >
        </li>
        <li>
          <a class="btn btn-toolbar ml-0 ml-lg-2 my-2" type="button"
            >Save the draft</a
          >
        </li>
      </ul>
    </li>
    <li>
      <div class="login-head-box">
        <a class="login-head" href="#">
          <img
            :src="this.img"
            class="login-head-pic"
            style="width:100%; height:100%;"
          />
        </a>
        <div class="dropdown-content">
          <dropdown-menu></dropdown-menu>
        </div>
      </div>
    </li>
    <li>
      <form class="d-flex ml-0 align-items-center">
        <input
          class="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <input
          class="btn btn-success my-2 ml-3 my-sm-0"
          type="submit"
          value="Search"
        />
      </form>
    </li>
    <!-- 用户的头像 -->
  </ul>
</template>

<script>
import DropdownMenu from "./HeaderDropdownMenu";

export default {
  name: "CreateHeader",
  props: ["img"],
  components: {
    DropdownMenu
  }
};
</script>

<style>
.navbar-nav li {
  display: flex;
  align-items: center;
}
@media (max-width: 992px) {
  li > form {
    width: 100%;
  }
}
@media (min-width: 992px) {
  li > form {
    width: 20vw;
  }
}
</style>
