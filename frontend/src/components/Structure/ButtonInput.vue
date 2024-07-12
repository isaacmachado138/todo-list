<template>
    <button :type="buttonType" :class="buttonClass" >{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    buttonType: {
      type: String,
      required: true,
      default: 'input'
    },
    color: {
      type: String,
      default: 'purple'
    }, 
  },
  computed: {
    buttonClass() {
      return `btn btn-${this.color} btn-bg`;
    }
  }
};
</script>

