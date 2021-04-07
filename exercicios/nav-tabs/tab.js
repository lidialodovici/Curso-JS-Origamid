const menu = document.querySelectorAll('.js-menu-vegetais li')
const content = document.querySelectorAll('.js-content-vegetais section')
content[0].classList.add('ativo')

function tabContent(index){
  content.forEach((index) =>{
    index.classList.remove('ativo')
  })
  content[index].classList.add('ativo')
}

menu.forEach((item, index) =>{
  item.addEventListener('click', function(){
    tabContent(index)
  })
})


const frutas = 'Banana, Pêra, Uva, Morango';

frutas.slice(2, 7)

