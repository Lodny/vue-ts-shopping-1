import Vue from 'vue';
import Vuex from 'vuex';
import PRODUCTS from './shopping/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    PRODUCTS,
  },
});
