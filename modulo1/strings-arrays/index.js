/* 1º  a) null b) null c) 11 d) 3 e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] f) 9

let array
console.log('a. ', array) ----------------> null

array = null
console.log('b. ', array) ------------> null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) ---------------> 11 

let i = 0
console.log('d. ', array[i]) ----------->  3

array[i+1] = 19
console.log('e. ', array) ----------> [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) ---> 9




2º  SUBI NUM ÔNIBUS EM MIRROCOS 27


const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) -> SUBI NUM ÔNIBUS EM MIRROCOS 27


*/  


// 1º 

const nome_usuario = prompt("Digite seu nome de usuario")
const email = prompt("Digite o seu e-mail: ")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome_usuario}!`)

// 2º



let comidas_preferidas = ["Lasanha","Estrogonofe","Sopa de salsicha","File de frago","Peixe"] 


// a)
console.log(comidas_preferidas)       


// b)
console.log("Essas são as minhas comidas preferidas")


console.log(comidas_preferidas[0])
console.log(comidas_preferidas[1])
console.log(comidas_preferidas[2])
console.log(comidas_preferidas[3])


// c)

let comida_preferidas_usuario = prompt("Digite sua comida preferida: ") 

comidas_preferidas[1] = comida_preferidas_usuario

console.log(comidas_preferidas)



// 3º

// a)

let listaDeTarefas = []

// b)

listaDeTarefas[0] = prompt("Digite sua tarefa: ")
listaDeTarefas[1] = prompt("Digite sua tarefa: ")
listaDeTarefas[2] = prompt("Digite sua tarefa: ")

// c)

console.log(listaDeTarefas)

// d)

let tarefa_realizada = Number(prompt("Digite qual tarefa foi relizada {0} {1} {2}: "))

// e) 

listaDeTarefas.splice(tarefa_realizada)


// f) 

console.log(listaDeTarefas)







