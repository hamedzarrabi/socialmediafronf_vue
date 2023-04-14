<template>
  <div class="justify-center items-center w-full flex mt-[150px]" >
    <v-card>
      <v-tabs
          v-model="tab"
          bg-color="pink"
      >
        <v-tab value="one">Login</v-tab>
        <v-tab value="two">Signup</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <!--      Login   -->
          <v-window-item value="one">
            <div class="justify-center items-center w-full flex">
              <form class="w-full max-w-sm" @submit.prevent="login()">


                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-full-name">
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="signIn.email"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-full-name" type="email">
                  </div>
                </div>


                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-password">
                      Password
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="signIn.password"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-password" type="password" placeholder="******************">
                  </div>
                </div>

                <div class="md:flex md:items-center">
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <input
                        class="shadow bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit" value="Login">
                  </div>
                </div>
              </form>
            </div>
          </v-window-item>

          <!--        Signup     -->
          <v-window-item value="two">
            <div class="justify-center items-center w-full flex">
              <form class="w-full max-w-sm" @submit.prevent="register()">
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-full-name">
                      First Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="state.firstName"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-full-name" type="text">
                    <span v-if="v$.firstName.$error">
                      {{ v$.firstName.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-full-name">
                      Last Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="state.lastName"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-full-name" type="text">
                    <span v-if="v$.lastName.$error">
                      {{ v$.lastName.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-full-name">
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="state.email"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-full-name" type="email">
                    <span v-if="v$.email.$error">
                      {{ v$.email.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-full-name">
                      Birthday
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="state.dateOfBirth"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-full-name" type="date">
                    <span v-if="v$.dateOfBirth.$error">
                      {{ v$.dateOfBirth.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-full-name">
                      Image Profile
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input @change="onFileChange"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-full-name" type="file" accept="image/jpeg, image/png">
                    <span v-if="v$.imageProfile.$error">
                      {{ v$.imageProfile.$errors[0].$message }}
                    </span>
                  </div>
                </div>


                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-password">
                      Password
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="state.password.password"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-password" type="password" placeholder="******************">
                    <span v-if="v$.password.password.$error">
                      {{ v$.password.password.$errors[0].$message }}
                    </span>
                  </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                           for="inline-password">
                      Confirm Password
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input v-model="state.password.confirm"
                           class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                           id="inline-password" type="password" placeholder="******************">
                    <span v-if="v$.password.confirm.$error">
                      {{ v$.password.confirm.$errors[0].$message }}
                    </span>
                  </div>
                </div>

                <div class="md:flex md:items-center">
                  <div class="md:w-1/3"></div>
                  <div class="md:w-2/3">
                    <input
                        class="shadow bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit" value="Signup">
                  </div>
                </div>
              </form>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {UserService} from '@/server/UserService.js';
import {mapState, mapActions, mapGetters} from 'vuex';
import {POSITION, useToast} from "vue-toastification";
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, sameAs, minLength, required } from "@vuelidate/validators";

export default {

  setup() {
    const state = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: {
        password : '',
        confirm : ''
      },
      imageProfile: null,
      dateOfBirth: null
    });

    const rules = computed(() => {
      return {
        firstName : {required, minLength : minLength(3)},
        lastName : {required, minLength : minLength(3)},
        email : {required, email},
        password : {
          password : {required, minLength : minLength(5)},
          confirm : {required, sameAs : sameAs(state.password.password)}
        },
        imageProfile : {required},
        dateOfBirth : {required}
      }
    });

    const v$ = useVuelidate(rules, state);

    return {
      state, v$
    }
  },

  data() {
    return {
      tab: null,
      // userDetail: {
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   password: '',
      //   imageProfile: null,
      //   dateOfBirth: null
      // },
      signIn: {
        email: '',
        password: ''
      },
      user: {
        firstName: '',
        lastName: '',
        role: ''
      }
    }
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['setUser']),
    onFileChange(event) {
      this.state.imageProfile = event.target.files[0];
    },
    async login() {
      const toast = useToast();
      try {
        let response = await UserService.login(this.signIn);
        if (response) {

          const accessToken = response.data.token;
          localStorage.setItem("accessToken", accessToken);

          const roles = response.data.roles.map(role => role.name);

          const user = {
            email: response.data.email,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            roles: roles[0],
            userId: response.data.userId,
            imageProfile: response.data.imageProfile,
            dateOfBirth: response.data.dateOfBirth
          };

          await this.setUser(user);
          this.$store.state.isLoggedIn = true;

          console.log(response);

          return this.$router.push("/home");
        } else {
          toast.error("Error in the login")
          return this.$router.push("/signup");
        }
      } catch (error) {
        toast.error("Username or Password is not correct!", {
          timeout: 2000,
          position: POSITION.TOP_CENTER
        })
        console.log("error");
        console.log(error);
      }
    },

    async register() {

      this.v$.$validate();
      const formData = new FormData();
      const toast = useToast();

      formData.append("firstName", this.state.firstName);
      formData.append("lastName", this.state.lastName);
      formData.append("password", this.state.password.password);
      formData.append("email", this.state.email);
      formData.append("imageProfile", this.state.imageProfile);
      formData.append("dateOfBirth", this.state.dateOfBirth);



      try {
        let response = await UserService.register(formData);

        if (response) {
          toast.success("Register is successfully.")
          return this.$router.push("/home");
        } else {
          toast.error("You have a problem")
          return this.$router.push("/");
        }
      } catch (error) {
        toast.error("This email has already been registered!")
        console.log(error);
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 50%;
  margin-top: 20px;
  margin-left: 200px;
  text-align: center;
}
</style>