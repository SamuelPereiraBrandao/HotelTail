<template>
    <nav>
        <div class="container  flex items-center justify-between ">
            <div class="">
                <router-link to="/">
                    <img class="h-24" src="@/assets/img/hotellogo.png" alt="">
                </router-link>
            </div>
            <div class="mr-44">
                <router-link class="p-4 text-sm text-gray-800 hover:text-gray-600 transition-all" to="/">Home
                </router-link> |
                <router-link class="p-4 text-sm text-gray-800 hover:text-gray-600 transition-all" to="/reserva">Reservar</router-link> |
                <router-link class="p-4 text-sm text-gray-800 hover:text-gray-600 transition-all" to="/informacoes">
                    Sobre</router-link> 
            </div>

        </div>
    </nav>

</template>
<script>
export default {
    name: 'HeaderVue',
}
</script>