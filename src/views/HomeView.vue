<template>
  <div>
    <ConteudoInicial />
    <ResortsDestaques />
    <Conheca />
    
    <Footer/>
  </div>


</template>
<script>
// @ is an alias to /src
import ConteudoInicial from '@/components/ConteudoInicial.vue'
import ResortsDestaques from '@/components/ResortesDestaque.vue'
import Conheca from '@/components/Conheca.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    ConteudoInicial,
    ResortsDestaques,
    Conheca,
    Footer
  }
}
</script>
<style>
.banner-img {
  background: url('@/assets/img/hero-image-1.png');
  height: 450px;
}
</style>
