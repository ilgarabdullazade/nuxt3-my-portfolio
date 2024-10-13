import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export const useMyFetch = <T>(
  url: string,
  options: UseFetchOptions<T> = {},
) => {
  const { public: publicEnv } = useRuntimeConfig()

  const { locale } = useI18n()

  const language = useCookie('language')
  const langCode = ref<string>(
    import.meta.server ? locale.value : (language.value ?? 'en'),
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
