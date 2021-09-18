<template lang="pug">
section.section-product-detail
  .wrapper
    .product-image-wrapper
      .big-image
        img(src=``, width="504", height="504", alt="missing")
        //- img(src=`${imgPath}`, width="504", height="504", alt="missing")
      ul.thumbnail-list
        each item in Array(6)
          li.thumbnail-item.trans
            img(src=``, width="74", height="74", alt="missing")
            //- img(src=`${imgPath}`, width="74", height="74", alt="missing")
    .product-detail-wrapper
      h2.product-name.limit-lines TÔNG ĐƠ CẮT TÓC KEMEI 5017 - Tặng Kèm Bộ Kéo Cắt Và Tỉa Tóc JAPAN1 Thép không Gỉ Cao Cấp Và Lược
      .product-evaluate
        .product-rate.rate-45
        .product-sold Đã bán
          span 64
        .product-remain Còn lại
          span 12
      .product-price-wrapper
        .product-price 376.000
          span.unit đ
      .product-description Tông đơ lưỡi cắt mỏng, mau giúp cắt sạch, trắng kể cả tóc mỏng, thưa. Dùng cắt tóc cho các thành viên gia đình, chấn viền hay tạo kiểu rất tốt. Lưỡi Tông Đơ dao bằng thép không gỉ chất lượng cao có thể thoải mái cắt tóc thừa. Thời gian sử dụng bền bỉ Bộ lưỡi dao được làm hoàn toàn từ thép không gỉ nên có thời gian sử dụng lâu dài. Bộ Kéo Kéo cắt, kéo tỉa được làm từ chất liệu cao cấp bền bỉ, nhiệt luyện với nhiệt độ cao. Giúp cho kéo sắc bén và có tuổi thọ cao hơn những sản phẩm khác. Chất liệu Kéo: Thép không gỉ Kéo thẳng: 17cm- Lưỡi: 8cm, Kéo tỉa: 17cm- Lưỡi: 8cm
      button.product-favorite.trans
        i.far.fa-heart
        | Favorite
      .product-quantity
        span.remove-one.trans -
        input.quantity(type="text", value="1")
        span.add-one.trans +
      ul.product-buttons
        li.common-button.button-buy-now.trans Buy now
        li.common-button.button-add-cart.trans Add cart

  .wrapper
    .product-info

section.section-product-related
</template>

<script>
export default {
  name: "ProductDetail",
  components: {},
};
</script>

<style lang="sass">
@import "../sass/pages/product-detail.sass"
</style>