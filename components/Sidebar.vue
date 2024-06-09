<script lang="ts" setup>
import { ClerkLoaded, ClerkLoading, UserButton } from 'vue-clerk'
import { Loader } from 'lucide-vue-next'

import { cn } from '~/lib/utils'

const attrs = useAttrs()
</script>

<template>
  <div
    :class="cn('h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col',
               attrs.class as string)"
  >
    <NuxtLink href="/learn">
      <div class="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <NuxtImg src="/mascot.svg" height="40" width="40" alt="Mascot" />
        <h1 class="text-2xl font-extrabold text-green-600 tracking-wide">
          Lingo
        </h1>
      </div>
    </NuxtLink>
    <div class="flex flex-col gap-y-2 flex-1">
      <SidebarItem label="Learn" href="/learn" icon-src="/learn.svg" />
      <SidebarItem label="LeaderBoard" href="/leaderboard" icon-src="/leaderboard.svg" />
      <SidebarItem label="quests" href="/quests" icon-src="/quests.svg" />
      <SidebarItem label="shop" href="/shop" icon-src="/shop.svg" />
    </div>
    <ClientOnly>
      <div class="p-4">
        <ClerkLoading>
          <Loader class="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton after-sign-out-url="/" />
        </ClerkLoaded>
      </div>
    </ClientOnly>
  </div>
</template>
