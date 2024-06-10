import process from 'node:process'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
  },
  components: [
    '~/components',
    {
      path: '~/components/marketing',
      pathPrefix: false,
    },
    {
      path: '~/components/learn',
      prefix: 'Learn',
    },
    {
      path: '~/components/courses',
      prefix: 'Course',
    },
  ],
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
  },
})
