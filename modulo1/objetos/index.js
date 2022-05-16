// -------------------- Exercícios de interpretação de código -----------------------------------

/*

1 - # RESPOSTA # 

a) Matheus Nachtergaele, Virginia Cavendish , (canal: Globo, horario: 14h)


const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])                            -> Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])      -> Virginia Cavendish
console.log(filme.transmissoesHoje[2])                  -> canal: "Globo", horario: "14h"


2 -  # RESPOSTA # 

a) (nome: "Juca", idade: 3, raca: "SRD") ,(nome: "Juba", idade: 3, raca: "SRD"), (nome: "Jubo", idade: 3, raca: "SRD")  
b) Relaciona com o objeto que já existe é como se fosse uma herança.



const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) -> nome: Juca , idade: 3, raca: SRD
console.log(gato) 
console.log(tartaruga)

3 - # RESPOSTA # 

a) false, undefined 
b) Porque altura é um proriedade que não existe e é indefinida. 


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))     -> false 
console.log(minhaFuncao(pessoa, "altura"))        -> undefined


*/

// 1 a)



// Exemplo de entrada
const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }


 const objeto = {

     nome: "Maycon",
     apelidos: ["Maike","Michael","May"]

 }


function recebe_objeto(objeto){

    

    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)



}

recebe_objeto(objeto)
recebe_objeto(pessoa)


// b)

const novo_objeto = {

    ...pessoa,
    
    apelidos: ["apelido1","apelido2","apelido3"]

}

recebe_objeto(novo_objeto)



// 2 

// a)


const objeto_1 = {

    nome: "Maycon",
    idade: 19,
    profissao: "programador"

}

const objeto_2 = {

    nome: "Rogerio",
    idade: 30,
    profissao: "Médico"

}


// b)

function funsao(objeto_1, objeto_2){

    const informacoes_1 = [
        
    objeto_1.nome,
    objeto_1.nome.length,
    objeto_1.idade,
    objeto_1.profissao,
    objeto_1.profissao.length

    ]

    const informacoes_2 = [
        
        objeto_2.nome,
        objeto_2.nome.length,
        objeto_2.idade,
        objeto_2.profissao,
        objeto_2.profissao.length
    
    ]

    console.log("Obejeto 1 = ", informacoes_1)
    console.log("Obejeto 2 = ", informacoes_2)
    
}

funsao(objeto_1,objeto_2)


// 3 

//a 

carrinho = []


// b 


const fruta_1 = {

    nome: "maça",
    disponivel: true

}

const fruta_2 = {

    nome: "banana",
    disponivel: true

}

const fruta_3 = {

    nome: "abacaxi",
    disponivel: true

}



// c

function feira(fruta){

     
    carrinho = fruta.push()

    console.log(carrinho)

}


// d

console.log(fruta_1,fruta_2,fruta_3)


// --------------- DESAFIO ---------------------------


// 1

function nome_usuario(nome, idade, profissao){

    const informacoes = {

        nome: nome,
        idade: idade,
        profissao: profissao

    }

    
    console.log(typeof informacoes)
    console.log(informacoes)



}

nome_usuario("Maycon", 19, "programador")


// 2 

const filme_1 = {

    ano_lancamento: 2003,
    nome: "As viagens de chihiro"

}

const filme_2 = {

    ano_lancamento: 2001,
    nome: "shrek"

}



function filme_comparador(filme_1, filme_2){

    const ano_filme_1 = filme_1.ano_lancamento 
    const ano_filme_2 = filme_2.ano_lancamento 

    return `
    
    O primeiro filme foi lançado antes do segundo? ${ano_filme_1 < ano_filme_2}
    O primeiro filme foi lançado no mesmo ano do segundo? ${ano_filme_1 == ano_filme_2}
    
    `



}


console.log(filme_comparador(filme_1, filme_2))


// 3


function controle_dee_estoque(fruta){

    return fruta.disponivel = false

}

controle_dee_estoque(fruta_1)
controle_dee_estoque(fruta_2)
controle_dee_estoque(fruta_3)

console.log(fruta_1,fruta_2,fruta_3)


    
