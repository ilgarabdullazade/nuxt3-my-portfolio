<script setup lang="ts">
import type { NuxtError } from '#app'

interface Props {
  error: NuxtError | null
}

defineProps<Props>()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="error-page__wrapper">
        <h4 class="error-page__title">{{ error?.statusCode }}</h4>
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
    @apply mb-32 mt-20 flex flex-col items-center justify-center;
  }
  // .error-page__title

  &__title {
    @apply mb-2 text-[10rem] leading-snug text-dark-300;
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
