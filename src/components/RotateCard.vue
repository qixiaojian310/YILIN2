<template>
  <div class="col-12 p-0 m-3">
    <div class="set-rotate-trigger">
      <div
        class="usercenter-study-set-alone text-center justify-content-center align-items-center"
      >
        <p class="usercenter-study-set-alone-title">{{ title }}</p>
        <p class="usercenter-study-set-alone-content">
          {{ content }}
        </p>
      </div>
      <div class="usercenter-study-set-alone-translate text-center">
        {{ rotateContent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RotateCard",
  props: ["title", "content", "rotateContent"],
  data() {
    return{
      
    }
  }
};
</script>
