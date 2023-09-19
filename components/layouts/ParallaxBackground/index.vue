<script lang="ts" setup>
import mainBg from '/images/main_bg.png'

const { parallaxStyle } = useParallaxBackground()

const img = useImage()
const backgroundImageStyles = computed(() => {
  const imgUrl = img(mainBg, { width: 2560, height: 1440 })
  return {
    backgroundImage: `url(${imgUrl})`,
  }
})
</script>

<template>
  <div
    class="parallax-background"
    :style="{ ...parallaxStyle, ...backgroundImageStyles }"
  ></div>
</template>

<style lang="scss" scoped>
.parallax-background {
  @apply fixed w-auto h-auto -top-5 -left-5 -right-5 -bottom-5 transition-all duration-0 bg-cover bg-no-repeat -z-10;
}
</style>
