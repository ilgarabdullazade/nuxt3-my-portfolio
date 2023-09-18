import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useMyFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const { public: publicEnv } = useRuntimeConfig()
  const langCode = ref<string | null>(null)

  if (process.client) {
    langCode.value = localStorage.getItem('language')
  } else {
    const { locale } = useI18n()
    langCode.value = locale.value
  }

  const defaults: UseFetchOptions<T> = {
    baseURL: publicEnv.apiBase,
    key: url,
    headers: {
      'lang-code': langCode.value ?? 'en',
    },
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
