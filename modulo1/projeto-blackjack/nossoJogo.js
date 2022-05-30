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


// 1º Etapa

console.log("Boas vindas ao jogo de Blackjack!")


// 2º Etapa

let iniciarJogo = Number(prompt("Quer iniciar uma nova rodada? [1] sim , [2] Não")) === 1

// 3º Etapa

if(iniciarJogo === false){
   console.log("O jogo acabou")
}

// 4º Etapa

if(iniciarJogo === true){

// 5º Etapa  

   let usuarioCartas = []
   let computadorCartas =  []

   usuarioCartas.push(comprarCarta())
   usuarioCartas.push(comprarCarta())

   computadorCartas.push(comprarCarta())
   computadorCartas.push(comprarCarta())

// 6º Etapa

   const pontuacaoUsuario = usuarioCartas[0].valor + usuarioCartas[1].valor
   const pontuacaoComputador = computadorCartas[0].valor + computadorCartas[1].valor
  
   console.log(`Usuário - cartas:  ${usuarioCartas[0].texto} ${usuarioCartas[1].texto}   - pontuação ${pontuacaoUsuario} `)
   console.log(`Computador - cartas:  ${computadorCartas[0].texto} ${computadorCartas[1].texto}   - pontuação ${pontuacaoComputador} `)

// 7º Etapa

   if(pontuacaoUsuario === pontuacaoComputador){
      console.log("Empate!")
   }
   if(pontuacaoUsuario <= pontucaoComputador){
      console.log("O computador ganhou!")
   }
   if(pontuacaoUsuario >= pontuacaoComputador){
      console.log("O usuário ganhou!")
   }
}