<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <v-row>
          <v-col>
            <Filters />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Products />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <Cart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Filters from '@/components/shopping/Filters.vue';
import Products from '@/components/shopping/Products.vue';
import Cart from '@/components/shopping/Cart.vue';
// import data from '../data.json';

export default Vue.extend({
  components: {
    Filters,
    Products,
    Cart,
  },
  // data() {
  //   return {
  //     products: data.products,
  //   };
  // },
});
</script>

<style></style>
