<script lang="ts" setup>
interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

<template>
  <div class="page-heading">
    <div class="page-heading__wrapper">
      <h1 class="page-heading__title">{{ $t(title) }}</h1>
      <div class="page-heading__subtitle">
        {{ $t(subtitle) }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-heading {
  // .page-heading__wrapper

  &__wrapper {
    @apply relative -mx-16 border-y border-solid border-dark-100 bg-dark-50 px-16 py-14 max-lg:py-10;
  }

  // .page-heading__title

  &__title {
  }

  // .page-heading__subtitle

  &__subtitle {
    @apply right-16 top-0 py-5 text-dark-400 max-lg:py-2 lg:absolute;
  }
}
</style>
