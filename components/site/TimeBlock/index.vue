<script setup lang="ts"></script>

<template>
  <div class="time-block"><slot /></div>
</template>

<style lang="scss" scoped>
.time-block {
  @apply shrink-0 rounded-30 border-2 border-solid border-primary bg-background px-2.5 py-1 text-xs font-medium;
}
</style>
