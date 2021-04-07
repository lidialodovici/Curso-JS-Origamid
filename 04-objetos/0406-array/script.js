const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

//PRIMEIRA FORMA
//const refeicao = comidas[0]
const pratoPrimeiro = comidas.shift()
const pratoFinal = comidas.pop()
comidas.splice(2, 0, 'Arroz')
comidas.unshift('Peixe', 'Batata')

console.log(pratoPrimeiro)
console.log(pratoFinal)

//comidas.splice(0, 0, 'Peixe', 'Batata')
console.log(comidas)





const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort())
console.log(estudantes.reverse())
/*const valorJoana = function (){
  if(estudantes.includes('Joana') === true){
    return 'A array possui o nome Joana'
  }else{
    return 'A array não possui o nome Joana'
  }
}

console.log(valorJoana())

const valorJuliana = function(){
  if(estudantes.includes('Juliana') === true){
    return 'O nome Juliana consta na lista'
  }else{
    return 'O nome não consta na lista'
  }
}

console.log(valorJuliana())*/

function constaNome(nome){
  if(estudantes.includes(nome) === true){
    console.log('Este nome consta na lista')
  }else{
    console.log('Este nome não consta na lista')
  }
}


/*estudantes.forEach(constaNome);*/

console.log(constaNome('Juliana'))


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável




let lista = document.querySelectorAll('li')

let topics = Array.prototype.filter.call(lista, (item, index) => {
  return item;
})

console.log(topics)