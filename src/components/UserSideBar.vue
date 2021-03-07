<template>
  <div class="col-lg-2 col-md-4 d-none d-md-block m-0 p-0 usercenter-sidebar">
    <nav class="navbar p-0">
      <ul class="nav flex-column" style="width: 100%" id="side-bar">
        <li class="nav-item">
          <a
            class="nav-link px-5 py-2 mb-3 mt-5 usercenter-sidebar-link"
            style="background-color: rgb(125, 226, 230)"
            href="#"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link" href="#"
            >Home</a
          >
        </li>
        <li class="dropdown-divider"></li>
        <li class="nav-item">
          <a class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link" href="#"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link px-5 py-2 mb-3 usercenter-sidebar-sub-link"
            href="#"
            >subhome</a
          >
        </li>
        <li class="dropdown-divider"></li>
        <li class="nav-item">
          <a class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link" href="#"
            >Home</a
          >
        </li>
        <li class="dropdown-divider"></li>
        <li class="nav-item">
          <a class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link" href="#"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link px-5 py-2 mb-3 usercenter-sidebar-sub-link"
            href="#"
            >subHome</a
          >
        </li>
        <li class="dropdown-divider"></li>
        <li class="nav-item">
          <a class="nav-link px-5 py-2 mb-3 usercenter-sidebar-link" href="#"
            >Home</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import userSideBar from "../assets/js/userSideBar"

export default {
	name: 'UserSideBar',
  mounted: function () {
    userSideBar()
  }
}
</script>
