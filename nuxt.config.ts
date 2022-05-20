import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
    ],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        attributify: true, // enabled `@unocss/preset-attributify`,
        // core options
        shortcuts: [],
        rules: [],
    },
})
