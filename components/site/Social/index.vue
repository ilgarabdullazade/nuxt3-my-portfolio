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
    @apply flex items-center justify-center flex-wrap gap-1;
  }

  // .social__item

  &__item {
    @apply p-1;
  }

  // .social__link

  &__link {
    @apply flex justify-center transition-transform items-center rounded-full w-7 h-7 aspect-square bg-primary-500 text-background text-lg lg:hover:scale-110;
  }
}
</style>
