let contador=1
while(contador <= 10){
  console.log(`contador = ${contador}`)
  contador +=1
  //ou contador++
}

for(let i=1;i<=10;i++){
  console.log(`i = ${i}`)
} 

const nota= [6.7,7.5,8.9,9.6]
for(let i=0;i<nota.length;i++){
  console.log(`nota = ${nota[i]}`)
} 
for(let i in nota){
  console.log(`nota = ${nota[i]}`)
}

//objeto
const pessoa = {
      nome: 'Ana',
      sobrenome: 'Silva',
      idade: 29,
      peso: 64


}

for(let atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`)
} 