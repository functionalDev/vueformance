<template>
  <div class="node">

  <div class="teaser" >
    <button :class="{ openButton: true, collapsable: collapsable }" type="button" @click="buttonClick('OPEN')" name="button">{{ collapsable ? '>' : '' }}</button>
    <h3 class="title">{{ nodeData.title }}
    </h3>
    <div class="actions">
      <button v-for="button in buttons" @click="buttonClick(button)">{{ button }}</button>
    </div>
  </div>
  <transition name="slide">
  <div class="details"  v-show="details" >
    <div class="editorTools">
      <button v-for="button in editorButtons" @click="buttonClick(button)">{{ button }}</button>
    </div>
    <Editor @save="saveDetails" :content="nodeData.content" v-show="nodeData.content && !code" class="subtitle">

    </Editor>
  </div>
</transition>
  <hr class="bottomBorder">
</div>
</template>
<script>
// import { db } from '@/services/firebase';
import Editor from '@/components/Common/Editor/Editor';

export default {
  name: '',
  props: ['nodeData', 'collapsable', 'path'],
  data() {
    return {
      labelId: Math.random() * 100000,
      buttons: ['+', '-', 'o'],
      editorButtons: ['+ Text', '+ Code', '+ Link'],
      details: false,
      code: false,
    };
  },
  components: {
    Editor,
  },
  firebase: {
    // docuPages: db.ref('docus'),
  },
  methods: {
    buttonClick(action) {
      switch (action) {
        case 'OPEN':
          this.$emit('open');
          break;
        case '+':
          this.addChild();
          break;
        case '-':
          this.deleteSelf();
          break;
        case 'o':
          this.openDetails();
          break;
        case 'code':
          this.addCode();
          break;
        default:
          console.log(`components/Docu/DocuNode.vue: action(${action}) is not defined.`);
      }
    },
    addChild() {
      this.$firebaseRefs.docuPages.child(`${this.path}/children`).push({
        title: 'Test',
        content: 'content',
      });
    },
    deleteSelf() {
      if (confirm(`Delete ${this.nodeData.title} ?`)) {
        this.$firebaseRefs.docuPages.child(`${this.path}`).set(null);
      }
    },
    openDetails() {
      this.details = !this.details;
    },
    saveDetails(event) {
      this.nodeData.content = event.target.innerHTML;
      const dataCopy = Object.assign({}, this.nodeData);
      delete dataCopy['.key'];
      console.log(dataCopy);
      this.$firebaseRefs.docuPages.child(`${this.path}`).set(dataCopy);
    },
    addCode() {
      this.code = !this.code;
    },
  },
};
</script>
<style scoped>
tab {
  padding: 5px;
  display: inline-block;
}
.editorTools {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.editorTools button {
  /* background: rgba(0, 0, 0, 0.1); */
}
.editorTools button {
}
.slide-enter-active {
  transition: max-height 0.5s ease-in-out 0s;
  max-height: 500px;
}
.slide-leave-active {
  transition: max-height 0.3s ease-in-out 0s;
  max-height: 200px;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  max-height: 0;
}

.details {
  overflow: hidden;
  line-height: 16px;
}


.teaser {
   position: relative;
   /* overflow: hidden; */
   max-width: 500px;
}

.actions {
  max-width: 0;
  overflow: hidden;
  display: flex;
}

.teaser:hover .actions{
  max-width: 500px;
}

.actions button {
  /* float: left; */
}

.openButton{
  float: left;
}

.openButton:not(.collapsable) {
  display: none;
}

.openButton:not(.collapsable) ~ .title {
  margin-left: 30px;
}
.node:hover {
 background-color: rgba(0, 0, 0, 0.1);
}

.title {
  /* transition: margin 0.3s; */
  /* margin: 0; */
  float: left;
  margin: 0;
  line-height: 30px;
}

hr {
  width: 90%;
  margin: 0 5%;
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
}
.node {
  position: relative;
  display: inline-block;
  width: 100%;
}
hr.bottomBorder {
  position: absolute;
  bottom: 0px;
}

/* button, label2button */

button, .label2button {
  background: transparent;
  border: none;
  outline: none;
  padding: 5px;
  line-height: 20px;
  min-width: 30px;
  text-align: center;
  box-sizing: content;
  cursor: pointer;
}

button:hover, .label2button:hover {
  background: rgba(0, 0, 0, 0.2);
}

</style>
