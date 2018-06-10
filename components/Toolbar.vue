<template>
  <div id="toolbar" class="header">
    <icon @click.native.stop="toggleSidePanel" class="menu">menu</icon>
    <span>Tasks</span>

    <Input type="text" class="push" placeholder="Search"></Input>
    <icon>search</icon>
    <icon>account_circle</icon>
  </div>
</template>
<script>
import Icon from '@/components/Icon';
import Badge from '@/components/Badge';
import Input from '@/components/Input';

export default {
  name: '',
  data: () => ({

  }),
  methods: {
    toggleSidePanel() {
      this.$eventHub.$emit('toggleSidePanel', this);
    },
  },
  components: {
    Icon, Badge, Input,
  },
};
</script>
<style scoped>
  #toolbar {
    color: rgba(255, 255, 255, 0.6);
    font-size: 24px;
    line-height: 24px;
    display: flex;
    margin: 20px;
    padding: 0 10px 20px;
    border-bottom: 1px solid rgba(100, 100, 100, 1);
    text-transform: uppercase;
  }
  #toolbar i + i {
    margin-left: 20px;
  }
  #toolbar i {
    cursor: pointer;
    position: relative;
  }
  #toolbar i:hover {
    color: rgba(255, 255, 255, 1);
  }
  #toolbar .menu {
    display: none;
    margin-right: 20px;
  }
  span {
    color: white;
  }
  .push {
    margin-left: auto;
  }
  @media only screen and (max-width: 600px) {
    input {
      display: none;
    }
    #toolbar input + i {
        margin-left: auto;
    }
    #toolbar .menu {
      display: block;
      color: white;
      display: flex;
    }

  }
</style>
