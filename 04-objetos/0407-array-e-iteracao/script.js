// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const aulas = document.querySelectorAll('section')
//TRANSFORMAR EM ARRAY
const listaAulas = Array.from(aulas)
//SEMPRE QUE QUISER RETORNAR ARRAY - MAP()
const objetosCursos = listaAulas.map((curso)=>{
  const titulo = document.querySelector('h1').innerText;
  const descricao = document.querySelector('p').innerText;
  const aulas = document.querySelector('.aulas').innerText;
  const horas = document.querySelector('.horas').innerText;
  return{
    //titulo: titulo,
    titulo,
    descricao,
    aulas,
    horas,
  }
})

console.log(objetosCursos)
//ARRAY CURSOS CONTINUA INTATCTA


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter(numero => numero > 100)

console.log(maioresQue100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra','Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((instrumento) => instrumento === 'Baixo' ? true : false);

console.log(temBaixo)




// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  },
  {
    item: 'Arroz',
    preco: 'R$ 5,50'
  }
]

const valorTotal = compras.reduce((acc, item) =>{
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
  return acc + precoLimpo
}, 0);


console.log(valorTotal)