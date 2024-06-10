<script lang="ts" setup>
import { InfinityIcon } from 'lucide-vue-next'
import type { courses } from '~/db/schema'

defineProps<{
  activeCourse?: typeof courses.$inferSelect | null
  hearts?: number
  points?: number
  hasActiveSubscription: boolean
}>()
</script>

<template>
  <div class="flex items-center justify-between gap-x-2 w-full">
    <NuxtLink href="/courses">
      <Button variant="ghost">
        <NuxtImg
          :src="activeCourse?.imageSrc"
          :alt="activeCourse?.title"
          class="rounded-md border"
          height="32"
          width="32"
        />
      </Button>
    </NuxtLink>
    <NuxtLink href="/shop">
      <Button variant="ghost" class="text-orange-500">
        <NuxtImg src="/points.svg" height="28" width="28" alt="Points" class="mr-2" />
        {{ points }}
      </Button>
    </NuxtLink>
    <NuxtLink href="/shop">
      <Button variant="ghost" class="text-rose-500">
        <NuxtImg src="/heart.svg" height="22" width="22" alt="Hearts" class="mr-2" />
        <InfinityIcon v-if="hasActiveSubscription" class="w-4 h-4 stroke-[3]" />
        <span v-else>{{ hearts }}</span>
      </Button>
    </NuxtLink>
  </div>
</template>
