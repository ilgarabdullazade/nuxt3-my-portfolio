<script lang="ts" setup>
import type { Testimonial } from '@/types'

interface Props {
  testimonial: Testimonial
}

const { testimonial } = defineProps<Props>()

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div class="testimonial-item">
    <div class="testimonial-item__wrapper">
      <div class="testimonial-item__picture">
        <NuxtPicture
          :src="`${publicEnv.apiBase}/${testimonial.image}`"
          :alt="testimonial.full_name"
          width="80"
          height="80"
        />
      </div>
      <div class="testimonial-item__content">
        <p class="testimonial-item__text">
          {{ testimonial.about }}
        </p>
        <div class="testimonial-item__author">
          <b class="testimonial-item__author--name">
            {{ testimonial.full_name }}
          </b>
          <p class="testimonial-item__author--firm">
            {{ testimonial.profession }}
          </p>
        </div>
        <div class="testimonial-item__icon-small">
          <Icon name="fa6-solid:quote-left" />
        </div>
        <div class="testimonial-item__icon-big">
          <Icon name="fa6-solid:quote-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonial-item {
  @apply relative z-10;
  // .testimonial-item__wrapper

  &__wrapper {
    @apply p-8 max-lg:p-6;
  }

  // .testimonial-item__content

  &__content {
    @apply relative rounded-lg border-2 border-solid border-dark-100 bg-background pb-5 pl-14 pr-5 pt-7;
  }

  // .testimonial-item__picture

  &__picture {
    @apply absolute left-0 top-0 z-10 aspect-square h-20 w-20 overflow-hidden rounded-full max-lg:h-16 max-lg:w-16;
  }

  // .testimonial-item__text

  &__text {
    @apply mb-2.5 italic;
  }

  // .testimonial-item__author

  &__author {
    @apply text-xs;
  }

  // .testimonial-item__author--name

  &__author--name {
    @apply mb-0.5;
  }

  // .testimonial-item__author--firm

  &__author--firm {
    @apply text-dark-300;
  }

  // .testimonial-item__icon-small

  &__icon-small {
    @apply absolute bottom-10 left-5 text-2xl text-dark-100;
  }

  // .testimonial-item__icon-big

  &__icon-big {
    @apply absolute -bottom-6 -right-6 -z-10 text-5xl text-dark-50;
  }
}
</style>
