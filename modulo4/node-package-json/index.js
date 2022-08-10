
// Exercício 1

// A -> Para acessamos os paramentros passados no -> node index.js paramentros  -> usamos process.argv[2]

const nome = process.argv[2]

const idade = process.argv[3]

// B

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

// C

const novaIdade = Number(idade) + 7 

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)

// Exercício 2

const operacao = process.argv[2]

const valor1 = Number(process.argv[3])

const valor2 = Number(process.argv[4])

operacao == "add" ? (console.log("Resultado = ",valor1 + valor2)) : 
operacao == "sub" ? (console.log("Resultado = ",valor1 - valor2)) : 
operacao == "mult" ? (console.log("Resultado = ",valor1 * valor2)) : 
operacao == "div" ? (console.log("Resultado = ",valor1 / valor2)) : 
console.log('Essa operação não Existe')


// Exercício 3

const novaTarefa = process.argv[2]

const tarefas = [

    "Dormir as 21:00",

]

tarefas.push(novaTarefa)

console.log('Tarefa adicionada com sucesso!')

console.log("Tarefas ->",tarefas)

// Exercício 4







