const btn = document.querySelector('button')
btn.addEventListener('click',(e) => {
    const x = e.clientX
    const y = e.clientY
    console.log(x)
    console.log(btn.offsetLeft)
    const xInside = x - btn.offsetLeft
    const yInside = y - btn.offsetTop
    let circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'
    btn.appendChild(circle)
    setTimeout(() => btn.removeChild(circle),500)
})