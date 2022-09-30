<template>
    <nav>
        <div class="flex items-center justify-between">
            <div class="">
                <img class="h-24" src="@/assets/img/hotellogo.png" alt="">
            </div>
            <div class="mr-44">
                <router-link class="p-4 text-sm text-gray-800 hover:text-gray-600 transition-all" to="/">Home
                </router-link> |
                <router-link class="p-4 text-sm text-gray-800 hover:text-gray-600 transition-all" to="/reserva">Como
                    reservar</router-link> |
                <router-link class="p-4 text-sm text-gray-800 hover:text-gray-600 transition-all" to="/informacoes">
                    Informações</router-link> |
                <router-link class="p-4 text-sm text-gray-800 hover:text-gray-600 transition-all" to="/about">Sobre nós
                </router-link>
            </div>

        </div>
    </nav>

</template>
<script>
export default {
    name: 'HeaderVue',
}
</script>