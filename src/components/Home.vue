<template lang="pug">
include ../pug/mixins.pug
- var imgPath = '@/assets/img/';

.home-component
  section.section-keyvisual
    .wrapper
      .title-wrapper
        p.description we can light everything
        h2.title Nothing is#[br]Impossible for Us

  section.section-special
    .wrapper
      h2.section-title Special products
      ul.special-list
        each item in Array(2)
          li.special-item
            img.item-image(src=``, width="670", height="550", alt="missing", loading="lazy")
            //- img.item-image(src=`${imgPath}`, width="670", height="550", alt="", loading="lazy")
            .item-content
              h3.item-name Outstanding Residential &amp; Commercial Services
              p.item-description All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for your outdoors to a whole home generator that will keep your appliances working during a power outage.
              ul.feature-list
                each item in ['Full-service electrical layout, design','Wiring and installation/upgrades','Emergency power solutions (generators)','Virtually any electrical needs you have – just ask!']
                  li.feature-item!= item

  section.section-product
    .wrapper
      h2.section-title Product list
      ul.product-list
        each item in Array(8)
          li.product-item
            router-link.item-wrapper.trans(to="/product-detail")
              img.product-image(src=``, width="278", height="278", alt="missing", loading="lazy")
              //- img.product-image(src=`${imgPath}`, width='278', height='278', alt='missing', loading='lazy')
              h3.product-name.limit-lines Sữa tắm nước hoa Nhật Bản cánh hoa thật Lavender AVATAR hương thơm quý phái 500ml
              .product-bottom
                span.product-price 2.315.000
                  span.unit đ
                span.product-sold Đã bán: 136
              .product-tags
                span.product-discount -25%

  section.section-intro
    .wrapper
      h2.section-title about company
      .intro-box
        .intro-title Do you #[span.is-highlight Need Help] With Electrical Maintenance?
        .intro-text Our electrical repair and service options are proudly offered to clients. Give us a call today to schedule a free service estimate!
        .button-wrapper
          a.common-button.trans(href="#") Give Us a Call
          a.common-button.trans(href="#") Free Estimate

  section.section-pricing
    .wrapper
      h2.section-title pricing table
      ul.pricing-list
        each item in Array(3)
          li.pricing-item
            img.pricing-icon(src=``, width="49", height="49", alt="missing", loading="lazy")
            //- img.pricing-icon(src=`${imgPath}`, width='49', height='49', alt='missing', loading='lazy')
            h3.pricing-title Commercial Service
            ul.feature-list
              each item in ['Indoor/outdoor Lighting Installation','Appliance &amp; Fixture Installation','Annual Electrical Inspection','Ceiling Fan Installation','New &amp; Replacement Wiring','Surge Protection Maintenance','24-hour Response']
                li.feature-item!= item
            a.common-button.trans(href="#") 2.000.000đ

  section.section-partner
    .wrapper
      h2.section-title our partner
      ul.partner-list
        each item in Array(10)
          li.partner-item
            img(src=``, width="150", height="100", alt="missing", loading="lazy")
          li.partner-item
            img(src=``, width="100", height="100", alt="missing", loading="lazy")
            //- img(src=`${imgPath}`, width='150', height='100', alt='missing', loading='lazy')
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="sass" scoped>
@import "../sass/pages/home.sass"
@import "../sass/parts/product-list.sass"
</style>
