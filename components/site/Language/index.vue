<script lang="ts" setup>

import type { LocaleObject } from '@nuxtjs/i18n';

const isMobile = useMediaQuery('not all and (min-width: 1024px)')

const { locale, locales, setLocale } = useI18n()

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const pageLoading = ref(true)

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  pageLoading.value = false
})

const language = useCookie('language')

const changeLanguage = (code: string) => {
  setLocale(code)
  language.value = code
  showDropdown.value = false
}

const isLocaleObject = (obj: LocaleObject | string): obj is LocaleObject => {
  return typeof obj === 'object' && 'code' in obj
}

const selectedLocale = computed(() => {
  return locales.value.find((i: LocaleObject | string) => {
    return isLocaleObject(i) ? i.code === locale.value : false
  }) as LocaleObject
})

const availableLocales = computed(() => {
  return locales.value.filter((i: LocaleObject | string) => {
    return isLocaleObject(i) && i.code !== locale.value
  }) as LocaleObject[]
})
</script>

<template>
  <div class="language">
    <div class="language__dropdown">
      <SiteSkeletonItem v-if="pageLoading" class="language__skeleton" />
      <button v-else class="language__button" @click="toggleDropdown">
        {{
          isMobile
            ? selectedLocale.code.toLocaleUpperCase()
            : selectedLocale.name
        }}
        <Icon name="fa6-solid:angle-down" />
      </button>
      <Transition name="slide-up" mode="out-in">
        <ul v-show="showDropdown" class="language__menu">
          <li
            v-for="availableLocale in availableLocales"
            :key="availableLocale.code"
            class="language__item"
            @click="changeLanguage(availableLocale.code)"
          >
            {{ availableLocale.name }}
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.language {
  @apply relative;
  // .language__dropdown

  &__dropdown {
  }

  // .language__skeleton

  &__skeleton {
    @apply h-5 w-16 max-lg:w-9;
  }

  // .language__button

  &__button {
    @apply truncate font-semibold text-primary max-sm:max-w-[5rem];
  }
  // .language__menu

  &__menu {
    @apply absolute left-1/2 top-full mt-2 w-36 -translate-x-1/2 rounded-lg bg-background p-4 shadow-header max-lg:left-0;
  }

  // .language__item

  &__item {
    @apply w-full cursor-pointer py-1 text-left opacity-50 transition-opacity lg:hover:opacity-100;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  @apply transition-all duration-300;
}

.slide-up-enter-from,
.slide-up-leave-to {
  @apply translate-y-5 opacity-0;
}
</style>
