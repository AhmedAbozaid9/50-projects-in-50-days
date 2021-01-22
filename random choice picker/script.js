const input = document.querySelector('.textarea')
const spans = document.querySelector('.spans')
input.focus()
//when the client types
input.addEventListener('keyup', (e) => {
    let tags = input.value.split(',').filter( value => value.trim() !== '' ).map(value => value.trim())
    spans.innerHTML = ''
    tags.forEach(tag => {
        let choice = document.createElement('span')
        choice.innerHTML = tag
        choice.classList.add('tag')
        spans.appendChild(choice)
        })
    if(e.key === 'Enter'){
        let choices = document.querySelectorAll('.tag')
        input.value = ''
        input.disabled = true
        
        getRandomTag(choices)
    }
})
//get a random tag
const getRandomTag = function(tags){
    let i = 0; //just a counter 
    let interval = setInterval(()=>{
        let idx = randomIndex(tags)
        tags[idx].classList.add('highlighted')
        if(i < 30){
            setTimeout(()=> tags[idx].classList.remove('highlighted'),100) //add and remove the class 
        }
        i++
        if(i > 30){
            clearInterval(interval)
            input.disabled = false
        }
    },100)
}
//get a random index
function randomIndex(arr){
    return Math.floor(Math.random()*arr.length)
}
