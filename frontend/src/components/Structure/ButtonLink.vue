<template>
  <a :href="link" :class="buttonClass">{{ label }}</a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'blue'
    }, 
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass() {
      return `btn btn-${this.color} btn-bg`;
    }
  }
};
</script>

<style scoped>
</style>
