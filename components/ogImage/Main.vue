<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  title: String,
  description: String,
})

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div class="og-main">
    <div class="og-main__wrapper">
      <div class="og-main__owner og-owner">
        <div class="og-owner__wrapper">
          <div class="og-owner__avatar">
            <NuxtImg
              class="og-owner__image"
              :src="`${publicEnv.apiBase}${ApiEndpoints.FREELANCER_AVATAR}`"
              width="256"
              height="256"
            />
          </div>
          <div class="og-owner__info">
            <div class="og-owner__name">
              {{ publicEnv.ownerName }}
              <span>{{ publicEnv.ownerLastName }}</span>
            </div>
            <div class="og-owner__description">
              {{ description }}
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
.og-main {
  @apply w-full relative bg-primary p-6;
  // .og-main__wrapper

  &__wrapper {
    @apply bg-background rounded-30 h-full flex items-center justify-center;
  }

  // .og-main__owner

  &__owner {
  }
}
.og-owner {
  // .og-owner__wrapper

  &__wrapper {
    @apply flex items-center gap-12 py-10 px-24;
  }

  // .og-owner__avatar

  &__avatar {
    @apply h-64 shrink-0 aspect-square border-[1rem] rounded-full border-solid border-background overflow-hidden shadow-avatar;
  }

  // .og-owner__image

  &__image {
    @apply w-full h-full;
  }

  // .og-owner__info

  &__info {
    @apply flex flex-col gap-4;
  }

  // .og-owner__name

  &__name {
    @apply text-6xl font-bold;
    span {
      @apply font-normal;
    }
  }

  // .og-owner__descrription

  &__description {
    @apply text-2xl text-dark-400;
  }
}
</style>
