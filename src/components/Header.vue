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

      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <create-header v-if="showArea === 'create-center'"></create-header>
        <home-header v-else></home-header>
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
import HomeHeader from './HomeHeaderComponent';
import CreateHeader from './CreateCenterHeaderComponent'
import "../assets/css/create-study-set.css";

export default {
  name: "Header",
  data() {
    return {
      img: HeadIcon,
      showArea: this.pagename
    };
  },
  methods: {
    backhome: function() {
      this.$parent.showPage = 'home-page'
    }
  },
  components: {
    HomeHeader,
    CreateHeader
  },
  props:['pagename']
};
</script>
