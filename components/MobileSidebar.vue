<script lang="ts" setup>
import { Menu } from 'lucide-vue-next'
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Menu class="text-white" />
    </SheetTrigger>
    <SheetContent class="p-0 z-[100]" side="left">
      <Sidebar />
    </SheetContent>
  </Sheet>
</template>
