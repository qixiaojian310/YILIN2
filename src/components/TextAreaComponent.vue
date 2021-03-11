<template>
  <textarea
    class="form-control study-set-info-input"
    :placeholder="placeholdertext"
    :id="id"
    :value="value"
    @input="autoheight"
  />
</template>

<script>
export default {
  name: "TextAreaCompontent",
  props: ['placeholdertext','value','id'],
  data () {
    return {
      
    }
  },
  methods: {
    autoheight: function() {
      var inputdescript = document.getElementById(this.id);
      inputdescript.style.overflow = "hidden";
      inputdescript.style.height = inputdescript.scrollHeight + "px";
      // 直接在组件外监听事件就可以拿到value
      this.$emit('textareainput',inputdescript.value)
    }
  }
};
</script>
