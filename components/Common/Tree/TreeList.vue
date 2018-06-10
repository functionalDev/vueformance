<template>
  <ul id="treeRoot">
    <TreeListNode :key="node['.key']" v-for="(node, index) in treeData" :path="node['.key']" :nodeIs="nodeIs" :childProperty="childProperty" :nodeData="node">
      <slot :nodeData="node" :childProperty="childProperty">
      </slot>
    </TreeListNode>
  </ul>
</template>
<script>
import TreeListNode from './TreeListNode';

export default {
  name: '',
  props: ['nodeIs', 'childProperty', 'treeData'],
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
    TreeListNode,
  },
};
</script>
<style scoped>
  #treeRoot {
    background: rgba(255, 255, 255, 1);
    margin-left: 0;
    padding-left: 0;
  }
  ul {
    list-style: none;
  }
</style>
