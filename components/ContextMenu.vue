<template>
  <div :style="position" :class="{contextMenu: true, show}">
    <ul>
      <li @click="completeThis" >Complete</li>
      <li @click="addChild">Add Child</li>
      <li @click="showDeletedThis" v-if="!!hasDeleted">{{ showDeleted ? 'Hide Deleted Children' : 'Show Deleted Children'}}</li>
      <hr>
      <li disabled>Open</li>
      <li disabled>Edit</li>
      <li @click="deleteThis">{{ deleted ? 'Restore' : 'Delete'}}</li>
      <hr>
      <li disabled>Minify Tags</li>
      <hr>
      <li disabled>Properties</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['show', 'position', 'deleted', 'showDeleted', 'hasDeleted'],
  data: () => ({

  }),
  methods: {
    deleteThis() {
      this.$emit('delete');
    },
    showDeletedThis() {
      this.$emit('showDeleted');
    },
    completeThis() {
      this.$emit('complete');
    },
    addChild() {
      const text = prompt('ChildName');
      this.$emit('addChild', text);
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
}
.contextMenu.show {
  position: absolute;
  display: block;
}
.contextMenu {
  display: none;
  color: black;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, .4);
  z-index: 10;
  min-width: 200px;
  font-size: 0.8em;
  border: 1px solid rgba(0, 0, 0, 0.25);
}
.contextMenu ul{
  margin: 0;
  padding: 0;
}
.contextMenu hr{
  text-decoration: none;
  margin: 2px 2.5%;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: calc(95%);
  padding: 0px;
}
.contextMenu li{
  margin: 0;
  padding: 0 30px;
}
.contextMenu li[disabled]{
  color: rgba(0, 0, 0, 0.5);
}
.contextMenu li:hover:not([disabled]){
  background: rgba(225, 225, 225, 1);
}
</style>
