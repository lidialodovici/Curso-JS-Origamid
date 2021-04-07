// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const caracteres = Array.prototype.reduce.call(paragrafos,(acc, frase) =>{
    console.log(acc + frase.innerText.length)
    return acc + frase.innerText.length
}, 0);
console.log(caracteres)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe): null;
  conteudo ? elemento.innerHtml = conteudo : null;
  return elemento;
}

console.log(criarElemento('div', 'ativar', 'Esse é o conteúdo'))



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico


const criarElemento2 = criarElemento.bind(null, 'h1','titulo') 

console.log(criarElemento2)

console.log(criarElemento2())

//teste
//window.marca = 'Honda'
//window.ano = 2010

function descricaoCarro(velocidade){
  console.log(this.marca + ' ' + this.ano + ' tem velocidade máxima de ' + velocidade)
}

descricaoCarro.call({marca: 'Honda', ano: 2020}, 150);
