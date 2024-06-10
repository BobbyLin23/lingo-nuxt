<script lang="ts" setup>
import { ArrowLeft } from 'lucide-vue-next'

defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="sticky top-0 bg-white pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
    <NuxtLink href="/courses">
      <Button variant="ghost" size="sm">
        <ArrowLeft class="w-5 h-5 stroke-2 text-neutral-400" />
      </Button>
    </NuxtLink>
    <h1 class="font-bold text-lg">
      {{ title }}
    </h1>
    <div />
  </div>
</template>
