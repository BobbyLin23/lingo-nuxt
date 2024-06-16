<script lang="ts" setup>
import { Check, Crown, Star } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

const props = defineProps<{
  id: number
  index: number
  totalCount: number
  locked?: boolean
  current?: boolean
  percentage: number
}>()

const cycleLength = 8
const cycleIndex = props.index % cycleLength

const indentationLevel = computed(() => {
  if (cycleIndex <= 2) {
    return cycleIndex
  }
  else if (cycleIndex <= 4) {
    return 4 - cycleIndex
  }
  else if (cycleIndex <= 6) {
    return 4 - cycleIndex
  }
  else {
    return cycleIndex - 8
  }
})

const rightPosition = computed(() => {
  return Math.abs(indentationLevel.value) * 40
})

const isFirst = computed(() => {
  return props.index === 0
})

const isLast = computed(() => {
  return props.index === props.totalCount
})

const isCompleted = computed(() => {
  return !props.current && !props.locked
})

const Icon = computed(() => {
  if (isCompleted.value) {
    return Check
  }
  else if (isLast.value) {
    return Crown
  }
  else {
    return Star
  }
})

const href = computed(() => {
  if (isCompleted.value) {
    return `/lesson/${props.id}`
  }
  else {
    return '/lesson'
  }
})
</script>

<template>
  <NuxtLink
    :href="href"
    :aria-disabled="locked"
    :style="{
      pointerEvents: locked ? 'none' : 'auto',
    }"
  >
    <div
      class="relative" :style="{
        'right': `${rightPosition}px`,
        'margin-top': isFirst && !isCompleted ? 60 : 24,
      }"
    >
      <div v-if="current" class="h-[102px] w-[102px] relative">
        <div class="absolute -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-green-500 bg-white rounded-xl animate-bounce tracking-wide z-10">
          Start
          <div class="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2" />
        </div>
        <CircleProgress :value="Number.isNaN(percentage) ? 0 : percentage">
          <Button size="rounded" :variant="locked ? 'locked' : 'secondary'" class="h-[70px] w-[70px] border-b-8">
            <component
              :is="Icon"
              :class="cn('h-10 w-10',
                         locked ? 'fill-neutral-400 text-neutral-400 stroke-neutral-400' : 'fill-primary-forground text-primary-foreground',
                         isCompleted && 'fill-none stroke-[4]')"
            />
          </Button>
        </CircleProgress>
      </div>
      <div v-else>
        <Button size="rounded" :variant="locked ? 'locked' : 'secondary'" class="h-[70px] w-[70px] border-b-8">
          <component
            :is="Icon"
            :class="cn('h-10 w-10',
                       locked ? 'fill-neutral-400 text-neutral-400 stroke-neutral-400' : 'fill-primary-forground text-primary-foreground',
                       isCompleted && 'fill-none stroke-[4]')"
          />
        </Button>
      </div>
    </div>
  </NuxtLink>
</template>
