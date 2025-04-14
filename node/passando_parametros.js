module.exports = function (...nomes)    { // exportando uma função anônima que recebe um parâmetro nome
    return nomes.map(nome => `Boa semana ${nome}!`) // retornando um array com a mensagem de boa semana
} // exportando a função anônima
