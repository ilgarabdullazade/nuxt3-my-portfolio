<script setup lang="ts">
import type { Technology } from '@/types'
import { ApiEndpoints } from '@/utils/apiEndpoints'

const { data: skills, status } = await useMyFetch<Technology[]>(
  ApiEndpoints.TECHNOLOGIES,
  {
    server: false,
    lazy: true,
  },
)
</script>

<template>
  <section v class="skills">
    <SiteSkeletonSection
      v-show="status === 'pending'"
      :items="1"
      item-height="h-20"
    />
    <div v-show="skills?.length" class="skills__wrapper">
      <SiteTitle class="skills__title">{{ $t('skills.title') }}</SiteTitle>
      <div class="skills__body">
        <Swiper
          class="skills__swiper"
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="3"
          :slides-per-group="3"
          :space-between="10"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :pagination="{
            el: '.skills__pagination',
            clickable: true,
          }"
          :breakpoints="{
            '480': {
              slidesPerView: 4,
            },
            '768': {
              slidesPerView: 6,
            },
            '1024': {
              slidesPerView: 8,
            },
          }"
        >
          <SwiperSlide
            v-for="skill of skills"
            :key="skill.name"
            class="skills__slide"
          >
            <HomeSkillsItem :skill="skill" class="skills__item" />
          </SwiperSlide>
        </Swiper>
        <div
          class="skills__pagination swiper-pagination swiper-pagination-line"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  // .skills__wrapper

  &__wrapper {
  }

  // .skills__title

  &__title {
    @apply mb-7;
  }

  // .skills__body

  &__body {
    @apply relative pb-12;
  }

  // .skills__swiper

  &__swiper {
  }

  // .skills__slide

  &__slide {
  }

  // .skills__item

  &__item {
  }

  // .skills__pagination

  &__pagination {
  }
}
</style>
@/utils/apiEndpoints
