<script setup lang="ts">
import { Gender, Popularity, Length } from "../data/data"

interface checkOptionState {
  option: string,
}
//if its just one simple data then no need to put any reactive
const checkOption: checkOptionState = {
  option: '',
}

// The props can be stored in interface also in order to give typescript
// full access to find a problem in it, for example the different type of the data
interface OptionProps {
  optionName: {
    id: number,
    name: string
  },
  optionsData: [{
    id: number,
    optionId: number,
    name: `string`
  }],
  currentOptions: {
    gender: Gender,
    popularity: Popularity,
    length: Length,
  }
}
const props = defineProps<OptionProps>();


// this how the function defined, it can work with any arrow function
// you can also define the type of data in the function, for example the eve is gonna be string
let changeButton = (eve: string) => {


  if (Object.values(Gender).includes(eve as Gender)) {
    props.currentOptions.gender != Gender[`${eve.toUpperCase()}`] && (props.currentOptions.gender = Gender[`${eve.toUpperCase()}`])
  }

  if (Object.values(Popularity).includes(eve as Popularity)) {
    props.currentOptions.popularity != Popularity[`${eve.toUpperCase()}`] && (props.currentOptions.popularity = Popularity[`${eve.toUpperCase()}`])
  }
  if (Object.values(Length).includes(eve as Length)) {
    props.currentOptions.length != Length[`${eve.toUpperCase()}`] && (props.currentOptions.length = Length[`${eve.toUpperCase()}`])
  }
}

// this is how we are writing computed
// const comCheckOption = computed(() => {

// })

</script>

<template>
  <div text-center>
    <span v-text="optionName.name" font-semibold>
    </span>
    <div mt-2 flex justify-center flex-row items-center flex-wrap gap-4>

      <button v-for="od in optionsData" :key="od.id" v-text="od.optionId === optionName.id && od.name" 
      
      :class="[
        checkOption.option = od.optionId === optionName.id && od.name,
        typeof checkOption.option === 'boolean' && `hidden`,
        // In here i can call the value of enum that uppercase one and can also make condition
        // or even a dynamic enum in the array string for example Gender['BOY']
        currentOptions.gender == Gender[`${od.name.toUpperCase()}`] && od.name === od.name.replace(/^./, str => str.toUpperCase()) ? `bg-green-600` : `bg-green-400`,
        currentOptions.popularity == Popularity[`${od.name.toUpperCase()}`] && od.name === od.name.replace(/^./, str => str.toUpperCase()) ? `bg-green-600` : `bg-green-400`,
        currentOptions.length == Length[`${od.name.toUpperCase()}`] && od.name === od.name.replace(/^./, str => str.toUpperCase()) ? `bg-green-600` : `bg-green-400`,
      ]" @click="changeButton(od.name)" hover:bg-green-500 cursor-pointer px-6 py-2 rounded-md border-none font-bold
        shadow-md>
      </button>

    </div>
  </div>
</template>