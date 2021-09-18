<template lang="pug">
.button-to-top.trans(@click="goToTop()")
  i.icon.fas.fa-arrow-up
</template>

<script>
export default {
  name: "ButtonTop",
  methods: {
    goToTop: function () {
      this.log("log using global mixin");
      document.querySelector("html").scrollTop = 0;
    },
  },
};
</script>

<style lang="sass">
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
  bottom: 60px
  z-index: 100
  cursor: pointer
  .icon
    color: $color-primary
    font-size: 30px
</style>