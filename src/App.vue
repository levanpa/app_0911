<template lang="pug">
.container
  Header
  .main
    Home
    ProductDetail
    ProductRelated
  Footer
</template>

<script>
import Header from "./components/parts/Header.vue";
import Home from "./components/Home.vue";
import Footer from "./components/parts/Footer.vue";
import ProductDetail from "./components/ProductDetail.vue";
import ProductRelated from "./components/parts/ProductRelated.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
    ProductRelated,
    ProductDetail,
  },
};
</script>

<style>
</style>