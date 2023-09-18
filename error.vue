<script setup lang="ts">
const { error } = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="error-page__wrapper">
        <b class="error-page__title">{{ error?.statusCode }}</b>
        <p class="error-page__subtitle">
          {{
            error?.statusCode === 404 ? $t('error.subtitle') : error?.message
          }}
        </p>
        <SiteButton
          intent="primary"
          class="error-page__button"
          @click="handleError"
        >
          {{ $t('error.button') }}
        </SiteButton>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.error-page {
  // .error-page__wrapper

  &__wrapper {
    @apply mt-20 mb-32 flex justify-center flex-col items-center;
  }
  // .error-page__title

  &__title {
    @apply text-dark-300 text-[10rem] mb-2;
  }

  // .error-page__subtitle

  &__subtitle {
    @apply mb-4 text-base;
  }

  // .error-page__button

  &__button {
  }
}
</style>
