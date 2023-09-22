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
      class="bg-white rounded-[2rem] h-full flex items-center justify-center"
    >
      <div class="flex flex-col items-center px-24 py-10">
        <div
          class="flex h-72 w-72 shrink-0 border-[1rem] rounded-full border-solid border-white overflow-hidden shadow-xl"
        >
          <NuxtImg
            class="w-full h-full"
            :src="`${publicEnv.apiBase}${ApiEndpoints.FREELANCER_AVATAR}`"
            width="256"
            height="256"
          />
        </div>
        <div class="flex flex-col text-center items-center justify-center">
          <h1 class="text-6xl">
            {{ publicEnv.ownerName }}
            <span class="font-normal pl-2">{{ publicEnv.ownerLastName }}</span>
          </h1>
          <div class="text-2xl text-gray-500">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
