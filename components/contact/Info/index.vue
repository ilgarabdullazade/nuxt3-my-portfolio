<script setup lang="ts">
import type { UserData } from '~/types'

const { data: userData } = await useMyFetch<UserData>(
  ApiEndpoints.FREELANCER_INFO,
)
</script>

<template>
  <div v-if="userData" class="contact-info">
    <div class="contact-info__wrapper">
      <div class="contact-info__item">
        <div class="contact-info__item--icon">
          <Icon name="fa6-solid:mobile-screen-button" />
        </div>
        <div class="contact-info__item--content">
          <NuxtLink :to="`tel:${userData.phone_number}`">{{
            userData.phone_number
          }}</NuxtLink>
        </div>
      </div>
      <div class="contact-info__item">
        <div class="contact-info__item--icon">
          <Icon name="fa6-solid:location-dot" />
        </div>
        <div class="contact-info__item--content">{{ userData.address }}</div>
      </div>
      <div class="contact-info__item">
        <div class="contact-info__item--icon">
          <Icon name="fa6-solid:envelope" />
        </div>
        <div class="contact-info__item--content">
          <NuxtLink :to="`mailto:${userData.email}`">{{
            userData.email
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-info {
  // .contact-info__wrapper

  &__wrapper {
    @apply flex flex-col gap-5;
  }

  // .contact-info__item

  &__item {
    @apply flex items-center gap-3;
  }

  // .contact-info__item--icon

  &__item--icon {
    @apply inline-flex text-2xl text-primary;
  }

  // .contact-info__item--content

  &__item--content {
    @apply text-lg font-bold;
  }
}
</style>
