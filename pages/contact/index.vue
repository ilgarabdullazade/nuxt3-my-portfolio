<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('navigation.contact'),
})

defineOgImageComponent('Page', {
  title: 'Contact',
})
</script>

<template>
  <div class="contact">
    <div class="contact__wrapper">
      <SitePageHeading
        class="contact__heading"
        title="navigation.contact"
        subtitle="contact.subtitle"
      />
      <div class="contact__body">
        <ContactInfo class="contact__info" />
        <ContactForm class="contact__form" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  // .contact__wrapper

  &__wrapper {
  }

  // .contact__heading

  &__heading {
    @apply mb-16 max-lg:mb-12;
  }

  // .contact__body

  &__body {
    @apply mb-16 flex gap-10 max-lg:flex-col;
  }

  // .contact__info

  &__info {
    @apply md:w-72;
  }

  // .contact__form

  &__form {
    @apply flex-1;
  }
}
</style>
