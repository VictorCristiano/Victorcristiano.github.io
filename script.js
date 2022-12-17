const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll(".item");

const maxItems = items.length;

controls.forEach(control => {
  control.addEventListener('click',  ()=>{
// logica para saber se o click foi na esquerda ou na direita
    const isLeft = control.classList.contains("arrow-left");
// logica para clicar percorrer o carrosel
    if(isLeft){
      currentItem -=  1;
    } else {
      currentItem += 1;
    }

    if  (currentItem >= maxItems){
      currentItem = 0;
    }

    if(currentItem < 0){
      currentItem = maxItems - 1;
    }

    items.forEach(item => item.classList.remove("current-item"))

    items[currentItem].scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "nearest"
    });

    items[currentItem].classList.add("current-item")
  })
})


// controles projetos carrosel

const controlsp = document.querySelectorAll(".control-projetos");
let projetoCurrent = 0;
const projetos = document.querySelectorAll("projeto");
const maxProjetos = projetos.length;