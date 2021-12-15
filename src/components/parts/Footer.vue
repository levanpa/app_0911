<template lang="pug">
- var imgPath = '@/assets/img/common/';
.footer-component
  .wrapper
    .subscribe-box
      span.subscribe-title Subscribe to Our Newsletter
      form.subscribe-form(action="")
        input.subscribe-input(type="text", name="email", placeholder="Your e-mail address")
        button.subscribe-button.trans(type="submit", v-on:click.stop="") Subscribe now
  .wrapper.is-flex
    .footer-left
      .footer-top
        .footer-logo
          img(src=`${imgPath}223x62.png`, width="223", height="62", alt="missing", loading="lazy")
        p.footer-description Our experienced electricians are highly trained in all aspects of electrical service, from office lighting and security systems to emergency repair.
      .footer-middle
        ul.sitemap
          each item in ['Home', 'Gallery', 'About Us', 'Shop', 'Services', 'FAQ', 'Prices', 'Contacts']
            li.sitemap-item
              a.sitemap-link.trans(href="#")!= item
        ul.contact-info
          li.info-address
            address {{ company.address }}
          li.info-time Mon-Fri <time datetime="08:00">08:00 AM</time> - <time datetime="17:00">05:00 PM</time>
          li.info-phone
            a.phone-number(:href="`tel:${company.phone}`") {{ company.phone }}
    .footer-right
      .footer-map
        img(src=`${imgPath}430x300.png`, width="430", height="300", alt="missing", loading="lazy")
  .wrapper
    .footer-bottom
      p.copyright © 2020 Electrical Services. All Rights Reserved.
      ul.social-list
        li.social-item
          a.social-link.trans(href="#", target="_blank", rel="noopener")
            i.fab.fa-facebook-square
        li.social-item
          a.social-link.trans(href="#", target="_blank", rel="noopener")
            i.fab.fa-youtube-square
        li.social-item
          a.social-link.trans(href="#", target="_blank", rel="noopener")
            i.fab.fa-twitter-square
  ButtonTop
</template>

<script>
import ButtonTop from "./ButtonTop.vue";
import { mapState } from "vuex";

export default {
  name: "Footer",
  components: {
    ButtonTop,
  },
  computed: {
    ...mapState(["company"]),
  },
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/footer.sass"
</style>