/* 

1-  a) 10 50 b) não iria imprimir nada, no entando a função ainda funciona.


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


2- a) A função recebe um texto e retorna se existe a palavra "cenoura" dentro dele, retornando false ou true.
   b) 1- true  2- true 3- true

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


*/


// 1 

// a)

function me_apresentando(){

    console.log("Eu sou Maycon, tenho 19 anos, moro em Itapemirim e sou estudante.")

}


// b)

function apresentacao_generica(nome, idade, endereco, profissao){


    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`


}

console.log(apresentacao_generica("maycon",19,"Itapemirim", "programador"))


// 2

// a) 

function somar(num1,num2){

    return num1 + num2

}


console.log(somar(2,3))


// b


function maior_ou_igual(num1, num2){

    return num1 >= num2

}

console.log(maior_ou_menor(3,2))

// c 


function impa_ou_par(num1){

    return num1 % 2 == 0


}

console.log(impa_ou_par(2))


// d


function caps_texto(texto){

    return `${texto} ` + texto.toUpperCase()

}

console.log(caps_texto("Eu gosto de batata"))


// e

let num1 = Number(prompt("Digite o primeiro numero"))

let num2 = Number(prompt("Digire o segundo numero"))


function soma(num1,num2){

    return num1 + num2

}

function subtracao(num1,num2){
   
    return num1 - num2

}

function multiplicacao(num1,num2){

    return num1 * num2

}

function divisao(num1,num2){

    return num1 / num2

}

console.log(`

Números inseridos: ${num1} ${num2}
Soma: ${soma(num1,num2)}
Diferença: ${subtracao(num1,num2)}
Multiplicação: ${multiplicacao(num1,num2)}
Divisão: ${divisao(num1,num2)}

`)