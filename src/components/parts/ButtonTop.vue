<template lang="pug">
.button-to-top.trans(@click="goToTop()")
  i.icon.fas.fa-arrows-alt-v
</template>

<script>
export default {
  name: "ButtonTop",
  methods: {
    goToTop: function () {
      const htmlElement = document.documentElement;
      htmlElement.scrollTop = htmlElement.scrollTop > 500 ? 0 : htmlElement.scrollHeight;
    },
  },
};
</script>

<style lang="sass" scoped>
.button-to-top
  +flex-xy
  width: 60px
  height: 60px
  background-color: #eee
  border-radius: 50%
  border: 2px solid $color-primary
  box-shadow: 0 0 6px 4px rgba(#000,.1)
  position: fixed
  right: 40px
  bottom: 160px
  z-index: 100
  cursor: pointer
  .icon
    color: $color-primary
    font-size: 30px
</style>