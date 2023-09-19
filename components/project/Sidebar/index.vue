<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
}
const { project } = defineProps<Props>()

const dayjs = useDayjs()

const date = dayjs(`${project.created_date}`).format('MM/DD/YYYY')
</script>

<template>
  <div class="project-sidebar">
    <div class="project-sidebar__wrapper">
      <h3 class="project-sidebar__title">{{ $t('portfolio.description') }}</h3>
      <div class="project-sidebar__information">
        <div v-if="project.site_url" class="project-sidebar__information--item">
          <Icon name="fa6-solid:globe" />
          <NuxtLink :to="project.site_url" target="_blank">{{
            project.site_url
          }}</NuxtLink>
        </div>
        <div class="project-sidebar__information--item">
          <Icon name="fa6-solid:calendar" />
          <span>{{ date }}</span>
        </div>
      </div>
      <p class="project-sidebar__description">
        {{ project.description }}
      </p>
      <ProjectTechnology
        :technologies="project.technologies"
        class="project-sidebar__technology"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project-sidebar {
  // .project-sidebar__wrapper

  &__wrapper {
    @apply py-6 px-9 rounded-2xl border-2 border-solid border-dark-100 flex flex-col gap-4;
  }

  // .project-sidebar__title

  &__title {
  }

  // .project-sidebar__information

  &__information {
    @apply flex flex-col gap-3 text-base;
  }

  // .project-sidebar__information--item

  &__information--item {
    @apply flex items-center gap-2;
    > a {
      @apply text-primary truncate;
    }
    > svg {
      @apply text-primary;
    }
  }

  // .project-sidebar__description

  &__description {
  }

  // .project-sidebar__technology

  &__technology {
  }
}
</style>
