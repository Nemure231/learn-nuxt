<template>
    <div>
        <!-- this is how we can custom an error page with nuxt
just create the 404.vue file in the pages folder -->
        <slot name="customAd">
        </slot>
        <RestoAd />
    </div>

</template>