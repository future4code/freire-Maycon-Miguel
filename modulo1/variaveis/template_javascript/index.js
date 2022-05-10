// Exercícios de interpretação de código

// 1º 

/* 

let a = 10
let b = 10

console.log(b)

b = 5

console.log(a, b)

*/ // 

// Resposta -> console.log(b) = 10 
// Resposta -> console.log(a, b) = 10 5  



// 2º 

/*

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

*/

// Resposta -> console.log(a, b, c) = 10 10 10 

// 3 º 

/*

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)


*/

// Resposta -> let p = let horas_de_trabalho
// Resposta -> let t = let salario_diario 

// Exercícios de escrita de código

// 1 º

/*

let nome 
let idade 

console.log(typeof(nome))  // o console imprime um objeto, ou seja nome é interpretado como um objeto
console.log(typeof(idade)) // o console imprime um objeto, ou seja idade é interpretado como um objeto

nome = prompt("Digite seu é seu nome: ")
idade = prompt("Digite sua idade: ")

console.log(typeof(nome))  // o console imprime que agora é uma string, ou seja estar intrepetando como string 
console.log(typeof(idade)) 


console.log(`Olá ${nome}, você tem ${idade} anos`)

*/


// 2 º

/*

let pergunta_1 = prompt("Dormiu bem?")
let pergunta_2 = prompt("Tomou cafê hoje?")
let pergunta_3 = prompt("Fez todas as atividades do dia?")


const resposta_1 = pergunta_1
const resposta_2 = pergunta_2
const resposta_3 = pergunta_3

console.log(`

Dormiu bem? - ${resposta_1}
Tomou cafê hoje? - ${resposta_2}
Fez todas as atividades do dia? - ${resposta_3}

`)

*/

// 3 º 

/*

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

a_real = a 
b_real = b 

a = b_real
b = a_real


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

*/


// QUESTÃO DE DESAFIO 


let valor_1 = prompt("Digite o primeiro valor ")
let valor_2 = prompt("Digite o segundo valor ")

valor_1 = parseInt(valor_1)
valor_2 = parseInt(valor_2)

console.log(valor_1 + valor_2)

console.log(valor_1 * valor_2)

