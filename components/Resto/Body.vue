
<script setup lang="ts">

import restoData from "../../data/resto_data.json"

const organizedRestoData = {
    // this will cut the index from 0 to 25 and so do
    first: [...restoData].splice(0, 25),
    secound: [...restoData].splice(25, 25)
}
</script>

<template>
    <div flex justify-center no-wrap items-center h-auto my-12>
        <div flex-1 container space-y-10>
            <h1 text-center>My resto</h1>

            <div flex flex-row>
                <div flex-1 font-sans text-lg>
                    <table table-auto w-full>
                        <thead>
                            <tr>
                                <th text-center>No</th>
                                <th text-left>Artist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RestoRow v-for="ord in organizedRestoData.first" :key="ord.id"
                             :restoName="ord.name" :restoRank="ord.rank" />
                        </tbody>
                    </table>
    
                </div>
                <div flex-1 font-sans text-lg>
                <table table-auto w-full>
                    <thead>
                        <tr>
                            <th text-center>No</th>
                            <th text-left>Artist</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RestoRow  v-for="ord in organizedRestoData.secound" :key="ord.id"
                        :restoName="ord.name" :restoRank="ord.rank" />
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</template>