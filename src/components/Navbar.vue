<template>
  <div>
    <!-- Navigation Header -->
    <v-app-bar app color="light" class dark flat>
      <v-spacer></v-spacer>
      <!-- search title -->
      <input type="text" placeholder="search" class="btn-search"/>

      <!-- create new post -->
      <v-btn
          rounded
          prepend-icon="mdi-plus"
          color="white"
          dark
          style="background-color: #D73269;"
          @click="newPost()"
      >Create New Post
      </v-btn>

      <v-spacer></v-spacer>

      <!-- RIGHT NAVBAR -->
      <div class="mr-10">
        <v-btn class="text-none" stacked>
          <v-badge content="2+" color="#D73269">
            <v-icon>mdi-email-outline</v-icon>
          </v-badge>
        </v-btn>
        <v-btn class="text-none " stacked>
          <v-badge content="9+" color="#D73269">
            <v-icon>mdi-heart-outline</v-icon>
          </v-badge>
        </v-btn>
        <!--                <v-btn dark @click="isLogin">-->
        <!--                <img style="width:25px; height:25px" :src="users.imageProfile" alt="picture">-->
        <!--                <p>{{ users.firstName + ' ' + users.lastName }}</p>-->
        <!--                    <span v-if="isLogin">Exit</span>-->
        <!--                    <a v-else v-if="!isLogin">Login / Signup</a>-->
        <!--                </v-btn>-->


        <!--User details after Login-->
<!--        <v-btn @click="drawer = !drawer">-->

<!--          <img style="width:35px; height:30px" :src="user.imageProfile" alt="picture">-->

<!--          <p style="width:80px">{{ user.firstName }}</p>-->
<!--        </v-btn>-->

      </div>
    </v-app-bar>

<!--    <v-navigation-drawer-->
<!--        v-model="drawer"-->
<!--        location="right"-->
<!--        width="500px" height="500px" class="items-center" app>-->
<!--      <v-list>-->
<!--        <v-list-item>{{ user.email }}</v-list-item>-->
<!--        <v-list-item>{{ user.userId }}</v-list-item>-->
<!--        <v-list-item>-->
<!--          <v-btn @click="Logout" width="full">-->
<!--            <v-icon>mdi-logout-variant</v-icon>-->
<!--          </v-btn>-->

<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import {UserService} from '../server/UserService.js'

export default {
  components: {},
  data() {
    return {
      drawer: false,
      imageProfile: null
    }
  },
  methods: {

    newPost() {
      this.$router.push("/post");
    }

  },

  computed: {
    ...mapGetters(['isLoggedIn', 'user'])
  },
  created() {

  }
}
</script>
<style scoped>
.btn-search {
  background-color: rgba(228, 226, 226, 0.406);
  border-radius: 20px;
  margin: 2rem;
  padding: 0.3rem;
  padding-left: 0.5rem;
  width: 350px;
}
</style>