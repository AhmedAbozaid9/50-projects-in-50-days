const canvas = document.querySelector('#board')
const ctx = canvas.getContext('2d')
const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const fontSize = document.querySelector('.size')
const clear = document.querySelector('.clear')
let colorInput = document.querySelector('.colorInput')

let isPressed = false
let x,y
//change color 
let color = 'black'
colorInput.addEventListener('change',(e) => color = colorInput.value)
//change the size 
let size = 20
increase.addEventListener('click',() =>{
    if(size < 50){
        size+= 5
        fontSize.innerHTML = size
    }
})
decrease.addEventListener('click',() =>{
    if(size > 5){
        size -=5
        fontSize.innerHTML = size
    }
})
//draw the path
canvas.addEventListener('mousedown',(e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})
document.addEventListener('mouseup',() => {
    isPressed = false
    x = undefined
    y = undefined
})
canvas.addEventListener('mousemove',(e) => {
    if(isPressed){
        let x2 = e.offsetX
        let y2 = e.offsetY
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)
        x = x2
        y = y2
    }
})
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
//clear the drawing
clear.addEventListener('click',() => ctx.clearRect(0,0,800,800))
