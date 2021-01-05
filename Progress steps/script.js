let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let progress = document.querySelector('.progressLine');

let activeCircles = 1;
//activate and deactivate the buttons

function deactivate(){
    if(activeCircles === 1){
        prev.disabled = true;
        next.disabled = false;
    } else if(activeCircles === 4){
        prev.disabled = false;
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
//update the website
function update(){
    let circles = document.querySelectorAll('.circle');
    for(let i = 0; i < circles.length;i++){
        if(i<activeCircles){
            circles[i].classList.add('active');
        }else if(i>=activeCircles){
            circles[i].classList.remove('active');
        }
    }
    progress.style.width = ((activeCircles - 1) / 3) * 100 + "%";
}
//add event listeners
next.addEventListener('click',function(){
    activeCircles++;
    if(activeCircles > 4){
        activeCircles = 4;
    }
    deactivate();
    update()
})
prev.addEventListener('click',function(){
    activeCircles--;
    if(activeCircles < 1){
        activeCircles = 1;
    }
    deactivate();
    update()
})
