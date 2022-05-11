
/* 1-   a) false b) false c) true d) boolean

const bool1 = true
const bool2 = false
const bool3 = !bool2 ---------> true 

let resultado = bool1 && bool2
console.log("a. ", resultado) -------> false

resultado = bool1 && bool2 && bool3  
console.log("b. ", resultado) -----------> false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)       ------------> true

console.log("d. ", typeof resultado)  ----------->  boolean 


2- Resposta - Ele deveria trasforma em numero a variavel dele é uma string possivel solução usando o Number()

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

3 - Resposta 

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

// 1 º

let idade_usuario = Number(prompt("Digite sua idade: "))

let idade_melhor_amigo = Number(prompt("Digite a idade do melhor amigo ou amiga: "))

console.log(`Sua idade é maior do que a do seu melhor amigo? - ${idade_usuario > idade_melhor_amigo}`)

console.log(`Diferença de idade ${idade_usuario - idade_melhor_amigo}`)


// 2 º 

let numero_par = Number(prompt("Digite um numero par: "))

console.log(`Resto da divisão de 2 = ${numero_par%2}`) // O resultado sempre da 0 
                                                      // Se colocamos um numero impa o resto se torna 1

// 3 º


let idade_em_anos = Number(prompt("Digite sua idade em anos: "))


console.log(`

a) A idade do usuário em meses - ${idade_em_anos*12}

b) A idade do usuário em dias - ${idade_em_anos*365}

c) A idade do usuário em horas - ${(idade_em_anos*365)*24}

`)

// 4 º

let numero_1 = Number(prompt("Digite o primeiro numero: "))
let numero_2 = Number(prompt("Digite o segundo numero: "))


console.log(`
O primeiro numero é maior que segundo? - ${numero_1 > numero_2}
O primeiro numero é igual ao segundo? - ${numero_1 == numero_2}
O primeiro numero é divisível pelo segundo? - ${numero_1 % numero_2 == 0}
O segundo numero é divisível pelo primeiro? - ${numero_2 % numero_1 == 0}

`)