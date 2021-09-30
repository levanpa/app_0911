import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/base/router.js';
import mixins from '@/base/mixins.js';
import store from '@/base/store.js';

const vueApp = createApp(App);

vueApp.mixin(mixins)
  .use(router)
  .use(store)
  .mount('#app');