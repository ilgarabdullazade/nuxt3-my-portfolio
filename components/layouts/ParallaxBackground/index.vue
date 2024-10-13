<script lang="ts" setup>
import mainBg from '/images/main_bg.png'

const { parallaxStyle } = useParallaxBackground()

const img = useImage()
const backgroundImageStyles = computed(() => {
  const imgUrl = img(
    mainBg,
    { width: 2560, height: 1440 },
    {
      modifiers: {
        format: 'webp',
      },
    },
  )
  return {
    backgroundImage: `url(${imgUrl})`,
  }
})
</script>

<template>
  <ClientOnly>
    <div
      class="parallax-background"
      :style="{ ...parallaxStyle, ...backgroundImageStyles }"
    />
  </ClientOnly>
</template>

<style lang="scss" scoped>
.parallax-background {
  @apply fixed -bottom-5 -left-5 -right-5 -top-5 -z-10 h-auto w-auto bg-cover bg-no-repeat transition-all duration-0;
}
</style>
