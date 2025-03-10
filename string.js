const escola = "Cod3r"
console.log(escola.charAt(4)) // Retorna o caractere no índice 4
console.log(escola.charAt(5)) // Retorna vazio
console.log("*********") 
console.log(escola.charCodeAt(3)) // Retorna o código do caractere no índice 3
console.log(escola.indexOf('3')) // Retorna o índice do caractere 3
console.log(escola.substring(1)) // Retorna a string a partir do índice 1
console.log(escola.substring(0, 3)) // Retorna a string a partir do índice 0 até o 3
console.log('Escola '.concat(escola).concat("!")) // Concatenação
console.log('Escola ' + escola + "!") // Concatenação
console.log(escola.replace(3, 'e')) // Substitui o 3 por e
console.log('Ana,Maria,Pedro'.split(',')) // Gera um array com os elementos separados por vírgula
console.log('Ana,Maria,Pedro'.split(/,/)) // Gera um array com os elementos separados por vírgula
console.log(escola.replace(/\d/, 'e')) // Substitui o dígito por e
console.log(escola.replace(/\d/g, 'e')) // Substitui todos os dígitos por e
console.log("*********") 
console.log(escola.replace(/\w/, 'e')) // Substitui a letra por e
console.log(escola.replace(/\w/g, 'e')) // Substitui todas as letras por e
