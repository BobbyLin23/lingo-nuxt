<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'main',
})
</script>

<template>
  <div class="flex flex-row-reverse gap-[48px] px-6">
    <StickyWrapper>
      <UserProgress
        :active-course="{
          title: 'Spanish',
          imageSrc: '/es.svg',
        }"
        :hearts="5"
        :points="5"
        :has-active-subscription="false"
      />
    </StickyWrapper>
    <FeedWrapper>
      <LearnHeader title="Spanish" />
      <div class="space-y-4">
        TODO
      </div>
    </FeedWrapper>
  </div>
</template>
