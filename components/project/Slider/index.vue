<script setup lang="ts">
import type { GalleryImage } from '~/types'
const { public: publicEnv } = useRuntimeConfig()

interface Props {
  title: string
  gallery: GalleryImage[]
}
const { title, gallery } = defineProps<Props>()

const onSwiperInit = (swiper: any) => {
  const { initDOM } = useAfterOutIn(() => {
    swiper.pagination.enable()
  })
  initDOM()
}
</script>

<template>
  <Swiper
    v-if="gallery.length"
    class="project-slider"
    @swiper="onSwiperInit"
    :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
    :slides-per-view="1"
    :space-between="16"
    :pagination="{
      el: '.project-slider__pagination',
      clickable: true,
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
  >
    <SwiperSlide
      class="project-slider__slide"
      v-for="item in gallery"
      :key="item.image"
    >
      <NuxtImg
        class="project-slider__img"
        :src="`${publicEnv.apiBase}/${item.image}`"
        :alt="title"
        :title="title"
      />
    </SwiperSlide>
    <button
      class="project-slider__nav-btn project-slider__nav-btn--next swiper-button-next"
    ></button>
    <button
      class="project-slider__nav-btn project-slider__nav-btn--prev swiper-button-prev"
    ></button>
    <div
      class="project-slider__pagination swiper-pagination swiper-pagination-portfolio"
    ></div>
  </Swiper>
</template>

<style lang="scss" scoped>
.project-slider {
  @apply w-full;
  &:hover {
    .project-slider__nav-btn--prev {
      @apply translate-x-0;
    }

    .project-slider__nav-btn--next {
      @apply translate-x-0;
    }
  }
  // .project-slider__slide

  &__slide {
    @apply aspect-video;
  }
  // .project-slider__img

  &__img {
    @apply w-full;
  }
  // .project-slider__nav-btn

  &__nav-btn {
    @apply w-12 h-12 text-xs bg-background text-dark-400 lg:hover:text-primary after:text-3xl transition-all;
  }

  // .project-slider__nav-btn--next

  &__nav-btn--next {
    @apply right-0 lg:translate-x-full after:content-['next'];
  }

  // .project-slider__nav-btn--prev

  &__nav-btn--prev {
    @apply left-0 lg:-translate-x-full after:content-['prev'];
  }
}
</style>
