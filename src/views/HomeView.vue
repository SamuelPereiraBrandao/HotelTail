<template>
  <div>
    <ConteudoInicial />
    <ResortsDestaques />
    <Conheca />
  </div>


</template>
<script>
// @ is an alias to /src
import ConteudoInicial from '@/components/ConteudoInicial.vue'
import ResortsDestaques from '@/components/ResortesDestaque.vue'
import Conheca from '@/components/Conheca.vue'
export default {
  name: 'HomeView',
  components: {
    ConteudoInicial,
    ResortsDestaques,
    Conheca
  }
}
</script>
<style>
.banner-img {
  background: url('@/assets/img/hero-image-1.png');
  height: 450px;
}
</style>
