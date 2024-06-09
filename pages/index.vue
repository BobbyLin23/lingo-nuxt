<script lang="ts" setup>
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from 'vue-clerk'
import { Loader } from 'lucide-vue-next'

definePageMeta({
  layout: 'marketing',
})
</script>

<template>
  <div class="max-w-[998px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
    <div class="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
      <NuxtImg src="/hero.svg" alt="hero" />
    </div>
    <div class="flex flex-col items-center gap-y-8">
      <h1 class="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[400px] text-center">
        Learn, pratice, and master new languages with lingo.
      </h1>
      <ClientOnly class="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader class="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton v-slot="{ handler }" mode="modal" after-sign-in-url="/learn" after-sign-up-url="/learn">
              <Button size="lg" variant="secondary" class="w-full" @click="handler">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton v-slot="{ handler }" mode="modal" after-sign-in-url="/learn" after-sign-up-url="/learn">
              <Button size="lg" variant="primaryOutline" class="w-full" @click="handler">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" class="w-full" as-child>
              <NuxtLink to="/learn">
                Continue Learning
              </NuxtLink>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </ClientOnly>
    </div>
  </div>
</template>
