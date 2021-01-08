const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('main');

open.addEventListener('click',function(){
    container.classList.add('active');
})
close.addEventListener('click',function(){
    container.classList.remove('active');
})