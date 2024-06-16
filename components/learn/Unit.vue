<script lang="ts" setup>
import type { lessons, units } from '~/db/schema'

defineProps<{
  id: number
  order: number
  title: string
  description: string
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean
  })[]
  activeLesson: typeof lessons.$inferSelect & {
    unit: typeof units.$inferSelect
  } | undefined
  activeLessonPercentage: number
}>()
</script>

<template>
  <LearnUnitBanner :title="title" :description="description" />
  <div class="flex items-center flex-col relative">
    <LearnLessonButton
      v-for="(lesson, index) in lessons"
      :id="lesson.id"
      :key="lesson.id"
      :index="index"
      :total-count="lessons.length - 1"
      :current="lesson.id === activeLesson?.id"
      :locked="!lesson.completed && lesson.id !== activeLesson?.id"
      :percentage="activeLessonPercentage"
    />
  </div>
</template>
