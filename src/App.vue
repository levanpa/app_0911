<template lang="pug">
.container
  Header
  .main
    Home
  Footer
</template>

<script>
import Header from './components/parts/Header.vue'
import Home from './components/Home.vue'
import Footer from './components/parts/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style>
</style>