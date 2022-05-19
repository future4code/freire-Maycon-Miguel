/*

1- a) {nome: "Amanda Rangel", apelido: "Mandi" },
      {nome: "Laís Petra", apelido: "Laura" },
      {nome: "Letícia Chijo", apelido: "Chijo"}

2 - a) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3 - a) { nome: "Amanda Rangel", apelido: "Mandi" },
       { nome: "Laís Petra", apelido: "Laura" }


*/

// 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


// a)

const arrayNomeDoguinhos = pets.map((item, index, array) => {
    return item.nome
 })

console.log(arrayNomeDoguinhos)

// b)

const arrayDoguinhoSalsicha = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
})

console.log(arrayDoguinhoSalsicha)

// c)

const arrayClientesPoodles = pets.filter((item, index, array) => {
    return item.raca == "Poodle"
})

const arrayCupom10 = arrayClientesPoodles.map((item, index, array) => {
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})

// 2 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)

const arrayNomeItem = produtos.map((item,index, array) => {
    return item.nome
})

console.log(arrayNomeItem)

// b  Não consegui fazer essa sempre da conflituo nos preços e não ta 100% 

// const arrayNomePreco = produtos.filter((item,index, array) => {
//     return item.preco = item.preco * 0.95

// })


console.log("teste", arrayNomePreco)



// c

const arrayBebidas = produtos.filter((item, index, array) => {
    return item.categoria == "Bebidas"
})

console.log(arrayBebidas)

// d

const nomeYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

console.log(nomeYpe)

// d


const mensagemCompreYpe = nomeYpe.map((item, index, array) => {
    console.log(`Compre ${item.nome} por ${item.preco}`)
})

// Desafio 

// 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]


// a

const pokemonsEmOrdemAlfabetica = pokemons.map((item, index, array) => {
    return item.nome
})

pokemonsEmOrdemAlfabetica.sort()

console.log(pokemonsEmOrdemAlfabetica)


// b 

const pokemonsTipos = pokemons.map((item, index, array) => {
    return item.tipo 
})


const pokemosNaoRepetido = pokemonsTipos.filter((el,i) => {
    return pokemonsTipos.indexOf(el) === i
})

console.log(pokemosNaoRepetido)