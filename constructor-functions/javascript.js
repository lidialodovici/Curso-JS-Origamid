/*function Carro(marca){
 this.marca = marca;
 console.log(this);
}*/



//Abaixo estou executando a função - logo o this aponta p o objeto que foi criado com a função construtora
/*const honda = new Carro('Honda');
const fiat = new Carro('Fiat')*/


//Usuário
/*
function User(name, age){
  return{name, age}
}

const Bob = User('Lídia', 31)


*/


/*
function Nota(){
  console.log(this);
}

const lidia = new Nota()
lidia.nome ='Lídia'*/

/*function Carro(marca, precoInicial){
  const taxa = 1.2;
  console.log(this)
  const precoFinal = precoInicial * taxa;

  this.marca = marca;
  this.preco = precoFinal;
  
}

const honda = new Carro('Honda', 2000)
const fiat = new Carro()*/

// exemplo real
/*
const Dom ={
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  
  ativo(){
    this.element().classList.add('ativo');
  },
}*/

/*
function Dom(selecionado){
 
  const element = document.querySelector(selecionado)
  this.ativo = function(classe){
    element.classList.add(classe)
  }
}

const lista = new Dom('li')

*/

function Aluno(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.erros = function(punicao){
    return this.nome + ' errou ' + punicao + ' vezes.'
  }

}


const andre = new Aluno('André', 28)


//console.log(Aluno.prototype)
console.log(andre.prototype);

Aluno.prototype.media = function(nota1, nota2){
  const notaMedia = nota1 + nota2 / 2;
  return 'A média de ' + this.nome + ' é ' + notaMedia
}


console.log(Aluno.prototype)