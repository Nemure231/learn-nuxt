<template>
<div text-black>
    <!-- this is how we can custom an error page with nuxt
just create the 404.vue file in the pages folder -->

<NuxtLayout name="error">
    <!-- the defined 2 slot can be placed like this -->
    <template #header>
        <div mt-20>page not found</div>
    </template>

    <template #redirectEl>
        <NuxtLink to="/">Go back</NuxtLink>
    </template>
</NuxtLayout>
</div>

</template>