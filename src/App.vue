<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn small color="primary">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <span class="ml-3">Vue TypeScript Shopping Cart</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- <HelloWorld /> -->
      <Shop />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
// import HelloWorld from "./components/HelloWorld.vue";
import Shop from './views/Shop.vue';

export default Vue.extend({
  name: 'App',

  components: {
    // HelloWorld,
    Shop,
  },

  data: () => ({
    //
  }),
});
</script>
