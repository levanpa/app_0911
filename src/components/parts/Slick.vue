<template lang="pug">
.slider-wrapper(:data-slick="convertedOptions")
  slot
</template>

<script>
import $ from 'jquery'
import 'slick-carousel'

export default {
  name: 'Slick',
  props: {
    options: Object
  },
  data() {},
  mounted() {
    this.create()
  },
  computed: {
    convertedOptions() {
      if (typeof this.options === 'object') {
        let result = '{ '
        for (let item in this.options) {
          result += `"${item}": ${this.options[item]}, `
        }
        result = result.slice(0, result.length - 2)
        result += ' }'
        return result
      }
      return this.options
    }
  },
  methods: {
    create: function() {
      const $slick = $(this.$el)
      $slick.on('afterChange', this.onAfterChange)
      $slick.on('beforeChange', this.onBeforeChange)
      $slick.on('init', this.onInit)
      $slick.slick(this.options)
    },
    onAfterChange(event, slick, currentSlide) {
      this.$emit('afterChange', event, slick, currentSlide)
    },
    onBeforeChange(event, slick, currentSlide, nextSlide) {
      this.$emit('beforeChange', event, slick, currentSlide, nextSlide)
    },
    onInit(event, slick) {
      this.$emit('init', event, slick)
    }
  }
}
</script>

<!-- slick default style -->
<style>
.slick-slider {
  position: relative;

  display: block;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}
.slick-list {
  position: relative;

  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.slick-track {
  position: relative;
  top: 0;
  left: 0;

  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:before,
.slick-track:after {
  display: table;

  content: '';
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slide {
  display: none;
  float: left;

  height: 100%;
  min-height: 1px;
}
[dir='rtl'] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;

  height: auto;

  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
</style>

<!-- custom style -->
<style lang="sass">
.slider-wrapper
  .slick-arrow
    width: 36px
    height: 36px
    border: 2px solid #555
    border-radius: 20px
    transition: all 0.3s ease
    opacity: 0
    cursor: pointer
    +absolute-y
    z-index: 1
    text-indent: -9999px
    &:after
      +absolute-xy
      font-family: $font-awesome
      font-size: 14px
      text-indent: 0
      font-weight: 700
    &:hover
      color: #fff
      background-color: #555
  .slick-next
    right: 30px
    &:after
      content: "\f054"
  .slick-prev
    left: 30px
    &:after
      content: "\f053"
  &:hover
    .slick-arrow
      opacity: 1
    .slick-next
      right: 20px
    .slick-prev
      left: 20px

  .slick-dots
    display: flex
    +absolute-x
    bottom: 20px
    button
      opacity: 0
      visibility: hidden
    li
      width: 12px
      height: 12px
      margin: 5px
      background-color: #000
      opacity: .4
      transition: opacity .25s ease
      border-radius: 12px
      cursor: pointer
      &.slick-active,
      &:hover
        opacity: 1
</style>
