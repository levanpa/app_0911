<template lang="pug">
.button-to-top
  i.icon.fab.fa-facebook-messenger
</template>

<script>
export default {
  name: 'ButtonMessenger',
  methods: {}
}
</script>

<style lang="sass" scoped>
.button-to-top
  +flex-xy
  width: 60px
  height: 60px
  background-color: #0084ff
  border-radius: 50%
  border: 20px solid #0084ff
  box-shadow: 0 0 6px 4px rgba(#fff,.1)
  position: fixed
  right: 40px
  bottom: 160px
  z-index: 100
  cursor: pointer
  transition: transform .1s linear
  .icon
    color: #fff
    font-size: 34px
  &:hover
    transform: scale(1.1)
</style>
