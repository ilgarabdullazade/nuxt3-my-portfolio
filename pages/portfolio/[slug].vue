<script lang="ts" setup>
import type { Project } from '~/types'

definePageMeta({ layout: 'project' })

const localePath = useLocalePath()

const route = useRoute()

const { data: project } = await useMyFetch<Project>(
  ApiEndpoints.GET_PROJECT(route.params.slug as string)
)

defineOgImage({
  component: 'Project',
  title: project.value?.title,
  image: project!.value?.preview_image,
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
    @apply flex flex-col gap-1 mb-12 max-lg:mb-8;
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
    @apply flex items-center justify-center bg-dark-50 w-12 h-12 pb-1 text-center text-2xl border border-solid border-dark-100 lg:hover:text-primary rounded-lg transition-colors max-lg:w-10 max-lg:h-10 max-lg:text-xl max-lg:rounded-md;
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
    @apply rounded-2xl border-2 border-dashed border-dark-100 w-full h-full p-10 flex items-center justify-center text-xl font-semibold aspect-video;
  }

  // .project__sidebar

  &__sidebar {
    @apply lg:col-span-2 xl:ml-14 lg:ml-8;
  }
}
</style>
