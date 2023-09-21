<script lang="ts" setup>
import type { ProjectThumb } from '~/types'
const { public: publicEnv } = useRuntimeConfig()

const localePath = useLocalePath()

interface Props {
  project: ProjectThumb
}
const { project } = defineProps<Props>()
</script>

<template>
  <div class="portfolio-item">
    <div class="portfolio-item__wrapper">
      <div class="portfolio-item__frame">
        <NuxtImg
          class="portfolio-item__img"
          :src="`${publicEnv.apiBase}/${project.preview_image}`"
          :alt="project.title"
          :title="project.title"
          :width="560"
        />

        <NuxtLink
          :to="localePath(`/portfolio/${project.slug}`)"
          class="portfolio-item__link"
        ></NuxtLink>
      </div>

      <h3 class="portfolio-item__name">{{ project.title }}</h3>
      <div v-if="project.tag.length" class="portfolio-item__taglist">
        <span
          v-for="tag in project.tag"
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
  // .portfolio-item__wrapper

  &__wrapper {
    @apply aspect-video rounded-xl overflow-hidden relative;
  }

  // .portfolio-item__frame

  &__frame {
    @apply overflow-hidden before:absolute before:z-10 before:top-0 before:left-0 before:h-full before:w-full  before:transition-colors;
  }

  // .portfolio-item__img

  &__img {
    @apply absolute top-1/2 -translate-y-1/2 z-0 transition-transform w-full min-h-full object-cover;
  }

  // .portfolio-item__link

  &__link {
    @apply absolute top-0 left-0 w-full h-full z-20;
  }

  // .portfolio-item__name

  &__name {
    @apply absolute z-20 text-sm inline-flex py-1 px-2.5 bg-background top-5 left-5 rounded-md;
  }

  // .portfolio-item__taglist

  &__taglist {
    @apply absolute z-20 flex gap-1 flex-wrap bottom-5 left-5  transition-opacity opacity-0;
  }

  // .portfolio-item__tag

  &__tag {
    @apply text-xs inline-flex py-0.5 px-2 bg-background rounded;
  }
}
</style>
