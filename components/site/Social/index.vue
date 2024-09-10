<script lang="ts" setup>
import type { Social } from '~/types'
import { ApiEndpoints } from '~/utils/apiEndpoints'

const { data: socials } = await useMyFetch<Social[]>(ApiEndpoints.SOCIAL_LINKS)
</script>

<template>
  <div class="social">
    <ul v-if="socials?.length" class="social__list">
      <li v-for="social in socials" :key="social.url" class="social__item">
        <NuxtLink
          :to="social.url"
          class="social__link"
          target="_blank"
          :title="social.name"
        >
          <Icon :name="social.icon" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.social {
  // .social__list

  &__list {
    @apply flex flex-wrap items-center justify-center gap-1;
  }

  // .social__item

  &__item {
    @apply p-1;
  }

  // .social__link

  &__link {
    @apply flex aspect-square h-7 w-7 items-center justify-center rounded-full bg-primary-500 text-lg text-background transition-transform lg:hover:scale-110;
  }
}
</style>
