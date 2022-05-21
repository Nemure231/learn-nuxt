<!-- 
    This is how we can make dynamic route we can pass the
    data of the restorant nmae, just name the file with branch []
    and then it gonn automaticly render the view
 -->
<script setup lang="ts">
// this is how ts handle error the name varibale is doubled somewrere
//and if we define the import the error is dissapeard
// import {} from "#app"

//get the json data again
import restos from "../../data/resto_data.json"

// Use is the way nust define composibel
// and we are going use it as the define
const route = useRoute()
const name = route.params.name

// this function is going to find the resto data 
//is equal to the name of resto in route
const resto = restos.find(r => r.name === name)

</script>

<template>
    <div>

        <div flex justify-center no-wrap items-center h-auto my-14 mx-6>
            <div flex-1 container>
                <!-- after that we define the route name here
            which is get from route function above -->
                <div flex flex-col justify-center items-center>
                    <template v-if="resto">
                        <NuxtLayout name="custom">
                            <template #customAd>
                            <span text-left text-2xl font-bold text-center v-text="name"></span>
                                <img w-80 h-60 object-center object-cover rounded-xl :src="resto.imageUrl" alt="">
    
                                <div grid grid-cols-3 divide-x-4 divide-green-400 text-center>
                                    <div font-bold text-xl v-text="`Rank: ${resto.rank}`">
                                    </div>
                                    <div font-bold text-xl v-text="`Revenue: ${resto.revenue}`">
                                    </div>
                                    <div font-bold text-xl v-text="`Store: ${resto.numberOfStores}`">
                                    </div>
                                </div>
                                <p text-lg text-justify v-text="resto.content">
    
                                </p>
                            </template>
                        </NuxtLayout>
                    </template>
                    <template v-else>
                        resto no found

                    </template>
                </div>
            </div>
        </div>

    </div>

</template>