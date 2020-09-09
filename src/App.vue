<template>
  <div>
    <app-nav-menu-bar v-if="this.$store.state.isNavMenuBar" />
    <router-view />
  </div>
</template>

<script>
import appNavMenuBar from "./layouts/NavMenuBar.vue";
export default {
  components: {
    appNavMenuBar
  }
};
</script>

<style>
</style>
