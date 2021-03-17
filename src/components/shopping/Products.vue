<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product._id">
        <Product :product="product" />
      </v-col>
    </v-row>
    {{ products.length }}
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
// import { mapState } from 'vuex';
import Product from './Product.vue';

export default Vue.extend({
  components: {
    Product,
  },
  // props: {
  //   products: {
  //     type: Array,
  //     required: true,
  //   },
  // },
  // computed: {
  //   ...mapState('PRODUCTS', ['products']),
  // },
  computed: {
    products() {
      return this.$store.state.PRODUCTS.products;
    },
  },
});
</script>

<style></style>
