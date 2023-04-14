<template>
      <div>
        <v-navigation-drawer permanent location="right">
        <template v-slot:prepend>
          <v-divider></v-divider>
          <div class="font-weight-medium ml-4 my-4">Suggestion for you</div>
          <v-list nav dense>
            <v-list-item
              color="#D73269"
              lines="two"
              prepend-avatar="https://img.freepik.com/free-photo/isolated-shot-woman-uses-smartphone-application-enjoys-browsing-social-media-creats-news-content-makes-online-order-wears-spectacles-casual-jumper-poses-beige-studio-wall_273609-44111.jpg?t=st=1672318068~exp=1672318668~hmac=4de37694191203a495030ee0bc20b7302477c279dc2bf7c15dbe2579d6032a7b"
              title="Jane Air"
              value="jane"
              subtitle="USA NY"
            ></v-list-item>
            <v-divider></v-divider>
            <v-list-item
              color="#D73269"
              lines="two"
              prepend-avatar="https://img.freepik.com/free-photo/annoyed-irritated-young-red-haired-female-with-freckles-blowing-her-cheeks-frowning-feeling-frustrated-with-something-human-facial-expressions-emotions-feelings-fatigue-boredom-concept_273609-510.jpg?w=996&t=st=1672335039~exp=1672335639~hmac=16f81d28dbbd400902ad7f5edccba72bf737451de7fa71d2daf2e844955af4b1"
              title="Tara Smith"
              value="tara"
              subtitle="Italy Milan"
            ></v-list-item>
            <v-divider></v-divider>
          </v-list>
        </template>
      <v-main style="height: 100vh"></v-main>
      </v-navigation-drawer>
      </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ]
    };
  },
computed: {
  ...mapState(['isLoggedIn'])
}
};
</script>

<style>
</style>