<template>
  <div>
    <ul>
      <li :class="{ navItem: true, active: activeItem === item.name }" v-for="item in navItems">
        <a :to="`/${item.type}/`">
          <i class="material-icons">{{item.icon}}</i>
          <div class="text">
            <span>{{item.name}}</span>
            <badge v-if="!!item.badge">
              {{item.badge}}
            </badge>
            <badge :icon="!!item.badgeIcon" v-if="!!item.badge || !!item.badgeIcon">
              {{item.badge || item.badgeIcon}}
            </badge>
          </div>
        </a>
      </li>
    </ul>
    <ul class="bottom">
      <li :class="{ navItem: true, active: activeItem === 'settings'}">
        <a :to="`/settings/`">
          <i class="material-icons">settings</i>
          <span>
            Settings
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Badge from '@/components/Badge';

export default {
  name: '',
  props: ['navItems'],
  data() {
    return {
      activeItem: 'Tasks',
    };
  },
  components: {
    Badge,
  },
  created: () => {
    // console.log('navItems', this.navItems);
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
  ul {
    list-style-type: none;
    padding: 0;
  }
  .text {
    position: relative;
  }
a {
    padding: 10px;
    width: 100%;
  }
#panelBody li {
  cursor: pointer;
  line-height: 24px;
  vertical-align:baseline;
  display: flex;
  opacity: 0.8;
  margin: 10px 00px 10px 0;
}
#panelBody li:hover {
  background: rgba(255, 255, 255, 0.1);
  opacity: 1;
}
#panelBody li.active {
  color: rgb(0, 155, 25);
  font-weight: 600;
}
.navItem > * > .material-icons {
  padding-right: 10px;
}
.navItem {
  border-radius: 50px;
}
.bottom {
  margin-top: auto;
}
a {
  display: flex;
  color: inherit;
  text-decoration: none;
}
@media only screen and (max-width: 800px) {
  span {
  display: none;
  }
  .navItem > * > .material-icons {
    padding: 0;
  }
  #panelBody li {
    margin: 10px 10px 10px 0;
  }
}
</style>
