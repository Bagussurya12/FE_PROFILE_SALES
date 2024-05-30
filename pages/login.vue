<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <v-card class="w-full max-w-sm">
      <h1>INI LOGIN</h1>
      <v-toolbar color="black" dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field label="Email" type="email" v-model="form.email" required></v-text-field>
          <v-text-field label="Password" type="password" v-model="form.password" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="black" @click="onSubmit">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("Login:", this.form);
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya tambahan di sini jika diperlukan */
</style>
