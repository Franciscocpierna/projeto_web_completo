const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
console.log(aprovados) // [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
console.log(aprovados[0]) // Agatha
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array) // [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
}
// 1) Agatha
// 2) Aldo
// 3) Daniel    
// 4) Raquel
)
aprovados.forEach(nome => console.log(nome)) // Agatha Aldo Daniel Raquel
aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`)) // 1) Agatha 2) Aldo 3) Daniel 4) Raquel

const exibirAprovados = aprovado => console.log(aprovado) // Agatha Aldo Daniel Raquel
aprovados.forEach(exibirAprovados) // Agatha Aldo Daniel Raquel
