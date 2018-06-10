<template>
  <div id="listEntry" :class="{completed: this.entry.completed}">
    <div @click.left="toggleOpen" @click.right.prevent.stop="openContextMenu($event)" tabIndex="0" id="teaser">
      <div id="title">
        <span>{{ entry.title }}</span>
        <div :key="tag.name"  v-for="tag in entry.tags" class="tag">
          {{ tag.name || tag }}
          {{ tag.style }}
        </div>
      </div>
      <i v-if="options.nestable && !!entry.children && !!entry.children.filter((child) => hasChildren(child)).length" class="material-icons clickable" >chevron_right
      </i>
    <ContextMenu :position="position" :hasDeleted="hasDeletedChildren()" :showDeleted="showDeleted" @click.native.stop="closeContextMenu" :deleted="entry.deleted" @showDeleted="toggleShowDeleted" @addChild="addChild" @delete="deleteEntry"  @complete="toggleComplete" :show="contextMenu">
    </ContextMenu>
    </div>
    <hr>
    <ul id="children" v-if="open" >
      <!-- <Entry :entry="item" v-if="open && !!item && !item.deleted" :options="options" v-for="(item, index) in entry.children">

      </Entry> -->
      <Entry :key="Math.random()*10" :entry="item" v-if="hasChildren(item) && open" v-for="(item, index) in entry.children" :options="options" :showDeleted="showDeleted" :class="{deleted:item.deleted}">
        {{ item.name }}
      </Entry>
    </ul>
  </div>
</template>
<script>
import ContextMenu from '@/components/ContextMenu';
// import { firestore } from '@/services/firebase';

export default {
  name: 'Entry',
  data() {
    return {
      open: false,
      contextMenu: false,
      message: 'default',
      complete: !!this.entry.completed,
      position: {
        top: '10px',
        left: '100px',
      },
    };
  },
  components: {
    ContextMenu,
  },
  props: ['options', 'entry', 'showDeleted'],
  methods: {
    toggleComplete() {
      this.complete = !this.complete;
      const completed = this.complete;
      firestore
        .collection('users')
        .doc('1sOcg0EJ0XhVn600r1FM')
        .collection('widgets')
        .doc('P0hED5JxCUUofc9SgYui')
        .collection('content')
        .doc(this.entry['.key'])
        .update({ completed });
    },
    addChild(title) {
      firestore
        .collection('users')
        .doc('1sOcg0EJ0XhVn600r1FM')
        .collection('widgets')
        .doc('P0hED5JxCUUofc9SgYui')
        .collection('content')
        .doc(this.entry['.key'])
        .update({ children: [...this.entry.children, { title }] });
    },
    hasChildren(item) {
      return (!item.deleted || (item.deleted && this.showDeleted));
    },
    hasDeletedChildren() {
      return this.entry.children && !!this.entry.children.filter(child => child.deleted).length;
    },
    toggleShowDeleted() {
      this.showDeleted = !this.showDeleted;
    },
    deleteEntry() {
      const deleted = !this.entry.deleted;
      console.log('deleted', deleted);
      firestore
        .collection('users')
        .doc('1sOcg0EJ0XhVn600r1FM')
        .collection('widgets')
        .doc('P0hED5JxCUUofc9SgYui')
        .collection('content')
        .doc(this.entry['.key'])
        .update({ deleted });
    },
    toggleOpen() {
      this.open = !this.open;
      this.message = 'test';
      console.log(this.open);
    },
    openContextMenu(event) {
      this.$eventHub.$emit('contextMenu', this);
      this.setContextMenuPosition(event);
      this.contextMenu = true;
    },
    closeContextMenu() {
      this.contextMenu = false;
    },
    setContextMenuPosition(event) {
      console.log('event.clientY', event.clientY);
      console.log('event.clientX', event.clientX);
      console.log('this.$el.offsetTop', this.$el.offsetTop);
      console.log('this.$el.offsetLeft', this.$el.offsetLeft);
      this.position.top = `${event.clientY - this.$el.offsetTop}px`;
      this.position.left = `${event.clientX - this.$el.offsetLeft - this.$el.offsetParent.offsetLeft}px`;
    },
  },
};
</script>
<style scoped>
#listEntry {
  display: grid;
/*   max-width: 50vw; */
}
.completed * {
  text-decoration: line-through;
  opacity: .7;
}

#teaser:hover, #teaser:focus {
  /* box-shadow: inset 2px 1px 1px 0px rgba(0, 0, 0, .4); */
  background-color: rgba(215, 215, 215, 1);
  opacity: 1;
  border-radius: 25px;
  outline: none;
  /* color: green; */

/*   font-weight: 600; */
}
#teaser > #title {
  padding: 10px;
}
#teaser {
  margin: 5px;
}
#teaser > i {
  box-sizing: border-box;
/*   flex: 0 50%; */
  padding: 10px;
}
#teaser + hr {
  margin: 0 auto;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(220, 220, 220, 1);
  width: calc(100%);
  padding: 0px;
}
#teaser, #widgetContent li {
/*   opacity: 0.8; */
  cursor: pointer;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 24px;
/*   margin: 2px 0; */
/*   box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, .4); */
/*   margin: 0 5px; */
/*   background-color: rgba(230, 230, 230, 1); */
}
#teaser .material-icons {
/*   justify-self: flex-end; */
}

ul {
  list-style-type: none;
  margin: 0;
}

.tag {
  margin: 3px 3px;
  padding: 0 1vw;
  font-size: 0.8em;
  line-height: 18px;
  border: 1px solid rgba(0, 152, 250, .4);
  border-radius: 20px;
  background-color: rgba(0, 152, 250, .3);
  color: rgba(0, 0, 0, .7);
/*   box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, .3); */
  opacity: 0.6;
}
#teaser:hover .tag {
  opacity: 0.8;
}
#teaser .tag:hover {
  opacity: 1;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, .3);

}
#title {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}
#title span {
  margin: 0 10px;
}
.deleted {
  color: rgba(0, 0, 0, 0.5);
}
</style>
