<script lang="ts" setup></script>

<template>
  <div class="project-layout">
    <div class="project-layout__container">
      <main class="project-layout__main"><slot /></main>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-layout {
  @apply h-full min-h-screen bg-background;
  // .project-layout__container

  &__container {
    @apply container;
  }

  // .project-layout__main

  &__main {
    @apply pb-14 pt-6;
  }
}
</style>
