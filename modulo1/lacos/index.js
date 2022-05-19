/*

1 - o codigo ta somando em loop os numeros menores que 5, as resposta final seria 10, pois seria uma sequência de soma.
0 + 1 + 2 + 3 + 4 = 10 

2 -

a) 19, 21, 23, 25, 27, 30

b) sim, colocar um contador que iria somando a cada passada exemplo i++

3 - resultado final = **** 




*/


// 1 

const bichinhosEstimacao = Number(prompt("Quantos bichinhos de estimação você tem? "))
let nomeDosPetes = [] 

//a)

if(bichinhosEstimacao === 0){

    console.log("Que pena! Você pode adotar um pet!")
}

// b)

if(bichinhosEstimacao > 0){

    for(i = 0; i < bichinhosEstimacao; i++){

    nomeDosPetes[i] = prompt("Digite o nome de seus pets")
    }
}

// c)

console.log(nomeDosPetes)

// 2

const arrayReal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a) 

function arrayIndividual(){
    for(i = 0; i < arrayReal.length; i++){

        console.log(arrayReal[i])
    }
}

arrayIndividual(arrayReal)

// b) 

function arrayDivididoPor10(){

    for(i = 0; i < arrayReal.length; i++){

        console.log(arrayReal[i]/10)
    }
}

arrayDivididoPor10()

// c)

let  arrayPar = []

for(i = 0; i < arrayReal.length; i++){

    if(arrayReal[i] % 2 == 0){

    arrayPar[i] = arrayReal[i]
    }
}

console.log(arrayPar)

// d)

let arrayString = []

function arrayEmString(){

    for(i = 0; i < arrayReal.length; i++){

        arrayString[i] = `O elemento do índex ${i} é: ${arrayReal[i]}`
    }
}

arrayEmString(arrayReal)

console.log(arrayString)

// e)

function maiorEmenorNumero(){

    menor = arrayReal[0]
    maior = 0

    for(i = 0; i < arrayReal.length; i++){

        if(arrayReal[i] < menor){

            menor = arrayReal[i]
        }

        if(arrayReal[i] > maior){

            maior = arrayReal[i]
        }
    }

    console.log(`O maior numero do arrayReal é ${maior} e o menor é ${menor}`)
}

maiorEmenorNumero()


// DESAFIOS


// 1

function jogoDeNumeros(){

    let numeroReal = 0

    let modoDeJogo = Number(prompt("Digite [ 1 ] para jogar com o computardor ou digite [ 2 ] para jogar com um amigo "))

    if(modoDeJogo === 2){
        numeroReal = Number(prompt("Jogador 1 escolha o numero secreto "))

    } else{

        numeroReal = Math.floor(Math.random() * (100 -0 + 1))
    }

    console.log("Vamos jogar!")

    numeroDeChutes = 0

    while(true){

        chute = Number(prompt("Chute um numero "))

        if( chute != numeroReal){

            numeroDeChutes = numeroDeChutes + 1
            
            console.log(`O número chutado foi: ${chute}`)

            if(chute > numeroReal){

                console.log("Errou. O número escolhido é maior")
            } 
            if( chute < numeroReal){

                console.log("Errou. O número escolhido é menor")
            }

        } else{

            console.log("Acertou!")
            console.log(`O número de tentativas foi : ${numeroDeChutes}`)

            break
        }
    }
}

jogoDeNumeros() 

// 2 -> Codigo modificado. 

// Reflexão -> Não tive muito problemas, só tive que modificar e inserir algumas linhas com algumas condiçõesm,
// como escolher jogar com o computador ou um amigo, de modo geral só tive que colocar uma função nova
// para gerar números aleatórios de 0 a 100 no lugar onde seria o numero do amigo.

