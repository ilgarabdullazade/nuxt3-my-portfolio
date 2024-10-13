<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'

const button = cva('button', {
  variants: {
    intent: {
      primary: 'button--primary',
      secondary: 'button--secondary',
    },
    size: {
      small: 'button--small',
      medium: 'button--medium',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type ButtonProps = VariantProps<typeof button>

withDefaults(
  defineProps<{
    intent: ButtonProps['intent']
    size?: ButtonProps['size']
    to?: string | null
  }>(),
  {
    intent: 'primary',
    size: 'medium',
    to: null,
  },
)
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="button({ intent, size })">
    <slot />
  </NuxtLink>
  <button v-else :class="button({ intent, size })">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply relative inline-block rounded-30 border-2 border-solid bg-background py-3 font-medium shadow-button transition-all disabled:opacity-60;

  &--primary {
    @apply border-primary text-dark-950 lg:hover:bg-primary lg:hover:text-background;
  }
  &--secondary {
    @apply border-dark-200 text-dark shadow-dark-200 lg:hover:bg-dark-200 lg:hover:text-dark-950;
  }
  &--small {
    @apply px-4 py-1.5;
  }
  &--medium {
    @apply px-8 py-2.5;
  }
}
</style>
