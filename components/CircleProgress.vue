<script lang="ts" setup>
defineProps<{
  value: number
}>()
</script>

<template>
  <div class="relative size-20">
    <svg class="size-full" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Circle -->
      <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-[#e5e7eb]" stroke-width="2" />
      <!-- Progress Circle inside a group with rotation -->
      <g class="origin-center -rotate-90 transform">
        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-[#4ade80]" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="0" />
      </g>
    </svg>
    <!-- Percentage Text -->
    <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <slot />
    </div>
  </div>
</template>
