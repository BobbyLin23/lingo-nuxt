<script lang="ts" setup>
import { cn } from '~/lib/utils'

const attrs = useAttrs()
</script>

<template>
  <div
    :class="cn('bg-blue-50 h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col',
               attrs.class as string)"
  >
    Sidebar
  </div>
</template>
