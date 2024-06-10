<script lang="ts" setup>
import type { courses } from '~/db/schema'

defineProps<{
  courses: typeof courses.$inferSelect[]
  activeCourseId: number
}>()
</script>

<template>
  <div class="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
    <CourseCard
      v-for="course in courses"
      :id="course.id"
      :key="course.id"
      :title="course.title"
      :image-src="course.imageSrc"
      :disabled="false"
      :active="course.id === activeCourseId"
      @click="() => {}"
    />
  </div>
</template>
