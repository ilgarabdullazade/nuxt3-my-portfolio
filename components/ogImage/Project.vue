<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  title: { type: String, default: 'Og Image Template' },
  image: { type: String, required: true },
})

const { public: publicEnv } = useRuntimeConfig()
const { ogImage } = useSiteConfig()
</script>

<template>
  <div
    :style="{ backgroundColor: publicEnv.sitePrimaryColor ?? '#ff9638' }"
    class="relative w-full"
  >
    <div class="h-full p-14">
      <div
        class="absolute left-[55%] w-[1030px] h-[1030px] bottom-0 border-4 border-solid rounded-full border-white flex items-end overflow-hidden"
      >
        <NuxtImg :src="`${publicEnv.apiBase}/${image}`" height="640" />
      </div>
      <div class="flex flex-col justify-between w-1/2 h-full">
        <h1 class="my-4 text-white text-7xl">
          {{ title }}
        </h1>
        <div class="flex flex-col">
          <div
            class="flex h-24 w-24 overflow-hidden border-4 border-white border-solid rounded-full shadow-avatar"
          >
            <NuxtImg
              class="w-full h-full"
              :src="`${publicEnv.apiBase}${ApiEndpoints.FREELANCER_AVATAR}`"
              width="80"
              height="80"
            />
          </div>
          <h3 class="text-4xl font-bold text-white my-2.5">
            {{ publicEnv.ownerName }}
            <span class="pl-1.5 font-normal">{{
              publicEnv.ownerLastName
            }}</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
