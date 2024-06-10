<script lang="ts" setup>
import { toast } from 'vue-sonner'
import type { courses, userProgress } from '~/db/schema'

const props = defineProps<{
  courses: typeof courses.$inferSelect[]
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}>()

const loading = ref(false)

const router = useRouter()

async function onClick(id: number) {
  if (loading.value)
    return

  if (id === props.activeCourseId) {
    router.push('/learn')
    return
  }

  try {
    loading.value = true

    await $fetch('/api/user-progress', {
      method: 'patch',
      body: {
        courseId: id,
      },
    })
  }
  catch (e) {
    toast.error('Something went wrong, please try again later')
  }
  finally {
    loading.value = false
  }
}
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
      @click="onClick(course.id)"
    />
  </div>
</template>
