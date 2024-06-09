<script lang="ts" setup>
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from 'vue-clerk'
import { Loader } from 'lucide-vue-next'
</script>

<template>
  <header class="h-20 w-full border-b-2 border-slate-200 px-4">
    <div class="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
      <div class="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <NuxtImg src="/mascot.svg" height="40" width="40" alt="Mascot" />
        <h1 class="text-2xl font-extrabold text-green-600 tracking-wide">
          Lingo
        </h1>
      </div>
      <ClientOnly>
        <ClerkLoading>
          <Loader class="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton after-sign-out-url="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" fallback-redirect-url="/learn">
              <Button size="lg" variant="ghost">
                LOGIN
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </ClientOnly>
    </div>
  </header>
</template>
