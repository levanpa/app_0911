import * as VueRouter from 'vue-router';
import Home from '@/components/Home.vue';
import Products from '@/components/ProductList.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import Login from '@/components/parts/Login.vue';
import Signup from '@/components/parts/Signup.vue';
import ForgotPass from '@/components/parts/ForgotPass.vue';
import Contact from '@/components/Contact.vue';
import Account from '@/components/Account.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product-detail/:productId', component: ProductDetail },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/forgot-password', component: ForgotPass },
  { path: '/contact', component: Contact },
  { path: '/account', component: Account },
];

const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHistory(),
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  setTimeout(() => next(), 100);
});

export default router;