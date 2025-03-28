<script lang="ts" setup>
import type { Experience } from '@/types'

interface Props {
  experience: Experience
}

const { experience } = defineProps<Props>()

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div class="experience-item">
    <div class="experience-item__wrapper">
      <div class="experience-item__content">
        <div class="experience-item__info">
          <h3 class="experience-item__position">{{ experience.title }}</h3>
          <p class="experience-item__description">{{ experience.text }}</p>
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
        <NuxtPicture
          :src="`${publicEnv.apiBase}/${experience.image}`"
          :alt="experience.title"
          fit="contain"
          sizes="54px sm:40px"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-item {
  @apply relative overflow-hidden pb-10 last:pb-0;
  @apply max-sm:before:absolute max-sm:before:left-1/2 max-sm:before:top-0 max-sm:before:h-full max-sm:before:w-0.5 max-sm:before:-translate-x-1/2 max-sm:before:bg-primary;
  &:nth-child(even) {
    .experience-item__wrapper {
      @apply sm:flex-row-reverse;
    }
    .experience-item__content {
      @apply sm:flex-row-reverse;
    }
    .experience-item__icon {
      @apply sm:ml-10 sm:mr-16;
      @apply sm:after:left-full sm:after:right-auto;
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
    @apply relative z-0 flex h-20 w-full items-center justify-center rounded-t-xl bg-primary-400 p-3 sm:ml-16 sm:mr-10 sm:aspect-square sm:w-20 sm:rounded-full sm:p-5;
    @apply sm:before:absolute sm:before:left-1/2 sm:before:top-full sm:before:h-screen sm:before:w-0.5 sm:before:-translate-x-1/2 sm:before:bg-primary;
    @apply sm:after:absolute sm:after:right-full sm:after:top-1/2 sm:after:h-0.5 sm:after:w-full sm:after:-translate-y-1/2 sm:after:bg-primary;
    img {
      @apply h-full;
    }
  }

  // .experience-item__content

  &__content {
    @apply relative z-10 flex w-full rounded-b-xl border-2 border-solid border-dark-100 bg-background max-sm:flex-col-reverse sm:rounded-lg;
  }

  // .experience-item__company

  &__company {
    @apply flex shrink-0 flex-col items-center justify-center bg-dark-50 px-4 py-6 text-center max-sm:px-3 max-sm:py-4 sm:min-w-[9rem];
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
    @apply w-full px-8 py-6 max-sm:px-5 max-sm:py-4;
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
