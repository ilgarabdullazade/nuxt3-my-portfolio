<script lang="ts" setup>
const localePath = useLocalePath()
const route = useRoute()

const isMobile = useMediaQuery('not all and (min-width: 1024px)')

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

watch(
  () => showMenu.value,
  () => {
    showMenu.value
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  }
)

watch(
  () => route.fullPath,
  () => {
    showMenu.value = false
  }
)
</script>

<template>
  <div class="navigation">
    <div :class="{ 'menu-open': showMenu }" class="navigation__body">
      <ul class="navigation__list">
        <li class="navigation__item">
          <NuxtLink :to="localePath('/')" class="navigation__link">{{
            $t('navigation.about')
          }}</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink :to="localePath('/portfolio')" class="navigation__link">{{
            $t('navigation.portfolio')
          }}</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink :to="localePath('/contact')" class="navigation__link">{{
            $t('navigation.contact')
          }}</NuxtLink>
        </li>
        <li class="navigation__item--divider"></li>
      </ul>
      <SiteSocial v-if="isMobile" class="navigation__social"></SiteSocial>
    </div>

    <button
      @click="toggleMenu"
      class="navigation__burger navigation-burger"
      aria-label="Open Navigation Menu"
    >
      <div
        class="navigation-burger__wrapper"
        :class="{ 'menu-open': showMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  // .navigation__body

  &__body {
    @apply max-lg:flex max-lg:flex-col  max-lg:max-w-xs max-lg:fixed max-lg:transition-all max-lg:pt-14 max-lg:pb-10 max-lg:top-0 max-lg:-right-full max-lg:h-screen max-lg:w-full max-lg:opacity-0 max-lg:shadow-menu;
    @apply max-lg:before:absolute max-lg:before:top-0 max-lg:before:right-0 max-lg:before:-z-10 max-lg:before:h-full max-lg:before:w-full max-lg:before:bg-background;
    &.menu-open {
      @apply max-lg:right-0 max-lg:opacity-100;
    }
  }
  // .navigation__list

  &__list {
    @apply flex items-center max-lg:flex-col lg:-mx-5 max-lg:items-stretch max-lg:divide-y max-lg:divide-dark-100;
  }

  // .navigation__item

  &__item {
    &--divider {
      @apply h-[1px] w-full bg-dark-100 hidden max-lg:block;
    }
  }

  // .navigation__link

  &__link {
    @apply inline-flex w-full opacity-60 lg:hover:opacity-100 transition-opacity px-5 py-4 max-lg:py-3 max-lg:px-6;
    &.router-link-exact-active {
      @apply opacity-100;
    }
  }

  // .navigation__burger

  &__burger {
    @apply relative hidden max-lg:block z-10;
  }

  // .navigation__social

  &__social {
    @apply mt-5 flex items-start px-4;
  }
}

.navigation-burger {
  @apply p-4 -m-4;
  // .navigation-burger__wrapper

  &__wrapper {
    @apply relative w-5 h-5;
    &.menu-open {
      @apply [&>*:nth-child(2)]:scale-0;
      @apply [&>*:nth-child(1)]:translate-y-0  [&>*:nth-child(1)]:rotate-45;
      @apply [&>*:nth-child(3)]:translate-y-0 [&>*:nth-child(3)]:-rotate-45;
    }
    span {
      @apply absolute top-1/2 -translate-y-1/2 block h-0.5 w-full rounded-full bg-dark-950 transition-all;
      @apply first:-translate-y-2;
      @apply last:translate-y-1.5;
    }
  }
}
</style>
