<template lang="pug">
.home-component-wrapper
  img(alt="Vue logo", src="../assets/logo.png")
  HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="sass">
@import "../sass/pages/home.sass"
</style>
