<template lang="pug">
.container
  Header
  main.main
    router-view
  Footer
</template>

<script>
import Header from "./components/parts/Header.vue";
import Footer from "./components/parts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="sass">
@import "./sass/base.sass"
</style>