<script lang="ts" setup>
import type { userProgress } from '~/db/schema'

definePageMeta({
  middleware: ['auth'],
  layout: 'main',
})

const { data: userProgressData } = useFetch('/api/user-progress', {
  method: 'get',
})
const { data: unitsData } = useFetch('/api/units', {
  method: 'get',
})

await Promise.all([userProgressData, unitsData])

if (!userProgressData.value || !userProgressData.value.activeCourseId) {
  navigateTo('/courses')
}
</script>

<template>
  <div class="flex flex-row-reverse gap-[48px] px-6">
    <StickyWrapper>
      <UserProgress
        :active-course="userProgressData?.activeCourse"
        :hearts="userProgressData?.hearts"
        :points="userProgressData?.points"
        :has-active-subscription="false"
      />
    </StickyWrapper>
    <FeedWrapper>
      <LearnHeader :title="userProgressData?.activeCourse?.title" />
      <div class="space-y-4">
        TODO
      </div>
    </FeedWrapper>
  </div>
</template>
