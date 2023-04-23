// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/style.css"],
  app: {
    head: {
      charset: "utf-8",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [{ src: "https://kit.fontawesome.com/3ea79f7537.js" }],
    },
  },
  modules: ["@nuxt/content"],
});
