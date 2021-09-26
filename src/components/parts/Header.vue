<template lang="pug">
- var imgPath = '@/assets/img/';
header.header-component(:class="{ 'is-active': isActive }")
  .wrapper
    router-link.header-logo.trans(to="/")
      img(src=``, width="223", height="62", alt="missing")
    nav.header-navigation
      ul
        li.navigation-item
          router-link.navigation-link(to="/") Home
        li.navigation-item
          router-link.navigation-link(to="/") About Us
        li.navigation-item
          router-link.navigation-link(to="/products") Products
        li.navigation-item
          router-link.navigation-link(to="/contact") Contact
        li.navigation-item
          router-link.navigation-link(to="/account") User
        li.navigation-item
          router-link.navigation-link(to="/login") Login
    .header-right
      router-link.common-button.cart-button.trans(to="/") Cart
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    handleHeader: function () {
      const scrollOffset = document.querySelector("html").scrollTop;
      if (scrollOffset > 122) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
  created: function () {
    window.addEventListener("scroll", this.handleHeader);
  },
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/header.sass"
</style>