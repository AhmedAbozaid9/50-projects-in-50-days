let slides = document.querySelectorAll('.slide')
for(let i = 0;i < slides.length;i++){
    slides[i].addEventListener('click',function(){
       for(let j = 0; j < slides.length;j++){
           slides[j].classList.remove('active');
       }
       slides[i].classList.add('active');
        counter = parseInt(this.classList[0].substring(5,));
       if(counter === 5){
        setTimeout(function(){
            counter = 4;
            check = false;
        })
    }
    },1000)
}  
//auto transaction
let counter = 1;
let check = true;
setInterval(function(){
    if(counter < 5 && check){
        slides[counter - 1].classList.remove('active');
        slides[counter].classList.add('active');
        counter++;
        if(counter === 5){
            setTimeout(function(){
                check = false;
            slides[3].classList.remove('active');
            slides[4].classList.add('active');
            counter = 4;
            },1000)
        }
    }
   

    
    if(!check){
        
        slides[counter].classList.remove('active');
        slides[counter -1].classList.add('active');
        counter--;
        
        if(counter === 0){
            check = true;
            counter = 1;
        }
        
    }
    
},3000)
