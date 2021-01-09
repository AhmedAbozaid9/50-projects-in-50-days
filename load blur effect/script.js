setTimeout(function(){
    let counter = document.querySelector('span');
    let i = 0;
    let intervalId = setInterval(blurring,25)
    function blurring(){
        i++;
        counter.innerText = i + '%';
        document.querySelector('.image').style.filter = "blur(" + scale(i,0,100,30,0) + "px)";
        counter.style.opacity = scale(i,0,100,1,0);
        if(i > 99){
            clearInterval(intervalId);
        }    
    }
    function scale(num, in_min, in_max, out_min, out_max) {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }
},600)
