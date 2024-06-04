// nuxt.config.ts
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
  plugins: [{ src: "~/plugins/axios.ts" }],
  app: {
    head: {
      title: "Pine Residence",
    },
  },
});
