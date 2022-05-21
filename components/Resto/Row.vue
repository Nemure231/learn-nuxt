
<script setup lang="ts">

interface restoIntern {
    // this is how we can define the props as optional add the ? after props name
    restoRank?: number,
    restoName?: string
}
const restoProps = defineProps<restoIntern>();


</script>

<template>
    <tr>
        <td v-text="restoRank" text-center></td>
        <td>
            <NuxtLink no-underline  :to="`/resto/${restoName}`">
                {{restoName}}
            </NuxtLink>
        </td>
    </tr>
</template>