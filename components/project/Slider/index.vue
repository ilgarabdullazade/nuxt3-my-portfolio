<script setup lang="ts">
import type { GalleryImage } from '@/types'

interface Props {
  title: string
  gallery: GalleryImage[]
}

const { title, gallery } = defineProps<Props>()

const { public: publicEnv } = useRuntimeConfig()

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSwiperInit = (swiper: any) => {
  const { initDOM } = useAfterOutIn(() => {
    swiper.pagination.enable()
    swiper.navigation.enable()
  })
  initDOM()
}
</script>

<template>
  <Swiper
    v-if="gallery.length"
    class="project-slider"
    :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
    :slides-per-view="1"
    :space-between="16"
    :pagination="{
      el: '.project-slider__pagination',
      clickable: true,
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    @swiper="onSwiperInit"
  >
    <SwiperSlide
      v-for="item of gallery"
      :key="item.image"
      class="project-slider__slide"
    >
      <NuxtPicture
        class="project-slider__img"
        :src="`${publicEnv.apiBase}/${item.image}`"
        :alt="title"
        :title="title"
        sizes="700px lg:1100px xl:900px 2xl:1280px"
        placeholder
      />
    </SwiperSlide>
    <button
      class="project-slider__nav-btn project-slider__nav-btn--next swiper-button-next"
    />
    <button
      class="project-slider__nav-btn project-slider__nav-btn--prev swiper-button-prev"
    />
    <div
      class="project-slider__pagination swiper-pagination swiper-pagination-portfolio"
    />
  </Swiper>
</template>

<style lang="scss" scoped>
.project-slider {
  @apply aspect-video w-full;
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
    @apply h-full w-full object-cover;
  }
  // .project-slider__nav-btn

  &__nav-btn {
    @apply h-12 w-12 bg-background text-xs text-dark-400 transition-all after:text-3xl lg:hover:text-primary;
  }

  // .project-slider__nav-btn--next

  &__nav-btn--next {
    @apply right-0 after:content-['next'] lg:translate-x-full;
  }

  // .project-slider__nav-btn--prev

  &__nav-btn--prev {
    @apply left-0 after:content-['prev'] lg:-translate-x-full;
  }
}
</style>
