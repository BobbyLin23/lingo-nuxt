<script lang="ts" setup>
const props = defineProps<{
  label: string
  iconSrc: string
  href: string
}>()

const route = useRoute()

const active = computed(() => route.path === props.href)
</script>

<template>
  <Button :variant="active ? 'sidebarOutline' : 'sidebar'" class="justify-start h-[52px]">
    <NuxtLink :href="href" class="flex items-center">
      <NuxtImg :src="iconSrc" :alt="label" class="mr-5" height="32" width="32" />
      {{ label }}
    </NuxtLink>
  </Button>
</template>
