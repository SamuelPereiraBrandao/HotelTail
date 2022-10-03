<template>
    <div class=" banner-img2">
        <div class="flex-col container max-w-5xl mx-auto px-4 h-full flex items-center justify-center">
            <div>
                <div class="text-center">
                    <h1 class="text-gray-200 text-3xl mb-1">Reserve agora mesmo!</h1>
                    <p class="text-green-100 mb-2">Os melhores resorts estão aqui</p>
                </div>
            </div>
            <div class="">
               
                    <router-link to="/informacoes"
                        class=" transition-all inline-flex items-center text-white bg-black hover:bg-white hover:text-black rounded font-medium px-3 py-2">

                       
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                        Sobre o Hotel Tail
                    </router-link>
                
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ReservaIni',

    }
</script>