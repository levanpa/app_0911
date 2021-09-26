<template lang="pug">
.account-component
  .wrapper.is-flex
    Sidebar
    .main-content
      ul.list-info
        each item in Array(2)
          li.item-row
            p.item-label Fullname
            p.item-text alksjdk lasd alskjdl asd
          li.item-row
            p.item-label Email
            p.item-text alksjdk lasd alskjdl asd
          li.item-row
            p.item-label Phone number
            p.item-text alksjdk lasd alskjdl asd
          li.item-row
            p.item-label Address
            p.item-text alksjdk lasd alskjdl asdalksjdk lasd alskjdl asdalksjdk lasd alskjdl asd
</template>

<script>
import Sidebar from "./parts/Sidebar.vue";

export default {
  name: "Account",
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "../sass/pages/account.sass"
</style>