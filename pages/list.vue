<template>
  <div class="hello">
    <Tree :nodeIs="nodeIs" :treeData="docuPages" childProperty="children">
    </Tree>
  </div>
</template>
<!-- :is="props.nodeIs" :nodeData="props.nodeData" -->
<script>
// import { db } from './../services/firebase';
import Tree from './../components/Common/Tree/TreeList';
import DocuTitle from './../components/Docu/DocuNode';

export default {
  name: 'Dashboard',
  data() {
    return {
      nodeIs: 'components/Docu/DocuNode',
      docuPages: [],
    };
  },
  components: {
    Tree, DocuTitle,
  },
  firebase: {
    // docuPages: db.ref('docus'),
  },
  methods: {
    addPage() {
    },
  },
};
</script>

<style scoped>
  li {
    text-align: left;
  }
</style>
