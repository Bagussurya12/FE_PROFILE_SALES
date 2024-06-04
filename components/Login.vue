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
        <form @submit.prevent="login" class="w-full">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 mb-2">Email:</label>
            <input v-model="email" type="email" id="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700 mb-2">Password:</label>
            <input v-model="password" type="password" id="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div>
          <button type="submit" class="w-full bg-Dark text-Hijau py-2 px-4 rounded-lg hover:bg-Hijau hover:text-Dark transition duration-300">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  middleware: ["unauthenticated"],
  head: {
    title: "Login",
  },
  data() {
    return {
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
    ...mapMutations("auth", {
      setFullName: "setFullname",
      setAccessToken: "setAccessToken",
      setRefreshToken: "setRefreshToken",
    }),
    storeWelcomeScreen() {
      localStorage.setItem("welcomeScreen", true);
    },
    login() {
      this.isDisable = true;
      console.log(this.form);
      this.$axios.$post('')
      // Implement your login logic here
      console.log(`Email: ${this.email}, Password: ${this.password}`);
    },
  },
};
</script>

<style scoped></style>
