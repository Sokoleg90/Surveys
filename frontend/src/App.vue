<template>
  <router-view></router-view>
  <h1></h1>
</template>

<script>

import {mapState} from "vuex";
export default {
  computed: {
    ...mapState(['user'])
  },
  components: {

  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
