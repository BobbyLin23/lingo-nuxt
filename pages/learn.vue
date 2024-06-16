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

if (!userProgressData.value || !userProgressData.value.activeCourse) {
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
      <div v-for="unit in unitsData" :key="unit.id" class="mb-10">
        <LearnUnit
          :id="unit.id"
          :order="unit.order"
          :description="unit.description"
          :title="unit.title"
          :lessons="unit.lessons"
          :active-lesson="undefined"
          :active-lesson-percentage="0"
        />
      </div>
    </FeedWrapper>
  </div>
</template>
