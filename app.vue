<!-- To declare the typescript just use lang attribute -->
<!-- Add setup attribute to enable vue api -->
<script setup lang="ts">

// enum is the base value, typescript use it for check if the value is equal to current options or not
// for example in the current option the value of gender boy is bost be boy, not any other string
// if the value not equal as the same string typescript will give a warning
// enum Gender {
//   GIRL = `Girl`,
//   BOY = `Boy`,
//   UNISEX = `Unisex`
// }

// enum Popularity {
//   TRENDY = `Trendy`,
//   UNIQUE = `Unique`
// }

// enum Length {
//   LONG = `Long`,
//   SHORT = `Short`,
//   ALL = `All`
// }

//we can store call the data in vue files, or we can call separate data as mixins
// we call gender, pop, length, and names
import { Gender, Popularity, Length, names } from "./data/data"
import Option from "./components/Option.vue"

//Interface is the base type of option object, that was feature of TS to check type of data
// if the object is not equal to interface typescript gonna give a warning 
interface currentOptionssState {
  gender: string,
  popularity: string,
  length: string
}


//then the interface 'currentOptionsState' above can use in here like so: 
// const currentOptions: currentOptionssState = {

// Or if you want to combine with reactive you can wrap in < >
const currentOptions = reactive<currentOptionssState>({
  // then the enum can be use in here like so
  gender: Gender.GIRL,
  popularity: Popularity.UNIQUE,
  length: Length.SHORT
});


// Nuxt is aoto import everyting so i can use anything just calling it
//reactive is how the vue handle everything make the web interactive 
// the option is gonna be a store static data object
const options = reactive([
  {
    id: 1,
    name: `Gender`
  },
  {
    id: 2,
    name: `Pop`
  },
  {
    id: 3,
    name: `Length`
  },
])

const optionsData = reactive([
  {
    id: 1,
    optionId: 1,
    name: `Boy`,
  },
  {
    id: 2,
    optionId: 1,
    name: `Girl`,
  },
  {
    id: 3,
    optionId: 1,
    name: `Unisex`,
  },
  {
    id: 4,
    optionId: 2,
    name: `Trendy`,
  },
  {
    id: 5,
    optionId: 2,
    name: `Unique`,
  },
  {
    id: 6,
    optionId: 3,
    name: `Long`,
  },
  {
    id: 7,
    optionId: 3,
    name: `All`,
  },
  {
    id: 8,
    optionId: 3,
    name: `Short`,
  },
]);


let findNames = () => {
  const filteredNames = names.filter((name) => name.gender === currentOptions.gender)
    .filter((name) => name.popularity === currentOptions.popularity)
    .filter((name) => {
      // Idk how the ALL mean but i believe it will get all of the length data
      // i can also use use if else without branch
      if (currentOptions.length === Length.ALL) return true
      else return name.length === currentOptions.length
    })
  // this is how you can push in array refs
  selectedNames.value = filteredNames.map(name => name.name)
}

// This is how to use ref state, it can also define what type arrow by default 
//ust wrap inside < > accourding the type data you want
// and add [] again if its array string
const selectedNames = ref<string[]>([]);

// you can also define the type of data in the function, for example the index is gonna be number
let removeName = (index: number) => { 

  const filterNames = [...selectedNames.value]
  filterNames.splice(index, 1);
  selectedNames.value = filterNames
}
</script>

<template>
  <div font-sans>
    <div flex justify-center items-center h-auto my-12>
      <div flex-1 container space-y-10>
        <h1 text-center>Name Generator</h1>
        <Option v-for="op in options" :key="op.id" :optionName="op" :currentOptions="currentOptions"
          :optionsData="optionsData" />
        <div flex items-center justify-center flex-col>

          <button @click="findNames()" mb-10 bg-white text-green-500 cursor-pointer px-10 py-2 rounded-md border-none
            font-bold text-lg shadow-lg>
            Find
          </button>
          <ul flex flex-wrap gap-y-10 gap-x-6 text-xl font-semibold list-none>
            <!-- If i import the file in another folder that called Result/Name.vue 
            then it need to combine the name to ResultName so nuxt is going to auto import it
            -->
            <!-- You need to put arrtow function when emit en event -->
            <ResultName v-for="(sn, index) in selectedNames" :key="sn" :selectedNames="sn" 
              @childRemoveName="() => removeName(index)" :index="index" 
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
