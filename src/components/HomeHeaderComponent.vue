<template>
  <div class="d-flex justify-content-between" style="width: 100%">
    <ul class="navbar-nav d-flex justify-content-around" style="width:100%">
      <li>
        <ul class="d-flex p-0 flex-lg-row flex-column">
          <li class="nav-item active">
            <a class="nav-link head-bar-items" href="#"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link head-bar-items" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link head-bar-items dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Category
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">English</a>
              <a class="dropdown-item" href="#">Literature</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">More</a>
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link head-bar-items login"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Login</a
            >
          </li>
        </ul>
      </li>
      <li>
        <div class="login-head-box">
          <a class="login-head" href="#">
            <img
              v-bind:src="img"
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
        <form class="form-inline my-2 my-lg-0 mr-5">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
import DropdownMenu from "./HeaderDropdownMenu";

export default {
  name: "HomeHeader",
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
</style>
