let content = document.querySelectorAll('.container');
function checkboxes(){
    let triggerdBottom = window.innerHeight*4/5;
    for(let i = 0; i < content.length;i++){
        let boxTop = content[i].getBoundingClientRect().top;
        if(boxTop < triggerdBottom){
            content[i].classList.add('show');
        }else{
            content[i].classList.remove('show');
        }
    }
}
//adding the event listener
checkboxes();
window.addEventListener('scroll',checkboxes);