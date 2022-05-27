ˋˋˋ 
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  
  const nota  = p1 + p2 + ex
  
  const media =  nota/3
  
  if(media >= 9 ){
    return "A"
  }
  if(media < 9 && media >= 7.5){
    return "B"
  }
    if(media < 7.5 && media >= 6){
    return "C"
  }
  if(media < 6){
    return "D"
  }
}
ˋˋˋ 