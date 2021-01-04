let slides = document.querySelectorAll('.slide')
for(let i = 0;i < slides.length;i++){
    slides[i].addEventListener('click',function(){
       for(let j = 0; j < slides.length;j++){
           slides[j].classList.remove('active');
       }
       slides[i].classList.add('active');
    })
}    