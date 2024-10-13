<script lang="ts" setup>
import type { ProjectThumb } from '@/types'

interface Props {
  project: ProjectThumb
}

const { project } = defineProps<Props>()

const { public: publicEnv } = useRuntimeConfig()

const localePath = useLocalePath()
</script>

<template>
  <div class="portfolio-item">
    <div class="portfolio-item__wrapper">
      <div class="portfolio-item__frame">
        <NuxtPicture
          class="portfolio-item__img"
          :src="`${publicEnv.apiBase}/${project.preview_image}`"
          :alt="project.title"
          :title="project.title"
          sizes="sm:585px lg:480px xl:360px"
        />
        <NuxtLink
          :to="localePath(`/portfolio/${project.slug}`)"
          :aria-label="`Read more about ${project.title}`"
          class="portfolio-item__link"
        />
      </div>

      <strong class="portfolio-item__name">{{ project.title }}</strong>
      <div v-if="project.tag.length" class="portfolio-item__taglist">
        <span
          v-for="tag of project.tag"
          :key="tag"
          class="portfolio-item__tag"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-item {
  @media (min-width: 1024px) {
    &:hover {
      .portfolio-item__frame {
        @apply before:bg-dark-950/20;
      }
      .portfolio-item__img {
        @apply scale-125;
      }
      .portfolio-item__taglist {
        @apply opacity-100;
      }
    }
  }
  // .portfolio-item__wrapper

  &__wrapper {
    @apply relative aspect-video overflow-hidden rounded-xl;
  }

  // .portfolio-item__frame

  &__frame {
    @apply overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:transition-colors;
  }

  // .portfolio-item__img

  &__img {
    @apply absolute top-1/2 z-0 min-h-full w-full -translate-y-1/2 object-cover transition-transform;
  }

  // .portfolio-item__link

  &__link {
    @apply absolute left-0 top-0 z-20 h-full w-full;
  }

  // .portfolio-item__name

  &__name {
    @apply absolute left-5 top-5 z-20 inline-flex rounded-md bg-background px-2.5 py-1 text-sm;
  }

  // .portfolio-item__taglist

  &__taglist {
    @apply absolute bottom-5 left-5 z-20 flex flex-wrap gap-1 transition-opacity lg:opacity-0;
  }

  // .portfolio-item__tag

  &__tag {
    @apply inline-flex rounded bg-background px-2 py-0.5 text-xs;
  }
}
</style>
