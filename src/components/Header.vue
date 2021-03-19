<template>
  <header style="position: sticky; top: 0px; z-index: 3000;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light head-bar">
      <router-link to="/home">
        <a class="navbar-brand head-bar-items"
          >KillWord Master</a
        >
      </router-link>
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

      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent"
      >
        <create-header
          v-if="pagename === '/createCenter'"
          :img="img"
        ></create-header>
        <home-header v-else :img="img"></home-header>
      </div>
    </nav>
  </header>
</template>

<script>
import HeadIcon from "../assets/picture/head1.jpg";
import HomeHeader from "./HomeHeaderComponent";
import CreateHeader from "./CreateCenterHeaderComponent";
import "../assets/css/create-study-set.css";

export default {
  name: "Header",
  data() {
    return {
      img: HeadIcon
    };
  },
  components: {
    HomeHeader,
    CreateHeader
  },
  props: ["pagename"]
};
</script>
