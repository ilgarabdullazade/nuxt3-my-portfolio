import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useMyFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const { public: publicEnv } = useRuntimeConfig()
  const language = useCookie('language')

  const defaults: UseFetchOptions<T> = {
    baseURL: publicEnv.apiBase,
    key: url,
    headers: {
      'lang-code': language.value ?? 'en',
    },
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
