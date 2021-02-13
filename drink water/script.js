const cups = document.querySelectorAll('.cups .smallCup')
const percantage = document.querySelector('.percantage')
const liters = document.querySelector('.liters')
const remainded = document.querySelector('.remainded')
cups.forEach((cup,idx) => {
    cup.addEventListener('click',() => {
        highlightCups(idx)
        updateCup()
    })
})

function highlightCups(idx){
    if(cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    cups.forEach((cup,idx2) => {
        if(idx >= idx2){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
}
function updateCup(){
    let filledCups = document.querySelectorAll('.full').length
    //update the percentage 
    percantage.style.height = `${(filledCups / 8) * 330}px`
    if(!(filledCups === 0)){
        percantage.innerText = `${(filledCups / 8) * 100}%`
    }else{
        percantage.innerText = ''
    }
    if(filledCups === 8){
        remainded.style.visibility = 'hidden'
    } else{
        remainded.style.visibility = 'visible'
    }
    //update the remainded
    liters.innerText = `${2 - (filledCups * 250 / 1000)}L`
}