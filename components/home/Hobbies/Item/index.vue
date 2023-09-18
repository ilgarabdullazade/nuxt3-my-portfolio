<script lang="ts" setup>
import type { Hobby } from '~/types'

interface Props {
  hobby: Hobby
}
const { hobby } = defineProps<Props>()
</script>

<template>
  <div class="hobby-item">
    <div class="hobby-item__wrapper">
      <div class="hobby-item__icon">
        <Icon :name="hobby.icon" />
      </div>
      <div class="hobby-item__info">
        <h3 class="hobby-item__title">{{ hobby.title }}</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hobby-item {
  // .hobby-item__wrapper

  &__wrapper {
    @apply lg:hover:-translate-y-1 lg:hover:shadow-card transition-all rounded-xl flex flex-col justify-center items-center gap-4 p-6 text-center border-2 border-solid border-dark-100;
  }

  // .hobby-item__icon

  &__icon {
    @apply flex text-5xl text-primary;
  }

  // .hobby-item__info

  &__info {
  }

  // .hobby-item__title

  &__title {
  }
}
</style>
