<template lang="pug">
.container
  Header
  .main
    Home
    ProductDetail
  Footer
</template>

<script>
import Header from "./components/parts/Header.vue";
import Home from "./components/Home.vue";
import Footer from "./components/parts/Footer.vue";
import ProductDetail from "./components/ProductDetail.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
    ProductDetail,
  },
};
</script>

<style>
</style>