<script lang="ts" setup>
import type { courses, userProgress } from '~/db/schema'

definePageMeta({
  layout: 'main',
})

const { data: coursesData } = useFetch<typeof courses.$inferSelect[]>('/api/courses')
const { data: userProgressData } = useFetch<typeof userProgress.$inferSelect>('/api/user-progress')

await Promise.all([coursesData, userProgressData])
</script>

<template>
  <div class="h-full max-w-[912px] px-3 mx-auto">
    <h1 class="text-2xl font-bold text-neutral-700">
      Language Courses
    </h1>
    <CourseList :courses="coursesData!" :active-course-id="userProgressData?.activeCourseId" />
  </div>
</template>
