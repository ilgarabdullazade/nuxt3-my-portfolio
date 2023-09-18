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
  @apply flex justify-between max-lg:flex-col max-lg:gap-3 items-center gap-10 border-t-2 border-dark-100 py-4 -mx-16 max-lg:-mx-10 px-16 max-lg:px-10;
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
