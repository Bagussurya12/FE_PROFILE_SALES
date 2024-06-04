<template>
  <div class="min-h-screen flex items-center justify-center bg-Dark px-20 py-20">
    <div class="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-lg border border-Hijau border-xl shadow-lg overflow-hidden">
      <!-- Left Section -->
      <div class="flex flex-col items-center justify-center bg-Dark p-8 w-full md:w-1/3 lg:w-1/2">
        <img src="../assets/images/logo.svg" alt="Logo" class="w-32 h-32 mb-4" />
        <h1 class="text-2xl font-bold text-Hijau mb-2">Have A Nice Day 🤞</h1>
        <p class="text-gray-200">Enjoy your time here</p>
      </div>
      <!-- Right Section (Login Form) -->
      <div class="flex flex-col items-center justify-center w-full p-8 md:w-2/3 lg:w-1/2">
        <h2 class="text-4xl font-bold mb-6 text-gray-900">Login</h2>
        <form @submit.prevent="onSubmit" class="w-full">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 mb-2">Email:</label>
            <input v-model="form.email" type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 mb-2">Password:</label>
            <input v-model="form.password" type="password" id="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" class="w-full bg-Dark text-Hijau py-2 px-4 rounded-lg hover:bg-Hijau hover:text-Dark transition duration-300" :disabled="isDisable">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Login</span>
          </button>
        </form>
        <div v-if="isError" class="mt-4 text-red-500">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["unauthenticated"],
  head: {
    title: "Login",
  },
  data() {
    return {
      isLoading: false,
      isDisable: false,
      isError: false,
      message: "",
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.isLoading = true;

        const auth = await this.$axios.post("/login", this.form);

        this.isLoading = false;
        console.log(auth);
        this.$router.push("/dashboard");
        // this.$router.push({ name: "dashboard___" + this.$i18n.locale }); //Redirect To Home Page
      } catch (error) {
        this.isError = true;
        this.isDisable = false;

        this.message = error.response ? error.response.data.message : "SERVER_ERROR";
        this.isLoading = false;
        console.error(error);
      }
    },
  },
  mounted() {
    if (this.$route.params.message === "AUTH_REQUIRED") {
      this.message = this.$route.params.message;
      this.isError = true;
    }
  },
};
</script>

<style scoped></style>
