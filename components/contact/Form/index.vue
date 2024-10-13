<script setup lang="ts">
import type { PluginConfigs } from '@formkit/vue'
import type { FormKitNode } from '@formkit/core'
import { reset } from '@formkit/core'
import { ApiEndpoints } from '@/utils/apiEndpoints'

const submitted = ref(false)

const submitHandler = async (data: FormKitNode) => {
  const { status } = await useMyFetch(ApiEndpoints.GET_IN_TOUCH, {
    method: 'post',
    params: data,
  })
  reset('contactForm')
  submitted.value = status.value === 'success'
}

const config = inject<PluginConfigs>(Symbol.for('FormKitConfig'))
const { locale } = useI18n()

const setFormLocale = () => {
  if (config) config.locale = locale.value
}
onMounted(() => {
  setFormLocale()
})

watch(
  () => locale.value,
  () => setFormLocale(),
)
</script>

<template>
  <div class="contact-form">
    <FormKit
      id="contactForm"
      class="contact-form__form"
      type="form"
      :actions="false"
      @submit="submitHandler"
      @input="submitted = false"
    >
      <div class="contact-form__wrapper">
        <SiteTitle class="contact-form__title">{{
          $t('contact.form_title')
        }}</SiteTitle>
        <div class="contact-form__body">
          <div class="contact-form__inputs">
            <div class="contact-form__group">
              <FormKit
                type="text"
                name="full_name"
                :label="$t('contact.form_name')"
                :placeholder="$t('contact.form_name')"
                validation="required"
              />
            </div>
            <div class="contact-form__group">
              <FormKit
                type="text"
                name="email"
                :label="$t('contact.form_email')"
                :placeholder="$t('contact.form_email')"
                validation="required|email"
              />
            </div>
            <div class="contact-form__group">
              <FormKit
                type="text"
                name="subject"
                :label="$t('contact.form_subject')"
                :placeholder="$t('contact.form_subject')"
                validation="required"
              />
            </div>
          </div>
          <div class="contact-form__textarea">
            <FormKit
              type="textarea"
              name="text"
              rows="7"
              :label="$t('contact.form_message')"
              :placeholder="$t('contact.form_message')"
              validation="required"
            />
          </div>
        </div>
        <SiteButton
          type="submit"
          class="contact-form__button"
          intent="primary"
          >{{ $t('contact.submit') }}</SiteButton
        >
      </div>
    </FormKit>
    <div v-if="submitted" class="contact-form__alert">
      {{ $t('contact.success') }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  // .contact-form__form

  &__form {
  }
  // .contact-form__wrapper

  &__wrapper {
  }

  // .contact-form__title

  &__title {
    @apply mb-7;
  }

  // .contact-form__body

  &__body {
    @apply mb-7 flex gap-5 max-sm:flex-col max-sm:gap-2;
  }

  // .contact-form__inputs

  &__inputs {
    @apply flex flex-1 flex-col gap-1.5 max-sm:gap-2;
  }

  // .contact-form__textarea

  &__textarea {
    @apply flex-1;
    > textarea {
      @apply h-full;
    }
  }

  // .contact-form__group

  &__group {
  }

  // .contact-form__button

  &__button {
  }

  // .contact-form__alert

  &__alert {
    @apply mt-2 text-green-500;
  }
}
</style>
