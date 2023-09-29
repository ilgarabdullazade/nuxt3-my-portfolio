<script lang="ts" setup>
import type { SeoInfo } from './types'

const { finalizePendingLocaleChange } = useI18n()

const onBeforeEnter = async () => {
  await finalizePendingLocaleChange()
}
const { public: publicEnv } = useRuntimeConfig()

const { data: seoInfo } = await useMyFetch<SeoInfo>(ApiEndpoints.GET_SEO)

const { locale } = useI18n()

const language = useCookie('language')

language.value = locale.value

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})

useSeoMeta({
  author: `${publicEnv.ownerName} ${publicEnv.ownerLastName}`,
  description: seoInfo.value?.meta_description,
  keywords: seoInfo.value?.meta_keywords,
  ogType: 'website',
  ogDescription: seoInfo.value?.meta_description,
})

defineOgImage({
  component: 'Main',
  description: seoInfo.value?.meta_description,
})
</script>

<template>
  <Html :lang="i18nHead.htmlAttrs!.lang" :dir="i18nHead.htmlAttrs!.dir">
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
  </Html>
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
