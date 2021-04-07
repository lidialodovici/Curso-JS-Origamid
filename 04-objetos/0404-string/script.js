// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) =>{
  const valor = +item.valor.replace('R$', ' ')
  if(item.descricao.slice(0,4) === 'Taxa'){
    taxaTotal = taxaTotal + valor
  }else{
    recebimentoTotal = recebimentoTotal + valor
  }
})

console.log(taxaTotal)
console.log(recebimentoTotal)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const listaTransportes = transportes.split(';')

console.log(listaTransportes)



// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

//let html = html.split('span').join('a');
//console.log(html)
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1])
console.log(frase.slice(-1))


// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


let taxasTotal = 0;
transacoes2.forEach((item) =>{
  taxas = item.toLowerCase().trim().slice(0, 4)
  if(taxasTotal === 'taxa'){
    taxasTotal++;
  }
})


console.log(taxasTotal)





//todos esses módulos n estnão alterando a string
//charAt(numero do caracter)
//oque.concat(no que)
//includes - procura na string (o que , index)
//startWidth 
//endWith
//slice(index start, index end) números negativos tbm
//substring(start, end)
//indexOf(search) retorna index
//lastIndexOf(search) retorna index
//padStart(n, Str - com o q) preenche o espaço até ocupar todo o espaço ocupado pelo caracter solicitado
//repeat(quantas vzs)
//replace - dois valores
//split(onde quebrar e tirar) retorna array
//trim, trimeStart, trimEnd
