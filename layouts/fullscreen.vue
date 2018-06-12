<template>
  <!-- <div @click.right="resetContextMenu" @click.left="resetContextMenu" id="app"> -->
    <!-- <Background></Background> -->
    <!-- <CompositionCircles :amount="4"></CompositionCircles> -->

    <!-- <Header>
    </Header> -->
    <div class="" id="app">
      <SidePanel class="minimized" :visible="false">
      </SidePanel>
      <nuxt/>
    </div>
  </div>
</template>
<script>
import SidePanel from './../components/SidePanel';

export default {
  name: 'fullscreen',
  components: {
    SidePanel
  },
  data() {
    return {
    };
  },
  methods: {
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
  /* grid-template-columns: 1fr 4fr; */
  grid-template-columns: 60px 4fr;
}
@media only screen and (max-width: 800px) {
  #app {
  }
}
</style>
