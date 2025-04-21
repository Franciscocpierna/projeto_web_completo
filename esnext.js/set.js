// não aceita repetição de chaves, mas aceita repetição de valores
// não indexado, não é iterável
// não aceita chaves duplicadas, mas aceita valores duplicados
const times = new Set()
times.add('Vasco'); // adiciona o elemento 'Vasco' ao Set
times.add('São Paulo').add('Palmeiras').add('corinthians'); // adiciona os elementos 'São Paulo', 'Palmeiras' e 'corinthians' ao Set
times.add('Vasco'); // não adiciona o elemento 'Vasco' novamente, pois já existe no Set
times.add('Flamengo'); // adiciona o elemento 'Flamengo' ao Set
console.log(times); // Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'corinthians', 'Flamengo' }
console.log(times.size); // 5
console.log(times.has('vasco')); // false
console.log(times.has('Vasco')); // true/ obs: o Set é case sensitive, ou seja, diferencia maiúsculas de minúsculas
times.delete('Flamengo'); // remove o elemento 'Flamengo' do Set
console.log(times); // Set(4) { 'Vasco', 'São Paulo', 'Palmeiras', 'corinthians' }
console.log(times.has('Flamengo')); // false
const nomes  = ['Raquel', 'Lucas', 'Ana', 'Lucas'] 
const nomesSet = new Set(nomes); // cria um Set a partir do array nomes, removendo os elementos duplicados

console.log(nomesSet); // Set(3) { 'Raquel', 'Lucas', 'Ana' }