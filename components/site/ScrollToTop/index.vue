<script setup lang="ts">
const scrollButton = ref<HTMLButtonElement>()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const userScroll = () => {
  if (window.scrollY > 100) {
    scrollButton.value?.classList.add('show')
  } else {
    scrollButton.value?.classList.remove('show')
  }
}

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener('scroll', userScroll)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', userScroll)
})
</script>

<template>
  <button
    ref="scrollButton"
    class="scroll-to-top"
    aria-label="Scroll to Top"
    @click="scrollToTop"
  >
    <Icon name="simple-line-icons:arrow-up" />
  </button>
</template>

<style lang="scss" scoped>
.scroll-to-top {
  @apply invisible fixed bottom-4 right-3 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-solid border-dark-100 bg-dark-50 pb-1 text-center text-2xl opacity-0 shadow-sm transition-all lg:hover:text-primary;
  &.show {
    @apply visible opacity-100;
  }
}
</style>
