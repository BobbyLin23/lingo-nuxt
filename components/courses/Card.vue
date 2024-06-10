<script lang="ts" setup>
import { Check } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

defineProps<{
  id: number
  title: string
  imageSrc: string
  disabled?: boolean
  active?: boolean
}>()
</script>

<template>
  <div
    :class="cn('h-full border-2 rounded-lg border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]',
               disabled && 'pointer-events-none opacity-50')"
  >
    <div class="min-h-[24px] w-full flex items-center justify-end">
      <div v-if="active" class="rounded-md bg-green-600 flex items-center justify-center p-1.5">
        <Check class="text-white stroke-[4] h-4 w-4" />
      </div>
    </div>
    <NuxtImg :src="imageSrc" :alt="title" :height="70" :width="93.33" class="rounded-lg drop-shadow-md border object-cover" />
    <p class="text-neutral-700 text-center font-bold mt-3">
      {{ title }}
    </p>
  </div>
</template>
