<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  description: {
    type: String,
    default: '',
  },
})

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div
    :style="{ backgroundColor: publicEnv.sitePrimaryColor ?? '#ff9638' }"
    class="relative w-full p-6"
  >
    <div
      class="flex h-full items-center justify-center rounded-[2rem] bg-white"
    >
      <div class="flex flex-col items-center px-24 py-10">
        <div
          class="flex h-72 w-72 shrink-0 overflow-hidden rounded-full border-[1rem] border-solid border-white shadow-xl"
        >
          <NuxtImg
            class="h-full w-full"
            :src="`${publicEnv.apiBase}${ApiEndpoints.FREELANCER_AVATAR}`"
            width="256"
            height="256"
          />
        </div>
        <div class="flex flex-col items-center justify-center text-center">
          <h1 class="text-6xl">
            {{ publicEnv.ownerName }}
            <span class="pl-2 font-normal">{{ publicEnv.ownerLastName }}</span>
          </h1>
          <div class="text-2xl text-gray-500">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
