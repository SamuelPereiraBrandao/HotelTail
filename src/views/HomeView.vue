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
import ConteudoInicial from '@/components/HomeComp/ConteudoInicial.vue'
import ResortsDestaques from '@/components/HomeComp/ResortesDestaque.vue'
import Conheca from '@/components/HomeComp/Conheca.vue'
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
.banner-img2 {
  background: url('@/assets/img/resort4.jpg');
  height: 450px;
}
</style>
