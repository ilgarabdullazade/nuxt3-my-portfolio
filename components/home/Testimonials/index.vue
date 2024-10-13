<script lang="ts" setup>
import type { Testimonial } from '@/types'
import { ApiEndpoints } from '@/utils/apiEndpoints'

const { data: testimonials, pending } = await useMyFetch<Testimonial[]>(
  ApiEndpoints.TESTIMONIALS,
  {
    server: false,
    lazy: true,
  },
)
</script>

<template>
  <section class="testimonials">
    <SiteSkeletonSection v-if="pending" :items="2" />
    <div
      v-if="testimonials?.length"
      :class="{ hidden: pending }"
      class="testimonials__wrapper"
    >
      <SiteTitle class="testimonials__title">{{
        $t('testimonials.title')
      }}</SiteTitle>
      <div class="testimonials__body">
        <Swiper
          class="testimonials__swiper"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="1"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: false,
          }"
          :pagination="{
            el: '.testimonials__pagination',
            clickable: true,
          }"
          :breakpoints="{
            '1024': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }"
        >
          <SwiperSlide
            v-for="testimonial of testimonials"
            :key="testimonial.full_name"
            class="testimonials__slide"
          >
            <HomeTestimonialsItem
              :testimonial="testimonial"
              class="testimonials__item"
            />
          </SwiperSlide>
        </Swiper>
        <div
          class="testimonials__pagination swiper-pagination swiper-pagination-line"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  // .testimonials__wrapper

  &__wrapper {
  }

  // .testimonials__title

  &__title {
    @apply mb-7;
  }

  // .testimonials__body

  &__body {
    @apply relative pb-7;
  }

  // .testimonials__swiper

  &__swiper {
  }

  // .testimonials__slide

  &__slide {
  }

  // .testimonials__item

  &__item {
  }

  // .testimonials__pagination

  &__pagination {
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  @apply transition-all duration-300;
}

.slide-up-enter-from,
.slide-up-leave-to {
  @apply translate-y-5 opacity-0;
}
</style>
@/utils/apiEndpoints
