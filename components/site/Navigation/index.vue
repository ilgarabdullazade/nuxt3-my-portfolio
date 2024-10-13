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
  (newValue) => {
    if (newValue) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  },
)

watch(
  () => route.fullPath,
  () => {
    showMenu.value = false
  },
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
        <li class="navigation__item--divider" />
      </ul>
      <SiteSocial v-show="isMobile" class="navigation__social" />
    </div>

    <button
      class="navigation__burger navigation-burger"
      aria-label="Open Navigation Menu"
      @click="toggleMenu"
    >
      <div
        class="navigation-burger__wrapper"
        :class="{ 'menu-open': showMenu }"
      >
        <span />
        <span />
        <span />
      </div>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  // .navigation__body

  &__body {
    @apply max-lg:fixed max-lg:-right-full max-lg:top-0 max-lg:flex max-lg:h-screen max-lg:w-full max-lg:max-w-xs max-lg:flex-col max-lg:pb-10 max-lg:pt-14 max-lg:opacity-0 max-lg:shadow-menu max-lg:transition-all;
    @apply max-lg:before:absolute max-lg:before:right-0 max-lg:before:top-0 max-lg:before:-z-10 max-lg:before:h-full max-lg:before:w-full max-lg:before:bg-background;
    &.menu-open {
      @apply max-lg:right-0 max-lg:opacity-100;
    }
  }
  // .navigation__list

  &__list {
    @apply flex items-center max-lg:flex-col max-lg:items-stretch max-lg:divide-y max-lg:divide-dark-100 lg:-mx-5;
  }

  // .navigation__item

  &__item {
    &--divider {
      @apply hidden h-[1px] w-full bg-dark-100 max-lg:block;
    }
  }

  // .navigation__link

  &__link {
    @apply inline-flex w-full px-5 py-4 opacity-60 transition-opacity max-lg:px-6 max-lg:py-3 lg:hover:opacity-100;
    &.router-link-exact-active {
      @apply opacity-100;
    }
  }

  // .navigation__burger

  &__burger {
    @apply relative z-10 hidden max-lg:block;
  }

  // .navigation__social

  &__social {
    @apply mt-5 flex items-start px-4;
  }
}

.navigation-burger {
  @apply -m-4 p-4;
  // .navigation-burger__wrapper

  &__wrapper {
    @apply relative h-5 w-5;
    &.menu-open {
      @apply [&>*:nth-child(2)]:scale-0;
      @apply [&>*:nth-child(1)]:translate-y-0 [&>*:nth-child(1)]:rotate-45;
      @apply [&>*:nth-child(3)]:translate-y-0 [&>*:nth-child(3)]:-rotate-45;
    }
    span {
      @apply absolute top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-dark-950 transition-all;
      @apply first:-translate-y-2;
      @apply last:translate-y-1.5;
    }
  }
}
</style>
