<template lang="pug">
- var imgPath = '@/assets/img/common/';
.contact-component
  .wrapper.contact-wrapper
    .content-wrapper
      form.common-form
        .form-top
          h1.form-title Contact us
          p.form-description Contact us if you want to cooperate or something.
          ul.contact-info
            li.info-address
              address {{ company.address }}
            li.info-time Mon-Fri <time datetime="08:00">08:00 AM</time> - <time datetime="17:00">05:00 PM</time>
            li.info-phone
              a.phone-number(:href="`tel:${company.phone}`") {{ company.phone }}
        .form-row
          span.form-text Your email
          input.form-input(ref="input-email", type="text", placeholder="example@gmail.com")
        .form-row
          span.form-text Your phone number
          input.form-input(ref="input-phone", type="text")
        .form-row
          span.form-text Your message
          textarea.form-textarea(ref="textarea-message")
        .form-row
          button.common-button.trans Send
    img.contact-image(src=`${imgPath}1200x1200.png`, width="450", height="911", alt="missing")
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      company: {},
    };
  },
  methods: {},
  created() {
    const api = "http://localhost:3000/company/";
    this.axios.get(api).then((response) => (this.company = response.data));
  },
};
</script>

<style lang="sass" scoped>
@import "../sass/pages/contact.sass"
@import "../sass/parts/form.sass"
</style>