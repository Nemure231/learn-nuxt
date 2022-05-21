<script setup lang="ts">

</script>

<template>
<div>
    <!-- This is how we can chang the meta data in head, with using HTML, HEAD component
    automaticly import from Nuxt -->
    <Html>
        <Head>
            <Title>
                Resto
            </Title>
        </Head>
    </Html>

    <NuxtLayout name="custom">
        <template #customAd>
            <RestoBody />
        </template>
    </NuxtLayout>
</div>
</template>