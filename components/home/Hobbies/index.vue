<script lang="ts" setup>
import type { Hobby } from '~/types'

const { data: hobbies } = await useMyFetch<Hobby[]>(ApiEndpoints.HOBBIES)
</script>

<template>
  <section v-if="hobbies?.length" class="hobbies">
    <div class="hobbies__wrapper">
      <SiteTitle class="hobbies__title">{{ $t('hobbies.title') }}</SiteTitle>
      <div class="hobbies__body">
        <HomeHobbiesItem
          v-for="hobby in hobbies"
          :key="hobby.icon"
          :hobby="hobby"
          class="hobbies__item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hobbies {
  // .hobbies__wrapper

  &__wrapper {
  }

  // .hobbies__title

  &__title {
    @apply mb-7;
  }

  // .hobbies__body

  &__body {
    @apply grid grid-cols-4 gap-7 max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-5;
  }

  // .hobbies__item

  &__item {
  }
}
</style>
