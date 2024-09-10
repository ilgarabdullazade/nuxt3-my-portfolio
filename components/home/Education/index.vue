<script lang="ts" setup>
import type { Occupation } from '~/types'

const { data: educationList } = await useMyFetch<Occupation[]>(
  ApiEndpoints.EDUCATION,
)
</script>

<template>
  <section v-if="educationList?.length" class="education">
    <div class="education__wrapper">
      <SiteTitle class="education__title">{{
        $t('education.title')
      }}</SiteTitle>
      <div class="education__body">
        <HomeEducationItem
          v-for="education in educationList"
          :key="education.title"
          :education="education"
          class="education__item"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.education {
  // .education__wrapper

  &__wrapper {
  }

  // .education__title

  &__title {
    @apply mb-7;
  }

  // .education__body

  &__body {
  }

  // .education__item

  &__item {
  }
}
</style>
