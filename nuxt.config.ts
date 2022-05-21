import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
    ],
    //this is how nuxt config the external link stylecss from cdn
    // meta: {
    //     link: [
    //         {
    //             rel: "stylesheet",
    //             href: "link"
    //         }
    //     ]
    // },
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        attributify: true, // enabled `@unocss/preset-attributify`,
        // core options
        shortcuts: [],
        rules: [],
    },
})
