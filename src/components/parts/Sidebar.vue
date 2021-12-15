<template lang="pug">
nav.sidebar-component
  ul.sidebar-list
    li.sidebar-item(v-for="(item, index) in sidebarNav", :key="index", :class="{ 'is-active': activeIndex == index }")
      span.sidebar-link.trans(@click="changeTab(index)") {{ item }}
</template>

<script>
export default {
  name: "Sidebar",
  components: {},
  data() {
    return {
      activeIndex: 0,
      sidebarNav: ["Account information", "Wishlist", "Order history", "Account information", "Wishlist", "Order history"],
    };
  },
  methods: {
    changeTab: function (index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../sass/parts/sidebar.sass"
</style>