<script lang="ts" setup>
import type { ProjectThumb } from '~/types'

const { data: projectList } = await useMyFetch<ProjectThumb[]>(
  ApiEndpoints.PROJECTS_LIST,
)
</script>

<template>
  <section v-if="projectList?.length" class="portfolio-grid">
    <div class="portfolio-grid__wrapper">
      <PortfolioItem
        v-for="project in projectList"
        :key="project.title"
        :project="project"
        class="portfolio-grid__item"
      />
    </div>
  </section>
  <SiteNotFound
    v-else
    title="portfolio.not_found_title"
    caption="portfolio.not_found_caption"
  />
</template>

<style lang="scss" scoped>
.portfolio-grid {
  // .portfolio-grid__wrapper

  &__wrapper {
    @apply grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1;
  }

  // .portfolio-grid__item

  &__item {
  }
}
</style>
