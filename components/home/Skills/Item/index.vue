<script lang="ts" setup>
import type { Technology } from '~/types'
const isMobile = useMediaQuery('not all and (min-width: 1024px)')
const { public: publicEnv } = useRuntimeConfig()

interface Props {
  skill: Technology
}
const { skill } = defineProps<Props>()
</script>

<template>
  <div>
    <div class="skill-item">
      <div class="skill-item__wrapper">
        <div
          v-tooltip.bottom="{
            theme: 'tooltip',
            content: `${skill.name}`,
            disabled: isMobile,
          }"
          class="skill-item__image"
        >
          <NuxtImg
            :src="`${publicEnv.apiBase}/${skill.logo}`"
            :alt="skill.name"
            fit="contain"
            width="64"
            height="64"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skill-item {
  // .skill-item__wrapper

  &__wrapper {
    @apply p-2;
  }

  // .skill-item__image

  &__image {
    @apply lg:grayscale select-none flex w-16 aspect-square mx-auto lg:lg:hover:grayscale-0 lg:transition-all;
  }
}
</style>
