<template lang="pug">
- var imgPath = '@/assets/img/common/';
.product-related-component
  section.section-product-related
    .wrapper
      h2.section-title Related Product
      ul.product-list(ref="productList", :class="{ 'is-grabbing': isGrabbing }", @mousedown="mouseDown", @mousemove="mouseMove", @mouseup="mouseUp", @mouseleave="mouseUp")
        li.product-item(v-for="item in productList", :key="item.id")
            router-link.item-wrapper.trans(:to="`/product-detail/${item.id}`")
              img.product-image(src=`${imgPath}280x280.png`, width="280", height="280", alt="missing", loading="lazy")
              h3.product-name.limit-lines {{ item.name }}
              .product-bottom
                span.product-price {{ item.price_text }}
                  span.unit đ
                span.product-sold Đã bán: {{ item.sold }}
              .product-tags
                span.product-discount -{{ item.discount }}%
</template>

<script>
export default {
  name: "ProductRelated",
  components: {},
  data() {
    return {
      position: { left: 0, x: 0 },
      isGrabbing: false,
      productList: {},
    };
  },
  methods: {
    mouseDown: function (event) {
      this.position = {
        left: this.$refs.productList.scrollLeft,
        x: event.clientX,
      };
      this.isGrabbing = true;
    },
    mouseMove: function (event) {
      if (this.isGrabbing) {
        const dx = event.clientX - this.position.x;
        this.$refs.productList.scrollLeft = this.position.left - dx;
      }
    },
    mouseUp: function () {
      this.isGrabbing = false;
    },
  },
  async created() {
    this.productList = await this.fetchProducts();
  },
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/product-related.sass"
@import "../../sass/parts/product-list.sass"
</style>