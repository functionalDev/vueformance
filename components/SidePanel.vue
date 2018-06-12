<template>
  <div id="sidepanel" :class="{show: visible}">
    <SidePanelHead></SidePanelHead>
    <SidePanelBody></SidePanelBody>
  </div>
</template>
<script>
import SidePanelHead from './SidePanelHead';
import SidePanelBody from './SidePanelBody';

export default {
  name: '',
  props: ['visible'],
  data: () => ({
    display: '',
  }),
  components: {
    SidePanelHead, SidePanelBody,
  },
};
</script>
<style scoped>
  #sidepanel{
    position: fixed;
    width: 20vw;
    background: rgba(10, 10, 20, 1);
    min-height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    box-shadow: 3px 1px 10px 0px rgba(0, 0, 0, .6);
  }
  #sidepanel.minimized {
      position: initial;
      /* top: 0; */
      /* bottom: 0; */
      /* right: 100vw; */
      width: 50px;
      /* left: 0; */
      overflow: hidden;
  }
  #sidepanel.minimized #panelBody{
    margin: 0 10px;
  }
  @media only screen and (max-width: 800px) {
    #sidepanel {
      /* position: absolute; */
      /* top: 0; */
      /* bottom: 0; */
      /* right: 100vw; */
      width: 60px;
      /* left: 0; */
      overflow: hidden;
      z-index: -1;
    }
    #sidepanel.show {
      left: 0;
      right: auto;
      transition: all 0.5s;
      z-index: 10;
    }

  }
</style>
