<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <SiteSocial class="footer__social" />

    <div class="footer__copyrights">
      <p>© {{ new Date().getFullYear() }} {{ $t('footer.copyrights') }}</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply -mx-16 flex items-center justify-between gap-10 border-t-2 border-dark-100 px-16 py-4 max-lg:-mx-10 max-lg:flex-col max-lg:gap-3 max-lg:px-10;
  // .footer__social

  &__social {
    @apply -mx-4;
  }

  // .footer__copyrights

  &__copyrights {
    @apply max-lg:pb-4;
  }
}
</style>
