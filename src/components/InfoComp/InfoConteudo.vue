<template>
    <section class="py-48 bg-gray-200 flex flex-col justify-center">
        <div class="grid grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div class="-mt-20 flex justify-end">
            <img class="w-2/3 h-2/3 object-cover overflow-hidden pb-20 rounded" src="@/assets/img/resort1.jpg" />
          </div>
          <div class="flex justify-start">
            <img class="rounded-lg object-cover overflow-hidden" src="@/assets/img/resort2.jpg" />
          </div>
          <div class="-mt-64 flex justify-start">
            <img class="rounded-lg object-cover overflow-hidden" src="@/assets/img/resort3.jpg" />
          </div>
          <div class="flex justify-start -mr-28 ml-28">
            <img class="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="@/assets/img/resort4.jpg" />
          </div>
          <div class="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
            <div class="space-y-4">
              <p class="text-5xl font-bold text-black tracking-tight">
                Quem somos?
              </p>
              <p class="text-xl text-black">
                Somos uma empresa que trabalha a vários anos no ramo de Hoteis e Resorts, fazendo sua reserva, hospedagem e tudo mais! Nós temos diversos clientes(Hoteis) em nossa rede, então não perca tempo e venha fazer parte do nosso mundo!
              </p>
            </div>
            <div class="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
              <div>
                <p class="text-4xl font-bold text-black">
                  20MIL+
                </p>
                <p class="text-sm text-black">
                  Pessoas por mês satisfeitas pelo excelente atendimento!
                </p>
              </div>
              <div>
                <p class="text-4xl font-bold text-black">
                  5 Estrelas
                </p>
                <p class="text-sm text-black">
                  Nós trabalhamos com todos os Hoteis e resorts disponiveis, desde o mais básico até o mais luxuoso possivel!
                </p>
              </div>
              
            </div>
            <a target="_blank" href="https://api.whatsapp.com/send/?phone=5511981175506&text=Tenho+interesse+em+reservar+uma+vaga,+%20+Por%20favor"
            class=" transition-all inline-flex items-center text-white bg-black hover:bg-gray-100 hover:text-black rounded font-medium px-3 py-2">
            ENTRAR EM CONTATO
            <svg class="w-4 h-4 mx-4 my-2 text-center" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </a>
          </div>
        </div>
      </section>
</template>
<script>
    export default {
        name:'InfoVue'
    }
</script>