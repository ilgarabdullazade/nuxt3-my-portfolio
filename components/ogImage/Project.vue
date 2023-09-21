<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  title: String,
  image: String,
})

const { public: publicEnv } = useRuntimeConfig()
const { ogImage } = useSiteConfig()
</script>

<template>
  <div class="og-project">
    <div class="og-project__wrapper">
      <div class="og-project__circle">
        <NuxtImg
          class="og-project__img"
          :src="`${publicEnv.apiBase}/${image}`"
          height="640"
        />
      </div>
      <div class="og-project__body">
        <div class="og-project__context">
          <h1 class="og-project__title">
            {{ title }}
          </h1>
          <div class="og-project__caption og-owner">
            <div class="og-owner__wrapper">
              <div class="og-owner__avatar">
                <NuxtImg
                  class="og-owner__image"
                  :src="`${ogImage}`"
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
  </div>
</template>

<style scoped lang="scss">
* {
  @apply box-border;
}
.og-project {
  @apply w-full relative bg-primary;
  // .og-project__wrapper

  &__wrapper {
    @apply p-14 h-full box-border;
  }

  // .og-project__circles

  &__circle {
    @apply absolute left-1/2 w-[1030px] aspect-square bottom-0 border-4 border-solid rounded-full border-background flex items-end overflow-hidden;
  }

  // .og-project__img

  &__img {
    @apply h-[640px] aspect-square object-cover;
  }

  // .og-project__body

  &__body {
    @apply flex h-full;
  }

  // .og-project__context

  &__context {
    @apply flex flex-col justify-between h-full flex-shrink-0 w-1/2 pr-14;
  }
  // .og-project__title

  &__title {
    @apply text-background text-7xl my-4;
  }

  // .og-project__caption

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

  // .og-owner__image

  &__image {
    @apply w-full h-full;
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
