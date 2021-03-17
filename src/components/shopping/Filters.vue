<template>
  <v-container>
    <v-row class="" align="center" justify="space-between">
      <v-col height> {{ 6 }} Products </v-col>
      <v-col>
        <v-select value="Latest" :items="orderTypes" filled label="order" dense></v-select>
      </v-col>
      <v-col>
        <v-select value="ALL" :items="sizeTypes" filled label="size" dense></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    orderTypes: ['Latest', 'Lowest', 'Highest'],
    sizeTypes: ['ALL', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
  }),
});
</script>

<style>
.plus-border {
  border: 1px solid black;
}
</style>
