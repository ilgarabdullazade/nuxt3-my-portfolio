<script lang="ts" setup>
import type { Occupation } from '~/types'

interface Props {
  education: Occupation
}
const { education } = defineProps<Props>()
</script>

<template>
  <div class="education-item">
    <div class="education-item__wrapper">
      <div class="education-item__header">
        <SiteTimeBlock class="education-item__period">{{
          education.period
        }}</SiteTimeBlock>
        <span class="education-item__company">{{ education.title }}</span>
      </div>
      <h3 class="education-item__title">{{ education.sub_title }}</h3>
      <p class="education-item__text">
        {{ education.text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.education-item {
  &:first-child {
    .education-item__wrapper {
      @apply pt-0;
    }
  }
  // .education-item__wrapper

  &__wrapper {
    @apply relative pl-10 py-8 border-b-2 border-solid border-dark-50;
    @apply before:absolute before:bottom-0 before:left-4 before:h-full before:w-0.5 before:bg-dark-50;
  }

  // .education-item__header

  &__header {
    @apply relative flex gap-2 items-center mb-4;
  }

  // .education-item__period

  &__period {
    @apply -ml-10;
  }

  // .education-item__company

  &__company {
    @apply text-xs text-dark-400;
  }

  // .education-item__title

  &__title {
    @apply mb-1.5;
  }

  // .education-item__text

  &__text {
  }
}
</style>
