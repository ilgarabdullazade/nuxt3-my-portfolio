<script setup lang="ts">
const localePath = useLocalePath()

interface Props {
  title: string
  caption: string
}
const { title, caption } = defineProps<Props>()
</script>

<template>
  <div class="empty-block">
    <div class="empty-block__wrapper">
      <h3 class="empty-block__title">{{ $t(title) }}</h3>
      <span class="empty-block__text">{{ $t(caption) }}</span>
      <SiteButton
        :to="localePath('/')"
        intent="primary"
        class="empty-block__button"
      >
        {{ $t('error.button') }}
      </SiteButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.empty-block {
  // .empty-block__wrapper

  &__wrapper {
    @apply mx-auto flex max-w-xl flex-col items-center justify-center gap-5 pb-36 pt-20 text-center max-lg:gap-3 max-lg:pb-32 max-lg:pt-24;
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
