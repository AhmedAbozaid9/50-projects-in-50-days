const body = document.body
const slides = document.querySelectorAll('.slide')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

let activeSlide = 0
changeBg()
rightArrow.addEventListener('click',() => {
    activeSlide++
    changeBg()
    setActive()
    if(activeSlide === slides.length - 1){
        activeSlide = 0
    }
})
leftArrow.addEventListener('click',() => {
    activeSlide--
    changeBg()
    setActive()
    if(activeSlide === 0){
        activeSlide = slides.length - 1
    }
})
function changeBg(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
function setActive(){
    slides.forEach(slide => slide.classList.remove('active'))
    slides[activeSlide].classList.add('active')
}