<template lang="pug">
.product-detail-component
  section.section-product-detail
    .wrapper.is-flex
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
        button.product-favorite.trans(:class="{ 'is-favorite': isFavorite }", @click="toggleFavorite()")
          i.far.fa-heart
          | Favorite
        .product-quantity
          span.remove-one.trans(@click="adjustQuantity(-1)") -
          input.quantity(type="text", v-model="quantity")
          span.add-one.trans(@click="adjustQuantity(1)") +
        ul.product-buttons
          li.common-button.button-buy-now.trans Buy now
          li.common-button.button-add-cart.trans Add cart

    .product-info-wrapper.wrapper
      .product-info
        h2 Mô Tả Sản Phẩm
        p Tông đơ lưỡi cắt mỏng ,mau giúp cắt sạch ,trắng kể cả tóc mỏng ,thưa. Dùng cắt tóc cho các thành viên gia đình, chấn viền hay tạo kiểu rất tốt. Lưỡi Tông Đơ dao bằng thép không gỉ chất lượng cao có thể thoải mái cắt tóc thừa. Thời gian sử dụng bền bỉ Bộ lưỡi dao được làm hoàn toàn từ thép không gỉ nên có thời gian sử dụng lâu dài. Bộ Kéo Kéo cắt, kéo tỉa được làm từ chất liệu cao cấp bền bỉ, nhiệt luyện với nhiệt độ cao. Giúp cho kéo sắc bén và có tuổi thọ cao hơn những sản phẩm khác. Chất liệu Kéo: Thép không gỉ Kéo thẳng: 17cm- Lưỡi: 8cm, Kéo tỉa: 17cm- Lưỡi:8 cm
        p TÔNG ĐƠ CẮT TÓC KEMEI 5017 - Tặng Kèm Bộ Kéo Cắt Và Tỉa Tóc JAPAN1 Thép không Gỉ Cao Cấp Và Lược
        h3 TÔNG ĐƠ CẮT TÓC KEMEI 5017
        ul
          li - Thiết kế nhỏ gọn ,tiện dụng.
          li - Lưỡi cắt mỏng ,mau giúp cắt sạch ,trắng kể cả tóc mỏng ,thưa.
          li - Dùng cắt tóc cho các thành viên gia đình, chấn viền hay tạo kiểu rất tốt.
        img(src=``, width="700", height="700", alt="missing", loading="lazy")
        //- img(src=`${imgPath}`, width='700', height='700', alt='missing', loading='lazy')
        ul
          li - Lưỡi dao bằng thép không gỉ chất lượng cao có thể thoải mái cắt tóc thừa.
          li - Thời gian sử dụng bền bỉ Bộ lưỡi dao được làm hoàn toàn từ thép không gỉ nên có thời gian sử dụng lâu dài.
          li - Sản phẩm có thiết kế đẹp, vận hành an toàn và tiện dụng.
        ul
          li - Sản phẩm được thiết kế có tay cầm và nút điều khiển thuận tiện cho cả 2 tay.
          li - Sản phẩm rất an toàn khi cắt tóc với mọi gia đình.Máy có bộ phận giảm ồn, chạy êm nhẹ nhàng khi cắt tóc . Động cơ vận hành cực kỳ êm ái, không gây ra tiếng ồn khó chịu, có thể cắt tóc cho bé ngay cả khi bé đang ngủ.
          li - Sản phẩm dùng pin sạc rất tiện dụng, sạc 8 tiếng thì thời gian sử dụng liên tục lên đến 80 phút. Sản phẩm rất an toàn khi cắt tóc cho mọi gia đình.
        img(src=``, width="500", height="500", alt="missing", loading="lazy")
        //- img(src=`${imgPath}`, width='500', height='500', alt='missing', loading='lazy')
        h3 BỘ KÉO CẮT VÀ TỈA TÓC JAPAN1
        ul
          li - Kéo cắt, kéo tỉa được làm từ chất liệu cao cấp bền bỉ, nhiệt luyện với nhiệt độ cao. Giúp cho kéo sắc bén và có tuổi thọ cao hơn những sản phẩm khác.
          li - Chất liệu: Thép không gỉ
        p Kích thước: - Kéo thẳng: 17cm- Lưới: 8cm Kéo tỉa: 17cm- Lưỡi:8 cm
        p Tính Năng: Dùng để cắt và tỉa mỏng tóc cho người lớn và trẻ nhỏ, Làm quà tặng rất sang trọng.
  ProductRelated
</template>

<script>
import ProductRelated from "./parts/ProductRelated.vue";

export default {
  name: "ProductDetail",
  components: {
    ProductRelated,
  },
  data() {
    return {
      quantity: 1,
      isFavorite: false,
    };
  },
  methods: {
    adjustQuantity: function (value) {
      if (this.quantity + value > 0) this.quantity += value;
    },
    toggleFavorite: function () {
      this.isFavorite = !this.isFavorite;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/pages/product-detail.sass"
</style>