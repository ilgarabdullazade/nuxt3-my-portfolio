<script setup lang="ts">
import type { Technology } from '@/types'

interface Props {
  technologies: Technology[]
}

const { technologies } = defineProps<Props>()
</script>

<template>
  <div v-if="technologies.length" class="project-technology">
    <strong class="project-technology__title">{{
      $t('portfolio.technology')
    }}</strong>
    <ul class="project-technology__list">
      <li
        v-for="technology of technologies"
        :key="technology.name"
        class="project-technology__item"
      >
        {{ technology.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.project-technology {
  // .project-technology__title

  &__title {
    @apply mb-3 inline-block text-lg;
  }

  // .project-technology__list

  &__list {
    @apply flex flex-wrap gap-2;
  }

  // .project-technology__item

  &__item {
    @apply rounded-md border-2 border-solid border-dark-100 bg-background px-2 py-1 font-medium;
  }
}
</style>
