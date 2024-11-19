window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 1);

    let botao = document.querySelector('.float');
    botao.classList.toggle('rolagemWhats', window.scrollY > 0);
})

let btnMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu');
})
menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu');
})
overlay.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu');
})