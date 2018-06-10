<template>
  <div :class="{ badge: true, 'material-icons': icon, icon: icon }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['icon'],
  data: () => ({

  }),
};
</script>
<style scoped>

.badge {
  border-radius: 20px;
  font-size: 14px;
  background: #3f51b5;
  position: absolute;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  right: -20px;
  top: -10px;
  color: white;
}
.badge.icon {
  background: #a30000;
}
.badge.small {
  font-size: 0px;
  background: red;
  width: 10px;
  height: 10px;
  line-height: 10px;
  right: -3px;
  top: -3px;

}
.badge:hover {
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, .3);
}
</style>
