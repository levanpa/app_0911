<template lang="pug">
- var imgPath = '@/assets/img/common/';
.login-component.is-signup
  .wrapper.login-wrapper
    .content-wrapper
      form.common-form
        .form-top
          h1.form-title Sign up
          p.form-description Sign up for a new account.
        .form-row
          span.form-text Your name
          input.form-input(ref="input-name", type="text")
        .form-row
          span.form-text Your email
          input.form-input(ref="input-email", type="text", placeholder="example@gmail.com")
        .form-row
          span.form-text Password
          input.form-input(ref="input-password", type="password")
        .form-row
          span.form-text Re-enter password
          input.form-input(ref="input-repassword", type="password")
        .form-row
          input#checkbox-accept.form-checkbox(ref="checkbox-accept", type="checkbox")
          label.form-label(for="checkbox-accept") Accept agreement.
        .form-row
          button.common-button.form-button.trans Sign up
          .login-social
            span.social-text Or sign up with
            ul.social-list
              li.social-item
                a.social-link.trans(href="#")
                  i.fab.fa-google
              li.social-item
                a.social-link.trans(href="#")
                  i.fab.fa-facebook
              li.social-item
                a.social-link.trans(href="#")
                  i.fab.fa-google
          .form-links
            router-link.form-link.trans(to="/login") Login
            router-link.form-link.trans(to="/forgot-password") Forgot password?
    img.login-image(src=`${imgPath}1200x1200.png`, width="650", height="800", alt="missing")
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/login.sass"
@import "../../sass/parts/form.sass"
</style>