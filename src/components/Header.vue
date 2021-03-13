<template>
  <header style="position: sticky; top: 0px; z-index: 2000;">
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

      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <create-header v-if="pagename === 'create-center'"></create-header>
        <home-header v-else></home-header>
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
      </div>
    </nav>
  </header>
</template>

<script>
import HeadIcon from "../assets/picture/head1.jpg";
import HomeHeader from './HomeHeaderComponent';
import CreateHeader from './CreateCenterHeaderComponent';
import DropdownMenu from './HeaderDropdownMenu'
import "../assets/css/create-study-set.css";

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
  },
  components: {
    HomeHeader,
    CreateHeader,
    DropdownMenu
  },
  props:['pagename']
};
</script>
