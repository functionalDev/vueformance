<template>
  <li :class="'contentEntry'">
    <slot></slot>
  </li>
</template>
<script>

export default {
  name: '',
  props: ['nodeData'],
  data() {
    return {
      // treeData: [{
      //   title: 'title',
      //   childrenTest: {
      //     title: 'title',
      //     childrenTest: {
      //       title: 'title',
      //       childrenTest: {
      //         title: 'title',
      //       },
      //     },
      //   },
      // }],
    };
  },
  components: {
  },
};
</script>
<style scoped>
  li {
    text-align: left;
  }
</style>
