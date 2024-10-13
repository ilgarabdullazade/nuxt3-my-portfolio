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
    @apply flex h-full min-h-screen w-full lg:justify-center;
    @media (min-width: 1024px) {
      perspective: 1200px;
    }
  }

  // .layout__container

  &__container {
    @apply flex min-h-full w-full animate-flipInLeft flex-col bg-background px-16 pt-10 max-lg:overflow-x-hidden max-lg:px-10 max-lg:pt-14 max-sm:px-6 lg:m-9 lg:max-w-6xl lg:rounded-40 lg:shadow-container;
  }

  // .layout__header

  &__header {
    @apply pb-8 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:z-40 max-lg:px-4 max-lg:py-2.5;
    @apply max-lg:before:absolute max-lg:before:left-0 max-lg:before:top-0 max-lg:before:z-10 max-lg:before:h-full max-lg:before:w-full max-lg:before:bg-background max-lg:before:shadow-header;
  }

  // .layout__main

  &__main {
    @apply flex-1;
  }

  // .layout__footer

  &__footer {
  }
}
</style>
