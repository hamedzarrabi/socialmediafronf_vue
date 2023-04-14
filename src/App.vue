<template>
  <v-app>
    <v-main>
      <NavigationLeft v-if="isLoggedIn"/>
      <NavigationRight v-if="isLoggedIn"/>
      <router-view/>
      <v-divider></v-divider>
      <Navbar v-if="isLoggedIn"/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NavigationLeft from '@/components/NavigationLeft.vue';
import NavigationRight from "@/components/NavigationRight.vue";
import {mapState, mapGetters} from 'vuex'

import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    NavigationRight,
    Navbar,
    NavigationLeft,
    Home
  },
  computed: {
    ...mapState(['isLoggedIn']),

  },
  created() {

  }
}
</script>
