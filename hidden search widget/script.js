const btn = document.querySelector('button');
const search = document.querySelector('input');
const  container = document.querySelector('.container')
btn.addEventListener('click',function(){
    container.classList.toggle('clicked');
    search.focus();
})