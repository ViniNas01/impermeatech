window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 1);

    let botao = document.querySelector('.float');
    botao.classList.toggle('rolagemWhats', window.scrollY > 0);
})