<script setup lang="ts">
interface Props {
  title: string | undefined
  image: string
}

const { title = 'Og Image Template' } = defineProps<Props>()

defineOptions({
  inheritAttrs: false,
})

const { public: publicEnv } = useRuntimeConfig()
</script>

<template>
  <div
    :style="{ backgroundColor: publicEnv.sitePrimaryColor ?? '#ff9638' }"
    class="relative w-full"
  >
    <div class="h-full p-14">
      <div
        class="absolute bottom-0 left-[55%] flex h-[1030px] w-[1030px] items-end overflow-hidden rounded-full border-4 border-solid border-white"
      >
        <NuxtImg :src="`${publicEnv.apiBase}/${image}`" height="640" />
      </div>
      <div class="flex h-full w-1/2 flex-col justify-between">
        <h1 class="my-4 text-7xl text-white">
          {{ title }}
        </h1>
        <div class="flex flex-col">
          <div
            class="flex h-24 w-24 overflow-hidden rounded-full border-4 border-solid border-white shadow-avatar"
          >
            <NuxtImg
              class="h-full w-full"
              :src="`${publicEnv.apiBase}${ApiEndpoints.FREELANCER_AVATAR}`"
              width="80"
              height="80"
            />
          </div>
          <h3 class="my-2.5 text-4xl font-bold text-white">
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
