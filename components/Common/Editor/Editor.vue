<template>
  <pre contentEditable @blur="saveDetails" @keydown.tab.prevent="handleTab" v-html="content">
  </pre>
</template>
<script>

export default {
  name: '',
  props: ['content'],
  data() {
    return {
    };
  },
  components: {
  },

  methods: {
    handleTab(event = { shiftKey: true }) {
      if (event.shiftKey) {
        this.removeIndent();
      } else {
        this.addIndent();
      }
    },
    getSelectedLines({ text, startOffset, endOffset }) {
      const lineSelectionStart = text.substring(0, startOffset).split(/[\n\r]/g).length;
      const lineSelectionEnd = startOffset === endOffset
        ? lineSelectionStart
        : text.substring(0, endOffset).split(/[\n\r]/g).length;
      const lines = text
        .split(/[\n\r]/g)
        .slice(lineSelectionStart - 1, lineSelectionEnd);
      return lines;
    },
    getSelection() {
      const range = getSelection().getRangeAt(0).cloneRange();
      const { startOffset, endOffset, startContainer } = range;
      const text = startContainer.wholeText;
      return { text, startOffset, endOffset, startContainer };
    },
    /* eslint-disable prefer-const, no-return-assign */
    removeIndent() {
      const selection = this.getSelection();
      let text = selection.text;
      let lines = this.getSelectedLines(selection);
      lines.forEach(line => text = text.replace(`  ${line.trim()}`, line.trim()));
      console.log(text);
      selection.startContainer.textContent = text;
      selection.startOffset -= 2;
      selection.endOffset -= (2 * (lines.length - 1)) + 2;
      this.setSelection(selection);
    },

    addIndent() {
      const selection = this.getSelection();
      let text = selection.text;
      let lines = this.getSelectedLines(selection);
      lines.forEach(line => text = text.replace(line, `  ${line}`));
      console.log(text);
      selection.startContainer.textContent = text;
      selection.startOffset += 2;
      selection.endOffset += (2 * (lines.length - 1)) + 2;
      this.setSelection(selection);
    },
    setSelection({ startOffset, endOffset, startContainer }) {
      const range = getSelection().getRangeAt(0).cloneRange();
      getSelection().removeAllRanges();
      range.setStart(startContainer, startOffset);
      range.setEnd(startContainer, endOffset);
      getSelection().addRange(range);
    },
    addTab(event) {
      // Rename to handle tab and extrand addIndent and removeIndent
      // removing indent doesn't always work.....
      console.log(event);
      const range = getSelection().getRangeAt(0).cloneRange();
      console.log('Tabbing multiple line -->');
      const { startOffset, endOffset, startContainer } = range;// eslint-disable-line
      const text = startContainer.wholeText;
      const lineNumber = text.substring(0, startOffset).split(/[\n\r]/g).length;
      const line = text.split(/[\n\r]/g)[lineNumber - 1];
      let string = '';
      if (event.shiftKey) {
        const regex = new RegExp(`\\s\\s${line.trim()}`, 'i');
        string = text.replace(regex, line.trim());
      } else {
        string = text.replace(line, `  ${line}`);
      }
      startContainer.textContent = string;
      getSelection().removeAllRanges();
      if (event.shiftKey) {
        range.setStart(startContainer, startOffset - 2);
        range.setEnd(startContainer, endOffset - 2);
      } else {
        range.setStart(startContainer, startOffset + 2);
        range.setEnd(startContainer, endOffset + 2);
      }
      getSelection().addRange(range);
    },
    saveDetails(event) {
      this.$emit('save', event);
    },
  },
};
</script>
<style scoped>
pre {
  padding: 5px;
  padding-bottom: 10px;
  display: inline-table;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  /* margin: 0 5px; */
  border: 1px solid rgba(87, 151, 247, 0);
  line-height: 20px;
}

pre:hover, pre:focus{
  border: 1px solid rgba(87, 151, 247, 1);
}

pre:focus {
  background: white;
}

.subtitle {
/*   display: none; */
  overflow: ellipsis;
  max-height: 20px;
  margin: 0;
  line-height: 30px;
  /* display: none; */
}
</style>
