<template lang="pug">
- var imgPath = '@/assets/img/common/';
header.header-component(:class="{ 'is-active': isActive }")
  .header-top
    .wrapper
      .left
        p Chào mừng bạn đến với Mỹ phẩm Phương Anh - A Cosmetics
      .right
        .header-buttons
          router-link.cart-button.trans(to="/") Giỏ hàng / 0₫
            i.fas.fa-shopping-cart
          router-link.user-button.trans(to="/") Đăng nhập / Đăng ký
  .header-middle
    .wrapper
      router-link.header-logo.trans(to="/")
        h1
          img(src=`${imgPath}100x100.png`, width="85", height="120", alt="A Cosmetics - Mỹ phẩm Phương Anh")
      form.header-search-form
        input.search-input(type="text" placeholder="Nhập từ khóa tìm kiếm...")
        button.trans(type="submit") 
          i.fas.fa-search
      .contact-button
        i.fas.fa-headset
        span Hỗ trợ#[br]khách hàng
  .header-bottom
    .wrapper
      nav.header-navigation
        ul
          li.navigation-item
            router-link.navigation-link(to="/") Trang chủ
          li.navigation-item
            router-link.navigation-link(to="/about") Giới thiệu
          li.navigation-item
            router-link.navigation-link(to="/products") Sản phẩm
          li.navigation-item
            router-link.navigation-link(to="/news") Tin tức
          li.navigation-item
            router-link.navigation-link(to="/combo") Set Combo
          li.navigation-item
            router-link.navigation-link(to="/contact") Liên hệ
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    handleHeader: function() {
      const scrollOffset = document.querySelector('html').scrollTop
      this.isActive = scrollOffset > 300
    }
  },
  created: function() {
    window.addEventListener('scroll', this.handleHeader)
  }
}
</script>

<style lang="sass" scoped>
@import "../../sass/parts/header.sass"
</style>
