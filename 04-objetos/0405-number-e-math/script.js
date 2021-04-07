// Retorne um número aleatório
// entre 1050 e 2000
function sortear(){
  return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
}

const sortearNum = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;

console.log(sortear(sortearNum))


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 57, 9';

const lista = numeros.split(',')
//operador spred? - passa cada item como argumento
const numMax = Math.max(...lista)
console.log(numMax)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

const total = listaPrecos.reduce((acc, item) =>{
  //console.log(item)
  const itens = +item.replace('R$', ' ').replace('r$', ' ').replace(',', '.').trim()
  return acc + itens
}, 0)


console.log(total.toFixed(2))



