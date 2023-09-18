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
  @apply bg-background h-full min-h-screen;
  // .project-layout__container

  &__container {
    @apply container;
  }

  // .project-layout__main

  &__main {
    @apply pt-6 pb-14;
  }
}
</style>
