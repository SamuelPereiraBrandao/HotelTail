<template>
    <div>
        <div class="container  mx-auto px-4 py-20">
            <div class="flex ">
                <div>
                    <div>
                        <div class="text-sm text-gray-400 font-medium hover:text-gray-800 transition-all">RESORT EM
                            DESTAQUE</div>
                        <div class="text-2xl">Eco resort Praia do Forte Bahia</div>
                        <div class="text-sm text-gray-400 font-medium mt-4 hover:text-gray-800 transition-all">Hotel
                            qualidade 5 estrelas</div>
                        <div class="text-sm text-gray-400 font-medium mt-4 mr-4">
                            <p class="mb-4">O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O
                                Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de
                                1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
                                Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia
                                electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a
                                disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais
                                recentemente com os programas de publicação como o Aldus PageMaker que incluem versões
                                do Lorem Ipsum.</p>
                            <p class="mb-4">O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O
                                Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de
                                1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
                                Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia
                                electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a
                                disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais
                                recentemente com os programas de publicação como o Aldus PageMaker que incluem versões
                                do Lorem Ipsum.</p>

                            <router-link to="/reserva"
                                class="hover:text-white transition-all inline-flex items-center text-yellow-900 bg-yellow-500 rounded font-medium px-3 py-2">
                                Solicitar reserva
                                <svg class="w-4 h-4 mx-4 my-2 text-center" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="ml-auto ">
                    <img class="rounded invisible md:visible" src="@/assets/img/resort1.jpg">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ResortsDestaques'
}
</script>