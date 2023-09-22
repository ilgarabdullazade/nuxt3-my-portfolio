<script setup lang="ts">
import type { Technology } from '~/types'

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
        v-for="technology in technologies"
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
    @apply mb-3;
  }

  // .project-technology__list

  &__list {
    @apply flex flex-wrap gap-2;
  }

  // .project-technology__item

  &__item {
    @apply py-1 px-2 bg-background border-2 border-solid border-dark-100 rounded-md font-medium;
  }
}
</style>
