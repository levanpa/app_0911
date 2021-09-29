import { createApp } from 'vue';
import App from './App.vue';
import router from './base/router.js';
import mixins from './base/mixins.js';

const vueApp = createApp(App);

vueApp.mixin(mixins);
vueApp.use(router);
vueApp.mount('#app');