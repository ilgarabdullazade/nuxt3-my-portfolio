<script setup lang="ts">
interface Props {
  items?: number
  itemHeight?: string
}

const { items = 2, itemHeight = 'h-36' } = defineProps<Props>()
</script>

<template>
  <div class="skeleton">
    <div class="skeleton__wrapper">
      <SiteSkeletonItem class="skeleton__title" />
      <div class="skeleton__body" :class="[`grid-cols-${items}`]">
        <SiteSkeletonItem
          v-for="i in items"
          :key="i"
          :class="`${itemHeight}`"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton {
  // .skeleton__wrapper

  &__wrapper {
  }

  // .skeleton__title

  &__title {
    @apply mb-7 h-9 w-40;
  }

  // .skeleton__body

  &__body {
    @apply grid gap-5;
  }
}
</style>
