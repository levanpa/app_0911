module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/sass/variables.sass", "~@/sass/mixins.sass"`
      }
    }
  }
}