<script lang="ts" setup>
import type { WhatIDO } from '@/types'

interface Props {
  execute: WhatIDO
}
const { execute } = defineProps<Props>()
</script>

<template>
  <div class="execute-item">
    <div class="execute-item__wrapper">
      <div class="execute-item__icon">
        <Icon :name="execute.icon" />
      </div>
      <div class="execute-item__info">
        <h3 class="execute-item__title">{{ execute.title }}</h3>
        <p class="execute-item__text">
          {{ execute.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.execute-item {
  // .execute-item__wrapper

  &__wrapper {
    @apply flex gap-5;
  }

  // .execute-item__icon

  &__icon {
    @apply flex text-5xl text-primary;
  }

  // .execute-item__info

  &__info {
    @apply flex flex-col gap-1 sm:pr-3;
  }

  // .execute-item__title

  &__title {
  }

  // .execute-item__text

  &__text {
  }
}
</style>
