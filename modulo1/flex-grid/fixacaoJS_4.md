
```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numeroRepete = 0
  
  for(i= 0; i < arrayDeNumeros.length; i++){
      if(numeroEscolhido === arrayDeNumeros[i]){
        numeroRepete++
    }
  }
  if(numeroRepete === 0){
    return "Número não encontrado"
  }
  if (numeroRepete > 0){return `O número ${numeroEscolhido} aparece ${numeroRepete}x`}
}

```