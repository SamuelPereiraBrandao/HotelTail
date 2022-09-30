<template>
    <InfoConteudo></InfoConteudo>
    
      
    <Footer></Footer>
</template>
<script>
import Footer from '@/components/Footer.vue';
import InfoConteudo from '@/components/InfoComp/InfoConteudo.vue';
export default {
    name: "InformacoesVue",
    components: { Footer, InfoConteudo }
}
</script>