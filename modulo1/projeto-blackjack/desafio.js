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

///////////////////////////// funções ////////////////////////////////////////

// Adicionando as cartas -> Funcionando

let usuarioCartas = []
let computadorCartas =  []

function adicionandoCarta(jogador, quantidade){

   quantidadeComparativa = 0

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
// Pontuação dos jogadores

function pontuacaoUsuario(usuarioCartas){

   pontuacao = 0 
   contador = 0
   comparador = usuarioCartas.length

   while(comparador != contador){
      pontuacao = usuarioCartas[contador].valor + pontuacao
      contador++
   }
   return pontuacao
}
function pontuacaoComputador(computadorCartas){

   pontuacao = 0 
   contador = 0
   comparador = computadorCartas.length

   while(comparador != contador){
      pontuacao = computadorCartas[contador].valor + pontuacao
      contador++
   }
   return pontuacao
}

// Conferindo se as duas cartas iniciais do usuário ou do computador forem dois ases (A) e sorteando novamente.

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
//  Confere ganhador 

function confereGanhador(usuarioPontos, computadorPontos){

   if(usuarioPontos === computadorPontos){
      alert("Empate!")
   }
   if(usuarioPontos <= computadorPontos){
      alert("O computador ganhou!")
   }
   if(usuarioPontos >= computadorPontos){
      alert("O usuário ganhou!")
   }
}
// Imprimindo resultado e confirmando se quer compra mais cartas

function usuarioCompraMaisCarta(){

   while(true){
      if(pontuacaoUsuario(usuarioCartas) < 21){
         
         let compraMaisCarta = confirm(`Usuário - cartas:  ${usuarioCartas[0].texto} ${usuarioCartas[1].texto}. A carta revelada do computador é ${computadorCartas[0].texto}.
         Deseja compra mais uma carta? `)
      
         if(compraMaisCarta === true){
            usuarioCartas.push(comprarCarta())
         }
         if(compraMaisCarta === false){ break } 
      }

      if(pontuacaoUsuario(usuarioCartas) >= 21){
         break
         } 
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


///////////////////////////////  Boas vindas  //////////////////////////////////////////
function blackjack(){

   alert("Boas vindas ao jogo de Blackjack!")

   // Confirmação se quer jogar

   const iniciarJogo = confirm("Quer iniciar uma nova rodada?") 

   // Caso não queire jogar o jogo acaba

   if(iniciarJogo === false){
      alert("O jogo acabou")
   }

   // Inicio do jogo

   if(iniciarJogo === true){

      // Comprando cartas 

      adicionandoCarta("usuario", 2)
      adicionandoCarta("computador", 2)

      // Conferindo ases
      
      conferindoAses(pontuacaoUsuario(usuarioCartas),pontuacaoComputador(computadorCartas))
      
      // Decidir se quer compra mais cartas

      usuarioCompraMaisCarta()

      confereGanhador(pontuacaoUsuario(usuarioCartas), pontuacaoComputador(computadorCartas))

      let jogarNovamente = confirm("Deseja jogar novamente? ")

      if(jogarNovamente === true){
         zeraJogo(usuarioCartas,computadorCartas)
         blackjack()
      }
   }
}

blackjack()