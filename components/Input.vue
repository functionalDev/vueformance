<template>
  <input :value="value" ref="input" @input="emitInput" type="text">
</template>
<script>
export default {
  name: '',
  props: ['value'],
  data: () => ({

  }),
  methods: {
    emitInput() {
      this.$emit('input', this.$refs.input.value);
    },
  },
};
</script>
<style scoped>
  input {
    background: rgba(255, 255, 255, 0.3);
    border:none;
    border-radius: 20px;
    padding-left:10px;
    color: rgba(255, 255, 255, 0.8);
    outline: none;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
</style>
