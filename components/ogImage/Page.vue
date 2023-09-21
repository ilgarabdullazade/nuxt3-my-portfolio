<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  title: String,
})

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div class="og-page">
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
  @apply w-full relative bg-primary;
  // .og-page__wrapper

  &__wrapper {
    @apply p-14 h-full;
  }

  // .og-page__circles

  &__circles {
    @apply absolute left-1/2 w-[1030px] aspect-square bottom-0;
  }

  // .og-page__circle

  &__circle {
    @apply border-4 border-solid rounded-full border-background absolute flex items-center justify-center aspect-square;
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
    @apply flex flex-col justify-between h-full w-1/2;
  }
  // .og-page__title

  &__title {
    @apply text-background text-7xl my-4;
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
    @apply h-20 aspect-square border-4 rounded-full border-solid border-background overflow-hidden shadow-avatar;
  }

  // .og-owner__name

  &__name {
    @apply text-background text-4xl font-bold;
    span {
      @apply font-normal;
    }
  }
}
</style>
