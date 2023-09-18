<script setup lang="ts">
interface Props {
  items?: number
  itemHeight?: string
}

const { items, itemHeight } = withDefaults(defineProps<Props>(), {
  items: 2,
  itemHeight: 'h-36',
})
</script>

<template>
  <div class="skeleton">
    <div class="skeleton__wrapper">
      <SiteSkeletonItem class="skeleton__title"></SiteSkeletonItem>
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
    @apply h-9 w-40  mb-7;
  }

  // .skeleton__body

  &__body {
    @apply grid gap-5;
  }
}
</style>
