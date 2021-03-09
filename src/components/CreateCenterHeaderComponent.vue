<template>
  <ul
    class="nav navbar-nav d-flex align-items-lg-center align-items-start pr-5"
    style="margin-left: auto;"
  >
    <li>
      <a class="btn btn-toolbar m-2 ml-0 ml-lg-5" type="button"
        >Upload study set</a
      >
    </li>
    <li>
      <a class="btn btn-toolbar m-2 ml-0 ml-lg-5" type="button"
        >Save the draft</a
      >
    </li>
    <li>
      <form class="d-flex ml-0 ml-lg-5 align-items-center">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <input
          class="btn btn-success my-2 ml-3 my-sm-0"
          type="submit"
          value="Search in content"
        />
      </form>
    </li>
    <!-- 用户的头像 -->
  </ul>
</template>

<script>
export default {
  name: 'CreateHeader'
}
</script>
