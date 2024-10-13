<script setup lang="ts">
import type { AboutInfo } from '@/types'

interface Props {
  info: AboutInfo
}

const { info } = defineProps<Props>()

const { public: publicEnv } = useRuntimeConfig()

const localePath = useLocalePath()
</script>

<template>
  <div class="about-info">
    <div class="about-info__wrapper">
      <div class="about-info__position">
        <Swiper
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :loop="true"
          :grab-cursor="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
        >
          <SwiperSlide v-for="profession of info.profession" :key="profession">
            <span>{{ profession }}</span>
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 class="about-info__title">{{ info.full_name }}</h1>
      <p class="about-info__text">
        {{ info.about }}
      </p>
      <div class="about-info__buttons">
        <SiteButton
          :to="`${publicEnv.apiBase}/${info.cv}`"
          target="_blank"
          :download="info.cv"
          class="about-info__button"
          intent="primary"
        >
          {{ $t('about.download_cv') }}
        </SiteButton>
        <SiteButton
          :to="localePath('/contact')"
          class="about-info__button"
          intent="secondary"
          >{{ $t('navigation.contact') }}</SiteButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-info {
  // .about-info__wrapper

  &__wrapper {
    @apply flex flex-col max-lg:items-center max-lg:text-center;
  }

  // .about-info__position

  &__position {
    @apply mb-0.5 max-w-full text-base font-light text-dark-300 max-lg:mb-1.5;
  }

  // .about-info__title

  &__title {
    @apply mb-5;
  }

  // .about-info__text

  &__text {
    @apply mb-8 max-lg:mb-6;
  }

  // .about-info__buttons

  &__buttons {
    @apply flex items-center gap-2;
  }

  // .about-info__button

  &__button {
  }
}
</style>
