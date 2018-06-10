<template>
  <div>
    <Entry :key="Math.random()" :options="options" :showDeleted="showDeleted" :class="{deleted:item.deleted}" v-if="((!item.deleted && !showDeleted) || (item.deleted && showDeleted)) && open" v-for="item in items" :entry="item">
    </Entry>
  </div>
</template>
<script>
// import { firestore } from '@/services/firebase';
import Entry from '@/components/Entry';
import Icon from './Icon';

export default {
  name: '',
  props: [],
  data() {
    return {
      open: !this.trash,
      options: {
        nestable: true,
      },
      showDeleted: false,
      items: [
      ],
    };
  },
  // firestore() {
  //   const dbEntries = firestore
  //     .collection('users')
  //     .doc('1sOcg0EJ0XhVn600r1FM')
  //     .collection('widgets')
  //     .doc('P0hED5JxCUUofc9SgYui')
  //     .collection('content');
  //   return {
  //     items: dbEntries,
  //   };
  // },
  components: {
    Entry, Icon,
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>
<style scoped>
.title {
  /* margin: 0 20px; */
  padding: 20px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
i {
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.5);
}
.push {
  margin-left: auto;
}
#widgetContent {
  margin: 0 4vw;
}

</style>
