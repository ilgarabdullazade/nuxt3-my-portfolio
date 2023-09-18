<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
})
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
    @apply relative bg-dark-50 border-y border-solid border-dark-100 py-14 px-16 -mx-16 max-lg:py-10;
  }

  // .page-heading__title

  &__title {
  }

  // .page-heading__subtitle

  &__subtitle {
    @apply lg:absolute top-0 right-16 text-dark-400 py-5 max-lg:py-2;
  }
}
</style>
