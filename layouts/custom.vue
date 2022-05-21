<template>
    <div>
        <!-- 
            this is how we can custom an error page with nuxt
            just create the 404.vue file in the pages folder
            we can also pass the name

            i am still have no idea how this works, 
            but seems it the file slot is only works with "custom"
            name
        -->
        <slot name="customAd">
        </slot>
        <RestoAd />
    </div>

</template>