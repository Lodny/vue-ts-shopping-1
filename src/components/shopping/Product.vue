<template>
  <!-- <v-card class="mx-auto" max-width="360"> -->
  <v-card class="" max-width="360">
    <v-img :src="product.image" width="400px"></v-img>
    <!-- <v-img :src="product.image" height="200px"></v-img> -->

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ product.availableSizes }}
    </v-card-subtitle>

    <v-card-actions>
      <v-card-subtitle> $ {{ product.price }} </v-card-subtitle>

      <v-spacer></v-spacer>

      <v-btn color="orange lighten-2" text @click="addToCart(product._id)">
        Add to Cart
      </v-btn>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ product.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    addToCart(id: string) {
      console.log(id);
    },
  },
});
</script>

<style></style>
