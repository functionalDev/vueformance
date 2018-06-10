<template>
  <!-- <div @click.right="resetContextMenu" @click.left="resetContextMenu" id="app"> -->
    <!-- <Background></Background> -->
    <!-- <CompositionCircles :amount="4"></CompositionCircles> -->

    <!-- <Header>
    </Header> -->
    <div class="" id="app">
      <SidePanel :visible="sidePanelVisible">
      </SidePanel>
      <div class="">
      </div>
      <MainPanel :visible="sidePanelVisible">
        <nuxt/>
      </MainPanel>
    </div>
  </div>
</template>
<script>
import SidePanel from './../components/SidePanel';
import MainPanel from '@/components/MainPanel';

export default {
  name: 'app',
  components: {
    SidePanel, MainPanel
  },
  data() {
    return {
      activeContextMenu: null,
      sidePanelVisible: false,
    };
  },
  // created() {
  //   // this.$eventHub.$on('contextMenu', this.show);
  //   // this.$eventHub.$on('toggleSidePanel', this.toggle);
  // },
  methods: {
    resetContextMenu() {
      if (this.activeContextMenu) {
        this.activeContextMenu.closeContextMenu();
      }
      this.activeContextMenu = null;
      this.sidePanelVisible = false;
    },
    show(newContextMenu) {
      this.resetContextMenu();
      this.activeContextMenu = newContextMenu;
    },
    toggle() {
      console.log('test');
      this.sidePanelVisible = !this.sidePanelVisible;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
}

#app {
  display: grid;
  grid-template-columns: 1fr 4fr;
}
@media only screen and (max-width: 800px) {
  #app {
    grid-template-columns: 60px 4fr;
  }
}
</style>
