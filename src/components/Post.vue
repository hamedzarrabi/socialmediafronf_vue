<template>
  <div class="container mx-auto">
    <form @submit.prevent="SendPost" enctype="multipart/form-data">
      <div class="grid grid-col-1 items-center justify-center">
        <h1 class="flex p-4 text-2xl font-bold text-center">New Post</h1>
        <div>
          <label class="block mb-2 text-sm font-medium" for="post_title"
          >Title</label
          >
          <input
              class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="post_title_help"
              id="post_title"
              type="text"
              v-model="state.title"
          />
          <span v-if="v$.title.$error">
            {{ v$.title.$errors[0].$message }}
          </span>

          <label class="block mb-2 text-sm font-medium" for="post_image"
          >Upload Picture</label
          >
          <input
              class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="post_image_help"
              id="post_image"
              type="file"
              accept="image/jpeg, image/png"
              @change="onFileChange"
          />
          <span v-if="v$.image.$error">
            {{ v$.image.$errors[0].$message }}
          </span>

          <label class="block mb-2 text-sm font-medium" for="post_message"
          >Message</label
          >
          <textarea
              class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="post_message_help"
              id="post_message"
              type="text"
              v-model="state.textPost"

          ></textarea>
          <span class="bg-red-500" v-if="v$.textPost.$error">
            {{ v$.textPost.$errors[0].$message }}
          </span>

<loading v-if="isLoading" />


          <button
              type="submit"
              class="justify-center self-center p-2 bg-pink rounded mt-2"
          >Send
          </button>
          <router-link
              to="/home"
              type="submit"
              class="justify-center self-center p-2 bg-gray-500 mx-2 rounded mt-2 text-white"
          >Cancel
          </router-link
          >

        </div>
      </div>
    </form>
  </div>
</template>
<script>
import {PostService} from "@/server/PostService.js";
import {mapGetters} from "vuex";
import {POSITION, useToast} from "vue-toastification";
import Loading from "@/components/Loading.vue";
import {reactive, computed} from "vue";
import {useVuelidate} from '@vuelidate/core';
import {required, minLength} from '@vuelidate/validators'

export default {
  components: {
    Loading
  },
 setup() {
    const state = reactive({
      title : '',
      image : null,
      textPost : ''
    });
    const rules = computed(() => {
      return {
        title : {required, minLength : minLength(5)},
        image : {required},
        textPost : {required, minLength : minLength(10)}
      }
    });

    const v$ = useVuelidate(rules, state);

    return {
      state, v$
    }
 },
  data() {
    return {
      isLoading: false,
    }
    // return {
    //   isLoading: false,
    //   postDetails: {
    //     title: "",
    //     image: null,
    //     textPost: "",
    //   },
    // };
  },
  methods: {
    onFileChange(event) {
      this.state.image = event.target.files[0];
    },
    async SendPost() {

      this.isLoading = true;

      this.v$.$validate();

      const toast = useToast();
      try {
        let userId = this.$store.state.user.userId;
        console.log(this.state.title);
        console.log(this.state.image);
        console.log(this.state.textPost);

        const formData = new FormData();

        formData.append("title", this.state.title);
        formData.append("image", this.state.image);
        formData.append("description", this.state.textPost);

        let response = await PostService.createPost(formData, userId);

        if (response) {
          this.isLoading = true;
          toast.success("Post create Successfully.", {
            position: POSITION.TOP_CENTER,
            timeout: 2000
          });
          // this.isLoading = true;
          return this.$router.push("/home");

        } else {
          this.isLoading = false;
          toast.error("Post don't create.");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
</style>
