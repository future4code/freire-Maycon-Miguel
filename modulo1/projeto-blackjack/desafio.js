/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

////////////////////////////////////////// Principais Funções //////////////////////////////////////////////////////

// Array com todas as cartas dos jogadores
let usuarioCartas = []
let computadorCartas =  []

// Entregando as cartas aos jogadores 
function adicionandoCarta(jogador, quantidade){

   let quantidadeComparativa = 0

   while(quantidadeComparativa != quantidade){
      if(jogador === "usuario"){
         usuarioCartas.push(comprarCarta())
      } 
      if(jogador === "computador"){
      computadorCartas.push(comprarCarta())
      }
      quantidadeComparativa++
   }
}

// Somando e retornando a pontuação do usuario
function pontuacaoUsuario(usuarioCartas){

   let pontuacao = 0 
   let contador = 0
   const comparador = usuarioCartas.length

   while(comparador != contador){
      pontuacao = usuarioCartas[contador].valor + pontuacao
      contador++
   }
   return pontuacao
}

// Somando e retornando a pontuação do computador
function pontuacaoComputador(computadorCartas){

   let pontuacao = 0 
   let contador = 0
   const comparador = computadorCartas.length

   while(comparador != contador){
      pontuacao = computadorCartas[contador].valor + pontuacao
      contador++
   }
   return pontuacao
}

// Conferindo se as duas cartas iniciais do usuário ou do computador são dois ases (A) e sorteando novamente.
function conferindoAses(pontuacaoUsuario,pontuacaoComputador){

   if (pontuacaoUsuario === 22){
      while(usuarioCartas.length) {
         usuarioCartas.pop();
      }
      usuarioCartas.push(comprarCarta())
      usuarioCartas.push(comprarCarta())
   }
   if (pontuacaoComputador === 22){
      while(computadorCartas.length) {
         computadorCartas.pop();
      }
      computadorCartas.push(comprarCarta())
      computadorCartas.push(comprarCarta())
   }
}

// Jogadas do computador
function computadorJogadas(){
   while(true){
   if(pontuacaoComputador(computadorCartas) < 21){
      computadorCartas.push(comprarCarta())
      } else{break}
   }
}

// Confere quem ganhou o jogo 
function confereGanhador(usuarioPontos, computadorPontos){

   if(usuarioPontos === computadorPontos){
      return "Empate!"
   }
   if(usuarioPontos < 21){
      if(computadorPontos > 21){
         return "O usuário ganhou!"
      }
   }
   if(usuarioPontos > 21){
      return "O computador ganhou!"
   }
   if(computadorPontos > 21 && pontuacaoUsuario < computadorPontos){
      return "O usuário ganhou!"
   }
}

// Imprimindo resultado das cartas do jogador e confirmando se quer compra mais cartas ou para de compra
function usuarioCompraMaisCarta(){

   while(true){
      if(pontuacaoUsuario(usuarioCartas) < 21){

         let compraMaisCarta = confirm(mensagemDeCartasRevelada("incompleto"))
      
         if(compraMaisCarta === true){
            usuarioCartas.push(comprarCarta())
            mensagemDeCartasRevelada("incompleto")
         }
         if(compraMaisCarta === false){ break } 
      }
      if(pontuacaoUsuario(usuarioCartas) >= 21){
         break
      } 
   }
}

// Retorna mensagem monstrando cartas do usuario e cartas do computador
function mensagemDeCartasRevelada(incompletoOuCompleto){

   if(incompletoOuCompleto === "incompleto"){
      return `Usuário - cartas:${cartasSorteadasString("usuario")}. A carta revelada do computador é ${computadorCartas[0].texto}.
Deseja compra mais uma carta? `
   }
   if(incompletoOuCompleto === "completo"){
      return `Usuário - cartas:${cartasSorteadasString("usuario")}. A carta revelada do computador é ${cartasSorteadasString("computador")}.
Deseja compra mais uma carta? `
   }
}

// Alerta, mensagem do Resultado final do jogo
function mensagemResultadosFinais(){

   alert(`Suas cartas são${cartasSorteadasString("usuario")}. Sua pontuação é ${pontuacaoUsuario(usuarioCartas)}.
As cartas do computador são${cartasSorteadasString("computador")}. A pontuação do computador é ${pontuacaoComputador(computadorCartas)}. 
${(confereGanhador(pontuacaoUsuario(usuarioCartas), pontuacaoComputador(computadorCartas)))}`)
}

// Mostra todas cartas sorteadas em string
function cartasSorteadasString(usuarioOuComputador){

   if (usuarioOuComputador === "usuario"){

      const comparador = usuarioCartas.length
      let contador = 0
      let resultado = " "
      
      while(true){

         if(contador === comparador){break}

         resultado = resultado + (" " + usuarioCartas[contador].texto)
         contador++
      }
      resultado = resultado + " "
      return resultado
   }

   if (usuarioOuComputador === "computador"){

      const comparador = computadorCartas.length
      let contador = 0

      let resultado = " "
      
      while(true){
         
         if(contador === comparador){break}
         resultado = resultado + " " + computadorCartas[contador].texto
         contador++
      }
      resultado = resultado + " "
      return resultado
   }
}

// Zera o jogo 
function zeraJogo(usuarioCartas,computadorCartas){

      while(usuarioCartas.length) {
         usuarioCartas.pop();
      }

      while(computadorCartas.length) {
         computadorCartas.pop();
      }
   }

///////////////////////////////////////  Boas vindas  ///////////////////////////////////////////////
function blackjack(){

   alert("Boas vindas ao jogo de Blackjack!")

   // Confirmação se quer jogar
   const iniciarJogo = confirm("Quer iniciar uma nova rodada?") 

   // Inicio do jogo
   if(iniciarJogo === true){

      // Comprando cartas 
      adicionandoCarta("usuario", 2)
      adicionandoCarta("computador", 2)

      // Conferindo ases  
      conferindoAses(pontuacaoUsuario(usuarioCartas),pontuacaoComputador(computadorCartas))
      
      // Decidir se quer compra mais cartas, jogadas do usuario.
      usuarioCompraMaisCarta()

      // Computador jogando, jogadas do computador
      computadorJogadas()

      // Conferindo resultados e anunciando ganhador 
      mensagemResultadosFinais()

      // Jogar novamente zerando o jogo ou sair do jogo 
      let jogarNovamente = confirm("Deseja jogar novamente? ")

      if(jogarNovamente === true){
         zeraJogo(usuarioCartas,computadorCartas)
         blackjack()
      }
   }
}

blackjack()
alert("O jogo acabou")


