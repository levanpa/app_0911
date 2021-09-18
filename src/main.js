import { createApp } from 'vue';
import App from './App.vue';

const vueApp = createApp(App);

vueApp.mixin({
  methods: {
    log: (...data) => console.log(...data)
  }
});

vueApp.mount('#app');