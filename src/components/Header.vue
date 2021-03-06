<template>
  <header style="position: sticky; top: 0px; z-index: 4;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light head-bar">
      <a class="navbar-brand head-bar-items" @click="backhome"
        >KillWord Master</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
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
        <div class="login-head">
          <a class="login-head" href="#">
            <img
              v-bind:src="img"
              class="login-head"
              style="width:100%; height:100%;"
            />
          </a>
          <div class="dropdown-content">
            <p>abc</p>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import HeadIcon from "../assets/picture/head1.jpg";

export default {
  name: "Header",
  data() {
    return {
      img: HeadIcon,
    };
  },
  methods: {
    backhome: function() {
      this.$parent.showPage = 'home-page'
    }
  }
};
</script>
