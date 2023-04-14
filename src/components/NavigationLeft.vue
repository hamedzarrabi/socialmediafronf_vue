<template>
  <!-- Navigation Left -->
  <v-navigation-drawer>
    <!-- icon instagram -->
    <div class="mt-4">
      <v-icon icon class="ml-4 mr-1" size="30">mdi-instagram</v-icon>
      Instagram
    </div>

    <div class="d-flex align-center justify-space-around mt-6">
      <v-avatar size="100px">
        <v-img
            alt="Avatar"

            :src="user.imageProfile"
        ></v-img>
      </v-avatar>
    </div>
    <div class="d-flex align-center justify-space-around mt-6">
      <h4>{{ user.firstName + ' ' + user.lastName }}</h4>
    </div>
    <div class="d-flex align-center justify-space-around mt-2">
      <p style="color: grey; font-size: 14px">Iran, Esfahan</p>
    </div>

    <div class="d-flex align-center justify-space-around mt-6">
      <div class>
        <p class style="font-size: 12px; text-align: center;">{{ countPostsUser }}</p>
        <p style="color:grey; font-size: 10px;">POSTS</p>
      </div>
      <div class>
        <p class style="font-size: 12px; text-align: center;">37.2K</p>
        <p style="color:grey; font-size: 10px;">FOLLOWERS</p>
      </div>
      <div class>
        <p class style="font-size: 12px; text-align: center;">989</p>
        <p style="color:grey; font-size: 10px;">FOLLOWING</p>
      </div>
    </div>

    <v-divider class="mt-4"></v-divider>

    <v-list nav dense class="mt-6">
      <v-list-item prepend-icon="mdi-home-outline" value="Feed" title="Feed" color="#D73269"></v-list-item>
      <v-list-item
          prepend-icon="mdi-compass-outline"
          value="explore"
          title="Explore"
          color="#D73269"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-pound" value="trending" title="Trending" color="#D73269"></v-list-item>
      <v-list-item prepend-icon="mdi-account-outline" value="people" title="People" color="#D73269"></v-list-item>
      <v-list-item
          prepend-icon="mdi-check-decagram-outline"
          value="top-post"
          title="Top Post"
          color="#D73269"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-send-outline" title="Direct" value="direct" color="#D73269"></v-list-item>
      <v-list-item prepend-icon="mdi-cog-outline" title="Setting" value="setting" color="#D73269"></v-list-item>

      <v-divider></v-divider>
      <v-list-item @click="logout" prepend-icon="mdi-logout-variant" title="Setting" value="setting"
                   color="#D73269"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from "vuex";
import {UserService} from "@/server/UserService";
import {PostService} from "@/server/PostService";

export default {
  data() {
    return {
      countPostsUser : null
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  created() {
    let userId = this.$store.state.user.userId;

    // for get Posts every user
    PostService.countPosts(userId)
        .then(response => {
          this.countPostsUser = response.data;
        }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    logout() {
      this.$store.state.isLoggedIn = false;
      this.$router.push("/");
      return UserService.logout();
    }
  }
};
</script>

<style>
</style>