<script setup lang="ts"></script>

<template>
  <div class="time-block"><slot /></div>
</template>

<style lang="scss" scoped>
.time-block {
  @apply text-xs font-medium bg-background px-2.5 py-1 border-2 border-solid border-primary rounded-30;
}
</style>
