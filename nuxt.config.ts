// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  nitro: {
    preset: "bun",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  builder: "vite",
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#292524' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@400;500;700&display=swap' }
      ]
    }
  }
});
