<script lang="ts" setup>
import mainBg from '/images/main_bg.png'

const { parallaxStyle } = useParallaxBackground()
</script>

<template>
  <div
    class="parallax-background"
    :style="{
      ...parallaxStyle,
      backgroundImage: `url(${mainBg})`,
    }"
  ></div>
</template>

<style lang="scss" scoped>
.parallax-background {
  @apply fixed w-auto h-auto -top-5 -left-5 -right-5 -bottom-5 transition-all duration-0 bg-cover bg-no-repeat -z-10;
}
</style>
