// plugins/axios.js
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: "http://localhost:4000/", // Ganti dengan URL API Anda
  });

  // Tambahkan instance Axios ke konteks Nuxt
  nuxtApp.provide("axios", instance);
});
