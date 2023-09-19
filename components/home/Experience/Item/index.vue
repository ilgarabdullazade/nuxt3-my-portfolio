<script lang="ts" setup>
import type { Experience } from '~/types'
const { public: publicEnv } = useRuntimeConfig()

interface Props {
  experience: Experience
}
const { experience } = defineProps<Props>()
</script>

<template>
  <div class="experience-item">
    <div class="experience-item__wrapper">
      <div class="experience-item__content">
        <div class="experience-item__info">
          <h3 class="experience-item__position">{{ experience.title }}</h3>
          <p class="experience-item__description">>{{ experience.text }}</p>
        </div>
        <div class="experience-item__company">
          <h4 class="experience-item__company--name">
            {{ experience.sub_title }}
          </h4>
          <SiteTimeBlock class="experience-item__company--date">{{
            experience.period
          }}</SiteTimeBlock>
        </div>
      </div>
      <div class="experience-item__icon">
        <NuxtImg
          :src="`${publicEnv.apiBase}/${experience.image}`"
          :alt="experience.title"
          fit="contain"
          width="40"
          height="40"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-item {
  @apply relative pb-10 last:pb-0 overflow-hidden;
  @apply max-sm:before:absolute max-sm:before:top-0 max-sm:before:h-full max-sm:before:left-1/2 max-sm:before:w-0.5 max-sm:before:-translate-x-1/2 max-sm:before:bg-primary;
  &:nth-child(even) {
    .experience-item__wrapper {
      @apply sm:flex-row-reverse;
    }
    .experience-item__content {
      @apply sm:flex-row-reverse;
    }
    .experience-item__icon {
      @apply sm:ml-10 sm:mr-16;
      @apply sm:after:right-auto sm:after:left-full;
    }
  }
  &:last-child {
    .experience-item__icon {
      @apply before:hidden;
    }
  }
  // .experience-item__wrapper

  &__wrapper {
    @apply flex items-center max-sm:flex-col-reverse;
  }

  // .experience-item__icon

  &__icon {
    @apply relative z-0 flex rounded-t-xl items-center justify-center p-4 sm:p-5 sm:mr-10 sm:ml-16 bg-primary-400 sm:rounded-full w-full sm:w-20 h-20 sm:aspect-square;
    @apply sm:before:absolute sm:before:top-full sm:before:h-screen sm:before:left-1/2 sm:before:w-0.5 sm:before:-translate-x-1/2 sm:before:bg-primary;
    @apply sm:after:absolute sm:after:top-1/2 sm:after:h-0.5 sm:after:right-full sm:after:w-full sm:after:-translate-y-1/2 sm:after:bg-primary;
    img {
      @apply h-full;
    }
  }

  // .experience-item__content

  &__content {
    @apply relative z-10 flex w-full max-sm:flex-col-reverse sm:rounded-lg rounded-b-xl border-2 border-solid bg-background border-dark-100;
  }

  // .experience-item__company

  &__company {
    @apply bg-dark-50 py-6 px-4 max-sm:py-4 max-sm:px-3 sm:w-36 shrink-0 flex flex-col justify-center items-center text-center;
  }

  // .experience-item__company--name

  &__company--name {
    @apply mb-2 text-base text-dark-600;
  }

  // .experience-item__company--date

  &__company--date {
  }

  // .experience-item__info

  &__info {
    @apply py-6 px-8 w-full max-sm:py-4 max-sm:px-5;
  }

  // .experience-item__position

  &__position {
    @apply mb-1.5;
  }

  // .experience-item__description

  &__description {
  }
}
</style>
