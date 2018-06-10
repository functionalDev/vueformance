<template>
  <div class="treeNode" >
    <li>
      <div @open="open= !open" :path="path" :is="componentLoader" :collapsable="!!nodeData[childProperty]" :nodeData="nodeData"></div>
    </li>
    <ul v-show="open">
      <div is="tree-node-list" v-for="(node, index) in nodeData[childProperty]" :nodeData="node" :nodeIs="nodeIs" :childProperty="childProperty" :path="path + '/children/' + index">
      </div>
    </ul>
  </div>
</template>
<script>
import ContentEntry from '@/components/Common/Content/ContentEntry';

export default {
  name: 'tree-node-list',
  props: {
    nodeIs: {
      type: String,
      default: () => null,
    },
    childProperty: {
      type: String,
      default: () => null,
    },
    nodeData: {
      type: Object,
      default: () => {},
    },
    path: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      open: false,
    };
  },
  components: {
    ContentEntry,
  },
  methods: {
  },
  computed: {
    componentLoader() {
      return () => import(`./../../../${this.nodeIs}.vue`);
    },
  },
};
</script>
<style scoped>
  ul {
    list-style: none;
  }
  li {
    text-align: left;
    width: 100%;
  }
</style>
