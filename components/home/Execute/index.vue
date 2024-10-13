<script lang="ts" setup>
import type { WhatIDO } from '@/types'
import { ApiEndpoints } from '@/utils/apiEndpoints'

const { data: executes } = await useMyFetch<WhatIDO[]>(ApiEndpoints.WHAT_I_DO)
</script>

<template>
  <template v-if="executes?.length">
    <section class="execute">
      <div class="execute__wrapper">
        <SiteTitle class="execute__title">{{
          $t('what_i_do.title')
        }}</SiteTitle>
        <div class="execute__body">
          <HomeExecuteItem
            v-for="execute of executes"
            :key="execute.title"
            :execute="execute"
            class="execute__item"
          />
        </div>
      </div>
    </section>
  </template>
</template>

<style lang="scss" scoped>
.execute {
  // .execute__wrapper

  &__wrapper {
  }

  // .execute__title

  &__title {
    @apply mb-7;
  }

  // .execute__body

  &__body {
    @apply grid grid-cols-2 gap-7 max-sm:grid-cols-1;
  }

  // .execute__item

  &__item {
  }
}
</style>
@/utils/apiEndpoints
