import { createStore } from 'vuex';
import mixins from './mixins'

const store = createStore({
  state() {
    return {
      company: {},
    }
  },
  mutations: {
    storeCompanyData(state, data) {
      state.company = data;
    }
  },
  actions: {
    async storeCompanyData(context) {
      const data = await mixins.methods.fetchCompanyData();
      context.commit('storeCompanyData', data);
    }
  },
});

export default store;