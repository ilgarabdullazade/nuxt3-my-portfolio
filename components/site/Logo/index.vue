<script setup lang="ts">
const localePath = useLocalePath()

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <NuxtLink :to="localePath('/')" class="logo">
    <div class="logo__wrapper">
      <div class="logo__symbol">{{ publicEnv.iconLetter }}</div>
      <div class="logo__text">
        {{ publicEnv.ownerName }} <span>{{ publicEnv.ownerLastName }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.logo {
  @apply select-none;
  // .logo__wrapper

  &__wrapper {
    @apply flex items-center gap-2.5 max-lg:gap-2;
  }

  // .logo__symbol

  &__symbol {
    @apply flex aspect-square h-11 w-11 items-center justify-center rounded-full bg-primary text-[1.75rem] font-extrabold leading-[2.75rem] text-background;
    @apply max-lg:h-8 max-lg:w-8 max-lg:text-[1.125rem] max-lg:leading-[2rem];
  }

  // .logo__text

  &__text {
    @apply text-xl font-bold text-dark-950 max-lg:text-[1.125rem] max-lg:leading-[2rem];
    span {
      @apply font-normal;
    }
  }
}
</style>
