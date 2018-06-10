<template>
  <div id="panelBody">
    <div class="mode">
        <Icon>cached</Icon> <span>Choose Menu</span> <Icon>arrow_drop_down</Icon>
    </div>
    <Navigation class="nav" :navItems="widgets"></Navigation>
  </div>
</template>
<script>
import Navigation from './Navigation';
import Icon from './Icon';

export default {
  name: '',
  data() {
    return {
      widgets: [
        {
          name: 'pipe',
          type: ''
        }
      ]
    }
  },
  created() {
    this.$store.dispatch('getWidgets');
    console.log('asdfe', this.$store.state.widgets);
    this.widgets = this.$store.state.widgets;
  },
  components: {
    Navigation, Icon,
  },
  // firestore() {
  //   return {
  //    widgets: this.$store.,
  //   };
  // },
};
</script>
<style scoped>
  #panelBody {
    margin: 0px 20px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
  }
  .nav {
    flex: 1 1 auto;
    border-top: 1px solid rgba(100, 100, 100, 1);
  }
  .mode {
    flex: 0 1 auto;
    line-height: 24px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 50px;
  }
  .mode:hover {
      background: rgba(255, 255, 255, 0.1);
  }
  .mode .material-icons {

  }
  @media only screen and (max-width: 800px) {
    .mode {
      /* width:50px; */
    }
    #panelBody {
    margin: auto 00px;
      /* width:50px; */
  }
  span {
  display: none;
  }
  }
</style>
