// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; 
