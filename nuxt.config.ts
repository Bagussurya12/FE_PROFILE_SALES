// nuxt.config.ts
import axiosPlugin from "./plugins/axios.js";

export default defineNuxtConfig({
  ssr: false,
  components: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: "~/plugins/axios.js" },
    { src: "~/plugins/persistedState.js" },
    // { src: "~/plugins/axios.js" },
    // Other plugins...
  ],
  app: {
    head: {
      titleTemplate: "Pine Residence - %s",
      title: "Home",
    },
  },
  runtimeConfig: {
    currencyKey: process.env.API_KEY,
  },
});
