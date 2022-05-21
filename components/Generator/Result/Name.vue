
<script setup lang="ts">
interface SelectedNameProps {
    selectedNames: string,
    index: number
}
const props = defineProps<SelectedNameProps>();

// define the emit is just call the define function of it, and the name of the emit event in the parents app.vue
// the one with @childRemoveName
const emitChildRemoveName = defineEmits(["childRemoveName"]);

// And then make a function inside the children file
const childRemoveName = () => {
    // That going to call trigger the event in the parents file
    emitChildRemoveName("childRemoveName", props.index)
}

</script>
<template>
    <li bg-green-400 px-10 py-4 rounded-xl relative>
        <div absolute top-0 right-0>
            <button @click="childRemoveName"
                bg-transparent border-none cursor-pointer>
                <svg w-6 h-6 mlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="#ae2929"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z">
                    </path>
                </svg>
            </button>
        </div>
        <div v-text="selectedNames">
        </div>
    </li>

</template>