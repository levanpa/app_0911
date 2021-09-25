<template lang="pug">
.product-related-component
  section.section-product-related
    .wrapper
      h2.section-title Related Product
      ul.product-list(ref="productList", @mousedown="mouseDownHandler", @mousemove="mouseMoveHandler", @mouseup="mouseUpHandler")
        each item in Array(8)
          li.product-item
            a.item-wrapper.trans(href="#", @mousedown.stop)
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
      scrollLeft: 0,
      refProductList: this.$refs.productList,
      isGrabbing: false,
    };
  },
  methods: {
    mouseDownHandler: function (event) {
      // this.log(target);
      this.position = {
        left: this.$refs.productList.scrollLeft,
        x: event.clientX,
      };
      this.isGrabbing = true;
      this.$refs.productList.style.cursor = "grabbing";
      this.$refs.productList.style.userSelect = "none";
    },
    mouseMoveHandler: function (event) {
      if (this.isGrabbing) {
        const dx = event.clientX - this.position.x;
        this.$refs.productList.scrollLeft = this.position.left - dx;
      }
    },
    mouseUpHandler: function () {
      this.isGrabbing = false;
      this.$refs.productList.style.cursor = "grab";
      this.$refs.productList.style.removeProperty("user-select");
    },
  },
};
</script>

<style lang="sass">
@import "../../sass/parts/product-related.sass"
</style>