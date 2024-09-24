window.addEventListener("scroll", function(){
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem',window.scrollY > 100)
})

let menugh =document.getElementById('menu-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

menugh.addEventListener('click' , ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click' , ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click' , ()=>{
    menu.classList.remove('abrir-menu')
})
