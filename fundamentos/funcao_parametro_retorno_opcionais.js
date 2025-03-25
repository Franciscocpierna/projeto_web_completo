function area(largura, altura){
    const area=largura*altura
    if(area >20){
        console.log(`Valor acima do permitido ${area}m2.`)
    }else{
        return area
    }
}
const retorno = area(20,10)
console.log(`a área é  ${retorno} m2.`)
console.log(area(2,2))
console.log(area(2))
console.log(area(2,3,40,20))//ignora os outros parametros alem 2 
console.log(area(5,5))