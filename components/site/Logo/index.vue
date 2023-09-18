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
    @apply aspect-square w-11 h-11 bg-primary flex justify-center items-center rounded-full leading-[2.75rem] text-[1.75rem] font-extrabold text-background;
    @apply max-lg:w-8 max-lg:h-8 max-lg:leading-[2rem] max-lg:text-[1.125rem];
  }

  // .logo__text

  &__text {
    @apply text-dark-950 text-xl font-bold max-lg:leading-[2rem] max-lg:text-[1.125rem];
    span {
      @apply font-normal;
    }
  }
}
</style>
