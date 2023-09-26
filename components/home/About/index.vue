<script lang="ts" setup>
import type { UserData, AboutInfo } from '~/types'
import { ApiEndpoints } from '~/utils/apiEndpoints'

const { data: userData } = await useMyFetch<UserData>(
  ApiEndpoints.FREELANCER_INFO
)

const aboutData: AboutInfo = {
  full_name: userData.value?.full_name ?? '',
  about: userData.value?.about ?? '',
  profession: userData.value?.profession ?? [],
  cv: userData.value?.cv ?? '',
}
</script>

<template>
  <section class="about">
    <div class="about__wrapper">
      <HomeAboutAvatar :avatar="userData!.avatar" class="about__avatar" />
      <HomeAboutInfo :info="aboutData" class="about__info" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  // .about__wrapper

  &__wrapper {
    @apply items-center lg:grid lg:grid-cols-12 lg:gap-7 my-4 lg:max-w-4xl lg:mx-auto;
  }

  // .about__avatar

  &__avatar {
    @apply lg:col-span-5 p-3 max-lg:max-w-sm max-lg:mx-auto max-lg:mb-5;
  }

  // .about__info

  &__info {
    @apply lg:col-span-7 self-center lg:pl-5;
  }
}
</style>
~/utils/apiEndpoints ~/utils/apiEndpoints
