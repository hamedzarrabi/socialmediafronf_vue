<template>
  <v-card

      class="mx-auto my-12"
      max-width="600"
      v-for="post in posts"
      :key="post.id"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>


    <v-img

        :src="post.image"
    ></v-img>

    <v-card-title>{{ post.title }}</v-card-title>

    <v-card-text>
      <v-row
          align="center"
          class="mx-0"
      >
        <v-rating
            :value="4.5"
            color="orange"
            dense
            half-increments

            size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{ post.timestamp }}
      </div>

      <div>{{ post.textPost }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
import {PostService} from "@/server/PostService";

export default {
  methods: {

  },
  data() {
    return {
      posts : [] // for get all post create users
    }
  },
  created() {
    PostService.getAllPost().then(posts => {
      this.posts = posts.data;
      console.log(posts.data)
    });
  }
}
</script>

<style>
.story {
  margin-left: 300px;
  margin-right: 300px;
  margin-top: 50px;
}
</style>