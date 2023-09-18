<script setup lang="ts">
const scrollButton = ref()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const userScroll = () => {
  if (window.scrollY > 100) {
    scrollButton.value.classList.add('show')
  } else {
    scrollButton.value.classList.remove('show')
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', userScroll)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', userScroll)
})
</script>

<template>
  <button ref="scrollButton" class="scroll-to-top" @click="scrollToTop">
    <Icon name="simple-line-icons:arrow-up" />
  </button>
</template>

<style lang="scss" scoped>
.scroll-to-top {
  @apply flex items-center justify-center fixed bottom-4 right-3 z-50 bg-dark-50 w-12 h-12 pb-1 text-center text-2xl border border-solid border-dark-100 lg:hover:text-primary rounded-lg transition-all shadow-sm invisible opacity-0;
  &.show {
    @apply visible opacity-100;
  }
}
</style>
