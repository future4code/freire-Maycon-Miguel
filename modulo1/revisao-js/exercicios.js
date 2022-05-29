// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    
    let arrayInvertido = []

    for(i = array.length -1; i > -1 ; i--){
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) { 
    return array.sort((a,b) => {return a - b})
}

// EXERCÍCIO 04
function retornaNumerosPares(array){

    let numerosPares = []
    let contador = 0
    const comparador = array.length

    while(true){ 

    if(contador === comparador){
      break
    }
    if(array[contador] % 2 === 0){
        numerosPares.push(array[contador])
        }
    contador++
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    let numerosPares = []
    let contador = 0
    const comparador = array.length

    while(true){ 

    if(contador === comparador){
      break
    }
    if(array[contador] % 2 === 0){
        numerosPares.push(array[contador]**2)
        }
    contador++
    }
    return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maiorNumero = array[0]
    let contador = 0
    const comparador = array.length

    while(true){ 

    if(contador === comparador){
      break
    }

    if(maiorNumero < array[contador] ){
        maiorNumero = array[contador]
        }
    contador++
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero = 0
    let maiorDivisivelPorMenor = false
    let diferenca = 0 

    if(num1 > num2){
        maiorNumero = num1

        if(num1/num2 === 2|| num1/num2 === 1){
            maiorDivisivelPorMenor =true
        }
        diferenca = num1 - num2
    }else{
        maiorNumero = num2

        if(num2/num1 === 2 || num2/num1 === 1){
            maiorDivisivelPorMenor =true
        }
        diferenca = num2 - num1
    }
    obejeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return obejeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let primeirosNumeroPares = []
    let contador = 0
    const comparador = n-1
    let todosOsNumeros = 0 

    while(contador <= comparador){
        
        if(todosOsNumeros % 2 === 0){
            primeirosNumeroPares[contador] = todosOsNumeros
            contador++
        }
        todosOsNumeros++
    }
    return primeirosNumeroPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }
    if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
        return "Isósceles"
    }
    if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC ){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    const novaArray = array.sort((a,b) => {return a - b})
    const segundoMaiorNumero = novaArray[novaArray.length-2]
    const segundoMenorNumero = novaArray[1]
    return [segundoMaiorNumero, segundoMenorNumero]    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const formatandoAtores = filme.atores[0] + ", " + filme.atores[1] + ", " + filme.atores[2] + ", " + filme.atores[3]
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${formatandoAtores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa.nome = "ANÔNIMO"
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const pessoasPermitidas = pessoas.filter((item, index, array) => {
        return item.altura >= 1.5 && item.idade > 14 && item.idade < 60
    })

    return pessoasPermitidas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    const pessoasPermitidas = pessoas.map((item, index, array) => {
        return item.altura >= 1.5 && item.idade > 14 && item.idade < 60
    })
    
    const pessoasNaoPermitidas = pessoas.filter((item, index, array) => {
        if(pessoasPermitidas[index] === false){
            return array
        }
    })
    return pessoasNaoPermitidas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    let contasAtualizadas = 0 

    for(let lista = 0; lista < contas.length; lista++){
        for(let chaves = 0; chaves < contas[lista].compras.length; chaves++){
            contasAtualizadas += contas[lista].compras[chaves]     
        }
        contas[lista].saldoTotal -= contasAtualizadas
        contas[lista].compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a,b) => {
        if(a.nome < b.nome){
            return -1
        }
        if(a.nome > b.nome){
            return 1
        }
    })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a,b) => {

        let dataA = new Date(a.dataDaConsulta.split('/').reverse().join('-'))
        let dataB = new Date(b.dataDaConsulta.split('/').reverse().join('-'))

        if(dataA < dataB){
            return -1
        }
        if(dataA > dataB){
            return 1
        }
    })
}

   
