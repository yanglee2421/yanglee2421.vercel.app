import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@nuxt/ui"],
  runtimeConfig: {},
  nitro: {
    routeRules: {
      "/api/chat": {
        proxy: "https://spark-api-open.xf-yun.com/v1/chat/completions",
      },
    },
  },
});
