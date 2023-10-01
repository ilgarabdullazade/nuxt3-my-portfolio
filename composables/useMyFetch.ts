import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useMyFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const { public: publicEnv } = useRuntimeConfig()
  const language = useCookie('language')
  const { locale } = useI18n()
  const langCode = ref<string>(
    process.server ? locale.value : language.value ?? 'en'
  )

  const defaults: UseFetchOptions<T> = {
    baseURL: publicEnv.apiBase,
    key: url,
    headers: {
      'lang-code': langCode.value,
    },
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
