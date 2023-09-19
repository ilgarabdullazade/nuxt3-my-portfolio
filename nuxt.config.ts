// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    head: {
      templateParams: '%pageTitle %separator %siteName',
    },
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: process.env.NUXT_PUBLIC_SITE_NAME,
    defaultLocale: 'en',
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    'nuxt-icon',
    'floating-vue/nuxt',
    '@formkit/nuxt',
    'dayjs-nuxt',
    '@nuxtseo/module',
  ],
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },
  css: ['~/assets/scss/app.scss'],
  googleFonts: {
    families: {
      Raleway: {
        wght: [200, 300, 400, 500, 600, 700, 800],
        ital: [200, 300, 400, 500, 600, 700, 800],
      },
    },
    display: 'swap',
  },
  i18n: {
    skipSettingLocaleOnNavigate: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'English',
      },
      {
        code: 'az',
        iso: 'az-AZ',
        file: 'az-AZ.json',
        name: 'Azərbaycanca',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.json',
        name: 'Русский',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
  },
  swiper: {
    styleLang: 'scss',
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? '',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME ?? '',
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? '',
      apiHostName: process.env.NUXT_PUBLIC_API_HOST_NAME ?? '',
      iconLetter: process.env.NUXT_PUBLIC_ICON_LETTER ?? '',
      ownerName: process.env.NUXT_PUBLIC_OWNER_NAME ?? '',
      ownerLastName: process.env.NUXT_PUBLIC_OWNER_LAST_NAME ?? '',
    },
  },
  image: {
    domains: [process.env.NUXT_PUBLIC_API_BASE ?? ''],
    alias: {
      unsplash: process.env.NUXT_PUBLIC_API_BASE ?? '',
    },
  },
})
