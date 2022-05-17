/* Exercícios de interpretação de código


1 - 

a) Se o numero é impar ou par se der 1 é impar se der 0 é par 

b) Todos os numeros parares

c) Todos numeros impar 


2 - 

a) Mostra o preço da frata escolhida

b) O preço da fruta Maçã  é R$ 2.25

c) O preço da fruta Pêra  é R$ 5 (O certo seria 5.5 )


3 -

a) Esta recebendo um comando do usuario que é uma string e trasformando em um numero 

b) Se fosse 10 iria imprimir "Esse número passou no teste".
No caso do -10 não iria acontecer nada, porque não tem nada programado para acontecer. 

c) Sim, não iria imprimir "Essa mensagem é secreta!!!", porque não é uma variavel global,
sendo assim o console que imprime a mensagem secreta no final não funcionaria e daria erro porque a variavel não existe.

*/


// 1

const idade_usuario = Number(prompt("Qual sua idade?"))


if(idade_usuario >= 18){

    console.log("Você pode dirigir")

} else{

    console.log("Você não pode dirigir.")


}


// 2

const aluno_turno = prompt("Qual seu turno? M (matutino) ou V (Vespertino) ou N (Noturno)").toLowerCase()


if(aluno_turno == "m"){

    console.log("Bom dia!")

}

if(aluno_turno == "v"){

    console.log("Bom Tarde!")

}

if(aluno_turno == "n"){

    console.log("Bom Noite!")

}


// 3 

switch (aluno_turno){

    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Bom Tarde!")
        break
    case "n":
        console.log("Bom Noite!")
        break
    default:
        console.log("Tente novamente usando as letras M (matutino) ou V (Vespertino) ou N (Noturno)")
        break
}

// 4 


const genero_filme = prompt("qual o gênero de filme deseja assistir? ").toLowerCase()
const preço_filme = Number(prompt("Qual é o preço do ingresso? "))
if(genero_filme == "fantasia" && preço_filme < 15) {

    const lanche = prompt("Qual acompanhamento vai querer? (pipoca, chocolate, doces, amendoim )")

    console.log("Bom filme!")
    console.log(`E Aproveite o seu ${lanche}`)

} else {

    console.log("Escolha outro filme :(")

}


// DESAFIOS 


// 1 -> modifiquei o codigo do exercicio 4 


// 2 


const nome_completo = prompt("Digite seu nome completo")

let tipo_de_jogo = prompt("Digite o tipo de jogo IN (internacional) ou DO (doméstico)").toLowerCase()

let etapa_de_jogo = prompt("Digite o etapa do jogo, SF (semi-final), DT (decisão de terceiro lugar), FI (final)").toLowerCase()

const categoria = Number(prompt("Digite a categoria opeções 1, 2, 3 ou 4"))

const quantidade_ingresso = Number(prompt("Digite a quantidade de ingressos "))

let valor_ingresso = 0



// tabela de preço

if(etapa_de_jogo == "sf"){

    switch (categoria) {
        case 1:
            valor_ingresso = 1320
            break
        case 2:
            valor_ingresso = 880 
            break
        case 3:
            valor_ingresso = 550

        case 4:
            valor_ingresso = 220
    
        default:
            break
    }

    
}

if(etapa_de_jogo == "dt"){

    switch (categoria) {
        case 1:
            valor_ingresso = 660
            break
        case 2:
            valor_ingresso = 440 
            break
        case 3:
            valor_ingresso = 330

        case 4:
            valor_ingresso = 170
    
        default:
            break
    }

    
}

if(etapa_de_jogo == "fi"){

    switch (categoria) {
        case 1:
            valor_ingresso = 1980
            break
        case 2:
            valor_ingresso = 1320
        case 3:
            valor_ingresso = 880

        case 4:
            valor_ingresso = 330
    
        default:
            break
    }

    
}


if (tipo_de_jogo == "in"){

    valor_ingresso = valor_ingresso * 4.10


}




// tipo de jogo

if (tipo_de_jogo == "in"){

    tipo_de_jogo = "internacional"

} else{

    tipo_de_jogo = "doméstico"

}

// etapa de jogo

switch (etapa_de_jogo) {
    case "sf":
        etapa_de_jogo = "semi-final"
        break
    case "dt":
        etapa_de_jogo = "decisão de terceiro lugar"
        break
    case "fi":
        etapa_de_jogo = "final"
        break
    default:
        break
}

console.log(`

---Dados da compra--- 
Nome do cliente:  ${nome_completo} 
Tipo do jogo:  ${tipo_de_jogo} 
Etapa do jogo:  ${etapa_de_jogo} 
Categoria: ${categoria} 
Quantidade de Ingressos:  ${quantidade_ingresso} ingressos 
---Valores--- 
Valor do ingresso:  R$ ${Math.round(valor_ingresso)},00
Valor total:  R$ ${Math.round(valor_ingresso * quantidade_ingresso)},00



`)