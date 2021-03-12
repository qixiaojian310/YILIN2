<template>
  <div class="col-12 p-0 m-3">
    <div class="set-rotate-trigger">
      <div
        class="usercenter-study-set-alone text-center justify-content-center align-items-center p-3"
      >
        <pre class="usercenter-study-set-alone-title text-left">{{ title }}</pre>
        <pre class="usercenter-study-set-alone-content text-left">{{ content }}</pre>
      </div>
      <pre class="usercenter-study-set-alone-translate text-left p-3">{{ rotateContent }}</pre>
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
