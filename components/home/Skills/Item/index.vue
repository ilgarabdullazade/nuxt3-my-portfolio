<script lang="ts" setup>
import type { Technology } from '@/types'
interface Props {
  skill: Technology
}
const { skill } = defineProps<Props>()

const { public: publicEnv } = useRuntimeConfig()

const isMobile = useMediaQuery('not all and (min-width: 1024px)')
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
            format="webp"
            height="128"
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
    @apply mx-auto flex aspect-square w-16 select-none;
    > img {
      @apply w-full;
    }
  }
}
</style>
