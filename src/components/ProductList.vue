<template lang="pug">
- var imgPath = '@/assets/img/common/';
.product-list-component
  section.section-product-list
    .wrapper
      h2.section-title All Products
      ul.product-list
        each item in Array(24)
          li.product-item
            router-link.item-wrapper.trans(to="/product-detail")
              img.product-image(src=`${imgPath}280x280.png`, width="280", height="280", alt="missing", loading="lazy")
              h3.product-name.limit-lines Sữa tắm nước hoa Nhật Bản cánh hoa thật Lavender AVATAR hương thơm quý phái 500ml
              .product-bottom
                span.product-price 2.315.000
                  span.unit đ
                span.product-sold Đã bán: 136
              .product-tags
                span.product-discount -25%
</template>

<script>
export default {
  name: "ProductList",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "../sass/pages/product-list.sass"
@import "../sass/parts/product-list.sass"
</style>