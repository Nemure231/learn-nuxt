<!-- From the start this index is app.vue but if we move it in the pages
Nuxt will accosiate it as index filwe which is the center of, and also it
was connected to 404 page if we dont have any page
-->
<script setup lang="ts">


</script>
 
<template>
<div>
  <!-- This is how we can chang the meta data in head, with using HTML, HEAD component
    automaticly import from Nuxt -->
    <Html>
        <Head>
            <Title>
                Leaning Nuxt
            </Title>
        </Head>
    </Html>


</div>
</template>

<style>
 body {
   margin: 0px;
 }
</style>