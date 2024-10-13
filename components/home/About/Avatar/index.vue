<script setup lang="ts">
interface Props {
  avatar: string | undefined
}

const { avatar } = defineProps<Props>()

const { public: publicEnv } = useRuntimeConfig()

const { parallaxStyle } = useParallaxBackground()

const img = useImage()
const backgroundImageStyles = computed(() => {
  const imgUrl = img(
    `${publicEnv.apiBase}/${avatar}`,
    {
      width: 600,
      height: 600,
    },
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
    @apply relative aspect-square h-full overflow-hidden rounded-full border-[1.125rem] border-solid border-background shadow-avatar;
  }

  // .about-avatar__image

  &__image {
    @apply absolute -bottom-5 -left-5 -right-5 -top-5 h-auto w-auto bg-cover bg-no-repeat transition-all duration-0;
  }
}
</style>
