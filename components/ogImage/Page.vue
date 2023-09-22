<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  title: { type: String, default: 'Og Image Template' },
})

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div :style="{ backgroundColor: publicEnv.sitePrimaryColor }" class="og-page">
    <div class="og-page__wrapper">
      <div class="og-page__circles">
        <div class="og-page__circle og-page__circle--big">
          <div class="og-page__circle og-page__circle--medium">
            <div class="og-page__circle og-page__circle--small"></div>
          </div>
        </div>
      </div>
      <div class="og-page__context">
        <h1 class="og-page__title">
          {{ title }}
        </h1>

        <div class="og-page__caption og-owner">
          <div class="og-owner__wrapper">
            <div class="og-owner__avatar">
              <NuxtImg
                class="og-owner__image"
                :src="`${publicEnv.apiBase}${ApiEndpoints.FREELANCER_AVATAR}`"
                width="80"
                height="80"
              />
            </div>
            <div class="og-owner__name">
              {{ publicEnv.ownerName }}
              <span>{{ publicEnv.ownerLastName }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  @apply box-border;
}
.og-page {
  @apply relative w-full;
  // .og-page__wrapper

  &__wrapper {
    @apply h-full p-14;
  }

  // .og-page__circles

  &__circles {
    @apply absolute left-1/2 w-[1030px] aspect-square bottom-0;
  }

  // .og-page__circle

  &__circle {
    @apply absolute flex items-center justify-center border-4 border-white border-solid rounded-full aspect-square;
  }

  // .og-page__circle--big

  &__circle--big {
    @apply w-[1030px];
  }

  // .og-page__circle--medium

  &__circle--medium {
    @apply w-[790px];
  }

  // .og-page__circle--small

  &__circle--small {
    @apply w-[550px];
  }

  // .og-page__context

  &__context {
    @apply flex flex-col justify-between w-1/2 h-full;
  }
  // .og-page__title

  &__title {
    @apply my-4 text-white text-7xl;
  }

  // .og-page__caption

  &__caption {
  }
}
.og-owner {
  // .og-owner__wrapper

  &__wrapper {
    @apply flex items-center gap-5;
  }

  // .og-owner__avatar

  &__avatar {
    @apply h-20 overflow-hidden border-4 border-white border-solid rounded-full aspect-square shadow-avatar;
  }

  // .og-owner__image

  &__image {
    @apply w-full h-full;
  }

  // .og-owner__name

  &__name {
    @apply text-4xl font-bold text-white;
    span {
      @apply font-normal;
    }
  }
}
</style>
