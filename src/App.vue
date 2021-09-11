<template lang="pug">
img(alt="Vue logo" src="./assets/logo.png")
HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="sass">
#app
  font-family: $font-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $font-color
  margin-top: 60px
  .hello
    background-color: #fee
+desktop
  body
    font-size: $font-size
</style>
