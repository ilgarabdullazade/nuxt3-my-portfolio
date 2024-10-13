<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('navigation.portfolio'),
})

defineOgImageComponent('Page', {
  title: 'Portfolio',
})
</script>

<template>
  <div class="portfolio">
    <div class="portfolio__wrapper">
      <SitePageHeading
        class="portfolio__heading"
        title="navigation.portfolio"
        subtitle="portfolio.subtitle"
      />
      <PortfolioGrid class="portfolio__grid" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  // .portfolio__wrapper

  &__wrapper {
  }

  // .portfolio__heading

  &__heading {
    @apply mb-16 max-lg:mb-12;
  }

  // .portfolio__grid

  &__grid {
    @apply mb-16;
  }
}
</style>
