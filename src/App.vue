<template lang="pug">
.container
  Header
  .main
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

<style>
</style>