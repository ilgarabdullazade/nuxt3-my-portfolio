<script lang="ts" setup>
import type { Experience } from '~/types';

const { data: experiences } = await useMyFetch<Experience[]>(
  ApiEndpoints.EXPERIENCE,
)
</script>

<template>
  <section v-if="experiences?.length" class="experience">
    <div class="experience__wrapper">
      <SiteTitle class="experience__title">{{
        $t('experience.title')
      }}</SiteTitle>
      <div class="experience__body">
        <HomeExperienceItem
          v-for="experience in experiences"
          :key="experience.period"
          :experience="experience"
          class="experience__item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.experience {
  // .experience__wrapper

  &__wrapper {
  }

  // .experience__title

  &__title {
    @apply mb-7;
  }

  // .experience__body

  &__body {
  }

  // .experience__item

  &__item {
  }
}
</style>
