<script lang="ts" setup></script>

<template>
  <div class="layout">
    <div class="layout__scroll">
      <div class="layout__container">
        <LayoutsHeader class="layout__header" />
        <main class="layout__main"><slot /></main>
        <LayoutsFooter class="layout__footer" />
      </div>
    </div>
    <ClientOnly><SiteScrollToTop /></ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @apply h-full;

  // .layout__scroll

  &__scroll {
    @apply w-full h-full min-h-full lg:justify-center flex lg:items-center;
    @media (min-width: 1024px) {
      perspective: 1200px;
    }
  }

  // .layout__container

  &__container {
    @apply flex max-lg:overflow-x-hidden lg:my-10 lg:mx-9 animate-flipInLeft min-h-full flex-col w-full px-16 max-lg:px-10 pt-10 max-lg:pt-14 max-sm:px-6 bg-background lg:rounded-40 lg:max-w-6xl lg:shadow-container;
  }

  // .layout__header

  &__header {
    @apply pb-8 max-lg:z-40 max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:py-2.5 max-lg:px-4;
    @apply max-lg:before:shadow-header max-lg:before:absolute max-lg:before:top-0 max-lg:before:left-0 max-lg:before:z-10 max-lg:before:h-full max-lg:before:w-full max-lg:before:bg-background;
  }

  // .layout__main

  &__main {
  }

  // .layout__footer

  &__footer {
  }
}
</style>
