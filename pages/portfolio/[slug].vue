<script lang="ts" setup>
import type { Project } from '~/types'

definePageMeta({ layout: 'project' })

const localePath = useLocalePath()

const route = useRoute()

const { data: project } = await useMyFetch<Project>(
  ApiEndpoints.GET_PROJECT(route.params.slug as string),
)

defineOgImageComponent('Project', {
  title: project.value?.title,
  image: project.value?.preview_image,
})
</script>

<template>
  <div class="project">
    <div class="project__wrapper">
      <div class="project__header">
        <div class="project__close">
          <NuxtLink
            :to="localePath('/portfolio')"
            aria-label="Back to portfolio"
            class="project__close-btn"
          >
            <Icon name="ci:close-lg" />
          </NuxtLink>
        </div>
        <h1 class="project__title">{{ project?.title }}</h1>
      </div>
      <div class="project__body">
        <div class="project__content">
          <ProjectSlider
            v-if="project!.gallery.length"
            :title="project!.title"
            :gallery="project!.gallery"
          />
          <div v-else class="project__content--empty">
            {{ $t('portfolio.images_not_found') }}
          </div>
        </div>
        <ProjectSidebar :project="project!" class="project__sidebar" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  // .project__wrapper

  &__wrapper {
  }

  // .project__header

  &__header {
    @apply mb-12 flex flex-col gap-1 max-lg:mb-8;
  }

  // .project__title

  &__title {
  }

  // .project__close

  &__close {
    @apply flex justify-end;
  }

  // .project__close-btn

  &__close-btn {
    @apply flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-dark-100 bg-dark-50 pb-1 text-center text-2xl transition-colors max-lg:h-10 max-lg:w-10 max-lg:rounded-md max-lg:text-xl lg:hover:text-primary;
  }

  // .project__body

  &__body {
    @apply grid grid-cols-6 max-lg:grid-cols-1 max-lg:gap-6;
  }

  // .project__content

  &__content {
    @apply lg:col-span-4;
  }

  &__content--empty {
    @apply flex aspect-video h-full w-full items-center justify-center rounded-2xl border-2 border-dashed border-dark-100 p-10 text-xl font-semibold;
  }

  // .project__sidebar

  &__sidebar {
    @apply lg:col-span-2 lg:ml-8 xl:ml-14;
  }
}
</style>
