<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
defineProps({
  title: String,
  description: String,
  backgroundColor: String,
})

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div :class="[backgroundColor]" class="w-full relativep-6">
    <div class="bg-white rounded-30 h-full flex items-center justify-center">
      <div class="flex items-center gap-12 py-10 px-24">
        <div
          class="h-64 shrink-0 aspect-square border-[1rem] rounded-full border-solid bg-white overflow-hidden shadow-xl"
        >
          <NuxtImg
            class="w-full h-full"
            :src="`${publicEnv.apiBase}${ApiEndpoints.FREELANCER_AVATAR}`"
            width="256"
            height="256"
          />
        </div>
        <div class="flex flex-col gap-4">
          <div class="text-6xl font-bold">
            {{ publicEnv.ownerName }}
            <span class="font-normal">{{ publicEnv.ownerLastName }}</span>
          </div>
          <div class="text-2xl text-gray-400">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
