<script lang="ts" setup>

</script>

<template>
  <MobileHeader />
  <Sidebar class="hidden lg:flex" />
  <main class="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
    <div class="h-full max-w-[1056px] mx-auto pt-6">
      <slot />
    </div>
  </main>
</template>
