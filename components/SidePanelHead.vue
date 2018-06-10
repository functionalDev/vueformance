<template>
  <div id="panelHead" class="header">
    <Icon style="color:green">widgets</Icon>
    <span style="text-transform: none">Vuedgets</span>
  </div>
</template>
<script>
import Icon from '@/components/Icon';

export default {
  name: '',
  data: () => ({

  }),
  components: {
    Icon,
  },
};
</script>
<style scoped>
  #panelHead {
    flex: 0 1 auto;
    font-size: 24px;
    line-height: 24px;
    display: flex;
    margin: 20px;
    padding: 0 10px 20px;
    border-bottom: 1px solid rgba(100, 100, 100, 1);
    cursor: pointer;
  }
  span {
    padding-left: 10px;
  }
  @media only screen and (max-width: 800px) {
  span {
  display: none;
  }
    #panelHead {
    margin: 0px 00px;
  }
  }
</style>
