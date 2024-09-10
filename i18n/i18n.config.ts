import en from './locales/en-US.json'
import az from './locales/az-AZ.json'
import ru from './locales/ru-RU.json'

export default defineI18nConfig(() => ({
  legacy: false,
  baseUrl: process.env.NUXT_PUBLIC_SITE_URL ?? '',
  lazy: true,
  langDir: 'i18n/locales',
  defaultLocale: 'en',
  skipSettingLocaleOnNavigate: true,
  messages: { 'en-US': en, 'az-AZ': az, 'ru-RU': ru },
  locales: [
    {
      code: 'en',
      language: 'en-US',
      file: 'en-US.json',
      name: 'English',
    },
    {
      code: 'az',
      language: 'az-AZ',
      file: 'az-AZ.json',
      name: 'Azərbaycanca',
    },
    {
      code: 'ru',
      language: 'ru-RU',
      file: 'ru-RU.json',
      name: 'Русский',
    },
  ],
}))
