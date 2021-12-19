<template lang="pug">
include ../pug/mixins.pug
- var imgPath = '@/assets/img/common/'

main.main.home-component
  section.section-keyvisual
    Slick(:options="kvSliderOptions")
      each item in Array(6)
        img(src="https://acosmetics.com.vn/wp-content/uploads/2021/06/ctv-acosmetics.jpg", width="1343", height="492")
  section.section-category
    .wrapper
      h2.section-title Danh mục sản phẩm a cosmetics
      ul.category-list
        li.category-item(v-for="item in categoryList", :key="item.id")
          router-link.category-link(:to="`/category-detail/${item.id}`")
            img.category-image(src=`${imgPath}280x280.png`, width="270", height="270", :alt="item.name", loading="lazy")
            .category-detail
              h3.category-name {{ item.name }}
              p.category-quantity {{ item.quantity }} SẢN PHẨM
  section.section-favorite
    .wrapper
      h2.section-title Combo ưu đãi được ưa chuộng
      p.section-description Một số Combo ưu đãi của Sản phẩm A Cosmetics đang được ưa chuộng bởi các bạn trẻ tin tưởng và lựa chọn sử dụng
      Slick.favorite-list(:options="favoriteSliderOptions")
        each item in Array(6)
          .favorite-item
            a.favorite-link.trans(href="#")
              img.favorite-image(src=`${imgPath}280x280.png`, width="366", height="366", alt="Combo 3 Kem tắm trắng mềm nước hoa", loading="lazy")
              span.favorite-category set combo
              h3.favorite-name.limit-lines Combo 3 Kem tắm trắng mềm nước hoa
              p.favorite-price
                span.old 600,000 ₫
                span.new 430,000 ₫
  section.section-top-three
    .wrapper
      h2.top-three-title BỘ BA SẢN PHẨM ĐƯỢC YÊU THÍCH
      ul.category-list
        li
         a.category-link.is-active.trans(href="#") FOR FACE
        li
         a.category-link.trans(href="#") FOR BODY
        li
         a.category-link.trans(href="#") FOR HAIR
      .list-wrapper
        .product-list
          each item in Array(4)
            a.product-item.trans(href="#")
              img.product-image(src=`${imgPath}280x280.png`, width="260", height="260", alt="Combo 3 Kem tắm trắng mềm nước hoa", loading="lazy")
              span.product-category FOR BODY
              h3.product-name.limit-lines Body &amp; Face Scrub Salt Trái Cây
              p.product-price
                span.old 250,000 ₫
                span.new 190,000 ₫
              .product-features
                span.discount -24%
  section.section-blog
    .wrapper
      h2.section-title blog mỹ phẩm phương anh - a cosmetics
      Slick(:options="blogSliderOptions")
        each item in Array(12)
          .blog-item
            a.blog-link.trans(href="#")
              img.blog-image(src=`${imgPath}280x280.png`, width="270", height="270", alt="", loading="lazy")
              h3.blog-name.limit-lines Hướng dẫn sử dụng QR CODE kiểm tra sản phẩm Thật - giả?
  section.section-contact
    .wrapper.column-list
      .column
        h2.title LIÊN KẾT FACEBOOK
        FbPage
      .column.flex-column
        p.small-title Giờ mở cửa: #[time 08:00] - #[time 21:00] (Thứ hai - Thứ bảy)
        p.description Chủ Nhật chỉ bán hàng buổi sáng, các đơn hàng buổi chiều vui lòng chờ tới sáng thứ hai để được xử lí.
        h2.title HOTLINE TƯ VẤN
        a.phone-number(href="tel:0773691007") 077 369 1007
        ul.button-list
          li
            a.facebook-link(href="#") Chat Facebook
          li
            a.contact-link.trans(href="#")
              i.fas.fa-chevron-right
              span LIÊN HỆ TƯ VẤN
      .column
        img.banner-image(src=`${imgPath}280x280.png`, width="380", height="380", alt="", loading="lazy")
  section.section-coop
    .wrapper
      h2.coop-title ĐĂNG KÝ CỘNG TÁC VIÊN ACOSMETICS
      p.text Đăng ký trở thành CTV của ACosmetics ngay hôm nay để nhận những ưu đãi hấp dẫn từ Công ty
      a.button-detail Xem chi tiết
        i.fas.fa-chevron-right
</template>

<script>
import FbPage from '@/components/parts/FbPage.vue'
import Slick from '@/components/parts/Slick.vue'

export default {
  name: 'Home',
  components: { FbPage, Slick },
  data() {
    return {
      categoryList: [
        {
          name: 'for face',
          quantity: 8
        },
        {
          name: 'for body',
          quantity: 7
        },
        {
          name: 'for hair',
          quantity: 2
        },
        {
          name: 'set combo',
          quantity: 11
        }
      ],
      kvSliderOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      },
      favoriteSliderOptions: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false
      },
      blogSliderOptions: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false
      }
    }
  },
  created() {},
  computed: {},
  methods: {}
}
</script>

<style lang="sass" scoped>
@import "../sass/pages/home.sass"
</style>
