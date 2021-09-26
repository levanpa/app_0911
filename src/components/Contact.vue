<template lang="pug">
.contact-component
  .wrapper.contact-wrapper
    .content-wrapper
      form.common-form
        .form-top
          h1.form-title Contact us
          p.form-description Contact us if you want to cooperate or something.
          ul.contact-info
            li.info-address
              address 8494 Signal Hill Road Manassas, VA, 20110
            li.info-time Mon-Fri <time datetime="08:00">08:00 AM</time> - <time datetime="17:00">05:00 PM</time>
            li.info-phone
              a.phone-number(href="tel:1(800)7654321") 1(800)7654321
        .form-row
          span.form-text Your email
          input.form-input(ref="input-email", type="text", placeholder="example@gmail.com")
        .form-row
          span.form-text Your phone
          input.form-input(ref="input-phone", type="text")
        .form-row
          span.form-text Your message
          textarea.form-textarea(ref="textarea-message")
        .form-row
          button.common-button.trans Send
    img.contact-image(src=``, width="450", height="911", alt="missing")
    //- img(src=`${imgPath}`, width="450", height="911", alt="missing")
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "../sass/pages/contact.sass"
@import "../sass/parts/form.sass"
</style>