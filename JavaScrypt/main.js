let btnMenu = document.querySelector('.user-info .fa-bars'),
    menu = document.querySelector('#navbar');

btnMenu.addEventListener('click', () =>{
    menu.classList.toggle('active');
})