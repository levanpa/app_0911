<template lang="pug">
.login-component.is-forgot-password
  .wrapper
    .login-wrapper
      .content-wrapper
        h1.login-title Forgot Password
        p.login-description An email will be sent to you to reset your password.
        form.forgot-password-form
          .form-row
            span.form-text Your email
            input.form-input(ref="input-email", type="text", placeholder="example@gmail.com")
          .form-row
            button.common-button.form-button.trans Reset Password
            .form-links
              router-link.form-link.trans(to="/login") Login
              router-link.form-link.trans(to="/signup") Sign up
      img.login-image(src=``, width="650", height="400", alt="missing")
      //- img(src=`${imgPath}`, width="650", height="400", alt="missing")
</template>

<script>
export default {
  name: "ForgotPass",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/login.sass"
</style>