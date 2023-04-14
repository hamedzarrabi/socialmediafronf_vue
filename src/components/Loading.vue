<template>

    <v-app dark :style="{opacity: isLoading ? 0.5 : 1}">
      <div class="container justify-center items-center flex">
        <img class="" src="/Infinity-1s-200px.gif" alt="">
      </div>
      <v-overlay :value="isLoading">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </v-overlay>
    </v-app>

</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    showLoader() {
      this.isLoading = true
    },
    hideLoader() {
      this.isLoading = false
    }
  }
}
</script>
