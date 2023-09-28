<script setup lang="ts">
import type { Project } from '~/types'

interface Props {
  project: Project
}
const { project } = defineProps<Props>()

const dayjs = useDayjs()

const date = dayjs(`${project.created_date}`).format('MM/DD/YYYY')

const { locale } = useI18n()
</script>

<template>
  <div class="project-sidebar">
    <div class="project-sidebar__wrapper">
      <strong class="project-sidebar__title">{{
        $t('portfolio.description')
      }}</strong>
      <div class="project-sidebar__information">
        <div
          v-if="project.android_url || project.apple_url"
          class="project-sidebar__apps"
        >
          <NuxtLink
            v-if="project.android_url"
            :to="project.android_url"
            target="_blank"
            class="project-sidebar__apps--item"
          >
            <NuxtImg
              :src="'images/google-play_' + locale + '.png'"
              format="webp"
            />
          </NuxtLink>
          <NuxtLink
            v-if="project.apple_url"
            :to="project.apple_url"
            target="_blank"
            class="project-sidebar__apps--item"
          >
            <NuxtImg
              :src="'images/app-store_' + locale + '.png'"
              format="webp"
            />
          </NuxtLink>
        </div>
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
    @apply text-lg;
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

  // .project-sidebar__apps

  &__apps {
    @apply flex items-center gap-3;
  }

  // .project-sidebar__apps--item

  &__apps--item {
    @apply lg:hover:scale-110 lg:transition-transform h-10 flex;
  }

  // .project-sidebar__description

  &__description {
  }

  // .project-sidebar__technology

  &__technology {
  }
}
</style>
