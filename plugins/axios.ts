// plugins/axios.ts
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const instance = axios.create({
    baseURL: process.env.API_URL || "http://localhost:3000",
  });

  nuxtApp.provide("axios", instance);
});
