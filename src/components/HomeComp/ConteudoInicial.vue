<template>
    <div class=" banner-img">
        <div class="flex-col container mx-auto px-4 h-full flex items-center justify-center">
            <div>
                <div class="text-center">
                    <h1 class="text-gray-200 text-3xl mb-1">Onde você quer ir?</h1>
                    <p class="text-green-100">Escolha o estado e cidade para achar os melhores resorts</p>
                </div>
            </div>
            <div class="">
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
    name: 'ConteudoInicial'
}
</script>