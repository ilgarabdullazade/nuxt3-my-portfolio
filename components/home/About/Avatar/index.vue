<script setup lang="ts">
import defaultAvatar from '/images/main_photo.jpg'

interface Props {
  avatar?: string
}
const { avatar } = defineProps<Props>()

const { parallaxStyle } = useParallaxBackground()

const img = useImage()
const backgroundImageStyles = computed(() => {
  const imgUrl = img(avatar ?? defaultAvatar, { width: 300, height: 300 })
  return {
    backgroundImage: `url(${imgUrl})`,
  }
})
</script>

<template>
  <div class="about-avatar">
    <div class="about-avatar__wrapper">
      <div
        class="about-avatar__image"
        :style="{ ...parallaxStyle, ...backgroundImageStyles }"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-avatar {
  // .about-avatar__wrapper

  &__wrapper {
    @apply relative h-full aspect-square border-[1.125rem] rounded-full border-solid border-background overflow-hidden shadow-avatar;
  }

  // .about-avatar__image

  &__image {
    @apply absolute w-auto h-auto -top-5 -left-5 -right-5 -bottom-5 transition-all duration-0 bg-cover bg-no-repeat;
  }
}
</style>
