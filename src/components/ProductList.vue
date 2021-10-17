<template lang="pug">
- var imgPath = '@/assets/img/common/';
.product-list-component
  section.section-product-list
    .wrapper
      h2.section-title All Products
      ul.product-list
        li.product-item(v-for="item in productList", :key="item.id")
          router-link.item-wrapper.trans(to="/product-detail")
            img.product-image(src=`${imgPath}280x280.png`, width="280", height="280", alt="missing", loading="lazy")
            h3.product-name.limit-lines {{ item.name }}
            .product-bottom
              span.product-price {{ item.price_text }}
                span.unit đ
              span.product-sold Đã bán: {{ item.sold }}
            .product-tags
              span.product-discount {{ item.discount }}%
</template>

<script>
export default {
  name: "ProductList",
  components: {},
  data() {
    return {
      productList: {},
    };
  },
  methods: {},
  async created() {
    this.productList = await this.fetchProducts();
  },
  computed: {},
};
</script>

<style lang="sass" scoped>
@import "../sass/pages/product-list.sass"
@import "../sass/parts/product-list.sass"
</style>