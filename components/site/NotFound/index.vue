<script setup lang="ts">
interface Props {
  title: String
  caption: String
}
const { title, caption } = defineProps<Props>()
</script>

<template>
  <div class="empty-block">
    <div class="empty-block__wrapper">
      <h3 class="empty-block__title">{{ $t(title) }}</h3>
      <span class="empty-block__text">{{ $t(caption) }}</span>
      <SiteButton intent="primary" class="empty-block__button">
        {{ $t('error.button') }}
      </SiteButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty-block {
  // .empty-block__wrapper

  &__wrapper {
    @apply pt-20 pb-36 flex flex-col items-center justify-center text-center gap-5 max-w-xl mx-auto max-lg:gap-3 max-lg:pt-24 max-lg:pb-32;
  }

  // .empty-block__title

  &__title {
    @apply text-4xl max-lg:text-2xl;
  }

  // .empty-block__text

  &__text {
    @apply text-base text-dark-300 max-lg:text-sm;
  }

  // .empty-block__button

  &__button {
    @apply mt-3;
  }
}
</style>
