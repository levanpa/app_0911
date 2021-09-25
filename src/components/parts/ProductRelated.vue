<template lang="pug">
.product-related-component
  section.section-product-related
    .wrapper
      h2.section-title Related Product
      ul.product-list(ref="productList", :class="{ 'is-grabbing': isGrabbing }", @mousedown="mouseDown", @mousemove="mouseMove", @mouseup="mouseUp", @mouseleave="mouseUp")
        each item in Array(8)
          li.product-item
            router-link.item-wrapper.trans(to="/product-detail", @mousedown.stop)
              img.product-image(src=``, width="278", height="278", alt="missing", loading="lazy")
              //- img.product-image(src=`${imgPath}`, width='278', height='278', alt='missing', loading='lazy')
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
  name: "ProductRelated",
  components: {},
  data() {
    return {
      position: { left: 0, x: 0 },
      isGrabbing: false,
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
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/product-related.sass"
@import "../../sass/parts/product-list.sass"
</style>