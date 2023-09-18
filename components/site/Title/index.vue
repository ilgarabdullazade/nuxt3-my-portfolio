<script lang="ts" setup></script>

<template>
  <h2 class="title"><slot /></h2>
</template>

<style lang="scss" scoped>
.title {
  @apply relative inline-block pb-2;
  @apply before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:bg-dark-50;
  @apply after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-9 after:bg-primary;
}
</style>
