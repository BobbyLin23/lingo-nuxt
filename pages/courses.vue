<script lang="ts" setup>
definePageMeta({
  layout: 'main',
})

const data = [
  {
    id: 1,
    title: 'Spanish',
    imageSrc: '/es.svg',
  },
]
</script>

<template>
  <div class="h-full max-w-[912px] px-3 mx-auto">
    <h1 class="text-2xl font-bold text-neutral-700">
      Language Courses
    </h1>
    <CourseList :courses="data" :active-course-id="1" />
  </div>
</template>
