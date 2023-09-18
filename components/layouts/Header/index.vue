<script lang="ts" setup></script>

<template>
  <header class="header">
    <div class="header__wrapper">
      <SiteLogo class="header__logo" />
      <div class="header__leftside">
        <SiteNavigation class="header__navigation" />
        <SiteLanguage class="header__language" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply block w-full min-w-[360px];
  // .header__wrapper

  &__wrapper {
    @apply flex items-center justify-between gap-5 bg-background;
  }

  // .header__logo

  &__logo {
    @apply relative z-10;
  }

  // .header__leftside

  &__leftside {
    @apply flex items-center gap-10 max-lg:flex-row-reverse max-lg:gap-4;
  }

  // .header__navigation

  &__navigation {
  }

  // .header__language

  &__language {
    @apply z-20;
  }
}
</style>
