<template lang="pug">
- var imgPath = '@/assets/img/';
header.header-component
  .wrapper
    .header-logo
      img(src=``, width="223", height="62", alt="missing")
    nav.header-navigation
      ul
        li.navigation-item
          a.navigation-link(href="#") Home
        li.navigation-item
          a.navigation-link(href="#") About Us
        li.navigation-item
          a.navigation-link(href="#") Services
        li.navigation-item
          a.navigation-link(href="#") Prices
        li.navigation-item
          a.navigation-link(href="#") Faq
        li.navigation-item
          a.navigation-link(href="#") Contact
    .header-right
      .common-button.cart-button.trans Cart
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="sass">
@import "../../sass/parts/header.sass"
</style>