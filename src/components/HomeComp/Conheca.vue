<template>
    <div>
        <div class="container mx-auto px-4">
            <div>
                <h3 class="text-2xl text-center mb-8 font-semibold hover:text-gray-800 transition-all">Conheça mais
                    resorts</h3>
                <div class="grid grid-cols-4 grid-rows-2 gap-6 h-80">
                    <div
                        class="relative rounded col-span-2 row-span-2 over-flow-hidden grayscale-0 hover:grayscale transition-all">
                        <div
                            class="absolute bottom-0 px-4 py-2 text-white font-bold transition-all hover:text-black rounded m-1">
                            Beach Park Resort
                        </div>

                        <img class="rounded w-full h-full object-cover" src="@/assets/img/resort3.jpg" alt="">
                    </div>
                    <div
                        class=" relative rounded col-span-2 over-flow-hidden grayscale-0 hover:grayscale transition-all">
                        <div
                            class="absolute bottom-0 px-4 py-2 text-white font-bold  transition-all hover:text-black rounded m-1">
                            Saladinas do Maragogi Resort
                        </div>
                        <img class="rounded w-full h-full object-cover" src="@/assets/img/resort2.jpg" alt="">
                    </div>
                    <div class="relative rounded over-flow-hidden grayscale-0 hover:grayscale transition-all">
                        <div
                            class="absolute bottom-0 px-4 py-2 text-white font-bold m-1 rounded transition-all hover:text-black">
                            Grand Palladium
                        </div>
                        <img class="rounded w-full h-full object-cover" src="@/assets/img/resort4.jpg" alt="">
                    </div>
                    <div class=" relative rounded over-flow-hidden grayscale-0 hover:grayscale transition-all">
                        <div
                            class="absolute bottom-0 px-4 py-2 text-white font-bold  m-1 rounded  transition-all hover:text-black ">
                            Arraial d'Ajuda Eco Resort
                        </div>
                        <img class="rounded w-full h-full object-cover " src="@/assets/img/resort5.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>


        <div class="py-20">
            <div class="container mx-auto px-4 flex justify-center">
                <form action="" class="space-x-4">

                    <select name="" id=""
                        class=" m-2 bg-gray-50 px-3 py-2 border-gray-300 rounded text-gray-500 hover:text-black transition-all">
                        <option value="" disabled selected>Escolha o estado</option>
                        <option value="">São Paulo</option>
                        <option value="">Rio de Janeiro</option>
                        <option value="">Bahia</option>
                        <option value="">Paraná</option>
                        <option value="">Ceará</option>
                        <option value="">Minas Gerais</option>
                        <option value="">Amazonas</option>
                    </select>

                    <select name="" id=""
                        class=" m-2 bg-gray-50 px-3 py-2 border-gray-300 rounded text-gray-500 hover:text-black transition-all">
                        <option value="" disabled selected>Escolha a cidade</option>
                        <option value="">São Paulo</option>
                        <option value="">Rio de Janeiro</option>
                        <option value="">Salvador</option>
                        <option value="">Curitiba</option>
                        <option value="">Fortaleza</option>
                        <option value="">Belo Horizonte</option>
                        <option value="">Manaus</option>

                    </select>

                    <router-link to="/reserva"
                        class="hover:text-white transition-all inline-flex items-center text-yellow-900 bg-yellow-500 rounded font-medium px-3 py-2">

                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Pesquisar resorts
                    </router-link>
                </form>
            </div>
        </div>

    </div>


</template>
<script>
export default {
    name: 'ConhecaVue'
}
</script>
<style>

</style>