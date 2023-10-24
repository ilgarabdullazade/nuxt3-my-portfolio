<script lang="ts" setup>
import type { LocaleObject } from 'vue-i18n-routing';

const isMobile = useMediaQuery('not all and (min-width: 1024px)')

const { locale, locales, setLocale } = useI18n()

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

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
      <button class="language__button" @click="toggleDropdown">
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
            class="language__item"
            v-for="locale in availableLocales"
            :key="locale.code"
            @click="changeLanguage(locale.code)"
          >
            {{ locale.name }}
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

  // .language__button

  &__button {
    @apply text-primary font-semibold truncate max-sm:max-w-[5rem];
  }
  // .language__menu

  &__menu {
    @apply absolute bg-background left-1/2 -translate-x-1/2 top-full p-4 rounded-lg shadow-header mt-2 w-36 max-lg:left-0;
  }

  // .language__item

  &__item {
    @apply opacity-50 transition-opacity lg:hover:opacity-100 py-1 text-left w-full cursor-pointer;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  @apply transition-all duration-300;
}

.slide-up-enter-from,
.slide-up-leave-to {
  @apply opacity-0 translate-y-5;
}
</style>
