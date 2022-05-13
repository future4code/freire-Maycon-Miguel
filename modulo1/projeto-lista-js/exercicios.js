// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  altura = Number(prompt("Digite a altura: "))
  largura = Number(prompt("Digite a largura: "))

  console.log(altura * largura)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  ano_atual = Number(prompt("Digite o ano atual: "))
  ano_de_nascimento = Number(prompt("Digite o seu ano de nascimento: "))

  console.log(ano_atual - ano_de_nascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  imc = peso / (altura * altura)
  imc = parseFloat(imc.toFixed(1))

  return imc 


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Digite seu nome: ")
  const idade = Number(prompt("Digite sua idade: "))
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  array = []

  array[0] = prompt("Qual é sua primeira cor favorita? ")
  array[1] = prompt("Qual é sua segunda cor favorita? ")
  array[2] = prompt("Qual é sua terceira cor favorita? ")

  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const caps = string.toUpperCase()

  return caps


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length == string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


  return array[(array.length - 1)]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui



  primeiro_elemento = array[0]
  ultimo_elemento = array[array.length - 1]  

  array[0] = ultimo_elemento
  array[array.length - 1] = primeiro_elemento

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const compara_1 = string1.toLowerCase() 
  const compara_2 = string2.toLowerCase() 


  return compara_1 === compara_2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const ano_atual = Number(prompt("Qual é o ano atual: "))
  const ano_de_nascimento = Number(prompt("Qual é o ano de nascimento: "))
  const data_de_emicao_identidade = Number(prompt("Data de emição da carteira de indentidade: "))

  idade = ano_atual - ano_de_nascimento

  if (idade <= 20 ){

    calculo = ano_atual - data_de_emicao_identidade >= 5

    console.log(calculo) 

  } 

  if (idade > 20 && idade <= 50){

    calculo = ano_atual - data_de_emicao_identidade >= 10
    
    console.log(calculo) 

  } 

  if (idade > 50){

    calculo = ano_atual - data_de_emicao_identidade >= 15
  
    console.log(calculo) 

  } 
  

}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){

    return true

  }

  return false

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui


  idade = prompt("Você tem mais de 18 anos?")
  ensino_medio = prompt("Você possui ensino médio completo?")
  disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  if(idade === "sim" && ensino_medio === "sim" && disponibilidade === "sim"){

    console.log(true)
  } else {

    console.log(false)

  }

  

}