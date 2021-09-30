import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/base/router.js';
import mixins from '@/base/mixins.js';
import store from '@/base/store.js';
import filters from '@/base/filters.js';

const vueApp = createApp(App);

vueApp.config.globalProperties.$filters = filters;
vueApp.mixin(mixins)
  .use(router)
  .use(store)
  .mount('#app');