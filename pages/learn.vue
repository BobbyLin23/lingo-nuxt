<script lang="ts" setup>
import { UserButton } from 'vue-clerk'

definePageMeta({
  middleware: ['auth'],
})
</script>

<template>
  <div>
    Learn
    <ClientOnly>
      <UserButton after-sign-out-url="/" />
    </ClientOnly>
  </div>
</template>
