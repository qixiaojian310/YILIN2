<template>
  <textarea
    class="form-control study-set-info-input"
    :placeholder="placeholdertext"
    :id="id"
    @input="autoheight"
    v-model="value"
  />
</template>

<script>
export default {
  name: "TextAreaCompontent",
  props: ['placeholdertext', 'output', 'id'],
  data () {
    return {
      value: this.output
    }
  },
  methods: {
    autoheight: function() {
      var inputdescript = document.getElementById(this.id);
      inputdescript.style.overflow = "hidden";
      inputdescript.style.height = inputdescript.scrollHeight + "px";
    }
  }
};
</script>
