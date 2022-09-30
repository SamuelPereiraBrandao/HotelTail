<template>
    <ReservaIni/>
    <Whats/>
    <Footer></Footer>
</template>
<script>
    import Whats from '@/components/ReservaComp/Whats.vue'
    import ReservaIni from '@/components/ReservaComp/ReservaInicial.vue'
import Footer from '@/components/Footer.vue';
export default {
    name: 'ReservaVue',
    components: {
    ReservaIni,
    Whats,
    Footer
}

}
</script>