import { provideClerkToVueApp } from 'vue-clerk'

export default defineNuxtPlugin(async (nuxtApp) => {
  const publishableKey = useRuntimeConfig().public.clerkPublishableKey as string

  const clerk = provideClerkToVueApp(nuxtApp.vueApp, {
    publishableKey,
    routerPush: (to) => {
      return navigateTo(to)
    },
    routerReplace: (to) => {
      return navigateTo(to, { replace: true })
    },
  })

  await clerk.loadClerkJS()

  return {
    provide: {
      clerk,
    },
  }
})
