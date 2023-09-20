<script lang="ts" setup>
useSeoMeta({
  title: '',
})

defineOgImage({
  component: 'Main',
})
</script>

<template>
  <div class="home">
    <div class="home__wrapper">
      <HomeAbout class="home__about" />
      <HomeExecute class="home__execute" />
      <HomeTestimonials class="home__testimonials" />
      <HomeSkills class="home__skills" />
      <HomeExperience class="home__experience" />
      <HomeEducation class="home__education" />
      <HomeHobbies class="home__hobbies" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  // .home__wrapper

  &__wrapper {
    @apply pb-14 max-lg:pb-8;
  }

  // .home__about

  &__about {
    @apply mb-12;
  }

  // .home__execute

  &__execute {
    @apply mb-12;
  }
  // .home__testimonials

  &__testimonials {
    @apply mb-10;
  }

  // .home__skills

  &__skills {
    @apply mb-10;
  }

  // .home__experience

  &__experience {
    @apply mb-12;
  }

  // .home__education

  &__education {
    @apply mb-10;
  }

  // .home__hobbies

  &__hobbies {
  }
}
</style>
