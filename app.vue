<script lang="ts" setup>
const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
const { public: publicEnv } = useRuntimeConfig()

useSeoMeta({
  author: `${publicEnv.siteName}`,
  description: `An imaginative code architect from Azerbaijan, crafting digital wonders with creativity and precision.`,
  keywords:
    'Frontend Developer Baku, Flutter Developer Baku, Web Development Baku, Mobile App Development Baku, React Developer Baku, Vue.js Developer Baku, Next.js Developer Baku, Nuxt.js Developer Baku, Responsive Web Design Baku, Baku Web Developer, Baku Flutter App Developer, Frontend Development Services Baku, Flutter App Development Services Baku, Cross-Platform App Development Baku, Custom Website Development Baku, Frontend and Mobile App Development Projects Baku, Flutter, Frontend and Flutter Developer Portfolio, Web and Mobile Development Expertise Baku, Baku IT Professional, Baku Freelance Developer, Frontend Development in Azerbaijan, Flutter App Development in Azerbaijan,  Freelance Frontend Developer in Baku, Freelance Flutter Developer in Baku, Frontend and Flutter Development Consultation Baku',
  ogType: 'website',
  ogTitle: `${publicEnv.siteName}`,
  ogImage: `${publicEnv.siteUrl}/android-chrome-192x192.png`,
  ogDescription: `${publicEnv.siteName} - an imaginative code architect from Azerbaijan, crafting digital wonders with creativity and precision.`,
  ogImageHeight: '192',
  ogImageWidth: '192',
})
</script>

<template>
  <Body>
    <div class="app">
      <LayoutsParallaxBackground class="app__parallax" />
      <NuxtLayout class="app__layout">
        <NuxtPage
          :transition="{
            name: 'fade',
            mode: 'out-in',
            onBeforeEnter,
          }"
        />
      </NuxtLayout>
    </div>
  </Body>
</template>

<style lang="scss" scoped>
.app {
  // .app__parallax

  &__parallax {
    @apply max-lg:hidden;
  }

  // .app__layout

  &__layout {
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active,
.slide-enter-active,
.slide-leave-active {
  @apply transition-all duration-500;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0 blur-lg;
}

.slide-enter-from,
.slide-leave-to {
  @apply opacity-0 -translate-x-1/2;
}
</style>
