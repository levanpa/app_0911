<template lang="pug">
- var imgPath = '@/assets/img/common/'
footer.footer-component
  .footer-top
    .wrapper
      img.logo(src=`${imgPath}100x100.png`, width="168", height="204", alt="missing", loading="lazy")
      ul.footer-columns
        li.footer-column
          h2.footer-title Mỹ phẩm Phương Anh
          ul.inner-list
            li
              address Địa chỉ: 38, Đường 815 Tạ Quang Bửu, Phường 5, Quận 8, Tp. Hồ Chí Minh
            li Điện thoại:&nbsp;
              a(href="tel:0773691007") 077 369 1007
            li Email:&nbsp;
              a(href="mailto:acosmeticshcm@gmail.com") acosmeticshcm@gmail.com
            li Website:&nbsp;
              a(href="https://acosmetics.com.vn") acosmetics.com.vn
        li.footer-column
          h2.footer-title Đăng ký Đại lý - CTV
          ul.inner-list
            li Quý khách có nhu cầu trở thành Cộng tác viên hoặc Đại lý, vui lòng liên hệ trực tiếp với nhân viên tư vấn của chúng tôi qua Hotline 077 369 1007
            li Mọi ý kiến thắc mắc và góp ý, vui lòng gửi về email: acosmeticshcm@gmail.com
        li.footer-column
          h2.footer-title Chính sách cửa hàng
          ul.inner-list
            li Hướng dẫn mua hàng
            li Giao nhận và  thanh toán
            li Chính sách đổi trả
            li Chính sách bảo mật
            li Chính sách vận chuyển
  .footer-bottom
    .wrapper
      small.copyright ©2020 Copyright by A Cosmetics - Design by Vương Trần#[br]MST: 8116343321 - Chủ sở hữu: Trần Xuân Vĩnh
  //- ButtonTop
  ButtonMessenger
</template>

<script>
// import ButtonTop from './ButtonTop.vue'
import ButtonMessenger from './ButtonMessenger.vue'
// import { mapState } from 'vuex'

export default {
  name: 'Footer',
  components: {
    // ButtonTop
    ButtonMessenger
  },
  computed: {
    // ...mapState(['company'])
  }
}
</script>

<style lang="sass" scoped>
@import "../../sass/parts/footer.sass"
</style>
